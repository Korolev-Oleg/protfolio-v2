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
  const resources = document.querySelectorAll('img, link[rel="stylesheet"]');
  const totalResources = resources.length;
  let loadedResources = 0;
  console.log('resources count', totalResources)

  const updateProgress = () => {
    loadedResources++;
    const progress = Math.round((loadedResources / totalResources) * 100);
    loader.progress = progress;

    console.log('Progress:', progress)
    // if (loadedResources >= totalResources) {
    //   clearTimeout(timeout);
    // }
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

export default {generateID, syncLocale, isElementVisible};
