# Repository Guidelines

## Project Structure & Module Organization

This repository currently uses `prompt.md` as the source specification for a Portuguese-language Zustand e-book. Generated book sources should live in `zustand-ebook/`: keep the root document in `main.tex`, shared packages and macros in `preamble.tex`, citations in `bibliography.bib`, and chapter text in `chapters/`. Number chapter files with a two-digit prefix, for example `chapters/03-react-hooks.tex`. Store diagrams and other artwork in `images/`, and complete React/TypeScript examples in `code/`. Do not commit generated LaTeX artifacts such as `.aux`, `.log`, `.toc`, or `.out` files.

## Build, Test, and Development Commands

The e-book scaffold is not yet present. After it is created, run commands from `zustand-ebook/`:

- `latexmk -pdf -shell-escape main.tex` builds the book and repeats LaTeX passes as needed. Shell escape is required when `minted` is enabled.
- `latexmk -C` removes generated build files.
- `pdflatex -shell-escape main.tex` performs a quick single-pass syntax check; use `latexmk` for the final document.

Install TeX Live packages and Pygments before compiling. If bibliography or index processing is not configured through `latexmk`, run the relevant `biber`/`bibtex` and `makeindex` steps explicitly.

## Writing Style & Naming Conventions

Write explanatory prose in Brazilian Portuguese and keep technical identifiers in their canonical English form. Use two spaces for indentation inside LaTeX environments. Put reusable formatting in `preamble.tex` instead of redefining it in chapters. Prefer semantic labels such as `\label{sec:context-api}`, `\label{fig:store-flow}`, and `\label{lst:basic-store}`. Code samples must target React 19, TypeScript, Vite, Zustand, ESLint, and Prettier, and should be complete enough to compile independently.

## Testing Guidelines

Treat a warning-free PDF build as the baseline test. Check unresolved references, missing citations, overfull boxes, broken links, and absent images in the build log. Compile or type-check examples under `code/` when their supporting project configuration exists. Every chapter should include an introduction, practical examples, exercises at three difficulty levels, a summary, and a mini-project challenge.

## Commit & Pull Request Guidelines

No commit history currently defines a convention. Use short, imperative subjects with an optional scope, such as `docs: draft introduction chapter` or `latex: configure index`. Keep commits focused. Pull requests should describe affected chapters, report the build command and result, link relevant issues, and include screenshots or PDF page references for visual layout changes.
