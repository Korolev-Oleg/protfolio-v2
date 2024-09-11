import {createI18n} from 'vue-i18n';

const messages = {
  en: {
    message: {
      name: "OLEG KOROLEV",
    }
  },
  ru: {
    message: {
      name: "ОЛЕГ КОРОЛЕВ",
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  messages,
});

export default i18n;
