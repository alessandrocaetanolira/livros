import { usePreferenceStore } from './usePreferenceStore'

export function NotificationDrawer() {
  const isOpen = usePreferenceStore(
    (store) => store.isNotificationDrawerOpen,
  )
  const closeDrawer = usePreferenceStore(
    (store) => store.closeNotificationDrawer,
  )

  if (!isOpen) return null

  return (
    <aside aria-label="Notificações">
      <button type="button" onClick={closeDrawer}>
        Fechar
      </button>
    </aside>
  )
}
