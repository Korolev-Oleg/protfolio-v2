<script setup>
import './css/header.css';

import ProfilePhoto1 from "./asserts/profilePhoto1.png";
import ProfilePhoto2 from "./asserts/profilePhoto2.png";
import PythonIcon2 from "@/components/About/icons/PythonIcon2.vue";
import FastAPIicon from "@/components/About/icons/FastAPIicon.vue";
import DjangoIcon from "@/components/About/icons/DjangoIcon.vue";
import PostgresIcon from "@/components/About/icons/PostgresIcon.vue";
import JSIcon from "@/components/About/icons/JSIcon.vue";
import VueIcon from "@/components/About/icons/VueIcon.vue";
import AutoitIcon from "@/components/About/icons/AutoitIcon.vue";
import translations from '@/translations/aboutTranslations.json';
import Telegram from "@/components/About/icons/telegram.vue";
import Github from "@/components/About/icons/github.vue";
import Linkedin from "@/components/About/icons/linkedin.vue";
import {loader} from "@/store/global.js";
import {onMounted, watch} from "vue";
import TextPlugin from "gsap/TextPlugin";
import gsap from 'gsap';
import {executeHeaderAnimations} from "@/components/About/animations/headerAnimations.js";
import {initTranslations} from "@/utils.js";

const _ = initTranslations(translations)

gsap.registerPlugin(TextPlugin);

watch(loader.isLoading, (isLoading) => {
  executeHeaderAnimations()
})

onMounted(() => {
  window.scrollTo(0, 0);
})

</script>

<template>
  <div class="head">
    <div class="container">
      <div class='flex'>
        <div class="photo">
          <div class="img-mask">
            <img id='profile-photo' :src="ProfilePhoto1" alt="">
            <img id='profile-photo-2' :src="ProfilePhoto2" alt="">
          </div>
          <p id="image-title">FULLSTACK WEB DEVELOPER</p>
        </div>
        <div class="skills-icons">
          <ul>
            <li>
              <PythonIcon2 id="python-icon"/>
              <span id="python"></span>
            </li>
            <li>
              <FastAPIicon id="fastapi-icon"/>
              <span id="fastapi"></span>
            </li>
            <li>
              <DjangoIcon id="django-icon"/>
              <span id="django"></span>
            </li>
            <li>
              <PostgresIcon id="postgres-icon"/>
              <span id="postgres"></span>
            </li>
            <li>
              <JSIcon id="js-icon"/>
              <span id="js"></span>
            </li>
            <li>
              <VueIcon id="vue-icon"/>
              <span id="vue"></span>
            </li>
            <li>
              <AutoitIcon id="autoit-icon"/>
              <span id="autoit"></span>
            </li>
          </ul>
        </div>
        <div class="hidden-container">
          <span id="name-hidden"></span>
          <div class="hidden-socials">
            <a class="h-telegram hidden" href="https://t.me/hustncn" target="_blank">
              <Telegram/>
            </a>
            <a class="h-github hidden" href="https://github.com/korolev-oleg" target="_blank">
              <Github/>
            </a>
            <a class="h-linkedin hidden" href="https://www.linkedin.com/in/korolev-oleg" target="_blank">
              <Linkedin/>
            </a>
          </div>
        </div>
      </div>
      <div id="name">{{ _('name') }}</div>
    </div>
  </div>
</template>
