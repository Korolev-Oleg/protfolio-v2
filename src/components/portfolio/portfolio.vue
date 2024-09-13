<script setup>
import PortfolioCover from "@/components/portfolio/PortfolioCover.vue";
import TitanControlIcon from "@/components/portfolio/icons/titanControlIcon.vue";
import ProdlogisticaIcon from "@/components/portfolio/icons/prodlogisticaIcon.vue";
import TendManagerIcon from "@/components/portfolio/icons/TendManagerIcon.vue";
import PortfolioSlide from "@/components/portfolio/PortfolioSlide.vue";

import TitanControlSlide1 from "./asserts/TitanControlSlide1.png";
import TitanControlSlide2 from "./asserts/TitanControlSlide2.png";
import TitanControlSlide3 from "./asserts/TitanControlSlide3.png";
import TitanControlSlide4 from "./asserts/TitanControlSlide4.png";

import ProdlogisticaSlide1 from "./asserts/ProdlogisticaSlide1.png";
import ProdlogisticaSlide2 from "./asserts/ProdlogisticaSlide2.png";
import ProdlogisticaSlide3 from "./asserts/ProdlogisticaSlide3.png";
import ProdlogisticaSlide4 from "./asserts/ProdlogisticaSlide4.png";

import TendManager1 from "./asserts/TendManager1.png";
import TendManager2 from "./asserts/TendManager2.png";
import TendManager3 from "./asserts/TendManager3.png";
import TendManager4 from "./asserts/TendManager4.png";

import {onMounted, ref} from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import translations from "@/translations/portfolioTranslations.json";
import {initTranslations} from "@/utils.js";

const _ = initTranslations(translations);
const portfolio = ref(null);

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  window.scrollTo(0, 0);
  const tl = gsap.timeline();

  // slide up header
  tl.to('.head', {
    scrollTrigger: {
      trigger: '#portfolio',
      start: 'top 30%',
      end: 'top 0%',
      scrub: 1,
    },
    y: "-50vw",
  });

  // change background color to black
  const scrollTriggerRule = {
    trigger: '#portfolio',
    start: 'top 5%',
    end: 'top 5%',
    scrub: true,
  };
  tl.to(['body', '#app'], {
    scrollTrigger: scrollTriggerRule,
    backgroundColor: '#000',
  }).to(".head", {
    scrollTrigger: scrollTriggerRule,
    backgroundColor: '#000'
  }, '>');

  console.log(translations)
});
</script>

<template>
  <section id="portfolio" :ref="portfolio">
    <PortfolioCover :Icon="TitanControlIcon" title="TitanControl">
      <PortfolioSlide class="portfolio-slide" :images="[TitanControlSlide1]"
                      :description="_('titan-control-slide-1')"/>
      <PortfolioSlide class="portfolio-slide" :images="[TitanControlSlide2]"
                      :description="_('titan-control-slide-2')"/>
      <PortfolioSlide class="portfolio-slide" :images="[TitanControlSlide3]"
                      :description="_('titan-control-slide-3')"/>
      <PortfolioSlide class="portfolio-slide" :images="[TitanControlSlide4]"
                      :description="_('titan-control-slide-4')"/>
    </PortfolioCover>
    <PortfolioCover :Icon="ProdlogisticaIcon" title="Prodlogistica">
      <PortfolioSlide class="portfolio-slide" :images="[ProdlogisticaSlide1]"
                      :description="_('prodlogistica-slide-1')"/>
      <PortfolioSlide class="portfolio-slide" :images="[ProdlogisticaSlide2]"
                      :description="_('prodlogistica-slide-2')"/>
      <PortfolioSlide class="portfolio-slide" :images="[ProdlogisticaSlide3]"
                      :description="_('prodlogistica-slide-3')"/>
      <PortfolioSlide class="portfolio-slide" :images="[ProdlogisticaSlide4]"
                      :description="_('prodlogistica-slide-4')"/>
    </PortfolioCover>
    <PortfolioCover :Icon="TendManagerIcon" title="TendManager">
      <PortfolioSlide class="portfolio-slide" :images="[TendManager1]"
                      maxHeight="639px"
                      :description="_('tend-manager-slide-1')"/>
      <PortfolioSlide class="portfolio-slide" :images="[TendManager2]"
                      :description="_('tend-manager-slide-2')"/>
      <PortfolioSlide class="portfolio-slide" :images="[TendManager3]"
                      :description="_('tend-manager-slide-3')"/>
      <PortfolioSlide class="portfolio-slide" :images="[TendManager4]"
                      :description="_('tend-manager-slide-4')"/>
    </PortfolioCover>
  </section>
</template>

<style scoped>
#portfolio {
  background: #000;
  border-radius: 44px 44px 0 0;
  overflow-x: hidden;
}

.portfolio-slides-container {
  overflow: hidden;
}
</style>
