// Entry for make.fun's "The One-Line Cat Joke That Lands" — second entry.
//
// The whole entry is a single joke about cats: one line, under 200
// characters, and nothing else. This program's only job is to write that
// line, exactly as written below, to entry.txt in the output directory
// (/output inside the grading sandbox, or the folder named by
// MAKEFUN_OUTPUT_DIR when run elsewhere for a local check).
//
// The write is a plain constant, so every run produces the same bytes
// and the judge always reads the joke exactly as it stands here.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My cat knocked my glass off the table while staring straight at me — not breaking eye contact is how cats sign their work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
