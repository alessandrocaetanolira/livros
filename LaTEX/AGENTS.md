# Repository Guidelines

## Estrutura do projeto

O livro principal está em `zustand-ebook/`. Use `main.tex` como documento raiz,
`preamble.tex` para pacotes e comandos reutilizáveis e `ARQUITETURA.md` para o
planejamento editorial. Os capítulos ficam em `chapters/`, numerados com dois
dígitos, como `chapters/08-acoes-e-atualizacoes.tex`. Imagens e capas pertencem a
`images/`; exemplos React/TypeScript ficam em `code/devpanel/chapters/NN/`.
`latex-primeiro-livro/` é um projeto didático separado.

## Compilação e validação

Execute os comandos dentro de `zustand-ebook/`:

- `latexmk -lualatex main.tex`: compila o PDF e repete as passagens necessárias.
- `lualatex -interaction=nonstopmode -halt-on-error main.tex`: faz uma passagem
  direta para diagnóstico.
- `latexmk -C`: remove artefatos temporários de compilação.
- `pdfinfo main.pdf`: confirma quantidade e dimensões das páginas.

O documento deve permanecer em A5 (aproximadamente `419.5 x 595.3 pt`). Antes de
entregar, verifique no `main.log` erros, referências indefinidas e caixas
`Overfull`. Revise visualmente capas, fólios, margens de segurança e exercícios.

## Redação e convenções

Escreva em português brasileiro, com tom profissional e exemplos progressivos do
DevPanel. Use dois espaços dentro de ambientes LaTeX. Preserve identificadores
técnicos em inglês e nomes semânticos, como `useInviteStore` e `closeInvite`.
Todo capítulo deve avançar a narrativa, explicar decisões, apresentar código,
propor uma tarefa com espaço de resposta e terminar com um resumo.

Use `\capitulocapa{images/cap-N.png}{Título}` para a abertura. Enquanto uma arte
interna não existir, use `\ilustracaopendente{nome}{descrição detalhada da cena}`.
Não referencie imagens ausentes. Os arquivos em `code/` são material de
referência; não crie projetos Vite independentes nem instale dependências apenas
para testar trechos do livro.

## Commits e pull requests

Faça commits pequenos, com assunto imperativo e escopo opcional, por exemplo
`docs: inicia capítulo 8` ou `latex: ajusta margens das capas`. Não inclua
artefatos temporários ignorados. Pull requests devem indicar capítulos afetados,
resultado da compilação e páginas que exigem revisão visual.
