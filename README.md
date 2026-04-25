# Kryzon · Site Institucional

Site institucional da **Kryzon** — Flow Tech: BI, Automação e Operação.

🌐 [kryzon.com.br](https://kryzon.com.br)

## Stack

- HTML estático + React (via Babel standalone, sem build step)
- CSS puro com `clamp()` + viewport units (responsivo viewport-fit)
- Sem dependências de Node — basta servir a pasta como estático

## Estrutura

```
.
├── index.html              # Página principal
├── app.jsx                 # App React + Hero + Nav
├── tweaks-panel.jsx        # Painel de ajustes (modo dev)
├── v2-fit.css              # Sistema viewport-fit
├── components/
│   ├── isometric.jsx       # Ilustrações isométricas
│   ├── dashboard.jsx       # Dashboard ao vivo (hero)
│   ├── flow-diagram.jsx    # Diagrama de fluxo
│   └── sections.jsx        # Pillars · Cases · CTA · Footer
└── assets/                 # Logos e imagens
```

## Desenvolvimento local

Não precisa de build. Basta servir a pasta com qualquer servidor estático:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .

# PHP
php -S localhost:8000
```

Acesse `http://localhost:8000`.

## Deploy

Servido como **static site** no EasyPanel (Nginx).

- Branch principal: `main`
- Deploy automático a cada push

## Tweaks

O site tem um **modo dev** com painel de ajustes ao vivo (cores, fontes, layout). Para ativar, abra o site e use o toggle "Tweaks" no canto superior direito (visível apenas em ambiente de preview).

---

© Kryzon — Flow Tech
