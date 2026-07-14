import { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import type { Theme } from './theme'

export function AppLayout() {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`app app--${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Sidebar theme={theme} />
      <main>{/* conteúdo da rota atual */}</main>
    </div>
  )
}
