import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday, written as if Monday were a restaurant.
const review =
  "One star. Our table wasn't ready, the server lost our weekend, and the chef served Monday cold. Would not return.";

const words = review.trim().split(/\s+/).length;
if (review.length < 1 || review.length > 180 || words > 25) {
  throw new Error(
    `review must be 1-180 chars and at most 25 words (got ${review.length} chars, ${words} words)`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
