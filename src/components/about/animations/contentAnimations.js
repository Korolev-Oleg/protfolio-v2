import gsap from "gsap";
import ScrambleText from "@/components/scrambleText.js";
import {initTranslations, isElementVisible} from "@/utils.js";
import translations from "@/translations/aboutTranslations.json";

const _ = initTranslations(translations)


export async function executeContentAnimations() {
  const markers = false;
  const start = 'top 80%';
  const end = 'bottom 80%';
  const scrub = 2;
  const tl = gsap.timeline();
  // const chars = ["コ", "ー", "ヒ", "比", "ス", "阝", "プ", "ビ", "州", "ル", "ワ", "イ", "ン", "小", "贝", "比", "巴", "小", "井", "己", "工"]
  const chars = Array.from({length: 10}, () => Math.random() > 0.5 ? '1' : '0');
  const media = gsap.matchMedia(),
    breakPoint = 800

  tl.to('#about-citation-1', {
    call: () => {
      new ScrambleText(document.getElementById('about-citation-1'), {
        timeOffset: 20,
        chars: chars
      }).start().play();
    }
  })
    .to('#about-citation-2', {
      call: () => {
        new ScrambleText(document.getElementById('about-citation-2'), {
          timeOffset: 35,
          chars: chars
        }).start().play();
      }
    }, '<')
  media.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    },
    (context) => {
      // typing paragraphs by scrolling down
      const paragraphs = document.querySelectorAll('.text p');
      let {isDesktop, isMobile} = context.conditions;

      paragraphs.forEach((paragraph) => {
        if (isElementVisible(paragraph) && paragraph.innerText) {
          gsap.to(`#${paragraph.id}`, {
            call: () => {
              new ScrambleText(paragraph, {
                timeOffset: isMobile ? 2 : 1,
                chars: chars
              }).start().play();
            }
          }, '<');
        }
        if (paragraph.hasAttribute('skip')) {
          return;
        }
        tl.to(paragraph, {
          duration: 1,
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: scrub,
            markers: markers,
          },
          text: _(paragraph.id),
          ease: 'power2.inOut'
        });
      })
    }
  )
}
