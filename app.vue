<template>
  <div>
    <Header />
    <NuxtPage />
    <Mailing />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Mailing from "~/components/Mailing.vue";

export default {
  components: { Header, Footer, Mailing },
};
</script>

<style scoped></style>
