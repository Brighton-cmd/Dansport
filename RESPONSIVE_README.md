# Responsive Upgrade

    This package was automatically upgraded for better viewing on both desktop and mobile devices.

    ## What was added
    - **Meta viewport** tag for correct scaling on phones.
    - A new stylesheet: `assets/css/responsive.css` with:
      - Fluid typography (`clamp`) and spacing tokens.
      - Responsive grids for common class names (grid/row/cols/cards/tiles).
      - Images/videos/iframes constrained to container width.
      - Mobile-friendly navigation with an optional hamburger button.
      - Tables wrapped in `.table-wrap` for horizontal scroll on small screens.
      - Respect for `prefers-reduced-motion` to ease heavy animations.
    - A small script: `assets/js/mobile-nav.js` to toggle navigation on small screens.

    ## How to use
    - Open any HTML file as usual. The new CSS and JS are already linked.
    - If your nav isn't collapsing: ensure your main nav is inside a `<nav>` or has class `.nav` / `.navbar`. The script will attach a Menu button automatically on mobile.
    - For custom grids: keep using your classes. The CSS targets common patterns and will stack items on narrow screens.

    ## Files modified
    [
  "index.html",
  "shop.html",
  "printing.html",
  "wholesale-info.html",
  "wholesale-login.html",
  "contact.html",
  "about.html",
  "account.html",
  "admin.html"
]