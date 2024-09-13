<script setup>
import About from "@/components/about/about.vue";
import Portfolio from "@/components/portfolio/portfolio.vue"
import Footer from "@/components/footer/footer.vue";
import {onMounted} from 'vue';
import translationStore, {loadingProgress} from '@/store/global.js';
import {loadResources, syncLocale} from '@/utils.js';
import ScrollBar from "@/components/scrollBar.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";


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
