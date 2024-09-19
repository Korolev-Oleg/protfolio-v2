<script setup>
import {ref, watch} from 'vue';
import {loader} from "@/store/global.js";
import NumberAnimation from "vue-number-animation";


const loadingSpan = ref(null)
const number = ref(null)


watch(loader.isLoading, (isLoading) => {
  if (!isLoading) {
    document.getElementById('loading-section').style.display = 'none'
  }
})

</script>

<template>
  <div class="loading-screen" id="loading-section">
    <p>Loading...
      <NumberAnimation
          ref="number"
          :to="loader.progress"
          :format="(n)=>n.toFixed(0)"
          duration=.5
      />
    </p>
  </div>
</template>

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
