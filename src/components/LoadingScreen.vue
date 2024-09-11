<template>
  <div class="loading-screen" id="loading-section">
    <p>Loading... {{ loader.progress }}%</p>
  </div>
</template>

<script setup>
import {watch, onMounted} from 'vue';
import {loader} from "@/store/global.js";
import gsap from "gsap";


watch(loader.isLoading, (isLoading) => {
  if (!isLoading) {
    document.getElementById('loading-section').style.display = 'none'
  }
})

</script>

<style>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  z-index: 9999;
}
</style>
