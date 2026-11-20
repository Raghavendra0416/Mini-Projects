# Week 4 (Thursday): City Compare — Debounce, Abort & URL

**Project:** `frontend-labs/week-04-weather/`  
**Time Box:** 60–75 minutes (stop at pass criteria; plain UI is fine)  
**Data Source:** Local `weather.json` only (no live APIs or keys)

---

## Core Flow
- User types in the search field → after a pause (**debounce**), matching cities appear directly under the input.
- Loading and error states render **beneath the search field**, never covering existing compare cards.
- *(Stretch)* Clicking a suggestion adds the city to a side-by-side compare area with identical labels on every card, and updates the URL (`?cities=bengaluru,berlin`).

---
## Page should look like:
```
┌ Compare city weather ───────────────────────────┐
│ Search [ben                             ]       │
│        Bengaluru, India                        │
│        Benton, United States                   │
│                                                │
│ Bengaluru                 Berlin               │
│ 27°C  Partly cloudy       14°C  Rain           │
│ Wind 12 km/h              Wind 18 km/h         │
│                                                │
│ URL: ?cities=bengaluru,berlin                  │
└────────────────────────────────────────────────┘
```
---
## Must Work
- **Debounced search:** Pause after typing before running an async lookup against `weather.json` (write a reusable debounce helper).
- **Filtering:** Match city names using case-insensitive `includes` (contains query).
- **Request cancellation:** Use `AbortController` so a newer search aborts the previous in-flight request.
  - If `error.name === "AbortError"`, `return` immediately — do **not** show an error/Retry UI.
- **Distinct UI states:** Keep **Loading**, **No results / Unknown query** (e.g., `zzz`), and **Network error** clearly separate.
- **Test overlapping requests:** Throttle Network to **Slow 3G** in DevTools (or add an `await` delay in your fetch helper) to verify cancellation.
- **Stretch (skip if timer ends):** Add the compare list and sync `?cities=` in the URL using `history.replaceState` or `pushState` (no page reload).

---

## Pass Checklist
- [ ] Fast typing does **not** fire one request per keystroke (verify in Network tab or console).
- [ ] Aborted requests show as `cancelled` in the Network tab or log `AbortError`.
- [ ] An aborted request does **not** trigger the error UI.
- [ ] Unknown text (e.g., `zzz`) shows a "not found" state, not a network failure.

---