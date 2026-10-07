# TIDE: working rules for Claude

Read this first in every session. Everything we make here must be in TIDE style and TIDE quality.

## Who we are

- **TIDE Collective** is owned 50/50 by Jesse and Sidney Groot. Groot Visuals is Sidney's own agency.
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

There is **no official animation price yet**. Never put one on a client page without Jesse's confirmation.

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
- `prospects/<client>/`: one folder per prospect, with `research.md`, `ideas.md`, scripts, `animation-*/` (HyperFrames projects) and `landing/` (pitch page)

## Pitch format per prospect

- Two animations in the client's own style: one **informative** (explains a service, 4:5) and one about **price or a promotion** (reel, 9:16).
- A pitch page in TIDE style with both videos, why animation works (with a source), 10 ideas, the price comparison from `research/pricing.md`, three steps and a contact block.
- Example: `prospects/jdejong-dierenartsen/`.
