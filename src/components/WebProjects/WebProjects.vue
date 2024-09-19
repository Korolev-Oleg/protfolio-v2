<script setup>
import '@/components/WebProjects/css/web.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {onMounted, ref} from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";
import VideoOrGif from "./VideoOrGif.vue";
import PreviewIcon from "@/assets/icons/PreviewIcon.vue";

import GithubIcon from "@/components/Header/icons/github.vue"
import slides from './slides.js'
import {runWebAnimations} from "@/components/WebProjects/animations/sectionWebAnimations.js";

const swiperRef = ref(null);
const modules = [Navigation, EffectCoverflow, Keyboard, Mousewheel, Pagination]
function getRef (swiperInstance) {
  swiperRef.value = swiperInstance
  console.log(swiperInstance)
}
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  let swiper = swiperRef.value
  runWebAnimations()
  gsap.to('#web-projects', {
    scrollTrigger: {
      trigger: "#web-projects",
      start: "top center",
      end: "center center",
    }
  })
})
</script>
<template>
  <section id="web-projects">
    <h2 class="title">Web Development</h2>
    <Swiper
        id="swiper-parent"
        @slideChange=""
        @swiper="getRef"
        :modules="modules"
        effect= "coverflow"
        grabCursor="true"
        centeredSlides="true"
        :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
      }"
        :keyboard="{ enabled: true }"
        loop="true"
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :breakpoints="{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1560: { slidesPerView: 4 }
      }">
      <SwiperSlide v-for="(slide, index) in slides" :id="'slide-id-' + index">
        <VideoOrGif :video="slide.video" :gif="slide.gif"/>
        <div class="description">
          <a v-if="slide.githubLink" :href="slide.githubLink" target="_blank">
            <GithubIcon/>
            Github</a>
          <a v-if="slide.previewLink" :href="slide.previewLink" target="_blank">
            <PreviewIcon/>
            Preview</a>
        </div>
      </SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
  </section>
</template>

<style scoped>
.description a:hover {
  color: white
}
</style>
