import lockScroll from "@/components/Content/services.js";
import ScrambleText from "@/libs/scrambleText.js";
import gsap from "gsap";
import translations from "@/translations/aboutTranslations.json";
import {initTranslations} from "@/utils.js";
const _ = initTranslations(translations)
import {useCssVars} from "vue";


export async function blinkingTelegram() {
  const telegram = document.querySelector('.h-telegram>svg>path')
  const isCurrentBgWhite = getComputedStyle(document.querySelector('#about')).getPropertyValue('--color-background') === '#ffffff'
  const color = isCurrentBgWhite ? '#5179a2' : 'white'

  console.log(isCurrentBgWhite)
  gsap.to(telegram, {
    fill: color,
    filter: `drop-shadow(0 0 5px ${color})`,
    boxShadow: "0 0 5px white",
    yoyo: true,
    duration: .5,
    repeat: -1,
    ease: "bounce.inOut"
  })
}

export async function executeHeaderAnimations() {
  await blinkingTelegram()
  lockScroll(1300)
  new ScrambleText(document.getElementById('name'), {
    timeOffset: 160,
    chars: ["コ", "ー", "ヒ", "比", "ス", "阝", "プ", "ビ", "州", "ル", "ワ", "イ", "ン", "小", "贝", "比", "巴", "小", "井", "己", "工"]
  }).start().play();
  new ScrambleText(document.getElementById('image-title'), {
    timeOffset: 60,
    chars: ['1', '0']
  }).start().play();

  const tl = gsap.timeline();
  const duration = .3

  tl.fromTo('.photo', {opacity: 0, x: -30}, {duration: .9, opacity: 1, x: 0})
    .fromTo('#python-icon', {opacity: 0}, {duration: .1, opacity: 1})
    .to('#python', {duration: .1, text: 'Python'}, '-=0.2')
    .fromTo('#fastapi-icon', {opacity: 0}, {duration: .1, opacity: 1}, '-=0.2')
    .to('#fastapi', {duration: duration, text: 'FastAPI'}, '-=0.2')
    .fromTo('#django-icon', {opacity: 0}, {duration: .1, opacity: 1}, '-=0.2')
    .to('#django', {duration: duration, text: 'Django'}, '-=0.2')
    .fromTo('#postgres-icon', {opacity: 0}, {duration: .1, opacity: 1}, '-=0.3')
    .to('#postgres', {duration: duration, text: 'Postgres'}, '-=0.3')
    .fromTo('#js-icon', {opacity: 0}, {duration: .1, opacity: 1}, '-=0.4')
    .to('#js', {duration: duration, text: 'js'}, '-=0.4')
    .fromTo('#vue-icon', {opacity: 0}, {duration: .1, opacity: 1}, '-=0.5')
    .to('#vue', {duration: duration, text: 'vue.js'}, '-=0.5')
    .fromTo('#autoit-icon', {opacity: 0}, {duration: .1, opacity: 1}, '-=0.6')
    .to('#autoit', {duration: duration, text: 'autoit'}, '-=0.6')

  let skillsDisappear = .1
  gsap.timeline({
    delay: 5,
    scrollTrigger: {
      trigger: '.head',
      start: '0',
      end: 'bottom 50$',
      scrub: 1,
    },
  }).to('.head', {height: 122, duration: 1}, '<')
    .to('.img-mask', {height: 109, width: 117, duration: 1}, '<')
    .to('#profile-photo', {y: -52, x: -50, duration: 1}, '<')
    .to('#name', {x: '-100vw'}, '<')
    .to('#image-title', {y: '-100vh', x: -10} , '<')
    .to('#python', {text: ''}, '<')
    .to('#python-icon', {opacity: 0}, '<')
    .to('#fastapi', {text: ''}, '<')
    .to('#fastapi-icon', {opacity: 0}, '<')
    .to('#django', {text: '', duration: skillsDisappear, x: -10}, '<')
    .to('#django-icon', {opacity: 0, duration: skillsDisappear, x: -10}, '<')
    .to('#postgres', {text: '', duration: skillsDisappear, x: -10}, '<')
    .to('#postgres-icon', {opacity: 0, duration: skillsDisappear, x: -10}, '<')
    .to('#js', {text: '', duration: skillsDisappear, x: -10}, '<')
    .to('#js-icon', {opacity: 0, duration: skillsDisappear, x: -10}, '<')
    .to('#vue', {text: '', duration: skillsDisappear, x: -10}, '<')
    .to('#vue-icon', {opacity: 0, duration: skillsDisappear, x: -10}, '<')
    .to('#autoit', {text: '', duration: skillsDisappear, x: -10}, '<')
    .to('#autoit-icon', {opacity: 0, duration: skillsDisappear, x: -10}, '<')
    .to('.hidden-container', {x: -45}, ">")
    .to('#name-hidden', {text: _('name'), duration: 1}, '-=.65')
    .to('.h-telegram', {display: 'block', opacity: 1}, '-=.1')
    .to('.h-github', {display: 'block', opacity: 1}, '-=.1')
    .to('.h-linkedin', {display: 'block', opacity: 1}, '-=.1')
    .fromTo('#profile-photo-2', {opacity: 0}, {y: -298, opacity: 1}, '-=1.8')
    .to('#profile-photo', {opacity: 0, duration: 1, x: -100, y: -100}, '>')
  return null
}

export default {executeHeaderAnimations};
