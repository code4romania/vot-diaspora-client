<template>
  <div>
    <Header />
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
