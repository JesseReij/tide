# TIDE huisstijl

Source: handover note "TIDE: online visitekaartjes, stijlen en huisstijl", 7 October 2026.
Use `tokens.css`, `wave.svg` and `fonts/` from this folder. Do not copy colour values by hand.

## Colours

| Role | Token | Hex |
|---|---|---|
| Paper (background) | `--tide-paper` | #FAF6EF |
| Surface | `--tide-surface` / `--tide-surface-2` | #F2E9DA / #E9DFCD |
| Ink (headings, dark sections) | `--tide-ink` | #1C1814 |
| Text | `--tide-text` | #5E564A |
| Labels | `--tide-label` | #8E8474 |
| Accent terracotta | `--tide-accent` | #C1622F |

**Open point:** the website and the Lijn410 and Peet posts use a second set: cream #F5F0E4, ink #15212C, terracotta #C9552F, and a dark theme with accent #E1794C. We use set A (above) until Jesse and Sidney choose one. When they choose, change only `tokens.css`.

## Fonts

- **Bebas Neue** for headings
- **Work Sans** for body text
- **IBM Plex Mono** for kickers and labels (small, uppercase, letter-spaced)
- Only where needed: Caveat (handwriting in stories), Fraunces Italic (Springtij label). These are not in `fonts/` yet.

## The wave (brand mark)

The `wave-underline` under the TIDE wordmark.

```
viewBox 0 0 400 34
M0,16 C33,4 67,4 100,16 C133,28 167,28 200,16 C233,4 267,4 300,16 C333,28 367,28 400,16
stroke #C1622F, width 6, round caps
draws in 1.3 s, cubic-bezier(.4,0,.2,1)
```

- Make the width a multiple of half a period, or you get a hook at the end.
- **Flowing wave:** a path two periods wider than visible, inside a clipPath, moves one period and repeats.
- Fixed places: TIDE with the wave top left, the wave as a progress line, a terracotta "getij" band with wavy edges as a transition, and an end card with the wave.

## Formats

- Instagram feed: **4:5 (1080x1350)**. The grid crops to 3:4, so keep margins at the sides.
- Stories and reels: 9:16 (1080x1920), content between y 236 and about 1560.

## Writing style (Dutch, B2 level)

- No dashes (gedachtestreepjes) and no semicolons.
- No lists of three at the end of a sentence.
- Never use: bovendien, daarnaast, cruciaal, naadloos, ecosysteem, beleving.
- No warm-up. The first sentence is the message.
- Mix short and medium-length sentences. Be concrete and active.
