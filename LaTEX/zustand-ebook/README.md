# Estado sem Drama

Livro sobre decisões de gerenciamento de estado em React, usando Zustand como
ferramenta principal e o projeto DevPanel como fio condutor.

## Estado atual

A arquitetura completa está registrada em `ARQUITETURA.md`. Os capítulos 1 a 10
estão escritos e ativos em `main.tex`; os demais permanecem como marcadores
editoriais e serão incluídos progressivamente.

## Formato editorial obrigatório

O livro usa ISO A5 real: **148 × 210 mm**, em páginas espelhadas. A configuração
está em `preamble.tex` e inclui margem interna de 18 mm, margem externa de 14 mm
e 3 mm adicionais para encadernação. Não altere o projeto para A4 durante testes,
pois texto, código, imagens e quebras devem ser avaliados nas dimensões finais.

## Compilação

O projeto utiliza LuaLaTeX para oferecer suporte moderno a fontes:

```bash
latexmk -lualatex main.tex
```

Para limpar os arquivos temporários:

```bash
latexmk -C
```

## Ilustrações

Adicione imagens aos poucos em `images/`, seguindo os identificadores de
`ARQUITETURA.md`, por exemplo:

```text
images/ch03-arvore-props-drilling.pdf
images/ch06-fluxo-store-externo.png
```

Prefira PDF para diagramas vetoriais e PNG para imagens rasterizadas. Quando o
arquivo existir, use no capítulo:

```tex
\imagemcapitulo
  {ch06-fluxo-store-externo}
  {O Drawer recebe comandos de diferentes telas.}
  {fluxo-store-externo}
```

O comando procura primeiro a versão `.pdf` e depois `.png`.

## Organização

- `ARQUITETURA.md`: projeto editorial completo;
- `main.tex`: capa e ordem futura dos capítulos;
- `preamble.tex`: formato A5, fontes e componentes visuais;
- `chapters/`: arquivos editoriais por capítulo;
- `code/devpanel/chapters/`: snapshots progressivos do projeto;
- `images/`: diagramas e ilustrações identificados por capítulo;
- `bibliography.bib`: referências citadas no livro.
