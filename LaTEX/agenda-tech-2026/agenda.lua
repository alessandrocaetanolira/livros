local meses = {
  [7] = "julho", [8] = "agosto", [9] = "setembro",
  [10] = "outubro", [11] = "novembro", [12] = "dezembro"
}

local semanas = {
  [1] = "domingo", [2] = "segunda-feira", [3] = "terça-feira",
  [4] = "quarta-feira", [5] = "quinta-feira", [6] = "sexta-feira",
  [7] = "sábado"
}

local temas = {
  {"Java", "TechOrange"}, {"PHP", "TechPurple"},
  {"JavaScript", "TechOrange"}, {"TypeScript", "TechBlue"},
  {"HTML", "TechOrange"}, {"CSS", "TechCyan"},
  {"SQL", "TechGreen"}, {"Git", "TechPurple"},
  {"Linux", "TechNavy"}, {"Python", "TechBlue"},
  {"API", "TechGreen"}, {"Docker", "TechCyan"}
}

local dias = {}
local cursor = os.time({year=2026, month=7, day=1, hour=12})
local fim = os.time({year=2026, month=12, day=31, hour=12})

while cursor <= fim do
  local d = os.date("*t", cursor)
  dias[#dias + 1] = d
  cursor = cursor + 24 * 60 * 60
end

for i = 1, #dias, 2 do
  local function imprime(d, indice)
    local tema = temas[((indice - 1) % #temas) + 1]
    local cor = tema[2]
    if d.wday == 1 or d.wday == 7 then cor = "TechPurple" end
    tex.sprint(string.format(
      "\\cabecalhodiario{%02d}{%s}{%s}{%s}{%s}",
      d.day, semanas[d.wday], meses[d.month], tema[1], cor
    ))
  end

  imprime(dias[i], i)
  if dias[i + 1] then
    tex.sprint("\\separadordias")
    imprime(dias[i + 1], i + 1)
  end
  tex.sprint("\\clearpage")
end
