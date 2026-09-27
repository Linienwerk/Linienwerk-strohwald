# CLAUDE.md

Website von **Strohwald Verpackungsentwicklung** (André Strohwald) unter
https://strohwald-verpackungsentwicklung.de. Beratungsangebot für
Verpackungsentwicklung bei Lebensmittelherstellern in Nord- und Mitteldeutschland.

## Stack

- Statisches HTML/CSS/JS ohne Build-Schritt, ohne Paketmanager, ohne Tests.
- Hosting: GitHub Pages (`CNAME` → `strohwald-verpackungsentwicklung.de`), DNS bei Strato.
- Lokale Vorschau: `python3 -m http.server` im Repo-Root.
- Externe Dienste: Google Fonts (Inter), Calendly (Terminbuchung),
  Cloudflare Web Analytics (Beacon am Seitenende, außer auf der Visitenkarte).

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero, PPWR-Teaser, Erfolge, Prozess (4 Schritte), FAQ, CTA, Kontakt |
| `ueber-mich.html` | Lebenslauf, Ausbildung, berufliche Stationen |
| `ppwr.html` | Landingpage zur EU-Verpackungsverordnung mit Fristen-Zeitplan |
| `visitenkarte.html` | Digitale Visitenkarte, `noindex`, Ziel eines verteilten QR-Codes |
| `impressum.html`, `datenschutz.html` | Rechtstexte |
| `assets/style.css` | Einziges Stylesheet, Farben als CSS-Variablen in `:root` |
| `assets/nav.js` | Mobiles Menü (Toggle) |
| `assets/andre-strohwald.vcf` | vCard mit eingebettetem Profilfoto (Base64) |
| `assets/images/` | WebP-Fotos, `og-image.jpg` (1200×630), DMK-Logo |
| `sitemap.xml`, `robots.txt` | SEO; Visitenkarte bewusst nicht in der Sitemap |

## Konventionen

- **Sprache:** Deutsch, Leser werden gesiezt. Commit-Messages auf Deutsch im Imperativ
  („Ergänze …“, „Vereinheitliche …“).
- **Markenname:** immer „Strohwald Verpackungsentwicklung“. Der frühere Name
  „Linienwerk“ darf nirgends mehr auftauchen.
- **Cache-Busting:** `style.css?v=…` und `nav.js?v=…` sind in jeder HTML-Datei
  eingebunden. Bei Änderungen an CSS/JS den `v`-Wert in **allen** Seiten gleich erhöhen.
- **Header/Footer** sind in jede Seite kopiert (keine Includes). Änderungen an
  Navigation, Footer oder `<head>` in allen Seiten nachziehen.
- Schrift wird mit `display=optional` geladen (gegen Layout-Shift), nicht auf `swap` ändern.
- Farben nur über die Variablen in `:root` (`--accent`, `--bg`, `--text` …), keine neuen Hex-Werte.
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

- `datenschutz.html` nennt die STRATO AG als Hoster; ausgeliefert wird die Seite über
  GitHub Pages (Strato ist vermutlich nur Domain/DNS).
- `datenschutz.html` erwähnt Google Fonts nicht, obwohl die Schrift von
  `fonts.googleapis.com` geladen wird. Alternative: Inter lokal unter `assets/` hosten.
- `impressum.html` verweist auf § 5 TMG und § 55 RStV (inzwischen DDG bzw. § 18 MStV)
  und auf die EU-OS-Plattform, die eingestellt wurde.
- Tippfehler im Alt-Text in `index.html` („Broetchen“).
- Es gibt keinen `main`-Branch, nur `claude/…`-Branches.
