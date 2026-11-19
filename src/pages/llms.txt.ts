import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/site';

export const GET: APIRoute = () => new Response(`# Floria

Floria è un brand artigianale ispirato al giardino e all'orto botanico. L'artigiana crea borse, borselli, guanti, shopper, giacchetti e grembiuli.

Il nome dell'artigiana, il luogo in cui opera e i recapiti devono ancora essere comunicati. Le creazioni, gli eventi e le immagini presenti nella demo sono esempi da verificare, non informazioni definitive.

Le informazioni e gli acquisti saranno gestiti tramite contatto diretto via email o WhatsApp quando i recapiti saranno disponibili. Il sito non è un negozio online.

- Home: ${absoluteUrl('/')}
- Collezione: ${absoluteUrl('/collezione/')}
- Eventi e sfilate: ${absoluteUrl('/eventi/')}
- Chi sono: ${absoluteUrl('/chi-sono/')}
- Contatti: ${absoluteUrl('/contatti/')}
- Privacy: ${absoluteUrl('/privacy/')}
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
