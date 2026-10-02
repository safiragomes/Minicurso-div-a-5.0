# Wrapped 2026 — minicurso &lt;div&gt;a

Página web (desktop) estilo "Wrapped" (resumo do ano), com a identidade do &lt;div&gt;a. Código simples (HTML + CSS básico): `index.html` + `style.css`.

## Fontes
Google Fonts: `Bricolage Grotesque` (pesos 700/800, para h1/h2/h3) e `DM Sans` (pesos 400/500/700, para o corpo do texto).
```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```
```css
body { font-family: "DM Sans", sans-serif; }
h1, h2, h3 { font-family: "Bricolage Grotesque", sans-serif; }
```

## Paleta de cores
| Cor | Hex | Uso |
|---|---|---|
| rosa | `#ff6ba8` | botão principal, card "Minha personalidade", badge 01 |
| rosa escuro (links) | `#e12562` | cor dos links na navbar/rodapé |
| laranja | `#ff6419` | destaque "2026", hover de links/botões, títulos de seção (h2), card "Minha era" |
| verde | `#b4fa64` | tag "VOCÊ EM REVISÃO", auréola da foto |
| light | `#fff5fa` | fundo da página, texto sobre fundos escuros |
| dark | `#131313` | texto padrão, cards de músicas/nossa equipe |
| rosa claro (cards) | `#ffd6e8` | fundo dos cards de música e de "Nossa equipe" (hover `#ffc2dc`) |

Navbar e rodapé usam fundo branco (`white`), diferente da paleta rosa/verde/laranja do conteúdo.

## 1. Navbar (`.navbar`)
- `display:flex; justify-content:space-between; align-items:center; padding:0 50px; background:white`
- Logo: `<img id="logo">` com `width:10vh` (ícone simples, `assets/logo.png`)
- `.links`: `display:flex; gap:40px; font-size:16px; align-items:center`
- Links (`a`): `color:#e12562`, hover `color:#ff6419`, `text-decoration:none`
- Itens: Início, Nossa equipe, Minhas músicas, Sobre mim, Minha era (âncoras `#id-da-secao`)

## 2. Início (`#inicio.main`)
- Seção: `display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:48px; max-width:1240px; margin:0 auto; padding:clamp(48px,8vw,100px) clamp(20px,5vw,60px)`
- Coluna de texto (`.text`): `flex:1 1 440px; display:flex; flex-direction:column; align-items:flex-start; gap:24px`
  - `.tag` ("VOCÊ EM REVISÃO"): fundo `#b4fa64`, texto `#131313`, `font-weight:700; font-size:14px; padding:6px 14px; border-radius:30px; letter-spacing:.04em`
  - `h1`: vira coluna (`display:flex; flex-direction:column; gap:0`), `font-size:clamp(48px,7vw,88px); font-weight:800; line-height:.95; letter-spacing:-.03em`
    - Logo dentro do título (`.title-logo`): `logo2.png`, `height:2em`
    - Texto "Wrapped 2026" (`.title-text`): `font-size:1em`; o "2026" (`.year`) fica `color:#ff6419`
  - Parágrafo (`font-size:20px; line-height:1.5; max-width:480px`): fala sobre o &lt;div&gt;a (não mais sobre uma pessoa) — "Feito por mulheres e para mulheres, o &lt;div&gt;a é uma comunidade de apoio, troca de experiências e crescimento na área de tecnologia."
  - Botão "Ver meu Wrapped →" (`.button`): fundo `#ff6ba8`, texto `#131313`, `padding:16px 36px; border-radius:30px; font-size:18px; font-weight:700`, hover fundo `#ff6419`
- Foto (`.photo-wrapper`, 380×380px, `position:relative`):
  - Auréola: `::before` com `inset:-14px; border-radius:50%; background:#b4fa64` (atrás de tudo)
  - Placeholder (`.photo-placeholder`): mesmo tamanho/posição, fundo `#ffd6e8`, centraliza texto "📷 Sua foto aqui" — fica visível só se a foto (`#picture`) não carregar (`onerror="this.style.display='none'"`); hoje aponta para `./assets/equipe.JPG`
  - `#picture`: `position:absolute; inset:0; border-radius:50%; object-fit:cover`
  - Selo "oi, somos o &lt;div&gt;a ✨" (`.badge`): `position:absolute; right:-10px; bottom:24px`, fundo `#ff6419`, texto `#fff5fa`, `padding:10px 18px; border-radius:30px; transform:rotate(-6deg)`

## 3. Nossa equipe (`#nossa-equipe.team`)
- Seção: `max-width:1240px; margin:0 auto; padding:50px; text-align:center`
- `.team-cards`: `display:flex; justify-content:center; flex-wrap:nowrap; gap:20px` (sempre uma linha só — 6 pessoas)
- `.team-card`: `flex:1 1 0; max-width:180px; padding:20px; background:#ffd6e8; border-radius:20px` (hover `#ffc2dc`)
  - foto: `width/height:120px; border-radius:50%; object-fit:cover`
  - nome (`h3`): `margin:10px 0 5px`; cargo em `p`
- Pessoas: Beatriz Pedrosa (Analista de software), Sofia Avallone (Gerente de software), Julia Andrade (Gerente de CS), Safira Moraes (Desenvolvedora de software), Maysa Campelo (Desenvolvedora de software), Sofia Mendonça (Analista de Dados)

## 4. Minhas músicas (`#musicas.music`)
- Seção: `padding:50px; text-align:center`; h2 `color:#ff6419; font-size:35px`
- `.cards`: `display:flex; justify-content:center; flex-wrap:wrap; gap:25px`
- `.card` (×3): `width:250px; padding:20px; background:#ffd6e8; border-radius:20px` (hover `#ffc2dc`)
  - `.number` ("01/02/03"): `font-size:35px; font-weight:bold; color:#ff6419`
  - capa: `img` `width/height:200px; border-radius:10px`
  - `.card-button` ("▶ Ouvir no YouTube"): fundo `#ff6419`, texto branco, `padding:10px 18px; border-radius:20px`, hover fundo `#ff6ba8`, link real pro YouTube (`target="_blank"`)
  - Músicas atuais: 01 "Style" — Taylor Swift (`TaylorSwift.png`), 02 "Deja vu" — Olivia Rodrigo (`oliviaRodrigo.jpg`), 03 "Espresso" — Sabrina Carpenter (`sabrinaCarpenter.jpg`)

## 5. Sobre mim (`#sobre-mim.about`)
- Seção: `padding:50px; text-align:center`; h2 `color:#ff6419; font-size:35px`
- `.about-cards`: `display:flex; justify-content:center; gap:25px; flex-wrap:wrap`
- **Card "Minha personalidade"** (`.personality`, fundo `#ff6ba8`, `width:280px; padding:25px; border-radius:20px; text-align:left`): 3× `.trait` (café ☕ 70%, código 💻 20%, sanidade 🫠 10%), cada um:
  - `.trait` (sub-card branco): fundo `#fff5fa; border-radius:14px; padding:12px 16px; margin-bottom:12px`
  - `.trait-label`: `display:flex; justify-content:space-between; font-weight:bold`
  - `.trait-bar`: barra de fundo `height:10px; border-radius:10px; background:#f3dbe6; overflow:hidden`
  - `.trait-fill`: preenchimento proporcional — café `width:70%; background:#ff6419`, código `width:20%; background:#ff6ba8`, sanidade `width:10%; background:#131313`
- **Card "Top 3 coisas que amo"** (`.favorites`, fundo `#b4fa64`, mesmas dimensões): 3× `.love` (linha com selo numerado + texto):
  - `.love`: `display:flex; align-items:center; gap:14px`, fundo `#fff5fa; border-radius:14px; padding:12px 16px; margin-bottom:12px; font-weight:bold`
  - `.love-badge`: círculo `40×40px; border-radius:50%; display:grid; place-items:center`
  - badge 01 (música 🎧): fundo `#ff6ba8`, texto `#131313`
  - badge 02 (praia 🌊): fundo `#ff6419`, texto `#fff5fa`
  - badge 03 (tecnologia 💻): fundo `#131313`, texto `#fff5fa`

## 6. Minha era atual (`#minha-era.era`)
- Seção: `padding:50px; text-align:center`; h2 `color:#ff6419; font-size:35px`
- `.era-card`: fundo `#ff6419`, texto branco, `display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:30px; max-width:900px; margin:auto; padding:40px; border-radius:20px; text-align:left`
  - `.era-text` (`flex:1 1 320px`): parágrafo "em 2026 eu estou na era de..." (`font-size:18px; margin-bottom:8px`) + `h3` "✨ aprender frontend ✨" (`font-size:40px; font-weight:800; line-height:1.1`)
  - `.studies` (`flex:0 1 280px`): card claro — fundo `#fff5fa`, texto `#131313`, `padding:20px 24px; border-radius:15px`; `h3` "O que estou estudando" (`font-size:18px; margin-bottom:12px`); itens `✅ HTML`, `✅ CSS` (`font-size:18px; margin:8px 0`)

## 7. Rodapé (`footer`)
- `display:flex; justify-content:center; align-items:center; height:10vh; background:white; color:#131313` (mesma cor da navbar)
- Texto: `© 2026 <div>a Wrapped. Feito com 🩷 no minicurso <div>a. Siga a gente no [Instagram](https://www.instagram.com/diva.citi/).` — link usa a cor padrão de link (`#e12562`/hover `#ff6419`)

## Imagens em ./assets
- `logo.png` — ícone simples, usado na navbar (`width:10vh`)
- `logo2.png` — logo com o nome &lt;div&gt;a por extenso
- `equipe.JPG` — foto no círculo da seção Início (se não carregar, mostra o placeholder "📷 Sua foto aqui" via `onerror`)
- Fotos da equipe (seção "Nossa equipe"): `bia.JPG`, `sofiadev.JPG`, `julia.JPG`, `safira.JPG`, `maysa.JPG`, `sofia.JPG`
- Capas das músicas (seção "Minhas músicas"): `TaylorSwift.png`, `oliviaRodrigo.jpg`, `sabrinaCarpenter.jpg`
