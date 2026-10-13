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

- Keep shared navigation and footer in the root route and give each public page its own leaf route and metadata, so navigation and sharing remain consistent.
- Keep appointment selection in a browser-only presentation component; the current calendar is explicitly demonstrative and downloads tentative reminders, never creates confirmed bookings.
- Define visual roles in src/styles.css and use the existing Button component for interactive controls, so pages share a consistent design system.
