import { locale, t, translate } from './i18n.js'

translate()
const time = new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date())
document.querySelector('#status').textContent = t('status', { language: navigator.language, time })
