import { type Locale, type MessageKey, messages } from '~/data/messages'

export function useLocale() {
  const locale = useState<Locale>('locale', () => 'en')

  const t = (key: MessageKey) => messages[locale.value][key]

  function setLocale(next: Locale) {
    locale.value = next
    if (import.meta.client) {
      localStorage.setItem('pokhara-locale', next)
      document.documentElement.lang = next === 'ne' ? 'ne' : 'en'
    }
  }

  function toggleLocale() {
    setLocale(locale.value === 'en' ? 'ne' : 'en')
  }

  onMounted(() => {
    const saved = localStorage.getItem('pokhara-locale')
    if (saved === 'en' || saved === 'ne') setLocale(saved)
  })

  return { locale, t, setLocale, toggleLocale }
}
