# i18n
json
    ex) korean, english, japanese etc..

{
  "greeting": "Hello",
  "welcome": "Welcome to my blog",
  "about": {
    "title": "About Me",
    "description": "I'm UX engineer, Yun Do-gi."
  }
}
{
  "greeting": "안녕하세요",
  "welcome": "저의 블로그의 오신걸 환영합니다",
  "about": {
    "title": "소개",
    "description": "제 이름은 최성우이고, 풀스텍 개발자를 희망합니다"
  }
}

i18n.js 설정
```
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import koTranslations from './locales/ko.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ko: { translation: koTranslations },
    },
    lng: 'ko', // 기본 언어 설정
    fallbackLng: 'en', // 번역이 없을 경우 사용할 언어
    interpolation: {
      escapeValue: false, // React에서는 이미 XSS를 방지하므로 false로 설정
    },
  });

export default i18n;
```

i18n 적용

```
import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('welcome')}</p>
      <section>
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </section>
    </div>
  );
}

export default MyComponent;
```


!(출처 - 티스토리 윤도기)[https://yundogi.tistory.com/entry/Reacti18n-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-feat-react-i18next#google_vignette]