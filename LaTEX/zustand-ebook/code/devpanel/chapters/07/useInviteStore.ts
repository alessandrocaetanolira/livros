import { create } from 'zustand'

type InviteState = {
  isOpen: boolean
  initialEmail: string | null
}

type InviteActions = {
  openInvite: (email?: string) => void
  closeInvite: () => void
}

type InviteStore = InviteState & InviteActions

export const useInviteStore = create<InviteStore>()((set) => ({
  isOpen: false,
  initialEmail: null,

  openInvite: (email) =>
    set({
      isOpen: true,
      initialEmail: email ?? null,
    }),

  closeInvite: () =>
    set({
      isOpen: false,
      initialEmail: null,
    }),
}))
