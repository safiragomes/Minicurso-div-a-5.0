# Roteiro de desenvolvimento — Wrapped 2026 (versão enxuta)

Roteiro para conduzir o minicurso construindo a página ao vivo. Baseado no `roteiro-minicurso - v2.pdf`, adaptado ao `index.html` e `style.css` da branch `css-enxuto` (3 seções + rodapé, ~220 linhas de CSS).

## O que mudou em relação ao roteiro v2

| v2 | Esta versão |
|---|---|
| 7 etapas (head, navbar, início, equipe, músicas, sobre mim, minha era, rodapé) | 5 etapas (head, navbar, início, cards, rodapé) |
| `.team-card` e `.card` separados | uma só classe `.card` reaproveitada na equipe e nas músicas |
| `h2` e `padding` repetidos em cada seção | regra única `section` / `section h2` |
| cores escritas à mão ~40 vezes | variáveis `--laranja`, `--rosa` etc. no `:root` |
| anel da foto com `::before` e placeholder | foto com `border` simples |

Pontos que a v2 deixava a desejar e que este roteiro corrige:
- Mostrava o HTML inteiro de cada seção de uma vez. Aqui o HTML sai em blocos pequenos, cada um seguido de um resultado visível.
- A seção "Sobre mim" tinha 3 barras de progresso com largura por classe (`.cafe`, `.codigo`), que consumiam tempo sem ensinar conceito novo.
- A página 5 do PDF está em branco (provável quebra de página sobrando).
- Os conceitos de CSS (box model, flex, seletores) apareciam sem nome. Aqui cada etapa diz qual conceito está sendo ensinado.

## Preparação (antes da aula)
- Pasta `assets/` pronta (logos, fotos da equipe, capas das músicas).
- Pasta de trabalho com `index.html` e `style.css` vazios, e o Live Server ligado.
- Deixar o projeto pronto em outra janela como referência ("gabarito").
- Falar de `id` vs `class` logo no início: `id` é único (`#logo`, `#picture`), `class` é reutilizável (`.card`).

---

## Etapa 0 — O `<head>` e o esqueleto

**Tags novas:** `<!DOCTYPE html>`, `html`, `head`, `meta`, `title`, `link`

**HTML**
1. Esqueleto: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
2. Dentro do `<head>`: `meta charset`, `meta viewport`, `title`.
3. `<link>` da fonte do Google Fonts e `<link>` do `style.css`.

**CSS** (o primeiro contato com o arquivo)
```css
:root { --laranja: #ff6419; --rosa: #ff6ba8; --rosa-claro: #ffd6e8;
        --rosa-hover: #ffc2dc; --verde: #b4fa64; --fundo: #fff5fa; --texto: #131313; }
body { font-family: "DM Sans", sans-serif; margin: 0; background-color: var(--fundo); color: var(--texto); }
h1, h2, h3 { font-family: "Bricolage Grotesque", sans-serif; }
```

**Conceitos:** seletor de tag, propriedade e valor, variáveis CSS.
**Momento para a turma:** troque `--fundo` e mostre a página inteira mudando.

---

## Etapa 1 — Navbar

**Tags novas:** `body`, `nav`, `img`, `div`, `a` (opcional: `ul`, `li`)

**HTML**
1. `<nav class="navbar">` com `<img id="logo">` e `<div class="links">`.
2. Três `<a href="#...">`: Início, Nossa equipe, Minhas músicas.

**CSS:** `.navbar`, `#logo`, `.links`, `a`, `a:hover`

**Conceitos:** `display: flex`, `justify-content: space-between`, `align-items`, `gap`, `:hover`, diferença entre `.classe` e `#id`.
**Armadilha:** `a` estiliza todos os links da página, inclusive o botão e o rodapé. Avise antes.

---

## Etapa 2 — Seção "Início"

**Tags novas:** `section`, `h1`, `p`, `span`

**HTML (em 3 blocos pequenos)**
1. `<section id="inicio" class="main">` com `.text` e `.photo-wrapper`.
2. Dentro de `.text`: `span.tag`, `h1` (logo + "Wrapped 2026"), `p` e `a.button` ("Nos conheça", âncora para `#nossa-equipe`).
3. Dentro de `.photo-wrapper`: `img#picture` e `span.badge`.

**CSS**
1. Regra compartilhada `section { padding: 50px; text-align: center; }` (volta a aparecer nas próximas seções).
2. `.main` e `.text` — flex lado a lado, depois flex em coluna. `min-height: 88vh` faz o início ocupar a tela e "Nossa equipe" só aparecer ao rolar.
3. `.tag` e `.button` — pílulas (`border-radius: 30px`).
4. `.text h1` e `.year` — seletor descendente, cor no `span`.
5. `#picture` — foto circular (`border-radius: 50%`, `object-fit: cover`, `border`).
6. `.photo-wrapper` e `.badge` — `position: relative` / `absolute`, `transform: rotate`.

**Conceitos:** flexbox em linha e em coluna, `padding`/`margin`/`border`, seletor descendente, `position`.
**Armadilha:** no `h1` com flex em coluna, falta `align-items: flex-start` e a logo se estica. Faça o erro de propósito e mostre a correção, porque é um erro que elas vão cometer.

---

## Etapa 3 — Cards: músicas e equipe (a etapa principal)

**Tags novas:** `h2`, `h3` (sem outras)

**HTML**
1. `<section id="musicas">` com `h2` e `div.cards`.
2. Um único `.card` (número, imagem, `h3`, `p`, link). Mostre o resultado.
3. Copiar o card duas vezes e trocar o conteúdo, para reforçar a ideia de **classe reutilizável**.
4. `<section id="nossa-equipe" class="team">` reaproveitando `.cards` e `.card`.

**CSS**
1. `section h2` (cor e tamanho — já vale para as duas seções).
2. `.cards` — `flex-wrap: wrap` e `gap`.
3. `.card` e `.card:hover`.
4. `.number` e `.card-button` com `:hover`.
5. `.team .card` e `.team .card img` — a mesma classe com visual diferente via seletor descendente.

**Conceitos:** reaproveitamento de classes, `flex-wrap`, seletor descendente, `width` em `%`.
**Momento para a turma:** elas montam a seção da equipe sozinhas, copiando o padrão das músicas.

---

## Etapa 4 — Rodapé

**Tags novas:** `footer`

**HTML:** `<footer>` com `<p>` e o link do Instagram (`target="_blank"`).
**CSS:** `footer` como seletor de tag, com flex para centralizar.
**Fechamento:** voltar ao topo e percorrer a página inteira clicando na navbar, para mostrar as âncoras funcionando.

---

## Tags cobertas

`html`, `head`, `meta`, `title`, `link`, `body`, `nav`, `section`, `footer`, `h1`, `h2`, `h3`, `p`, `a`, `img`, `div`, `span`.

**Opcionais** (acrescentam pouco CSS): trocar os links da navbar por `<ul><li>` (+3 linhas de CSS), envolver `nav` em `<header>` e o conteúdo em `<main>`, usar `<strong>` no parágrafo de abertura.
**Não cobertas:** `form`, `button`, `table`, `video` — ficam para um módulo seguinte.

## Ordem de CSS (para não se perder ao digitar ao vivo)
1. `:root`, `body`, `h1-h3`
2. `.navbar`, `#logo`, `.links`, `a`, `a:hover`
3. `section`, `section h2`
4. `.main`, `.text`, `.tag`, `.text h1`, `.year`, `.text p`, `.button`
5. `.photo-wrapper`, `#picture`, `.badge`
6. `.cards`, `.card`, `.number`, `.card-button`
7. `.team .card`
8. `footer`

## Perguntas para fechar a aula
- Qual a diferença entre `id` e `class`?
- Onde mudar a cor laranja da página inteira? (resposta: `:root`)
- Por que o `.card` serve para músicas e equipe?
- O que acontece sem `flex-wrap: wrap` quando a tela é estreita?

## Se sobrar tempo
- Responsividade: `@media (max-width: 600px)`.
- Voltar com a seção "Sobre mim" como exercício para casa. O gabarito está em `main`.
