# TIDE: working rules for Claude

Read this first in every session. Everything we make here must be in TIDE style and TIDE quality.

## Who we are

- **TIDE Collective** is owned 50/50 by Jesse and Sidney Groot. Groot Visuals is Sidney's own agency.
- Based in **Egmond aan den Hoef**. Being local is a selling point: mention it in pitches for the region.
- Website: **tidecollective.nl**. Never use tide.nl, which belongs to someone else.
- Write the name as **TIDE** (capitals).
- Rule for clients: one page without a CMS is TIDE. Anything with a menu or a CMS is Groot Visuals.
- Rule for all work: **Claude prepares, TIDE approves.** Nothing goes to a client or goes live without Jesse or Sidney saying yes.

## House style

The house style lives in `brand/tide/`. Read `brand/tide/README.md` before you design anything.

- Use `brand/tide/tokens.css` and `brand/tide/fonts/`. Do not invent colours or fonts.
- Bebas Neue for headings, Work Sans for text, IBM Plex Mono for kickers and labels.
- Terracotta #C1622F is the only accent. The wave (`brand/tide/wave.svg`) is our mark. Use it under the TIDE wordmark, as a divider or as a progress line.
- **Client work is the exception.** An animation made *for* a client uses the client's own colours, fonts and tone. The page or post around it (a pitch page, a TIDE post about the case) is in TIDE style.

## Writing style (Dutch, B2)

- No dashes and no semicolons. No lists of three at the end of a sentence.
- Never use: bovendien, daarnaast, cruciaal, naadloos, ecosysteem, beleving.
- The first sentence is the message. Short and medium sentences. Concrete and active.
- Client-facing text is in Dutch. Use "u" for healthcare, schools and older audiences unless the client uses "je".
- Do not make up facts, prices or claims. Only use what is on the client's site or in a source we can link. Mark anything unsure with a yellow placeholder.

## Public prices (tidecollective.nl/diensten)

| Item | Price |
|---|---|
| Basis | EUR 650 once |
| Getij | EUR 195/month |
| Stroming | EUR 595/month (EUR 250 off Basis) |
| Springtij | EUR 1,995/month (EUR 450 off Basis) |
| Basisshoot | EUR 250 (+ EUR 150 per extra hour) |
| Interview | EUR 150 |
| Losse visual | EUR 45 |
| Vormgevingsuur | EUR 75 |
| Bedrijfslogo | EUR 120 |
| Online visitekaartje | EUR 50/month |
| Landingspagina | EUR 220 |
| Nieuwsbrief | EUR 220/month |

**Animation (set by Jesse, 7 Oct 2026):** EUR 300 one-time start, then EUR 95 per animation, or a bundle of 10 animations for EUR 750 (we assume the start is included). All excl. BTW.
We read the start as: we set up the client's style and make the first animation. Still to confirm with Jesse: is the first animation included in the EUR 300, and what is the maximum length for EUR 95?

### Package contents (from tidecollective.nl, 7 Oct 2026)

Every client starts with Basis. It unlocks the three monthly packages. Each package includes everything from the one before. Scale up or down per month, no yearly contract.

- **Basis (EUR 650 once):** 1 hour shoot on location plus 1 hour editing. Strategy document with interview, competitor analysis and positioning. Four posts ready to publish, with text and hashtags. Example: https://kaashuis-tromp-rapport1.vercel.app/
- **Getij (EUR 195/month):** 6 posts per month with design and text. Fixed content calendar, client approves. 15-minute check-in per month. No shoot (book separately).
- **Stroming (EUR 595/month, most chosen):** Getij plus 8 to 10 posts per month, a 2-hour shoot every quarter with editing, monthly evaluation, 3 design hours.
- **Springtij (EUR 1,995/month):** Stroming plus 10 to 12 posts per month, a 2-hour shoot every month, 2 to 4 reels plus a newsletter and a landing page per month, a dedicated WhatsApp line.

Address: Lamoraalweg 57, Egmond aan den Hoef. Email: **hallo@tidecollective.nl** (not hello@). Jesse's phone: 06 10 32 16 99.

## Quality checklist (do this before you show anything)

1. **Render and look.** After every HyperFrames render, take frames with ffmpeg and look at them. Check for stray elements, cut-off text and timing.
2. **Pages:** take Playwright screenshots at 1280 px and 390 px. There must be no horizontal scroll (`scrollWidth` equals the viewport width).
3. **Copy:** check the writing rules above, especially dashes, semicolons and banned words.
4. **Facts:** every number has a source, or it is a placeholder.
5. **Pitch pages** about a real company say clearly that they are a proposal from TIDE, have `noindex`, and are shared only by private link.

## Technical notes for this environment

- CDNs such as cdn.jsdelivr.net and most company websites are blocked by the network policy. Install libraries from npm and load them locally (for example `gsap.min.js` next to `index.html`).
- HyperFrames render:
  ```
  export HYPERFRAMES_BROWSER_PATH=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell HYPERFRAMES_SKIP_SKILLS=1
  npx hyperframes@0.8.139 render -o renders/<name>.mp4
  ```
- Vercel team: `jmreij-7163s-projects`. Jesse usually deploys himself with `npx vercel --prod`. Ask before deploying.

## Repo layout

- `brand/tide/`: TIDE house style (tokens, fonts, wave)
- `research/`: research we can reuse (for example `pricing.md`, animation prices in NL)
- `voorstel.json` + `scripts/build-voorstel.mjs` + `vercel.json`: the site voorstel.tidecollective.nl. Add a line to `voorstel.json` to put a new pitch online at `/<slug>/`. Vercel project: `tide-voorstel`. Pages are also shown on tidecollective.nl/<slug> through a route rule in Vercel project `tide-v1` (Routes). For a new slug, add a rewrite there too: `^/<slug>/?(.*)$` to `https://tide-voorstel.vercel.app/<slug>/$1`. Ask Jesse before you promote route changes, because that changes the live main site.
- `prospects/<client>/`: one folder per prospect, with `research.md`, `ideas.md`, scripts, `animation-*/` (HyperFrames projects) and `landing/` (pitch page)

## Pitch format per prospect

- Two animations in the client's own style: one **informative** (explains a service, 4:5) and one about **price or a promotion** (reel, 9:16).
- A pitch page in TIDE style with both videos, why animation works (with a source), 10 ideas, the price comparison from `research/pricing.md`, three steps and a contact block.
- Example: `prospects/jdejong-dierenartsen/`.
