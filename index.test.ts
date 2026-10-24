import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("FocusWall Website HTML/Legal Integrity", () => {
  const root = process.cwd();

  it("contains valid index.html with meta description & title", () => {
    const html = fs.readFileSync(path.join(root, "index.html"), "utf-8");
    expect(html).toContain("<title>");
    expect(html).toContain("FocusWall Pro");
    expect(html).toContain('name="description"');
  });

  it("has mandatory privacy policy page for Chrome Web Store compliance", () => {
    const privacy = fs.readFileSync(path.join(root, "privacy.html"), "utf-8");
    expect(privacy.length).toBeGreaterThan(100);
    expect(privacy.toLowerCase()).toContain("privacy");
  });

  it("has mandatory ChatVault privacy policy page", () => {
    const chatvaultPrivacy = fs.readFileSync(path.join(root, "privacy-chatvault.html"), "utf-8");
    expect(chatvaultPrivacy.length).toBeGreaterThan(100);
    expect(chatvaultPrivacy.toLowerCase()).toContain("privacy");
  });

  it("includes ads.txt and robots.txt", () => {
    expect(fs.existsSync(path.join(root, "ads.txt"))).toBe(true);
    expect(fs.existsSync(path.join(root, "robots.txt"))).toBe(true);
  });
});
