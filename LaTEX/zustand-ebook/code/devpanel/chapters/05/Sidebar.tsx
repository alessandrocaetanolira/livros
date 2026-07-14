import { useThemeStore } from './useThemeStore'

export function Sidebar() {
  const theme = useThemeStore((store) => store.theme)

  return <aside>Tema atual: {theme}</aside>
}
