# Arquitetura editorial — DevPanel

## Promessa do livro

Ao terminar o livro, o leitor não apenas saberá criar stores com Zustand. Ele
saberá reconhecer a natureza de cada estado, escolher entre estado local,
Context API, Zustand e TanStack Query, e explicar essa decisão ao restante do
time. O DevPanel evolui uma funcionalidade por capítulo, como um painel interno
mantido por uma equipe pequena.

## Regras de progressão

- Cada capítulo começa por uma situação vivida no trabalho, antes de apresentar
  qualquer API.
- Cada exemplo introduz um único conceito e modifica uma única funcionalidade.
- O código de referência de cada etapa fica em `code/devpanel/chapters/NN/`,
  sem repetir configurações de build ou dependências.
- As imagens usam o padrão `images/chNN-tipo-assunto.{pdf,png}`. O texto só
  referencia uma imagem depois que ela existir.
- Todo capítulo segue: história, problema, solução habitual, limitações, solução
  melhor, implementação, explicação, tarefa prática e resumo.

# Parte I — Antes de escolher uma biblioteca

## Capítulo 1 — O que realmente é estado?

**Pergunta:** toda variável de uma tela é estado?

- Seções: uma alteração aparentemente simples; interface como fotografia;
  estado, valor derivado e constante; onde a informação nasce; primeira regra
  de decisão.
- DevPanel: aviso de boas-vindas que pode ser dispensado durante a sessão.
- Conceito novo: estado local com `useState`.
- Tarefa: o produto pediu um botão para restaurar o aviso sem recarregar a tela.
- Ilustrações: `ch01-diagrama-interface-estado` e
  `ch01-quadro-estado-derivado-constante`.

## Capítulo 2 — Quando `useState` começa a incomodar?

**Pergunta:** o problema é o hook ou o alcance que a funcionalidade ganhou?

- Seções: tema que nasceu no Header; novo pedido do produto; estado preso ao
  componente; passar props por várias camadas; acoplamento; sinais de que o
  estado deixou de ser local.
- DevPanel: alternância de tema inicialmente disponível apenas no Header.
- Conceito novo: reconhecer pelo número de consumidores e pelo ciclo de vida
  quando um estado precisa mudar de lugar.
- Tarefa: exibir o tema atual na tela de Perfil usando apenas o estado do Header
  e registrar as dificuldades encontradas.
- Ilustração de abertura: `cap-2.png`.

## Capítulo 3 — Como compartilhar estado sem criar confusão?

**Pergunta:** até onde elevar o estado continua sendo simples?

- Seções: Header, Sidebar e Perfil precisam do tema; elevar estado; props
  drilling; componentes intermediários; reconhecer o limite da solução.
- DevPanel: tema movido para o AppLayout e exibido também na Sidebar.
- Conceito novo: fonte única de verdade, props drilling e Context API.
- Tarefa: migrar Perfil e Sidebar para `ThemeProvider` e remover as props de
  transporte.
- Ilustrações: `ch03-arvore-props-drilling` e `ch03-fluxo-fonte-unica`.

## Capítulo 4 — Context API resolve estado global?

**Pergunta:** distribuir um valor é o mesmo que gerenciar estado?

- Seções: Context não gerencia por si só; Provider que cresceu; renderizações;
  mistura de responsabilidades; separação por frequência e domínio; limite
  prático.
- DevPanel: filtros do Dashboard adicionados indevidamente ao contexto de tema.
- Conceito novo: limites da Context API como store genérico.
- Tarefa: classificar estados do DevPanel e reduzir o contexto ao que é
  realmente transversal.
- Ilustrações: `ch04-fluxo-context` e `ch04-renderizacao-context`.

## Capítulo 5 — Conhecendo o Zustand

**Pergunta:** o que muda quando o estado vive fora da árvore React?

- Seções: o Provider que cresceu; store externo; assinatura; `create`; acesso
  direto; selectors; comparação com props e Context; critérios de adoção.
- DevPanel: tema migra de Context para uma store pequena do Zustand.
- Conceito novo: store externo e hook de consumo.
- Tarefa: conectar Header, Sidebar e Perfil à mesma store de tema.
- Ilustração de abertura: `cap-5.png`.

# Parte II — A necessidade do Zustand

## Capítulo 6 — Todo dado da aplicação pertence ao cliente?

**Pergunta:** por que uma lista vinda da API não é apenas mais um estado global?

- Seções: propriedade dos dados; carregamento, erro e cache; sincronização;
  estado do cliente versus estado do servidor; critérios para TanStack Query.
- DevPanel: lista de usuários carregada da API.
- Conceito novo: consulta remota com TanStack Query.
- Tarefa: adicionar atualização manual da lista sem duplicar lógica de loading.
- Ilustrações: `ch06-mapa-propriedade-dados`, `ch06-fluxo-query-cache` e
  `ch06-comparacao-client-server-state`.

## Capítulo 7 — Como criar o primeiro store?

**Pergunta:** qual é a menor API útil para representar uma interação real?

- Seções: contrato antes da implementação; `create`; estado inicial; `set`;
  ações; consumo no React; nomes que expressam intenção.
- DevPanel: modal global de convite de usuário.
- Conceito novo: `create`, estado e ações tipadas.
- Tarefa: fechar o modal com Escape sem acoplar a página ao componente visual.
- Ilustrações: `ch07-anatomia-store` e `ch07-sequencia-acao-render`.

## Capítulo 8 — Como atualizar estado sem espalhar regras?

**Pergunta:** quem deve conhecer as regras de mudança: a tela ou o store?

- Seções: setters genéricos; ações de domínio; atualização funcional; objetos e
  imutabilidade; valores derivados; limites da ação.
- DevPanel: central de filtros do Dashboard.
- Conceito novo: ações semânticas e atualização imutável.
- Tarefa: criar a ação “limpar filtros” preservando o período padrão.
- Ilustrações: `ch08-fluxo-acao-dominio` e `ch08-objeto-imutabilidade`.

## Capítulo 9 — Como evitar renderizações desnecessárias?

**Pergunta:** por que um componente atualiza quando “seu” valor não mudou?

- Seções: assinatura sem seletor; seleção mínima; igualdade; objetos novos;
  `useShallow`; medir antes de otimizar.
- DevPanel: indicadores independentes do Dashboard.
- Conceito novo: selectors e `useShallow`.
- Tarefa: impedir que o card de usuários renderize ao alterar o filtro de vendas.
- Ilustrações: `ch09-diagrama-assinaturas`, `ch09-timeline-renderizacoes` e
  `ch09-comparacao-selector`.

## Capítulo 10 — Como lembrar preferências do usuário?

**Pergunta:** o que deve sobreviver ao fechamento do navegador?

- Seções: memória versus persistência; middleware `persist`; storage; seleção do
  que persistir; versão e migração; hidratação.
- DevPanel: lembrar densidade e tema escolhidos nas Configurações.
- Conceito novo: `persist`, `partialize` e versionamento.
- Tarefa: persistir densidade, mas nunca o estado aberto do Drawer.
- Ilustrações: `ch10-fluxo-persist`, `ch10-timeline-hidratacao` e
  `ch10-quadro-dados-persistidos`.

# Parte III — Um store que o time consegue manter

## Capítulo 11 — Como enxergar o que alterou o estado?

**Pergunta:** como investigar uma mudança que ninguém consegue reproduzir?

- Seções: logs improvisados; Redux DevTools; nome do store; nomes das ações;
  inspeção e replay; desativação em produção.
- DevPanel: rastreamento das alterações de preferências.
- Conceito novo: middleware `devtools`.
- Tarefa: nomear cada ação para que o histórico conte uma história legível.
- Ilustrações: `ch11-captura-devtools` e `ch11-timeline-acoes`.

## Capítulo 12 — Como organizar stores sem criar um “store de tudo”?

**Pergunta:** dividir por página, por componente ou por responsabilidade?

- Seções: sinais do store monolítico; coesão; fronteiras de domínio; dependência
  entre stores; diretório por recurso; quando não dividir.
- DevPanel: separar preferências de interface e filtros do Dashboard.
- Conceito novo: organização por domínio.
- Tarefa: decidir onde deve viver a preferência de idioma e justificar a escolha.
- Ilustrações: `ch12-arquitetura-dominios` e `ch12-comparacao-store-monolitico`.

## Capítulo 13 — Quando usar slices?

**Pergunta:** slices resolvem complexidade ou apenas repartem um arquivo?

- Seções: composição; `StateCreator`; tipos; dependências entre slices; ordem de
  middlewares; critérios para adotar slices.
- DevPanel: compor preferências visuais no store de configurações.
- Conceito novo: padrão de slices tipados.
- Tarefa: adicionar o slice de acessibilidade sem criar dependência circular.
- Ilustrações: `ch13-composicao-slices` e `ch13-fluxo-middlewares-slices`.

## Capítulo 14 — O store precisa viver para sempre?

**Pergunta:** todo estado compartilhado precisa ser singleton global?

- Seções: estado por instância; ciclo de vida; vanilla store; Provider próprio;
  store por rota; SSR e isolamento de requisições.
- DevPanel: wizard de criação de usuário isolado por instância.
- Conceito novo: stores locais e `createStore`.
- Tarefa: permitir dois rascunhos independentes sem vazamento de estado.
- Ilustrações: `ch14-global-versus-instancia` e `ch14-ciclo-vida-store`.

## Capítulo 15 — Como testar sem montar a aplicação inteira?

**Pergunta:** quais comportamentos do store merecem um teste?

- Seções: contrato observável; testar ações; reset entre testes; persistência;
  componentes consumidores; evitar testes de implementação.
- DevPanel: testes do modal de convite e das preferências persistidas.
- Conceito novo: testes de store com Vitest e React Testing Library.
- Tarefa: testar que “limpar filtros” preserva o período padrão.
- Ilustrações: `ch15-piramide-testes-store` e `ch15-fluxo-reset-testes`.

# Parte IV — Decisões de produção

## Capítulo 16 — Onde deve ficar autenticação?

**Pergunta:** sessão, perfil e token são o mesmo tipo de estado?

- Seções: separar identidade e credenciais; cookie seguro; dados do usuário;
  bootstrap da sessão; logout; riscos de persistir tokens no navegador.
- DevPanel: sessão atual e menu do perfil.
- Conceito novo: fronteiras entre servidor, segurança e estado do cliente.
- Tarefa: limpar dados sensíveis e caches ao sair do painel.
- Ilustrações: `ch16-fronteiras-autenticacao` e `ch16-sequencia-bootstrap-sessao`.

## Capítulo 17 — O que muda no Next.js?

**Pergunta:** como evitar estado compartilhado entre requisições e erros de
hidratação?

- Seções: cliente e servidor; módulos singleton; store por requisição; Client
  Components; hidratação; persistência; diferenças para Vite.
- DevPanel: preferências iniciais renderizadas no servidor.
- Conceito novo: integração segura com SSR.
- Tarefa: eliminar o flash de tema incorreto no primeiro carregamento.
- Ilustrações: `ch17-fronteira-server-client`, `ch17-store-por-requisicao` e
  `ch17-timeline-hidratacao-ssr`.

## Capítulo 18 — Como decidir sem transformar tudo em regra?

**Pergunta:** diante de uma nova demanda, qual ferramenta escolher?

- Seções: inventário do estado do DevPanel; árvore de decisão; custo da
  dependência; sinais de revisão; migração incremental; conversa em code review.
- DevPanel: revisão arquitetural completa, sem nova funcionalidade.
- Conceito novo: processo de decisão e documentação técnica curta.
- Tarefa: classificar cinco novas demandas e defender cada escolha no PR.
- Ilustrações: `ch18-arvore-decisao-estado`, `ch18-mapa-final-devpanel` e
  `ch18-checklist-code-review`.

## Mapa de evolução do DevPanel

| Capítulo | Uma única evolução | Ferramenta central |
|---|---|---|
| 1 | Aviso dispensável | `useState` |
| 2 | Tema inicialmente preso ao Header | limites do estado local |
| 3 | Tema compartilhado com a Sidebar | props |
| 4 | Tema global | Context API |
| 5 | Tema em store externo | Zustand introdutório |
| 6 | Lista de usuários | TanStack Query |
| 7 | Modal de convite | Zustand básico |
| 8 | Filtros | ações de domínio |
| 9 | Indicadores | selectors |
| 10 | Preferências lembradas | `persist` |
| 11 | Histórico de alterações | `devtools` |
| 12 | Fronteiras de stores | organização por domínio |
| 13 | Preferências compostas | slices |
| 14 | Rascunhos independentes | vanilla/local stores |
| 15 | Segurança contra regressões | testes |
| 16 | Sessão atual | arquitetura de autenticação |
| 17 | Preferência no SSR | integração com Next.js |
| 18 | Revisão arquitetural | árvore de decisão |

## Critério para iniciar a redação

Antes de escrever cada capítulo, confirmar: pergunta respondida, única evolução
do DevPanel, conceito novo, código necessário, tarefa prática e ilustrações. Se
uma seção exigir uma API ainda não motivada, ela deve ser movida para um capítulo
posterior.
