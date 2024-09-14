import {loader} from "@/store/global.js";
import translationStore from "@/store/global.js";

export function syncLocale(translationStore) {
  const userLanguage = navigator.language || navigator.userLanguage;
  if (userLanguage.startsWith('ru')) {
    translationStore.currentLocale = 'ru';
  } else {
    translationStore.currentLocale = 'en';
  }
  document.getElementsByTagName('html')[0].lang = translationStore.currentLocale
}

export function generateID(name, length = 5) {
  return `${name}-${Math.random().toString(36).substr(2, length)}`
}

export function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function loadResources(loadingProgressRef) {
  const resources = document.querySelectorAll('img, link[rel="stylesheet"], video');
  const totalResources = resources.length;
  let loadedResources = 0;

  const updateProgress = () => {
    loadedResources++;
    const progress = Math.round((loadedResources / totalResources) * 100);
    loader.progress = progress;
  };

  resources.forEach((resource) => {
    resource.onload = updateProgress;
    resource.onerror = updateProgress;
  });
  // loader.progress = 100
  // loader.isLoading = false
}

export function initTranslations(translations) {
  return (key) => {
    syncLocale(translationStore)
    return translations[translationStore.currentLocale][key]
  }
}

export function getDeviceType() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return 'Mobile';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'Mobile';
  }

  if (window.innerWidth < 768) {
    return 'Mobile';
  }

  return 'Desktop';
}

export default {generateID, syncLocale, isElementVisible};
