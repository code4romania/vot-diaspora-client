<template>
  <div>
    <vue-typeahead-bootstrap
      v-model="address"
      class="w-75 mx-auto mb-4"
      :placeholder="$t('pollingStationSearch.searchPlaceholder')"
      :data="addressList"
      :show-all-results="true"
      :serializer="(suggestion) => suggestion.label"
      @hit="selectAddress"
    >
    </vue-typeahead-bootstrap>
    <div v-show="showErrorMessage" class="bg-danger p-2 text-center text-white">
      Ne pare rau, a aparut o eroare.
    </div>
    <div v-if="pollingStationsWithAddress.length">
      <p class="font-weight-bold my-4">
        {{ $t('pollingStationSearch.hasPermanentResidence') }}
      </p>
      <div
        class="row row-cols-1"
        :class="pollingStationsWithAddress.length > 1 ? 'row-cols-md-2' : ''"
      >
        <div
          v-for="pollingStation of pollingStationsWithAddress"
          :key="pollingStation.id"
          class="col mb-4"
        >
          <PollingStationCard
            :polling-station-number="pollingStation.pollingStationNumber"
            :county="pollingStation.county"
            :address="pollingStation.address"
            :distance="pollingStation.distance"
            :assigned-addresses="pollingStation.assignedAddresses"
          />
        </div>
      </div>
    </div>
    <div
      v-if="pollingStationsWithAddress.length === 0 && pollingStations.length"
    >
      <p class="font-weight-bold my-4">
        {{ $t('pollingStationSearch.addressNotFound') }}
      </p>
      <div
        class="row row-cols-1"
        :class="pollingStations.length > 1 ? 'row-cols-md-2' : ''"
      >
        <div
          v-for="pollingStation of pollingStations"
          :key="pollingStation.id"
          class="col mb-4"
        >
          <PollingStationCard
            :polling-station-number="pollingStation.pollingStationNumber"
            :county="pollingStation.county"
            :address="pollingStation.address"
            :distance="pollingStation.distance"
            :assigned-addresses="pollingStation.assignedAddresses"
          />
        </div>
      </div>
    </div>
    <div id="map">
      <div
        id="mapContainer"
        ref="hereMap"
        style="height: 600px; width: 100%"
      ></div>
    </div>
  </div>
</template>
<script>
import { debounce } from 'debounce'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'
import houseMarker from '../assets/house_marker.svg'
import pollingStationMarker from '../assets/polling_station_marker.svg'
import { PollingStationMatcherService } from '../service/polling-station-matcher.service'

export default {
  components: {
    VueTypeaheadBootstrap,
  },

  data() {
    return {
      showErrorMessage: false,
      address: '',
      addressList: [],
      pollingStations: [],
      pollingStationsWithAddress: [],
      platform: null,
      hereMap: null,
      hereUI: null,
      apikey: 'Um0LhLV4phI2QpCYrBCwmWgvdjmH6NFvd709PhMqsQg',
      pollingStationService: new PollingStationMatcherService(),
    }
  },
  watch: {
    address: debounce(async function (value) {
      if (value.length < 3) {
        return
      }

      this.addressList = (await this.searchAddress()).suggestions
    }, 300),
  },
  mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey,
    })
    this.platform = platform
    this.initializeHereMap()
  },
  methods: {
    async selectAddress(event) {
      const { locationId } = event
      this.clearMarkers()
      const addressDetail = await this.getGeocode(locationId)
      const {
        latitude,
        longitude,
      } = addressDetail.response.view[0].result[0].location.displayPosition
      const selectedGeocodeAddress =
        addressDetail.response.view[0].result[0].location.address
      this.addMarker(latitude, longitude, houseMarker)

      const poolingResults = await this.findPoolingStation(latitude, longitude)
      this.pollingStations = [].concat(
        ...poolingResults.map((g) =>
          g.pollingStations.map((ps) => {
            return { ...ps, distance: g.distance }
          })
        )
      )
      this.pollingStationsWithAddress = this.pollingStationService.findPollingStation(
        this.pollingStations,
        selectedGeocodeAddress
      )
      const stations = this.pollingStationsWithAddress.length
        ? this.pollingStationsWithAddress
        : this.pollingStations
      stations.forEach((c) => {
        const sectionsOnThisAddress = this.pollingStations
          .filter((poolStation) => poolStation.address === c.address)
          .map((filtereStation) => filtereStation.pollingStationNumber)
        this.addMarker(
          c.latitude,
          c.longitude,
          pollingStationMarker,
          sectionsOnThisAddress,
          c.address,
          c.county
        )
        this.hereMap.setCenter({
          lat: c.latitude,
          lng: c.longitude,
        })
      })
      if (stations.length > 1) {
        this.hereMap.setCenter({
          lat: latitude,
          lng: longitude,
        })
        // We should check which station is closest and it's latitude
        let minDistance = 0
        let closestLatitude = 0
        let closestLongitude = 0
        stations.forEach((station) => {
          const distanceLatitude = station.latitude - latitude
          const distanceLongitude = station.longitude - longitude
          const distance = Math.sqrt(
            Math.pow(distanceLatitude, 2) + Math.pow(distanceLongitude, 2)
          )
          if (minDistance === 0 || distance < minDistance) {
            minDistance = distance
            closestLatitude = station.latitude
            closestLongitude = station.longitude
          }
        })
        const H = window.H
        // We'll add an extra distance(otherwise, if a station is too close, we'll have the marker hidden)
        const extraDistance = 0.005
        // We're computing the distance on both axis.
        const distLatitude =
          Math.abs(latitude - closestLatitude) + extraDistance
        const distLongitude =
          Math.abs(longitude - closestLongitude) + extraDistance

        // We're centering the map to include this distance and still keep the home in the center.
        this.hereMap.getViewModel().setLookAtData({
          bounds: new H.geo.Rect(
            latitude - distLatitude,
            longitude - distLongitude,
            latitude + distLatitude,
            longitude + distLongitude
          ),
        })
        return
      }
      this.hereMap.setZoom(16)
    },
    async getGeocode(locationId) {
      try {
        const result = await fetch(
          `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${locationId}&jsonattributes=1&gen=1&jsonattributes=1&apiKey=${this.apikey}`
        )
        return await result.json()
      } catch (error) {
        this.showErrorMessage = true
      }
    },
    async searchAddress(query) {
      try {
        const result = await fetch(
          `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${this.apikey}&query=${this.address}&maxresults=5`
        )
        return await result.json()
      } catch (error) {
        this.showErrorMessage = true
      }
    },
    async findPoolingStation(latitude, longitude) {
      try {
        const result = await fetch(
          `${process.env.NUXT_ENV_API_URL}/polling-station/near-me?latitude=${latitude}&longitude=${longitude}`
        )
        return await result.json()
      } catch (error) {
        this.showErrorMessage = true
      }
    },
    addMarker(lat, lng, iconPath, pollingStationNumber, address, county) {
      const H = window.H

      const group = new H.map.Group()

      group.addEventListener(
        'tap',
        (evt) => {
          const bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            content: evt.target.getData(),
          })
          this.hereUI.addBubble(bubble)
        },
        false
      )
      const icon = new H.map.Icon(iconPath)
      const marker = new H.map.Marker(
        {
          lat,
          lng,
        },
        { icon }
      )
      marker.setData(
        `<div class="card border-0"><h6 class="card-header bg-white">${
          pollingStationNumber ? pollingStationNumber.join() : ''
        } ${county}</h6><div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p class="m-0"><span class="bg-warning px-1 mr-1">Adresa:</span>${address}</p>
      </div>
    </div></div>`
      )
      group.addObject(marker)
      this.hereMap.addObject(group)
    },
    clearMarkers() {
      this.hereMap.removeObjects(this.hereMap.getObjects())
    },
    initializeHereMap() {
      // rendering map
      const pixelRatio = process.client ? window.devicePixelRatio : 1
      const mapContainer = this.$refs.hereMap
      const H = window.H
      // Obtain the default map types from the platform object
      const maptypes = this.platform.createDefaultLayers()

      // Instantiate (and display) a map object:
      this.hereMap = new H.Map(mapContainer, maptypes.vector.normal.map, {
        center: { lat: 45.658, lng: 25.6012 },
        zoom: 7,
        pixelRatio,
      })

      addEventListener('resize', () => this.hereMap.getViewPort().resize())

      // add behavior control
      // eslint-disable-next-line no-new
      const behavior = new H.mapevents.Behavior(
        new H.mapevents.MapEvents(this.hereMap)
      )
      behavior.disable(H.mapevents.Behavior.WHEELZOOM)
      // add UI
      this.hereUI = H.ui.UI.createDefault(this.hereMap, maptypes)
    },
  },
}
</script>
