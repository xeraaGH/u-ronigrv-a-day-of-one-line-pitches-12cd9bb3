import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch: convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun. One sentence, plain words,
// concrete ease (describe it, the agent builds it), low risk (free, no code).
// Revision: "while you watch" makes the build feel transparent and
// low-risk (the friend sees it take shape), "no code to learn" names the
// exact barrier being removed, and "just" softens the ask.
const pitch =
  "That app idea you've been carrying around? Just describe it in plain words, and an AI agent on make.fun will build it while you watch — free to try, no code to learn, nothing to lose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
