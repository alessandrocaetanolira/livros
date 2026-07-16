# TODO — Imagens que ainda exigem ação

Este é o único documento operacional de imagens. Ele lista somente artes que
ainda precisam ser criadas, corrigidas ou substituídas. Quando um item for
aprovado, aplicado ao LaTeX e validado no PDF, remova o item inteiro deste
arquivo.

## Situação atual

- Nenhuma imagem pendente nos capítulos ativos.
- Última revisão do inventário: 16 de julho de 2026.
- As dez aberturas de capítulo foram revisadas no PDF A5. Não exigem alteração
  de conteúdo; permanecem sempre em página ímpar, com o verso branco.

## Regras para criação no ChatGPT

- Anexar ao ChatGPT todos os arquivos indicados no item; ele não tem acesso ao
  manuscrito nem a este repositório.
- Copiar o prompt completo, incluindo textos literais e restrições.
- Entregar PNG com margem segura mínima de 48 px e texto legível a 25%.
- Não inventar campos, actions, endpoints, valores, pessoas ou bibliotecas.
- Em ilustrações internas, não incluir “EBOOK”, número de capítulo, número de
  página, ISBN, código de barras, assinatura ou marca d'água.
- Em artes de abertura, manter somente o identificador `CAPÍTULO N` já previsto
  no layout. Não incorporar fólio, pois a numeração é aplicada pelo LaTeX.
- Só substituir `\ilustracaopendente` por `\imagemcapitulo` após revisar a arte e
  compilar o PDF sem erros ou caixas `Overfull`.
