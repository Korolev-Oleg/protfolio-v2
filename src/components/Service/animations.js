import anime from "animejs";

export function animateNumber(element, value){
  anime({
    targets: element,
    innerHTML: value,
    round: 1,
    easing: 'linear',
    duration: 1000,
  })
}
