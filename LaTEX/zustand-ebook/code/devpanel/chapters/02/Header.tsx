import { useState } from 'react'
import { ThemeToggle, type Theme } from './ThemeToggle'

export function Header() {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <header className={`header header--${theme}`}>
      <span>Tema: {theme === 'light' ? 'claro' : 'escuro'}</span>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </header>
  )
}
