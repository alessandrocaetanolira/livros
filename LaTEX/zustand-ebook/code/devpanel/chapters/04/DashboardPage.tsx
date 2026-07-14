import { useState } from 'react'

type UserStatus = 'all' | 'active' | 'invited'

export function DashboardPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<UserStatus>('all')

  return (
    <main>
      <input
        aria-label="Buscar usuários"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        aria-label="Filtrar por status"
        value={status}
        onChange={(event) => setStatus(event.target.value as UserStatus)}
      >
        <option value="all">Todos</option>
        <option value="active">Ativos</option>
        <option value="invited">Convidados</option>
      </select>
    </main>
  )
}
