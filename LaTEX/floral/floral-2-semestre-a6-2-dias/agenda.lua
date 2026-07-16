local meses = {
  [7] = "Julho", [8] = "Agosto", [9] = "Setembro",
  [10] = "Outubro", [11] = "Novembro", [12] = "Dezembro"
}
local semanas = {
  [1] = "domingo", [2] = "segunda-feira", [3] = "terça-feira",
  [4] = "quarta-feira", [5] = "quinta-feira", [6] = "sexta-feira",
  [7] = "sábado"
}
local dias = {}
local cursor = os.time({year=2026, month=7, day=1, hour=12})
local fim = os.time({year=2026, month=12, day=31, hour=12})
while cursor <= fim do
  dias[#dias + 1] = os.date("*t", cursor)
  cursor = cursor + 86400
end
for i = 1, #dias, 2 do
  local function imprime(d)
    tex.sprint(string.format("\\blocodia{%02d}{%s}{%s}{2026}",
      d.day, semanas[d.wday], meses[d.month]))
  end
  imprime(dias[i])
  if dias[i + 1] then tex.sprint("\\entredias"); imprime(dias[i + 1]) end
  tex.sprint("\\clearpage")
end
