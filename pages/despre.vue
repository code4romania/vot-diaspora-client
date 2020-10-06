<template>
  <div class="container">
    <h1 class="mt-5 mb-4">{{ $t('about.title') }}</h1>
    <div v-html="$t('about.text')"></div>

    <hr />
    <div class="row text-center my-5">
      <div class="col">
        <p>{{ $t('about.p1') }}</p>
        <img src="../assets/civic_labs.svg" alt="Civic Labs" />
      </div>
      <div class="col">
        <p>{{ $t('about.p2') }}</p>
        <img src="../assets/code4Romania.svg" alt="Code4Romania" />
      </div>
      <div class="col">
        <p>{{ $t('about.p3') }}</p>
        <img src="../assets/observator.png" alt="Observator" />
      </div>
    </div>
    <hr />
  </div>
</template>
