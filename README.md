# Floria

Vetrina statica Astro per un brand artigianale ispirato al giardino. Il sito è una **demo**: prodotti, date, eventi, illustrazioni e parti del racconto sono segnaposto e devono essere revisionati e approvati dalla cliente prima di qualsiasi pubblicazione. Non ci sono carrello, pagamenti, account, form o invio di dati.

## Avvio

Serve Node.js **>= 22.23.4** e npm compatibile con Astro (>= 9.6.5).

```sh
npm install
npm run astro -- dev --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
npm run preview
```

Il server di sviluppo indica l'URL locale all'avvio. Il build statico è generato in `dist/`. Il dominio canonico è configurato in `astro.config.mjs` e in `src/config/site.ts`.

Il workflow `.github/workflows/deploy.yml` pubblica un'anteprima GitHub Pages al push su `master`, usando `FLORIA_PREVIEW=true` per il percorso `/floria.it/` e i metadati `noindex`. Il build ordinario resta configurato per `https://floria.it`; il passaggio al dominio definitivo richiederà configurazione DNS e aggiornamento del workflow.

## Struttura

```text
src/
  assets/brand/       logo, immagine social e risorse del brand
  assets/products/    immagini delle creazioni
  assets/events/      immagini degli eventi
  components/         componenti Astro riutilizzabili
  config/site.ts      nome, dominio e contatti
  content/            prodotti ed eventi in JSON
  content.config.ts   schema e validazione delle collection
  layouts/            layout e metadati
  lib/content.ts      associazione immagini e URL
  pages/              pagine e percorsi statici
  styles/             stili e variabili di design
public/               favicon
docs/                 direzione visiva provvisoria
```

## Contenuti e immagini

I dati di `src/content/products.json` e `src/content/events.json` vengono validati dalle collection in `src/content.config.ts`. Ogni prodotto ha ID, slug, categoria, descrizioni, materiali, dimensioni, cura, disponibilità, varianti e prezzo opzionali, immagini, evidenza e data. Inserire solo informazioni confermate. Gli slug costituiscono gli URL: cambiarli dopo la pubblicazione richiede redirect. Il prezzo viene mostrato solo se presente.

Gli eventi hanno data, luogo, descrizione, immagini, link opzionale e `confirmed`. I quattro esempi hanno `confirmed: false`: non sono appuntamenti reali e non generano dati strutturati Event. Quando un evento è verificato, sostituire i segnaposto e impostare `confirmed: true`.

Per aggiungere fotografie locali, metterle nelle rispettive cartelle `src/assets/products/` o `src/assets/events/`, importarle in `src/lib/content.ts` e associare una chiave nel relativo oggetto. Usare la chiave e un testo alternativo descrittivo in `images` nei file JSON. La galleria accetta più immagini. Astro genera immagini responsive WebP; le illustrazioni `placeholder.svg` e i relativi PNG sono provvisorie. Sostituire anche il ritratto e l'illustrazione della home. Le pagine editoriali sono in `src/pages/`.

## Logo, favicon e immagine social

Il wordmark provvisorio è isolato in `src/components/BrandLogo.astro`, con varianti per fondi chiari e scuri. Aggiungere i file ufficiali in `src/assets/brand/` e sostituire il contenuto del componente mantenendone l'ingombro. Sostituire `public/favicon.svg` ed eventualmente rimuovere o aggiornare la vecchia `public/favicon.ico`. Per l'immagine Open Graph, importare un'immagine locale in `BaseLayout.astro` e usare `getImage` (1200 × 630 consigliato). Vedi anche `src/assets/brand/README.md` e `docs/design-direction.md`.

## Contatti e privacy

Impostare `email`, `whatsapp` e, se disponibile, `instagram` in `src/config/site.ts`. Lasciarli `null` finché non sono verificati. L'email deve essere un indirizzo valido; il numero WhatsApp deve contenere solo cifre con prefisso internazionale, per esempio `39` seguito dal numero effettivo, senza `+`, spazi o punteggiatura. Instagram deve essere un URL completo. Nessun link segnaposto viene generato.

In questa fase **non è previsto un form** né un provider esterno: non servono variabili d'ambiente. Completare e far verificare `src/pages/privacy.astro`, inclusi titolare, finalità, tempi e diritti, prima della pubblicazione; rivalutare l'informativa se si aggiungono servizi esterni.

## Navigazione e futura integrazione shop

La collezione è consultabile senza JavaScript tramite pagine statiche per categoria e ordinamento; JavaScript aggiunge filtri combinabili via query string e aggiornamenti senza ricaricamento. Galleria e cancello usano JavaScript vanilla; senza JS le immagini restano apribili e i contenuti sono accessibili. Il cancello compare solo sulla home, può essere saltato e memorizza una preferenza locale quando possibile.

I dati prodotti separano contenuto, categorie, varianti, prezzo e disponibilità dalla presentazione, così un futuro shop potrà sostituire la sorgente della collection con un CMS o un servizio e-commerce. L'integrazione richiederà verifica di identità e varianti, inventario, prezzi e valuta, URL, checkout, sicurezza e aspetti legali: nulla di questo è già implementato.
