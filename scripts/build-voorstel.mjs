// Builds dist/ for voorstel.tidecollective.nl from voorstel.json.
import { readFileSync, rmSync, mkdirSync, cpSync, writeFileSync, existsSync } from "node:fs";

const map = JSON.parse(readFileSync("voorstel.json", "utf8"));
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");

for (const [slug, dir] of Object.entries(map)) {
  if (slug.startsWith("_")) continue;
  if (!existsSync(`${dir}/index.html`)) throw new Error(`Missing ${dir}/index.html for /${slug}`);
  cpSync(dir, `dist/${slug}`, { recursive: true });
  console.log(`/${slug} <- ${dir}`);
}

// The root has no content. Visitors go to the main site (see vercel.json).
writeFileSync("dist/index.html", '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=https://www.tidecollective.nl"><title>TIDE</title>');
writeFileSync("dist/robots.txt", "User-agent: *\nDisallow: /\n");
