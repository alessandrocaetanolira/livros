import { useInviteStore } from './useInviteStore'

export function InviteButton() {
  const openInvite = useInviteStore((store) => store.openInvite)

  return (
    <button type="button" onClick={() => openInvite()}>
      Convidar pessoa
    </button>
  )
}
