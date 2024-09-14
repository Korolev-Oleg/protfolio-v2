<script setup>
import translations from '@/translations/aboutTranslations.json';
import translationStore, {loader} from "@/store/global.js";
import gsap from 'gsap';
import {onMounted, watch} from "vue";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import {initTranslations, isElementVisible} from "@/utils.js";
import {executeContentAnimations} from "@/components/About/animations/contentAnimations.js";

const _=initTranslations(translations)


gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger);

const toSpace = (str) => {
  return str.replace(/[\w\W]/g, '‎ ');
}


watch(loader.isLoading, (isLoading) => {
  executeContentAnimations()
})


</script>
<template>
  <div class="container">
    <div class="text">
      <!--    <button @click='translationStore.currentLocale="ru"'>ru</button>-->
      <!--    <button @click='translationStore.currentLocale="en"'>en</button>-->
      <p id="about-citation-1" skip>{{ _('about-citation-1') }}</p>
      <p id="about-citation-2" skip>{{ _('about-citation-2') }}</p>
      <p id="about-2015">{{ toSpace(_('about-2015')) }}</p>
      <p id="about-2016">{{ toSpace(_('about-2016')) }}</p>
      <p id='about-2017'>{{ toSpace(_('about-2017')) }}</p>
      <p id='about-2019'>{{ toSpace(_('about-2019')) }}</p>
      <p id='about-2020'>{{ toSpace(_('about-2020')) }}</p>
      <p id='about-2021'>{{ toSpace(_('about-2021')) }}</p>
      <p id='about-2022-2024'>{{ toSpace(_('about-2022-2024')) }}</p>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 16px;
  margin: 25px 0;
  display: block;
}

#about-2022-2024 {
  min-height: 230px;
}

.text {
  padding-top: 314px;
  color: var(--color-text);
}
</style>
