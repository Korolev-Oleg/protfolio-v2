<script setup>
import Header from "../Header/header.vue"
import Content from "@/components/About/content.vue";
</script>

<template>
  <Header/>
  <section id="about">
    <Content/>
  </section>
</template>

<style scoped>
#about{
  overflow-x: hidden;
  background: var(--color-background);
}
</style>
