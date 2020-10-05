<template>
  <div class="card bg-warning">
    <h3 class="card-header">
      {{ $t('pollingStationCard.pollingStationNumber') }}
      {{ pollingStationNumber }}, {{ county }}
    </h3>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <p class="m-0">
          <span class="bg-dark text-white px-1 mr-1">{{
            $t('pollingStationCard.address')
          }}</span>
          {{ address }}
        </p>
        <button class="btn btn-sm btn-dark" @click="showStreet = !showStreet">
          {{ $t('pollingStationCard.seeStreets') }}
        </button>
      </div>
      <div v-show="showStreet">
        <p class="font-weight-bold mt-4 mb-0">
          {{ $t('pollingStationCard.assignedStreetsLabel') }}
        </p>
      </div>
    </div>
    <ul v-if="showStreet">
      <li
        v-for="assignedAddress of assignedAddresses"
        :key="assignedAddress.id"
      >
        {{ assignedAddress.street }} {{ assignedAddress.houseNumbers }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pollingStationNumber: { type: String, default: '' },
    county: { type: String, default: '' },
    address: { type: String, default: '' },
    distance: { type: Number, default: 0 },
    assignedAddresses: { type: Array, default: () => [] },
  },
  data() {
    return {
      showStreet: false,
    }
  },
}
</script>
