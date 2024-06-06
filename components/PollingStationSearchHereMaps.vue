<template>
  <div>
    <vue-typeahead-bootstrap
      v-model="address"
      class="w-75 mx-auto mb-4"
      :placeholder="$t('pollingStationSearch.searchPlaceholder')"
      :data="addressList"
      :show-all-results="true"
      :serializer="(suggestion) => suggestion.title"
      @hit="selectAddress"
    >
    </vue-typeahead-bootstrap>
    <div v-show="showErrorMessage" class="bg-danger p-2 text-center text-white">
      Ne pare rau, a aparut o eroare.
    </div>
    <div v-if="hasFetchedPollingStations && pollingStations.length">
      <p class="font-weight-bold my-4">
        {{ $t('pollingStationSearch.hasPermanentResidence') }}
      </p>
      <div
        class="row row-cols-1"
        :class="pollingStations.length > 1 ? 'row-cols-md-2' : ''"
      >
        <div
          v-for="pollingStation of pollingStations.slice(0, 10)"
          :key="pollingStation.id"
          class="col mb-4"
        >
          <PollingStationCard
            :polling-station-number="pollingStation.number"
            :county="pollingStation.country"
            :address="pollingStation.address"
            :distance="pollingStation.distance"
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
import locations from '../locations.json'

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
      hasFetchedPollingStations: false,
      platform: null,
      hereMap: null,
      hereUI: null,
    }
  },
  watch: {
    address: debounce(async function (value) {
      if (value.length < 3) {
        return
      }

      this.addressList = (await this.searchAddress()).items
    }, 300),
  },
  mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: '3KJdochthLBAZtJD-iqFyAHU6QOqzwAC8l7grsqWDWU',
    })
    this.platform = platform
    this.initializeHereMap()
  },
  methods: {
    async selectAddress(event) {
      this.hasFetchedPollingStations = false
      const { id } = event
      this.clearMarkers()
      const addressDetail = await this.getGeocode(id)
      const { lat, lng } = addressDetail.position
      const H = window.H

      const currentLocationGroup = new H.map.Group()
      const closestCountryGroup = new H.map.Group()
      const otherCountriesGroup = new H.map.Group()

      this.addMarker(
        lat,
        lng,
        houseMarker,
        null,
        null,
        null,
        currentLocationGroup
      )
      const stations = this.findPollingStation(lat, lng)

      stations[0].pollingStations.forEach((station) => {
        const sectionsOnThisAddress = stations[0].pollingStations
          .filter((poolStation) => poolStation.address === station.address)
          .map((filtereStation) => filtereStation.number)

        this.addMarker(
          station.latitude,
          station.longitude,
          pollingStationMarker,
          sectionsOnThisAddress,
          station.address,
          station.country,
          closestCountryGroup
        )
      })

      this.pollingStations = stations.flatMap(
        ({ pollingStations }) => pollingStations
      )

      const otherPollingStations = stations
        .slice(1, 4)
        .flatMap(({ pollingStations }) => pollingStations)

      otherPollingStations.forEach((c) => {
        const sectionsOnThisAddress = otherPollingStations
          .filter((poolStation) => poolStation.address === c.address)
          .map((filtereStation) => filtereStation.number)

        this.addMarker(
          c.latitude,
          c.longitude,
          pollingStationMarker,
          sectionsOnThisAddress,
          c.address,
          c.country,
          otherCountriesGroup
        )
        this.hereMap.setCenter({
          lat: c.latitude,
          lng: c.longitude,
        })
      })

      this.listenTapGroup(currentLocationGroup)
      this.listenTapGroup(otherCountriesGroup)
      this.listenTapGroup(closestCountryGroup)

      this.hereMap.addObject(otherCountriesGroup)
      this.hereMap.addObject(closestCountryGroup)
      this.hereMap.addObject(currentLocationGroup)

      if (this.pollingStations.length) {
        this.hasFetchedPollingStations = true
        this.hereMap.setCenter({
          lat,
          lng,
        })

        this.hereMap.getViewModel().setLookAtData({
          bounds: closestCountryGroup.getBoundingBox(),
        })
      }
    },
    async getGeocode(id) {
      try {
        const result = await fetch(
          `https://lookup.search.hereapi.com/v1/lookup?apiKey=${process.env.HERE_MAPS_API_KEY}&id=${id}`
        )
        return await result.json()
      } catch (error) {
        this.showErrorMessage = true
      }
    },
    async searchAddress() {
      try {
        const result = await fetch(
          `https://autocomplete.search.hereapi.com/v1/autocomplete?apiKey=${process.env.HERE_MAPS_API_KEY}&q=${this.address}&maxresults=5`
        )
        return await result.json()
      } catch (error) {
        this.showErrorMessage = true
      }
    },
    findPollingStation(latitude, longitude) {
      const loc = locations
        .map((location) => {
          const d1 = latitude * (Math.PI / 180.0)
          const num1 = longitude * (Math.PI / 180.0)
          const d2 = location.latitude * (Math.PI / 180.0)
          const num2 = location.longitude * (Math.PI / 180.0) - num1
          const d3 =
            Math.pow(Math.sin((d2 - d1) / 2.0), 2.0) +
            Math.cos(d1) * Math.cos(d2) * Math.pow(Math.sin(num2 / 2.0), 2.0)

          location.distance =
            6376500.0 * (2.0 * Math.atan2(Math.sqrt(d3), Math.sqrt(1.0 - d3)))

          return location
        })
        .sort((a, b) => a.distance - b.distance)
        .reduce((acc, item) => {
          // Check if the country already exists in the accumulator
          if (!acc[item.country]) {
            // If not, initialize it with an empty array
            acc[item.country] = []
          }

          // Push the current item's name into the corresponding country's array
          acc[item.country].push(item)

          // Return the accumulator for the next iteration
          return acc
        }, {})

      return Object.entries(loc)
        .map(([country, pollingStations]) => ({
          country,
          pollingStations,
          min: Math.min(...pollingStations.map((station) => station.distance)),
        }))
        .slice(0, 5)
    },
    addMarker(
      lat,
      lng,
      iconPath,
      pollingStationNumber,
      address,
      county,
      group
    ) {
      const H = window.H

      if (!group) {
        group = new H.map.Group()
      }

      const icon = new H.map.Icon(iconPath)
      const marker = new H.map.Marker(
        {
          lat,
          lng,
        },
        { icon }
      )
      if (pollingStationNumber && address) {
        marker.setData(
          `<div class="card border-0" style="width: 240px">
            <div class="card-body p-0">
              <p class="m-0">
                <span class="bg-warning px-1 mr-1">${this.$t(
                  'pollingStationCard.pollingStationNumber'
                )}</span><br/>${
            pollingStationNumber ? pollingStationNumber.join(', ') : ''
          }</p>
              <p class="m-0"><span class="bg-warning px-1 mr-1">${this.$t(
                'pollingStationCard.address'
              )}</span><br/>
                ${address}, ${county}</p>
            </div>
          </div>`
        )
      }
      group.addObject(marker)
    },
    listenTapGroup(group) {
      const H = window.H

      group.addEventListener(
        'tap',
        (evt) => {
          if (evt.target.getData()) {
            this.clearInfoBubbles()
            const bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
              content: evt.target.getData(),
            })
            this.hereUI.addBubble(bubble)
          }
        },
        false
      )
    },
    clearMarkers() {
      this.hereMap.removeObjects(this.hereMap.getObjects())
    },
    clearInfoBubbles() {
      this.hereUI.getBubbles().forEach((bub) => this.hereUI.removeBubble(bub))
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
        zoom: 3,
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
