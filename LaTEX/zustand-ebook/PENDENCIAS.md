# Estado de geração e pendências

Última verificação: 17 de julho de 2026.

## PDF atual

O arquivo `main.pdf` foi regenerado com LuaLaTeX e está válido para os capítulos
ativos do livro.

- 123 páginas;
- formato ISO A5 (`419,528 × 595,276 pt`);
- compilação concluída sem erros;
- nenhuma referência ou citação indefinida;
- nenhuma imagem ausente ou ilustração provisória nos capítulos ativos;
- árvore de trabalho Git limpa no momento da verificação.

O PDF atual contém apenas os capítulos 1 a 10. Portanto, ele representa a versão
compilável do manuscrito ativo, não a edição completa planejada na arquitetura
editorial.

## Pendências editoriais

- Escrever os capítulos 11 a 18. Os respectivos arquivos em `chapters/` contêm
  somente três comentários de planejamento cada.
- Ativar os capítulos 11 a 18 em `main.tex` depois que estiverem escritos e
  revisados.
- Gerar novamente o PDF completo e repetir as validações editoriais e visuais.

## Pendência tipográfica

Existe uma caixa `Overfull \hbox` de `4,21419 pt` no capítulo 8, no parágrafo das
linhas 110--114 de `chapters/08-acoes-e-atualizacoes.tex`, próximo ao termo
`clearFilters`.

Essa ocorrência não impede a geração do PDF, mas deve ser corrigida antes da
entrega final para atender ao critério do projeto de não manter caixas
`Overfull`.

## Critério para considerar o livro concluído

O livro só deve ser marcado como concluído quando:

1. os 18 capítulos estiverem escritos, revisados e ativos em `main.tex`;
2. `latexmk -lualatex main.tex` terminar sem erros;
3. o log não contiver referências indefinidas nem caixas `Overfull`;
4. `pdfinfo main.pdf` confirmar o formato A5;
5. capas de capítulo, fólios, páginas em branco e margens tiverem sido revisados
   visualmente no PDF final.
