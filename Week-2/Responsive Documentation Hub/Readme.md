## What needs to be achived?
- Use shared CSS tokens
- responsive two-column-to-one-column layout (sidebar and main contents)
- Create git & Create at least four focused commits
- Use git status and git diff before every commit
- The page should include: top navigation, side contents, main article list, code sample, and status callout

## Page Layout
```
┌ Northstar API                 Guides  Reference ┐
├───────────────┬─────────────────────────────────┤
│ Contents      │ Get started                     │
│ Introduction  │ Connect to the API in minutes.  │
│ Authentication│                                 │
│ Errors        │ Status: All systems operational │
│               │                                 │
│               │ GET /v1/orders                  │
│               │ ```                             │
│               │ fetch(...)                      │
└───────────────┴─────────────────────────────────┘
```

## Boundary cases to trigger
- Long code line
- Narrow viewport
- Uncommitted asset
- Accidental unrelated change

## Issues:
- For coding section the background is overflowing due to `pre` element. so added `overflow:hidden` to hide the overflowing.
- Took more time than expected due to work.
- Tried to make the 