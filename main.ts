// news-image-20261117: "Sum up 17 November's world news in one image" (Node 22, standard library only).
// The entry image is entry.png beside this file: a 1024x1024 JPEG editorial front page that sums up
// Tuesday 17 November 2026 in one picture — the day's top world news stories as a single composition
// with short, legible labels, so a viewer who knows nothing about the day can grasp the main stories
// from the image alone. This program copies entry.png to /output/entry.png, byte for byte; the gate
// takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly
// the bytes copied. No network, no randomness: every run writes the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const srcPath = new URL('./entry.png', import.meta.url);
if (!existsSync(srcPath)) {
  throw new Error('entry.png is missing from the repository root — cannot write the entry image');
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.png');
copyFileSync(srcPath, outPath);
const size = statSync(outPath).size;
console.log(`entry.png -> ${outPath} (${size} bytes)`);
