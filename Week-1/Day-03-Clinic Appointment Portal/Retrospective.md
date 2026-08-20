## Restrospective

### How i approached the project
I have created the HTML structure within 15Min-20Min. Basic Styling took 20Min-35Min.
But the Project took 3hrs to complete. Why?
- Detail & Summary tags were introduced. Took 10Min-20Min to understand.
- Using Grid layout -> I rarely used GRID so working on it took more time.
- Using Media Queries -> I rarely used Media Queries, so i took 10Min-20Min to understand the concept again.
- The Table is not styling correctly, i.e the table is overflowing horizontally making the page scroll horizantal. The page should not scroll horizontally and the stylings needs to be applied within the viewport width/height.
And this took me nearly 1hr-1hr:30Min, as i tried finding the cause and tried everthing i know.

#### How did i resolved the bug?
I have used claude, gemini But they are giving incorrect styling. So after sometime i have used Codex and was able to resolve the issue.

#### So What changes codex made to make the code work?
- It has created a div to and wrapped the table inside the div and used it it to scroll the table right to left/ left to right.
- It has used:`overflow-x: auto;`, `overscroll-behavior-x: contain;` to correct the styling. and also it made changes to the height inside the body to 100% to 100vh.
- It also made changes in the Grid layout for the Tablets and the Desktops using `minmax(minimum, maximum) `.

### What Topics i learned?
- `<Detail>`, `<Summary>` Tags.
- Using GRID (`minmax(minimum, maximum)`) -> Still need to work to understand even better.
- Media Queries
- `overflow-x: auto;`, `overscroll-behavior-x: contain;` Styling techniques.
- How to make a element(like table in the project) scroll left to right/right to left.
- Introduction to the `-webkit-`

### What parts i still need to work on?
- Using GRID -> Still need to work to understand even better.
- Media Queries.
- Need more understanding on `minmax(minimum, maximum)`.
- Understand the `-webkit`.


------------
## Delivery

- [✓] I can state what I built today.
- [✓] The mini-project meets its minimum pass criteria.
- [ ] I recorded any incomplete main-project criterion.
- [✓] I committed the work.

## Understanding

- [ ] I wrote one concept I can explain without notes.
- [ ] I wrote one concept I used but do not yet understand.
- [ ] I identified which work I completed independently.
- [✓] I identified where documentation, another person or AI helped.

## Debugging

- [ ] I recorded the most important bug or confusion.
- [ ] I recorded how to reproduce it.
- [ ] I recorded the incorrect assumption.
- [ ] I recorded the root cause if known.
- [ ] I recorded the next experiment if it remains unknown.
- [ ] I recorded a test or prevention when appropriate.

## Interview

- [ ] I answered today’s three questions without reading first.
- [ ] I marked each answer Strong, Partial or Weak.
- [ ] I scheduled one weak answer for tomorrow’s recall.

## Tomorrow

- [ ] I wrote tomorrow’s first ten-minute action.
- [ ] I moved only genuine core work forward.
- [ ] I dropped or archived unfinished stretch work.

## Daily Notes Template

### What I built

Write here.

### What I built without assistance

Write here.

### What helped me

Write here.

### One concept I can now explain

Write here.

### One concept still unclear

Write here.

### Bug or confusion

Write here.

### Root cause or next experiment

Write here.

### Prevention or test

Write here.

### Weakest interview answer

Write here.

### Tomorrow’s first action

Write here.

### Daily status

Green / Amber / Red

------------
### RCA by AI
Yes. The root cause was not the table itself, but the way the table wrapper was sized on mobile.

**What caused the issue**
- The table was inside `.table-scroll`, and that wrapper had horizontal margins in the original CSS.
- On a small screen, `width: 100%` plus left/right margins makes the element wider than the viewport.
- That means the *page* becomes wider, so the browser gives you page-level horizontal scrolling instead of only scrolling the table area.
- At the same time, the table cells used `white-space: nowrap`, which is correct for forcing horizontal overflow in a table, but it also means the container must be set up very carefully.

**How I recognized it**
I looked for the usual mobile overflow pattern:

1. A parent container that is supposed to scroll horizontally.
2. That container has extra width from `margin`, `padding`, `fixed widths`, or `min-width`.
3. The child table is intentionally wide, so if the parent is also expanded, the whole page starts scrolling.

In your case, the giveaway was the table wrapper. The page content around the table was fine, but the wrapper itself was not staying inside the viewport.

**What I changed**
- Moved the page spacing to `main` instead of putting side margins on the table wrapper: [styles.css](D:/Study/Personal%20Project/Mini-projects/Week-1/Day-03-Clinic%20Appointment%20Portal/css/styles.css#L79)
- Kept `.table-scroll` full width with no horizontal margins, so it can contain the overflow properly: [styles.css](D:/Study/Personal%20Project/Mini-projects/Week-1/Day-03-Clinic%20Appointment%20Portal/css/styles.css#L142)
- Left the table wide on purpose with `width: max-content` and `min-width: 100%`, so it can overflow inside the wrapper instead of wrapping awkwardly: [styles.css](D:/Study/Personal%20Project/Mini-projects/Week-1/Day-03-Clinic%20Appointment%20Portal/css/styles.css#L154)
- Added `overflow-x: hidden` on `body` as a safety net against accidental page overflow: [styles.css](D:/Study/Personal%20Project/Mini-projects/Week-1/Day-03-Clinic%20Appointment%20Portal/css/styles.css#L19)
- Fixed the table structure by wrapping rows in `<tbody>`, which helps browsers render the table more predictably: [index.html](D:/Study/Personal%20Project/Mini-projects/Week-1/Day-03-Clinic%20Appointment%20Portal/index.html#L88)

**The rule you can reuse**
When you want only a child area to scroll on mobile:

- The scroll container should be `width: 100%`
- Avoid horizontal `margin` on that container
- Put outer spacing on a parent section instead
- Let the child content be naturally wider than the container
- Use `overflow-x: auto` on the container
- If needed, add `overflow-x: hidden` to the page as a fallback, but do not rely on it as the main fix

**Mental model**
Think of it like this:

- `main` = page padding
- `.table-scroll` = the viewport window for the table
- `table` = the wide content that moves inside the window

If the “window” also has extra outside width, the whole page starts moving, which is exactly what you did not want.

**A quick debugging checklist for next time**
1. Inspect the element that is supposed to scroll.
2. Check whether it has `margin`, `padding`, `min-width`, or `width: 100%` plus extra horizontal spacing.
3. Temporarily outline containers with borders to see which box is actually wider.
4. If the page scrolls instead of the component, move spacing outward and keep the scroll container flush with the viewport.

If you want, I can also show you a very small “before vs after” CSS example so you can remember the pattern easily.