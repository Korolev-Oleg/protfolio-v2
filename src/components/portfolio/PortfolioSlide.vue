<script setup>
import {onMounted} from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slideUniqueId = 'portfolio-slide-' + Math.random().toString(36).substring(2, 7);
const descriptionId = "portfolio-description-" + Math.random().toString(36).substring(2, 7);
const props = defineProps({
  images: Array,
  description: String,
  maxHeight: String,
  index: Number,
});

if (!props.maxHeight) props.maxHeight = '80vh'

const getImgWidth = () => {
  let width = window.innerWidth
  let height = window.innerHeight
  if (height > width) {
    return '90vw'
  }
}

onMounted(() => {
  const tl = gsap.timeline();
  const slide = document.getElementById(slideUniqueId);
  const media = gsap.matchMedia();

  media.add({
    isDesktop: `(min-width: 800px)`,
    isMobile: `(max-width: 799px)`,
  }, (context) => {
    let {isDesktop, isMobile} = context.conditions

    let slides = document.getElementsByClassName('portfolio-slide')
    let isLast = slides[slides.length - 1] === slide || slides[slides.length - 2] === slide

    let currentSlides = slide.parentElement.getElementsByClassName('portfolio-slide')
    let isLastCoverSlide = currentSlides[currentSlides.length - 1].id === slide.id
    let end = isLastCoverSlide? '65% 0%' : '100% 30%'
    tl.fromTo(slide, {opacity: 0, x: 100}, {
      scrollTrigger: {
        trigger: slide,
        start: isMobile ? 'top 13%' : 'top 5%',
        end: isMobile ? '100% 30%' : end,
        pinSpacing: isMobile || isLast,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
      x: 0,
      opacity: 3,
    }, ">").to(slide, {opacity: 0, right: -100}, '>');
  });

  const descritpoin = document.getElementById(descriptionId);
  descritpoin.innerHTML = descritpoin.innerText
});


</script>

<template>
  <div class="portfolio-slide" :id="slideUniqueId">
    <div class="portfolio-slide__images">
      <img v-for="(image, index) in props.images" :key="index" :src="image" alt="portfolio image"/>
    </div>
    <div class="portfolio-slide__description">
      <div class="container">
        <p :id="descriptionId">{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>


.portfolio-slide {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  height: 80vh;
  min-width: 100%;
  min-height: 100%;
  opacity: 1;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
  background: black
}

@media (min-width: 768px) {
  .portfolio-slide {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .portfolio-slide__images {
    display: flex;
    justify-content: end;
  }

  .portfolio-slide__images img {
    max-width: 35vw;
    max-height: v-bind(maxHeight);
  }

  *, *::before, *::after {
    margin: 0;
  }
}

@media (max-width: 1290px) {
  .portfolio-slide__description {
    font-size: 14px;
  }

  .portfolio-slide__images img {
    max-height: 50vh;
  }
}

.portfolio-slide__description {
  color: white;
  overflow-x: hidden;
  line-height: 1.4;
}

img {
  height: initial !important;
  max-width: 80vw;
  overflow-x: hidden;
}
</style>
