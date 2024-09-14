import gsap from "gsap";

export function runWebAnimations(swiper) {
  const media = gsap.matchMedia()
  gsap.from('#web-projects h2', {
    scrollTrigger: {
      trigger: '#web-projects h2',
      start: 'top center',
      end: 'top center',
      scrub: 1,
    },
    x: '-100vw',
    duration: 1,
  })
  gsap.from('#web-projects .swiper-pagination', {
    scrollTrigger: {
      trigger: '#web-projects .swiper-pagination',
      start: 'top center',
      end: 'top center',
      scrub: 1,
    },
    x: '100vw',
    duration: 1,
  })

  media.add(
    {
      isDesktop: `(min-width: 800px)`,
      isMobile: `(max-width: 799px)`,
    },
    (context) => {
      const slides = gsap.utils.toArray('.swiper-slide')
      slides.forEach((slide, index) => {
        let {isDesktop, isMobile} = context.conditions;
        let moveFrom = null

        if (isDesktop) {
          gsap.to(slide, {
            x: index % 2 === 0 ? '-150vw' : '150vw',
            duration: 1,
          })
          moveFrom = index % 2 === 0 ? '-150vw' : '150vw'
        } else {
          gsap.to(slide, {
            x: '100vw',
            duration: 1,
          })
          moveFrom = "100vw"
        }
        gsap.from(slide, {
          scrollTrigger: {
            trigger: slide,
            start: 'top center',
            end: 'top 65%',
            scrub: 1,
          },
          x: moveFrom,
          duration: 1,
        })
      });
    }
  )

}

