<script setup>
import {onMounted} from 'vue'
import {getDeviceType} from '@/utils.js'

const props = defineProps({
  video: Object,
  gif: Object
})

const deviceType = getDeviceType()
if (deviceType === 'Mobile') {
  props.video = null
} else {
  props.gif = null
}
</script>
<template>
  <video v-if="getDeviceType() === 'Desktop'" autoplay muted loop>
    <source :src="props.video" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div v-else class="gif">
    <img :src="props.gif" alt="">
  </div>
</template>
<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
