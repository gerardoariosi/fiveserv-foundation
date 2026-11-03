// @vitest-environment node
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("cleaning content update date", () => {
  it("retains the authoritative November 3, 2026 date when the sitemap is regenerated", () => {
    const source = readFileSync("scripts/generate-sitemap.mjs", "utf8");
    const entry = source.match(/\{ path: "\/cleaning",[^}]+\}/)?.[0];
    expect(entry?.match(/lastmod: "([^"]+)"/)?.[1]).toBe("2026-11-03");
  });
});