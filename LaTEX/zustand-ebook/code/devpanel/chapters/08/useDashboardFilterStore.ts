import { create } from 'zustand'

export type AccountStatus = 'all' | 'active' | 'invited' | 'blocked'
export type ActivityPeriod = '7d' | '30d' | '90d'

export type DashboardFilters = {
  search: string
  status: AccountStatus
  period: ActivityPeriod
}

export const DEFAULT_FILTERS: DashboardFilters = {
  search: '',
  status: 'all',
  period: '30d',
}

type DashboardFilterActions = {
  changeSearch: (search: string) => void
  selectStatus: (status: AccountStatus) => void
  selectPeriod: (period: ActivityPeriod) => void
  clearFilters: () => void
}

type DashboardFilterStore = {
  filters: DashboardFilters
} & DashboardFilterActions

export function getActiveFilterCount(filters: DashboardFilters) {
  return Number(filters.search.trim() !== '')
    + Number(filters.status !== DEFAULT_FILTERS.status)
    + Number(filters.period !== DEFAULT_FILTERS.period)
}

export const useDashboardFilterStore =
  create<DashboardFilterStore>()((set) => ({
    filters: DEFAULT_FILTERS,

    changeSearch: (search) =>
      set((state) => ({
        filters: { ...state.filters, search },
      })),

    selectStatus: (status) =>
      set((state) => ({
        filters: { ...state.filters, status },
      })),

    selectPeriod: (period) =>
      set((state) => ({
        filters: { ...state.filters, period },
      })),

    clearFilters: () =>
      set({ filters: { ...DEFAULT_FILTERS } }),
  }))
