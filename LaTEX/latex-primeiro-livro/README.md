# LaTeX do Zero ao Primeiro Livro

Tutorial progressivo em formato de livro. O próprio projeto serve como exemplo
de organização, personalização e compilação com LuaLaTeX.

## Instalação

No Ubuntu ou Debian, a opção mais simples é:

```bash
sudo apt update
sudo apt install texlive-full latexmk
```

No Windows, instale MiKTeX ou TeX Live. No macOS, instale MacTeX. Como alternativa
sem instalação local, envie os arquivos para o Overleaf e selecione LuaLaTeX em
**Menu > Compiler**.

## Compilar

Na pasta do projeto, execute:

```bash
latexmk -lualatex main.tex
```

Para recompilar automaticamente após alterações:

```bash
latexmk -lualatex -pvc main.tex
```

Para limpar arquivos temporários:

```bash
latexmk -C
```

No VS Code, recomenda-se a extensão LaTeX Workshop. O comentário na primeira
linha de `main.tex` informa à extensão que o mecanismo desejado é LuaLaTeX.

## Estrutura

- `main.tex`: entrada, ordem dos capítulos e partes pré/pós-textuais;
- `preamble.tex`: fontes, pacotes, cores e comandos compartilhados;
- `chapters/`: conteúdo dividido em arquivos pequenos;
- `examples/`: modelo mínimo que o leitor pode copiar;
- `images/`: imagens do livro;
- `bibliography.bib`: referências bibliográficas.

Leia os capítulos na ordem. O capítulo 8 orienta a adaptação deste projeto para
seu próprio livro.
