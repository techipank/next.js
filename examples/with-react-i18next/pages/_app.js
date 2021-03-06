import React from 'react'
import App, { Container } from 'next/app'
import { NamespacesConsumer, I18nextProvider } from 'react-i18next'
import initialI18nInstance from '../i18n'
import LanguageSwitch from '../components/LanguageSwitch'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}

    return (
      <Container>
        <I18nextProvider
          i18n={i18n || initialI18nInstance}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
        >
          <React.Fragment>
            <NamespacesConsumer ns='common' wait>
              {t => <h1>{t('common:integrates_react-i18next')}</h1>}
            </NamespacesConsumer>
            <LanguageSwitch />

            <Component {...pageProps} />
          </React.Fragment>
        </I18nextProvider>
      </Container>
    )
  }
}
