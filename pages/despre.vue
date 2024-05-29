<template>
  <div class="container">
    <h1 class="mt-5 mb-4">{{ $t('about.title') }}</h1>
    <div v-html="$t('about.text')"></div>

    <hr />
    <div class="row text-center my-5">
      <div class="col-md">
        <p>{{ $t('about.p1') }}</p>
        <a
          href="https://www.code4.ro/ro/civic-labs"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/civic_labs.png"
            alt="Civic Labs"
            class="img-fluid"
          />
        </a>
      </div>
      <div class="col-md">
        <p>{{ $t('about.p2') }}</p>
        <a href="https://www.code4.ro/ro" target="_blank" rel="noopener">
          <img
            src="../assets/code4Romania.png"
            alt="Code4Romania"
            class="img-fluid"
          />
        </a>
      </div>
      <div class="col-md">
        <p>{{ $t('about.p3') }}</p>
        <a
          href="https://www.facebook.com/people/Observatorul-Electoral/100066976369342/"
          target="_blank"
          rel="noopener"
        >
          <img
            src="../assets/observator.png"
            alt="Observator"
            class="img-fluid"
          />
        </a>
      </div>
    </div>
    <hr />
  </div>
</template>
