local meses = {
  [1] = "Janeiro", [2] = "Fevereiro", [3] = "Março",
  [4] = "Abril", [5] = "Maio", [6] = "Junho",
  [7] = "Julho", [8] = "Agosto", [9] = "Setembro",
  [10] = "Outubro", [11] = "Novembro", [12] = "Dezembro"
}

local cursor = os.time({year = 2027, month = 1, day = 1, hour = 12})
local fim = os.time({year = 2027, month = 12, day = 31, hour = 12})

while cursor <= fim do
  local d = os.date("*t", cursor)
  tex.sprint(string.format(
    "\\paginadiaria{%02d}{%s}{%02d}{%04d}{%s}",
    d.day, meses[d.month], d.month, d.year, d.wday
  ))
  cursor = cursor + 24 * 60 * 60
end
