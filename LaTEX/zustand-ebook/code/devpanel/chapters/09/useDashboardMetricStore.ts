import { create } from 'zustand'

type DashboardMetricStore = {
  userCount: number
  monthlySales: number
  openTickets: number
  updateUserCount: (value: number) => void
  updateMonthlySales: (value: number) => void
  updateOpenTickets: (value: number) => void
}

export const useDashboardMetricStore =
  create<DashboardMetricStore>()((set) => ({
    userCount: 1284,
    monthlySales: 48320,
    openTickets: 17,
    updateUserCount: (userCount) => set({ userCount }),
    updateMonthlySales: (monthlySales) => set({ monthlySales }),
    updateOpenTickets: (openTickets) => set({ openTickets }),
  }))
