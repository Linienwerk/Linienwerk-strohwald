# CLAUDE.md

Website von **Strohwald Verpackungsentwicklung** (André Strohwald) unter
https://strohwald-verpackungsentwicklung.de. Beratungsangebot für
Verpackungsentwicklung bei Lebensmittelherstellern in Nord- und Mitteldeutschland.

## Stack

- Statisches HTML/CSS/JS ohne Build-Schritt, ohne Paketmanager, ohne Tests.
- Hosting: GitHub Pages (`CNAME` → `strohwald-verpackungsentwicklung.de`), DNS bei Strato.
- **Veröffentlicht wird der Branch `claude/linienwerk-strohwald-website-xan6l5`.** Änderungen
  gehen erst online, wenn sie dort landen (Deployment „pages build and deployment“, ca. 1 Minute).
- Lokale Vorschau: `python3 -m http.server` im Repo-Root.
- Schrift Inter liegt lokal unter `assets/fonts/` (variable Font, Latin-Subset, Lizenz OFL).
  Keine Google Fonts einbinden, sonst muss die Datenschutzerklärung angepasst werden.
- Externe Dienste: Calendly (Terminbuchung), Cloudflare Web Analytics
  (Beacon am Seitenende, außer auf der Visitenkarte).

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero, PPWR-Teaser, Erfolge, Leistungen, Prozess (4 Schritte), FAQ, CTA, Kontakt |
| `ueber-mich.html` | Lebenslauf, Ausbildung, berufliche Stationen |
| `leistungen.html` | Sechs Leistungen im Detail (Situation, Vorgehen, Ergebnis); Karten der Startseite verlinken auf die Anker |
| `ppwr.html` | Landingpage zur EU-Verpackungsverordnung mit Fristen-Zeitplan |
| `visitenkarte.html` | Digitale Visitenkarte, `noindex`, Ziel eines verteilten QR-Codes |
| `impressum.html`, `datenschutz.html` | Rechtstexte |
| `assets/style.css` | Einziges Stylesheet, Farben als CSS-Variablen in `:root` |
| `assets/nav.js` | Mobiles Menü (Toggle) |
| `assets/effects.js` | Header-Schatten beim Scrollen, Einblenden beim Scrollen, hochzählende Erfolgszahlen (respektiert „Bewegung reduzieren“) |
| `assets/andre-strohwald.vcf` | vCard mit eingebettetem Profilfoto (Base64) |
| `assets/visitenkarte.js` | Teilen-Button (schickt die vCard, sonst den Link) und QR-Dialog der Visitenkarte |
| `assets/images/qr-kontakt.svg` | QR-Code mit vCard-Text (ohne Foto); bei geänderten Kontaktdaten neu erzeugen |
| `assets/images/` | WebP-Fotos, `og-image.jpg` (1200×630), DMK-Logo |
| `sitemap.xml`, `robots.txt` | SEO; Visitenkarte bewusst nicht in der Sitemap |

## Konventionen

- **Sprache:** Deutsch, Leser werden gesiezt. Commit-Messages auf Deutsch im Imperativ
  („Ergänze …“, „Vereinheitliche …“).
- **Markenname:** immer „Strohwald Verpackungsentwicklung“. Der frühere Name
  „Linienwerk“ darf nirgends mehr auftauchen.
- **Cache-Busting:** `style.css?v=…` ist in jeder HTML-Datei eingebunden, `nav.js?v=…` und
  `effects.js?v=…` in Startseite, Über mich, Leistungen und PPWR. Bei Änderungen an CSS/JS den `v`-Wert
  in **allen** betroffenen Seiten gleich erhöhen.
- **Header/Footer** sind in jede Seite kopiert (keine Includes). Änderungen an
  Navigation, Footer oder `<head>` in allen Seiten nachziehen.
- Schrift mit `font-display: optional` und `<link rel="preload">` in jeder Seite (gegen Layout-Shift), nicht auf `swap` ändern.
- Farben nur über die Variablen in `:root` (`--accent`, `--bg`, `--text` …), keine neuen Hex-Werte.
  Farbwelt: Hellgrau (`--bg`), Tannengrün (`--accent`) für Buttons, Messing (`--brass`) für die
  kleinen Zeilen über Überschriften und den Textmarker; Hintergrund einfarbig, im Hero ein feines Raster.
- Neue indexierbare Seiten in `sitemap.xml` eintragen.

## Nicht ändern ohne Rücksprache

- **URL `visitenkarte.html`**: Ein bereits verteilter QR-Code zeigt darauf. Inhalte dürfen sich
  ändern, der Pfad nicht.
- Calendly-Link: `https://calendly.com/strohwald-verpackungsentwicklung/30min`
- LinkedIn-Link: `https://www.linkedin.com/in/andré-strohwald-752a7868`
- E-Mail: `andre@strohwald-verpackungsentwicklung.de`
- Kontaktadresse: Schulhausstrasse 21, 8600 Dübendorf, Schweiz
- Zahlen im Bereich „Erfolge“ (250 t Karton, +100 t CO₂, 90 % rPET, siebenstellige
  Einsparung) stammen vom Inhaber; keine Zahlen erfinden oder ergänzen.

## Offene Punkte (Stand September 2026)

- **DMK-Logo** auf `ueber-mich.html`: Nutzung von DMK freigegeben (Sept. 2026). DMK geht bis ca.
  Ende 2027 vollständig in Arla auf – dann Text auf „DMK (heute Arla)“ ändern und Logo prüfen.
- Es gibt keinen `main`-Branch, nur `claude/…`-Branches. Sinnvoll: `main` anlegen und unter
  *Settings → Pages* als Quelle einstellen.
