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
e 5 mm adicionais para encadernação, totalizando 23 mm junto à lombada. A capa e
a contracapa não fazem parte do PDF do miolo. Não altere o projeto para A4
durante testes, pois texto, código, imagens e quebras devem ser avaliados nas
dimensões finais.

As aberturas ilustradas dos capítulos ocupam sempre páginas ímpares. O verso de
cada abertura permanece completamente branco, sem cabeçalho ou número de página.

## Capa A5+

A capa e a contracapa são produzidas separadamente do miolo, sem lombada nesta
etapa. Cada placa acabada mede 15,5 × 21,5 cm. As artes de impressão medem
18,5 × 24,5 cm e incluem 15 mm de virada para dobra e colagem em cada borda.

- `images/capa-a5plus-wrap.png`: capa pronta para impressão, sem guias;
- `images/contra-capa-a5plus-wrap.png`: contracapa pronta para impressão, sem
  guias;
- arquivos com sufixo `-guia`: prévias da área A5+ central; não enviar para
  impressão.

Os arquivos finais possuem 2185 × 2894 px a 300 dpi. A lombada deve ser criada
somente depois de confirmar a espessura final do miolo encadernado.

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
- `main.tex`: páginas do miolo e ordem futura dos capítulos;
- `preamble.tex`: formato A5, fontes e componentes visuais;
- `chapters/`: arquivos editoriais por capítulo;
- `code/devpanel/chapters/`: snapshots progressivos do projeto;
- `images/`: diagramas e ilustrações identificados por capítulo;
- `bibliography.bib`: referências citadas no livro.
