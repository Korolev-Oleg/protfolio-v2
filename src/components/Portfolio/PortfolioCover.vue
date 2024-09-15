<script setup>
import {onMounted} from 'vue';
import gsap from 'gsap';
import {generateID} from '@/utils.js';
import ScrollTrigger from "gsap/ScrollTrigger";

const titleId = generateID('cover-title')
const coverUniqueID = generateID('cover')
const coverIconUniqueID = generateID('cover-icon')
const slidesUniqueID = generateID('slides')
const timeLineUniqueID = generateID('timeline')


const props = defineProps({
  Icon: Object,
  title: String,
})
onMounted(() => {
  const tl = gsap.timeline()
  const media = gsap.matchMedia()

  tl.to('#' + coverUniqueID, {
    scrollTrigger: {
      trigger: '#' + coverUniqueID,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    }
  })
      // show icon
      .to('#' + coverIconUniqueID, {
        scrollTrigger: {
          trigger: '#' + coverUniqueID,
          start: 'top 10%',
          end: 'top bottom',
          scrub: 1,
          anticipatePin: 1,
          onEnter: () => {
            console.log('onEnter')
            document.getElementById(timeLineUniqueID).style.display = 'block'
            document.getElementById(coverUniqueID).classList.add('cover-fixed')
          },
          onLeaveBack: () => {
            console.log('onLeaveBack')
            document.getElementById(timeLineUniqueID).style.display = 'none'
            return document.getElementById(coverUniqueID).classList.remove('cover-fixed')
          },
        },
        scale: 1,
        opacity: 1,
      })
      // print title
      .to(`#${titleId}`, {
        scrollTrigger: {
          trigger: '#' + coverUniqueID,
          start: 'top 0',
          end: '1px',
          scrub: 2,
        },
        text: props.title,
        duration: .1,
      }, '<')

  // move logo with title to the top
  const cover = document.getElementById(coverUniqueID)
  const coverBg = cover.getElementsByClassName('cover-bg')[0]
  const fixCoverBGX = () => {coverBg.style.transform = `translateX(${coverBg.offsetLeft * -1}px)`; console.log("fix")}
  media.add({
    isDesktop: `(min-width: 800px)`,
    isMobile: `(max-width: 799px)`,
  }, (context) => {
    let {isDesktop, isMobile} = context.conditions;

    tl.to('#' + coverUniqueID, {
      minHeight: '10vh',
      height: '10vh',
      width: isMobile ? '220px' : '30vw',
      scrollTrigger: {
        trigger: '#' + coverUniqueID,
        start: '1100px 90%',
        scrub: 1,
        onLeave: (self) => {
          fixCoverBGX()
        },
        onUpdate: (self) => {
          fixCoverBGX()
          // ScrollTrigger.refresh()
        },
      }
    }, '<')
  })
  tl.to('.portfolio-slide', {
    scrollTrigger: {
      trigger: '#' + coverUniqueID,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
    stagger: 1,
  }, '<')



  // fix logo cover
  tl.to('#' + coverUniqueID, {
    scrollTrigger: {
      trigger: '.portfolio-slide',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: () => {
        fixCoverBGX()
      },
    },
  })

  // disable (logo with title) on the end of the slides
  tl.to('#' + coverUniqueID, {
    scrollTrigger: {
      trigger: '#' + slidesUniqueID,
      start: 'bottom 25%',
      end: 'bottom 25%',
      scrub: 1,
    },
    opacity: 0,
  })
})
</script>

<template>
  <div class="cover" :id="coverUniqueID">
    <component :is="Icon" class="cover-icon" :id="coverIconUniqueID"/>
    <p class="cover-title" :id="titleId"></p>
    <div class="cover-bg"></div>
  </div>
  <div class="timeline" :id="timeLineUniqueID"></div>
  <div class="portfolio-slides-container" :id="slidesUniqueID">
    <slot class="slot-cls"/>
    <!--    <slot v-for="(slotContent, index) in $slots.default().length" :name="slotContent.name" :index="index" :total="totalSlots" :key="index" class="slot-cls"/>-->
    <slot v-for="(slot, index) in $slots.default" :index="index"></slot>
  </div>
</template>

<style scoped>
.slot-cls {
  opacity: 0;
  position: relative;
  right: 100vw;
}

.timeline {
  display: none;
  min-height: 100vh;
}

.cover-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 100px;
}

@media (min-width: 800px) {
  .cover-fixed {
    transform: translateY(-2px);
  }
}

.cover-icon {
  height: 60px;
  width: 60px;
  scale: 0;
  opacity: 0;
}

.cover {
  min-height: 102vh;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  height: 70vh;
}

.cover-bg {
  overflow-x: hidden;
  width: 100vw;
  height: 100px;
  background: black;
  position: absolute;
  z-index: -1;
}

.cover-title {
  color: #fff;
  font-size: 17px;
  font-weight: bold;
}

.active {
  color: red !important
}
</style>
