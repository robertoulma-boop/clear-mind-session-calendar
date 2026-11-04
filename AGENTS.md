<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The site is a single-page landing: all content lives on the `/` route with its own metadata, and sections (psicanálise, contato) are reached through in-page `#psicanalise` / `#contato` anchors. Never reintroduce the demonstrative agenda — Roberto removed it on 2026-11-04; every CTA points to the contact section or WhatsApp.
- Define visual roles in src/styles.css and use the existing Button component for interactive controls, so pages share a consistent design system.
