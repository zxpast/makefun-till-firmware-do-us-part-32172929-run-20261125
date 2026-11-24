import { mkdirSync, writeFileSync } from "node:fs";

// Till Firmware Do Us Part — one-line robot wedding vow.
// Deterministic, stdlib only, no network. Writes exactly one line
// (137 chars, no trailing newline) to /output/entry.txt.
// Revision: entry text is built once in buildLine() so the written
// bytes are provably the single constant below, nothing appended.
function buildLine(): string {
  return "I vow to share my charger, my updates, and my 41,000 hours of uptime with you, and to die at 2% battery before I ever let yours reach 1%.";
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", buildLine(), "utf8");
