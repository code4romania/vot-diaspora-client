<template>
  <div class="card bg-warning">
    <div class="card-header">
      <p class="mt-2">
        {{ $t('pollingStationCard.distance') }}
        {{ distanceInKm + ' km' }}
      </p>
      <h3>
        {{ $t('pollingStationCard.pollingStationNumber') }}
        {{ pollingStationNumber }}, {{ county }}
      </h3>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <div class="m-0">
          <span class="bg-dark text-white px-1 mr-1">{{
            $t('pollingStationCard.address')
          }}</span>
          <a
            :href="mapUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="m-0"
          >
            {{ address }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pollingStationNumber: { type: String, default: '' },
    county: { type: String, default: '' },
    address: { type: String, default: '' },
    distance: { type: Number, default: 0 },
    latitude: { type: Number, default: 0 },
    longitude: { type: Number, default: 0 },
  },
  data() {
    return {
      showStreet: false,
    }
  },
  computed: {
    distanceInKm() {
      if (this.distance === 0) return 0
      const distanceInKm = this.distance / 1000
      if (distanceInKm >= 1) return distanceInKm.toFixed(0)
      // If distance is lower than 100 meters show 0 km instead of 0.0 km
      if (distanceInKm < 0.1) return 0
      return distanceInKm.toFixed(1)
    },
    mapUrl() {
      const url = `https://www.google.com/maps?q=${this.latitude},${this.longitude}`
      return url
    },
  },
}
</script>
