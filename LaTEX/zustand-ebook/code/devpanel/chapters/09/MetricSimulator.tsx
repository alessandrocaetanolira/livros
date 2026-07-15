import { useDashboardMetricStore } from './useDashboardMetricStore'

export function MetricSimulator() {
  const updateMonthlySales = useDashboardMetricStore(
    (store) => store.updateMonthlySales,
  )

  return (
    <button type="button" onClick={() => updateMonthlySales(48790)}>
      Simular nova venda
    </button>
  )
}
