import { useDashboardMetricStore } from './useDashboardMetricStore'

type MetricCardProps = {
  label: string
  value: string | number
}

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <article>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  )
}

export function UserMetricCard() {
  const userCount = useDashboardMetricStore((store) => store.userCount)

  return <MetricCard label="Usuários" value={userCount} />
}

export function SalesMetricCard() {
  const monthlySales = useDashboardMetricStore((store) => store.monthlySales)

  return (
    <MetricCard
      label="Vendas do mês"
      value={monthlySales.toLocaleString('pt-BR')}
    />
  )
}

export function TicketMetricCard() {
  const openTickets = useDashboardMetricStore((store) => store.openTickets)

  return <MetricCard label="Chamados abertos" value={openTickets} />
}
