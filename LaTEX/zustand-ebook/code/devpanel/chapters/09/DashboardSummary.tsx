import { useShallow } from 'zustand/react/shallow'
import { useDashboardMetricStore } from './useDashboardMetricStore'

export function DashboardSummary() {
  const { userCount, openTickets } = useDashboardMetricStore(
    useShallow((store) => ({
      userCount: store.userCount,
      openTickets: store.openTickets,
    })),
  )

  return (
    <p>
      {userCount} usuários e {openTickets} chamados em aberto
    </p>
  )
}
