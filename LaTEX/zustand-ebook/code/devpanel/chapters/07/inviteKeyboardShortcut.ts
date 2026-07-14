import { useInviteStore } from './useInviteStore'

export function installInviteKeyboardShortcut() {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Escape') return

    const store = useInviteStore.getState()
    if (store.isOpen) store.closeInvite()
  }

  document.addEventListener('keydown', handleKeyDown)

  return () => {
    document.removeEventListener('keydown', handleKeyDown)
  }
}
