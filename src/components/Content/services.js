const lockTouchScroll = (event) => {
  event.preventDefault();
};

const lockWheelScroll = (event) => {
  event.preventDefault();
};

const lockKeyScroll = (event) => {
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
  if (keys.includes(event.keyCode)) {
    event.preventDefault();
  }
};

export async function lockScroll(time) {
  document.body.style.overflow = 'hidden';
  document.addEventListener('touchstart', lockTouchScroll, { passive: false });
  document.addEventListener('touchmove', lockTouchScroll, { passive: false });
  document.addEventListener('wheel', lockWheelScroll, { passive: false });
  document.addEventListener('keydown', lockKeyScroll, { passive: false });

  console.log("scroll lock")
  if (!time) return
  setTimeout(() => {
    unlockScroll()
    console.log("unlock scroll")
  }, time);
}

export async function unlockScroll(){
  document.body.style.overflow = '';
  document.removeEventListener('touchstart', lockTouchScroll);
  document.removeEventListener('touchmove', lockTouchScroll);
  document.removeEventListener('wheel', lockWheelScroll);
  document.removeEventListener('keydown', lockKeyScroll);
  console.log("unlock scroll")
}
