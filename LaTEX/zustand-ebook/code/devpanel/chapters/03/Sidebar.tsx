import type { Theme } from './theme'

type SidebarProps = {
  theme: Theme
}

export function Sidebar({ theme }: SidebarProps) {
  return (
    <aside aria-label="Navegação principal">
      <span>Tema atual: {theme === 'light' ? 'claro' : 'escuro'}</span>
      <nav>{/* links do DevPanel */}</nav>
    </aside>
  )
}
