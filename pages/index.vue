<template>
  <div>
    <div class="container mt-4 mb-5">
      <div class="row">
        <div class="col-12">
          <VotersGuide />
        </div>
      </div>
    </div>
    <div class="container mt-4 mb-5">
      <div class="row">
        <div class="col-12">
          <h2 class="h4 text-center">
            {{ $t('pollingStationSearch.question') }}
          </h2>
          <div
            class="text-center"
            v-html="$t('pollingStationSearch.callToAction')"
          ></div>
          <PollingStationSearchHereMaps />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'main',
}
</script>
