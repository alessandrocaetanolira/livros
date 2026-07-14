export type User = {
  id: string
  name: string
  email: string
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch('/api/users')

  if (!response.ok) {
    throw new Error('Não foi possível carregar os usuários')
  }

  return response.json()
}
