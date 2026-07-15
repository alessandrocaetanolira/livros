# TODO — Imagens que ainda exigem ação

Este é o único documento operacional de imagens. Ele lista somente artes que
ainda precisam ser criadas, corrigidas ou substituídas. Quando um item for
aprovado, aplicado ao LaTeX e validado no PDF, remova o item inteiro deste
arquivo.

## Situação atual

- [ ] 3 correções de imagens existentes

## Regras para criação no ChatGPT

- Anexar ao ChatGPT todos os arquivos indicados no item; ele não tem acesso ao
  manuscrito nem a este repositório.
- Copiar o prompt completo, incluindo textos literais e restrições.
- Entregar PNG com margem segura mínima de 48 px e texto legível a 25%.
- Não inventar campos, actions, endpoints, valores, pessoas ou bibliotecas.
- Não incluir “EBOOK”, número de capítulo, número de página, ISBN, código de
  barras, assinatura ou marca d'água.
- Só substituir `\ilustracaopendente` por `\imagemcapitulo` após revisar a arte e
  compilar o PDF sem erros ou caixas `Overfull`.

---

## 1. Corrigir os papéis dos personagens na abertura do capítulo 1

- [ ] **Pendente de correção e aplicação**
- Alvo: `images/1-1-alteracao-5-minutos-review.png`
- Situação: rostos corretos, mas Marina executa o trabalho de desenvolvimento.

### Prompt autossuficiente

> Edite a imagem anexada preservando rigorosamente layout, textos, DevPanel,
> código, balões, cores, dimensões e estilo. Corrija somente quem desempenha cada
> papel, usando `elenco-devpanel.png` como referência rígida de identidade.
>
> Rafael, o homem de cabelo preto, óculos e moletom azul-marinho, deve ocupar os
> quadros em que alguém está no notebook implementando o componente, adicionando
> JSX e percebendo que a interface precisa lembrar o fechamento. Marina, a mulher
> loira de óculos e roupa mostarda, representa Produto: ela deve aparecer como a
> pessoa que envia o pedido de boas-vindas e participa da conversa de definição,
> não como quem programa. Caio pode permanecer na conversa final sobre fronteira
> e estado. Não alterar nenhuma fala ou trecho de código.

### Aprovação

- [ ] Rafael implementa e raciocina sobre o código
- [ ] Marina representa o pedido de Produto
- [ ] Nenhum personagem acumula Produto e desenvolvimento
- [ ] Todos os textos originais permanecem literais

---

## 2. Corrigir os papéis dos personagens na abertura do capítulo 2

- [ ] **Pendente de correção e aplicação**
- Alvo: `images/2-1-funcionou-ate-pedido-seguinte-review.png`
- Situação: rostos corretos, mas Marina implementa a lógica do tema.

### Prompt autossuficiente

> Edite a imagem anexada preservando rigorosamente layout, textos, interfaces,
> balões, valores, cores, dimensões e estilo. Use `elenco-devpanel.png` como
> referência rígida de identidade.
>
> Rafael, o homem de cabelo preto, óculos e moletom azul-marinho, deve aparecer
> nos quadros “Sexta-feira à tarde”, “O botão ficou assim” e “O problema”, pois é
> quem implementa e percebe que a lógica se espalhou. Marina, a mulher loira de
> óculos e roupa mostarda, deve aparecer em “Tudo certo, entregamos!” aprovando a
> experiência e em “Segunda-feira...” trazendo as novas solicitações de Produto.
> Não alterar nenhuma fala, pedido, tela ou texto.

### Aprovação

- [ ] Rafael implementa o tema e identifica o problema técnico
- [ ] Marina aprova e apresenta as solicitações de Produto
- [ ] Aparência coincide com `elenco-devpanel.png`
- [ ] Todos os textos originais permanecem literais

---

## 3. Corrigir a timeline de hidratação do capítulo 10

- [ ] **Pendente de correção e aplicação**
- Alvo: `images/ch10-timeline-hidratacao-2.png`
- Situação: trilhas corrigidas; falta identificar o storage assíncrono na legenda.

### Prompt autossuficiente

> Edite somente a legenda inferior da imagem anexada. Preserve integralmente as
> duas timelines, títulos, posições, dimensões, estados, ações, valores, setas,
> cores e todos os outros textos.
>
> Na legenda, mantenha o item existente `localStorage (navegador)` para representar
> a trilha superior síncrona e acrescente imediatamente ao lado um novo item, com
> ícone laranja de storage/adapter, texto exato `Storage assíncrono (adaptador)`.
> A legenda precisa mostrar claramente os dois mecanismos como itens separados.
>
> Não substitua nem remova `localStorage (navegador)`. Não escreva “localStorage
> assíncrono”. Não altere qualquer outro elemento da imagem.

### Aprovação

- [ ] Legenda contém `localStorage (navegador)` para a trilha síncrona
- [ ] Legenda contém `Storage assíncrono (adaptador)` como item separado
- [ ] Drawer permanece `false` antes e depois da hidratação
- [ ] Ações continuam vindo da criadora e não aparecem no JSON
