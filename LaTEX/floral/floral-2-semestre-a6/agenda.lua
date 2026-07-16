local meses = {
  [7] = "Julho", [8] = "Agosto", [9] = "Setembro",
  [10] = "Outubro", [11] = "Novembro", [12] = "Dezembro"
}
local semanas = {
  [1] = "domingo", [2] = "segunda-feira", [3] = "terça-feira",
  [4] = "quarta-feira", [5] = "quinta-feira", [6] = "sexta-feira",
  [7] = "sábado"
}
local cursor = os.time({year=2026, month=7, day=1, hour=12})
local fim = os.time({year=2026, month=12, day=31, hour=12})
while cursor <= fim do
  local d = os.date("*t", cursor)
  tex.sprint(string.format("\\blocodia{%02d}{%s}{%s}{2026}\\clearpage",
    d.day, semanas[d.wday], meses[d.month]))
  cursor = cursor + 86400
end
