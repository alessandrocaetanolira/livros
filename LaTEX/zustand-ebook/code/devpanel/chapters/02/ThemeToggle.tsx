export type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextTheme = theme === 'light' ? 'escuro' : 'claro'

  return (
    <button type="button" onClick={onToggle}>
      Usar tema {nextTheme}
    </button>
  )
}
