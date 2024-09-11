<script setup>
import Header from "./header.vue"
import Content from "@/components/about/content.vue";
</script>

<template>
  <section id="about">
    <Header/>
    <Content/>
  </section>
</template>

<style scoped>
#about{
  overflow-x: hidden;
  background: var(--color-background);
}
</style>
