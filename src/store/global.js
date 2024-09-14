import {reactive, ref} from 'vue';

const translationStore = reactive({
  currentLocale: 'en',
})


export const loadingProgress = ref(0)
export const loader = reactive({
  progress: 0,
  isLoading: () => {
    return loader.progress < 78
  },
})

export default {translationStore, loadingProgress, loader};
