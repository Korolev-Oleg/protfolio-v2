<script setup>
import {onMounted} from "vue";
import ChevronDownIcon from "@/components/ChevronDownIcon.vue";
import gsap from "gsap";

onMounted(() => {
  window.addEventListener('scroll', function () {
    var scrollAmount = window.scrollY;
    var documentHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight;
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);

    // For scrollbar 2
    var scrollBar = document.querySelector('#scroll-down');
    if (scrollBar) {
      var scrollBarSpan = scrollBar.querySelector('span');
      if (scrollBarSpan) {
        scrollBarSpan.textContent = roundScroll;
      }
    }
  });

  let scrollDown = document.getElementById('scroll-down');
  gsap.to(scrollDown, {
    duration: .8,
    y: -10,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
});
</script>

<template>
  <div class="scrollBar"><span></span></div>
  <div id="scroll-down"><ChevronDownIcon/> <span>0</span>%</div>
</template>

<style scoped>
#scroll-down{
  height: 10px;
  position: fixed;
  z-index: 200;
  bottom: 25px;
  width: 100%;
  text-align: center;
}
.scrollBar {
  position: fixed;
  top: 0;
  right: .5vw;
  height: 0%;
  width: 10px;
  background: rgba(0, 0, 0, 0);
  transition: height 200ms .1ms;
  text-align: right;
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 1em;
  opacity: 0.6;
  z-index: 200;

  span {
    z-index: 10000;
    position: absolute;
    bottom: 3px;
    left: 2px;
    font-size: 0.7em;
    font-weight: 500;
    display: inline-block;
    text-align: left;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: bottom right;
    transform-origin: bottom left;

    &::after {
      content: "%";
      font-size: 0.8em;
      position: absolute;
      right: -15px;
      bottom: 4px;
      font-weight: 700;
      opacity: 0.4;
    }
  }
}
@media (max-width:768px) {
  .scrollBar {
    right: .5rem;
  }

}
</style>
