# Ahoj — Pohostinství U Zvěřinů

React + Vite projekt pro tradiční pohostinství a zahrádku Ahoj v Žernovníku. Stejný vzhled a obsah jako původní návrh, rozdělený do React komponent. Bez backendu, API klíčů nebo vazby na přihlášení ChatGPT v samotné aplikaci.

## Vývoj

Vyžaduje Node.js 24+ a npm.

```sh
npm ci
npm run dev
```

Produkční sestavení a jeho místní náhled:

```sh
npm run build
npm run preview
```

`dist/` vzniká sestavením. Pro vývoj upravujte `src/`, nikoli vygenerované soubory.

## Struktura

- `src/App.jsx` — složení stránky a sdílený stav.
- `src/components/Header.jsx` — navigace a mobilní menu.
- `src/components/Menu.jsx` — nabídka a přepínač jídlo/nápoje.
- `src/components/OpeningHours.jsx` — sezónní otevírací doba.
- `src/components/Tabs.jsx` — přístupný přepínač včetně ovládání klávesnicí.
- `src/components/PhotoButton.jsx`, `PhotoDialog.jsx` — zvětšování fotografií.
- `src/components/Sections.jsx` — ostatní obsahové sekce.
- `src/styles.css` — vzhled a responzivita.
- `public/assets/` — fotografie z původního webu.
- `.github/workflows/deploy.yml` — automatické nasazení na GitHub Pages.

## GitHub Pages

1. Nahrajte obsah projektu do větve `main` svého repozitáře (včetně `.github/`, `package-lock.json` a `public/`). Nenahrávejte `node_modules/`.
2. V **Settings → Pages → Build and deployment → Source** vyberte **GitHub Actions**.
3. V **Actions → Deploy React site to GitHub Pages** spusťte **Run workflow**, pokud již nasazení neběží po pushi.
4. Po úspěšném nasazení se adresa webu objeví v **Settings → Pages** a v prostředí `github-pages`.

Relativní `base: './'` ve `vite.config.js` a relativní URL fotografií podporují projektovou adresu `/ahoj-zernovnik/` i vlastní doménu. Web používá odkazy na sekce, takže nepotřebuje přesměrování klientských tras ani speciální 404.html.

Soukromý repozitář vyžaduje pro Pages podporovaný placený tarif, například GitHub Pro. Publikovaný Pages web je obvykle veřejný, i když zdrojový repozitář zůstává soukromý. Tarif se tímto projektem nemění.

## Obsah

Obsah vychází z https://www.ahojz.cz/, načteného 29. 10. 2026. Před ostrým spuštěním ověřte ceny, dostupnost jídel, provozní dobu a práva k fotografiím.
