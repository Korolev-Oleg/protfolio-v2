<script setup>
import {onMounted} from 'vue';
import translationStore, {loadingProgress} from '@/store/global.js';
import {loadResources, syncLocale} from '@/utils.js';

import LoadingScreen from "@/components/LoadingScreen.vue";
import ScrollBar from "@/components/scrollBar.vue";
import About from "@/components/About/about.vue";
import Portfolio from "@/components/Portfolio/portfolio.vue"
import WebProjects from "@/components/WebProjects/WebProjects.vue";
import Footer from "@/components/Footer/footer.vue";


onMounted(() => {
  loadResources(loadingProgress)
  syncLocale(translationStore);
  window.scrollTo(0, 0);
})

</script>

<template>
  <LoadingScreen/>
  <ScrollBar/>
  <About/>
  <Portfolio/>
  <WebProjects/>
  <Footer/>
</template>


<style>
body {
  overflow-x: hidden;
}

#app {
  padding: 0;
  background: var(--color-background);
  overflow-x: hidden;
  max-width: 100vw;
  grid-template-columns: 1fr;
}
</style>
