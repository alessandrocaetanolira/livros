import { useInviteStore } from './useInviteStore'

export function InviteDialog() {
  const isOpen = useInviteStore((store) => store.isOpen)
  const initialEmail = useInviteStore((store) => store.initialEmail)
  const closeInvite = useInviteStore((store) => store.closeInvite)

  if (!isOpen) return null

  return (
    <dialog open>
      <p>Convidar {initialEmail ?? 'uma pessoa'}</p>
      <button type="button" onClick={closeInvite}>
        Fechar
      </button>
    </dialog>
  )
}
