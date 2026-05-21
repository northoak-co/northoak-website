// Build-time sitemap generator. Walks `build/client/` for any `index.html`
// file (one per prerendered route in React Router v7 framework mode) and emits
// `build/client/sitemap.xml`. Run via package.json's `postbuild` hook so the
// sitemap always reflects what was actually shipped — no separate route list
// to keep in sync. The source `public/robots.txt` references the sitemap URL.

import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://northoak.co";
const BUILD_DIR = path.resolve("build/client");

async function findIndexHtml(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const results: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "assets" || entry.name.startsWith(".")) continue;
      results.push(...(await findIndexHtml(full)));
    } else if (entry.name === "index.html") {
      results.push(full);
    }
  }

  return results;
}

function htmlFileToUrlPath(file: string): string {
  const rel = path.relative(BUILD_DIR, path.dirname(file));
  return rel === "" ? "/" : `/${rel}`;
}

async function main() {
  const files = await findIndexHtml(BUILD_DIR);
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = files
    .map(htmlFileToUrlPath)
    .filter((p) => !p.startsWith("/__"))
    .sort();

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (urlPath) =>
        `  <url>\n    <loc>${SITE_URL}${urlPath === "/" ? "" : urlPath}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");

  const out = path.join(BUILD_DIR, "sitemap.xml");
  await writeFile(out, xml, "utf8");
  console.log(`Sitemap: wrote ${urls.length} URLs to ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
