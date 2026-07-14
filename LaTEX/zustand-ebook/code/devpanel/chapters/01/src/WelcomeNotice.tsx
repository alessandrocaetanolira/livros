import { useState } from 'react'

type WelcomeNoticeProps = {
  firstName: string
}

export function WelcomeNotice({ firstName }: WelcomeNoticeProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <aside className="welcome-notice" aria-label="Boas-vindas">
      <div>
        <strong>Boas-vindas, {firstName}.</strong>
        <p>Comece revisando as atividades mais recentes.</p>
      </div>
      <button type="button" onClick={() => setIsVisible(false)}>
        Fechar
      </button>
    </aside>
  )
}
