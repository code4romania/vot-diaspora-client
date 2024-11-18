<template>
  <div>
    <Header />
    <GeneralInfo />
    <img
      alt="Vot Diaspora"
      src="../assets/logo_mae.svg"
      style="
        margin-left: auto;
        margin-right: auto;
        display: block;
        max-height: 100px;
        max-width: 100%;
      "
    />
    <main>
      <Nuxt />
    </main>
    <FooterCard />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>
