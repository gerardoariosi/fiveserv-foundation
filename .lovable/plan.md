
Plan approved. Switching to implementation mode to:

1. Rewrite `src/content/blog/_blocks.tsx` with premium light-theme typography (dark text, gold accents, styled headings/lists/tables/callouts/links).
2. Polish `src/components/fiveserv/BlogArticleLayout.tsx` — cover image band overlapping the dark hero, refined TL;DR card, drop-cap first paragraph, hover polish on related links and FAQ cards.
3. Add `.prose-blog` styles to `src/index.css` (drop-cap, link color, strong weight).
4. Generate 30 photorealistic 16:9 cover images via the Lovable AI image gateway, save to `public/images/blog/<slug>.png`.
5. Update `src/lib/blog-data.ts` to wire `image: "/images/blog/<slug>.png"` on every post.
6. Polish `src/pages/BlogPage.tsx` cards — `<img>` with `loading="lazy"`, gold hover border, gold category chip, gold title hover.
