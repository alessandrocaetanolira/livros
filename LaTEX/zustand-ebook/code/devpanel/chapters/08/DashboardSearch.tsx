import { useDashboardFilterStore } from './useDashboardFilterStore'

export function DashboardSearch() {
  const search = useDashboardFilterStore((store) => store.filters.search)
  const changeSearch = useDashboardFilterStore((store) => store.changeSearch)

  return (
    <label>
      Buscar contas
      <input
        type="search"
        value={search}
        onChange={(event) => changeSearch(event.currentTarget.value)}
      />
    </label>
  )
}
