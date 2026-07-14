import { WelcomeNotice } from './WelcomeNotice'

export function DashboardPage() {
  return (
    <main className="dashboard">
      <WelcomeNotice firstName="Marina" />

      <header className="page-heading">
        <p>Dashboard</p>
        <h1>Visão geral</h1>
      </header>

      <section className="summary" aria-label="Resumo do painel">
        <article>
          <span>Usuários ativos</span>
          <strong>248</strong>
        </article>
        <article>
          <span>Convites pendentes</span>
          <strong>12</strong>
        </article>
      </section>
    </main>
  )
}
