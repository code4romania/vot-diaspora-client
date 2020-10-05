<template>
  <div>
    <div class="container mt-4 mb-5">
      <div class="row">
        <div class="col-12">
          <VotersGuide />
        </div>
      </div>
    </div>
    <div class="container-fluid py-4 mt-4 mb-5 bg-warning">
      <div class="row">
        <p class="col-10">
          {{ $t('info_text') }}
        </p>
        <div class="col-2 my-auto">
          <a
            class="btn-lg btn-block btn-primary text-white text-center"
            href="https://votromania.ro/"
            rel="noopener noreferrer"
            target="_blank"
            >Vot România</a
          >
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
          <PollingStationSearch />
          <p class="text-center mt-4">
            {{ $t('temp_text') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
