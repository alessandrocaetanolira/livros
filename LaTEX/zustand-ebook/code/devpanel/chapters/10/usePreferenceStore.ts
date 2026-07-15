import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark'
export type Density = 'comfortable' | 'compact'

type PreferenceStore = {
  theme: Theme
  density: Density
  isNotificationDrawerOpen: boolean
  selectTheme: (theme: Theme) => void
  selectDensity: (density: Density) => void
  openNotificationDrawer: () => void
  closeNotificationDrawer: () => void
}

type PersistedVersionZero = {
  theme: Theme
  compactMode: boolean
}

type PersistedPreferences = {
  theme: Theme
  density: Density
}

export const usePreferenceStore = create<PreferenceStore>()(
  persist(
    (set) => ({
      theme: 'light',
      density: 'comfortable',
      isNotificationDrawerOpen: false,

      selectTheme: (theme) => set({ theme }),
      selectDensity: (density) => set({ density }),
      openNotificationDrawer: () =>
        set({ isNotificationDrawerOpen: true }),
      closeNotificationDrawer: () =>
        set({ isNotificationDrawerOpen: false }),
    }),
    {
      name: 'devpanel-preferences',
      version: 1,
      partialize: (state) => ({
        theme: state.theme,
        density: state.density,
      }),
      migrate: (persistedState, version) => {
        if (version === 0) {
          const oldState = persistedState as PersistedVersionZero

          return {
            theme: oldState.theme,
            density: oldState.compactMode ? 'compact' : 'comfortable',
          }
        }

        return persistedState as PersistedPreferences
      },
    },
  ),
)
