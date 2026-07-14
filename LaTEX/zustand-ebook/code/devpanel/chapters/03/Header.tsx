import { ThemeToggle } from '../02/ThemeToggle'
import type { Theme } from './theme'

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header>
      <span>Tema: {theme === 'light' ? 'claro' : 'escuro'}</span>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  )
}
