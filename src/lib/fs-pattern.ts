import fsPatternGold from "@/assets/fs-pattern-tile.png.asset.json";
import fsPatternDark from "@/assets/fs-pattern-tile-dark.png.asset.json";

/** FS monogram mosaic — gold, for dark (#1A1A1A) surfaces. */
export const FS_PATTERN_DARK = {
  backgroundImage: `url("${fsPatternGold.url}")`,
  backgroundSize: "64px 64px",
  backgroundRepeat: "repeat",
} as const;

/** FS monogram mosaic — warm ink, for cream/light surfaces. */
export const FS_PATTERN_LIGHT = {
  backgroundImage: `url("${fsPatternDark.url}")`,
  backgroundSize: "64px 64px",
  backgroundRepeat: "repeat",
} as const;
