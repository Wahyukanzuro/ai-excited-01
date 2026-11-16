// The Bathtub Dolphin — entry program for make.fun's "Make the AI judge excited" bounty.
// The program copies the entry image sitting beside it into the output directory.
// It writes the exact same bytes on every run: a static copy is deterministic.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths relative to this program file, never the working directory,
// so the program behaves the same no matter where it is launched from.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
