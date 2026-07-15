import { usePreferenceStore } from './usePreferenceStore'

export function AppearanceSettings() {
  const theme = usePreferenceStore((store) => store.theme)
  const density = usePreferenceStore((store) => store.density)
  const selectTheme = usePreferenceStore((store) => store.selectTheme)
  const selectDensity = usePreferenceStore((store) => store.selectDensity)

  return (
    <section>
      <h2>Aparência</h2>

      <button
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => selectTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Usar tema escuro
      </button>

      <button
        type="button"
        aria-pressed={density === 'compact'}
        onClick={() =>
          selectDensity(density === 'compact' ? 'comfortable' : 'compact')
        }
      >
        Usar densidade compacta
      </button>
    </section>
  )
}
