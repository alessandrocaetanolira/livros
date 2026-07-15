import {
  getActiveFilterCount,
  useDashboardFilterStore,
} from './useDashboardFilterStore'

export function FiltersPanel() {
  const filters = useDashboardFilterStore((store) => store.filters)
  const selectStatus = useDashboardFilterStore((store) => store.selectStatus)
  const selectPeriod = useDashboardFilterStore((store) => store.selectPeriod)
  const clearFilters = useDashboardFilterStore((store) => store.clearFilters)
  const activeFilterCount = useDashboardFilterStore((store) =>
    getActiveFilterCount(store.filters),
  )

  return (
    <aside aria-label="Filtros do Dashboard">
      <label>
        Situação
        <select
          value={filters.status}
          onChange={(event) =>
            selectStatus(event.currentTarget.value as typeof filters.status)
          }
        >
          <option value="all">Todas</option>
          <option value="active">Ativas</option>
          <option value="invited">Convidadas</option>
          <option value="blocked">Bloqueadas</option>
        </select>
      </label>

      <label>
        Período
        <select
          value={filters.period}
          onChange={(event) =>
            selectPeriod(event.currentTarget.value as typeof filters.period)
          }
        >
          <option value="7d">7 dias</option>
          <option value="30d">30 dias</option>
          <option value="90d">90 dias</option>
        </select>
      </label>

      <button type="button" onClick={clearFilters}>
        Limpar filtros ({activeFilterCount})
      </button>
    </aside>
  )
}
