import { useQuery } from '@tanstack/react-query'
import { getUsers } from './api'

export function UsersPage() {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 60_000,
  })

  if (usersQuery.isPending) return <p>Carregando...</p>
  if (usersQuery.isError) return <p>{usersQuery.error.message}</p>

  return (
    <section>
      <button
        type="button"
        onClick={() => usersQuery.refetch()}
        disabled={usersQuery.isFetching}
      >
        {usersQuery.isFetching ? 'Atualizando...' : 'Atualizar lista'}
      </button>

      <ul>
        {usersQuery.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  )
}
