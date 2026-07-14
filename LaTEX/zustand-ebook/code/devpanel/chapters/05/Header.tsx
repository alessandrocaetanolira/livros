import { useThemeStore } from './useThemeStore'

export function Header() {
  const theme = useThemeStore((store) => store.theme)
  const toggleTheme = useThemeStore((store) => store.toggleTheme)

  return (
    <header>
      <span>Tema: {theme}</span>
      <button type="button" onClick={toggleTheme}>
        Alternar tema
      </button>
    </header>
  )
}
