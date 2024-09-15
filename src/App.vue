<script setup>
import {onMounted} from 'vue';
import translationStore, {loadingProgress} from '@/store/global.js';
import {loadResources, syncLocale} from '@/utils.js';

import LoadingScreen from "@/components/Service/LoadingScreen.vue";
import ScrollBar from "@/components/Service/scrollBar.vue";
import About from "@/components/About/about.vue";
import Portfolio from "@/components/Portfolio/portfolio.vue"
import WebProjects from "@/components/WebProjects/WebProjects.vue";
import Footer from "@/components/Footer/footer.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


onMounted(() => {
  loadResources(loadingProgress)
  syncLocale(translationStore);
  window.scrollTo(0, 0);
})

const gsapScrollTriggerRefresh = () => {
  ScrollTrigger.refresh()
}

</script>

<template>
  <button @click="gsapScrollTriggerRefresh" id="reset" style="position: fixed; z-index: 10000000000; bottom: 20px" >reset</button>
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
