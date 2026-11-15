### What should work?
- The page is a small weather lookup, not a forecast portal. 
- A city field and Search button sit at the top.
- The result card shows city and country first, then temperature, condition, and wind. 
-  The same result area handles loading, unknown city, network failure, and Retry, so old weather does not sit beneath a new error.


### How does the page look?
```
┌ Today's weather ─────────────────────────────┐
│ City [Bengaluru             ] [Search]       │
│ [ ] Simulate offline                         │
│                                              │
│ Bengaluru, India                             │
│ 27°C   Partly cloudy                         │
│ Wind 12 km/h                                 │
│                                              │
│ Error version: Could not reach data. [Retry] │
└──────────────────────────────────────────────┘
```

### Must work:
- A labelled city field and a Search button (type="submit" in a form, and preventDefault)
- On search, fetch the mock JSON
- If the city name matches a record (case-insensitive, trim spaces), show name, country, temperature °C, wind, condition
- If the JSON loads and no city matches: an unknown-city message, not a generic crash
- A control that simulates a network error (a checkbox "Simulate offline", or a second button that fetches a dead URL such as https://this-host-does-not-exist.invalid/). That path must show a network-error message that is different from unknown-city
- Loading visible before the result (a text status is enough)
- Retry performs a new request
- Search is disabled or ignored while a request is in flight, so double-submit does not tangle two paints