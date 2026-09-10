# Frontend Mentor - Grid landing page solution

This is a solution to the [Grid landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/grid-landing-page).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu at any screen size

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [github.com/tagrgr/grid-landing-page](https://github.com/tagrgr/grid-landing-page)
- Live Site URL: [tagrgr.github.io/grid-landing-page](https://tagrgr.github.io/grid-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties, with the style guide values kept in their own `token.css`
- CSS Grid for the page layout and the 2x2 stat grid
- Flexbox for the header, footer and card internals
- Mobile-first workflow
- Vanilla JavaScript for the menu — no libraries

The stylesheets are split by responsibility: `reset.css` clears browser defaults,
`token.css` holds the design system, `style.css` builds the components at the mobile
size, and `responsive.css` holds the two breakpoints.

### What I learned

**One grid, three arrangements.** The whole page is a single grid whose shape changes
twice. On mobile everything is one column; from `40em` the stats become a 2x2 block under
the hero; from `64em` the hero takes 45% of the width and the stat grid takes the rest:

```css
@media (min-width: 64em) {
    .layout {
        grid-template-columns: 45% 1fr;
    }
}
```

**The hairlines are borders, not gaps.** With no imagery in the design, the 1px dividers
carry the whole layout, so they have to land exactly where the grid lines are. Rather than
drawing them per card, each rule states which cards need which edge:

```css
.stat {
    border-left: 1px solid var(--color-divider);
}

/* THE HEADER'S BORDER ALREADY DRAWS THE LINE ABOVE THE TOP ROW */
.stat:nth-child(-n + 2) {
    border-top: none;
}
```

**Capping the measure controls the line breaks.** The headline breaks after "classroom"
in the design, which no font size alone will produce — it comes from a `max-width` on the
text itself. Setting both the headline and the paragraph to `25rem` reproduces the
design's line breaks at every width.

**`hidden` plus `aria-expanded` is the whole menu.** The panel, the overlay and the button
state are set in one function so they can't drift apart, and the icon swap is pure CSS
driven by the button's own attribute:

```css
.menu-toggle[aria-expanded='true'] .icon-menu {
    display: none;
}
```

**Underline on hover, not a border.** A `border-bottom` that only appears on hover shifts
every link by a pixel; `text-decoration` with `text-underline-offset` draws the same line
without touching the layout.

### Continued development

- Slide the menu panel in from the edge instead of appearing instantly.
- Trap keyboard focus inside the menu while it is open.
- Count the stat numbers up from zero on load, behind a `prefers-reduced-motion` check.

## Author

- GitHub - [@tagrgr](https://github.com/tagrgr)
- Frontend Mentor - [@tagrgr](https://www.frontendmentor.io/profile/tagrgr)
