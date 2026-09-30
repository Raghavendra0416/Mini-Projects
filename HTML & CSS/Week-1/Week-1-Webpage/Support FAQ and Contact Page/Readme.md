**Must Work Requirements**
* Include page navigation, five FAQ items using `details` and `summary`, and three contact-channel cards.
* Use a table only if presenting hours by day and channel.
* Make focus visible and links descriptive.
* Provide a no-results or no-hours message as ordinary content.
* Run a semantic, keyboard, and CSS ownership review.

**Boundary Cases to Trigger**
* FAQ answer contains a list.
* Contact address is long.
* Business-hours table needs a caption.

**Constraints**
* No accordion JavaScript.
* No ARIA added where native `details` works.
* No colour-only channel status.

**Do Not Build**
* Search functionality.
* Chat widget.
* Deployment.

**Pass Criteria**
* Every item under "Must work" is visible in one demonstration.
* Every listed boundary case was deliberately triggered.
* The console, terminal, typecheck, or tests show no unexplained failure.
* You can name the file that owns each piece of data, behaviour, and presentation.
* You can change one requirement without copying a replacement solution.


```
┌ Help centre ────────────────────────────────────────────┐
│                                                           │
│  Questions   Contact   Hours          ← nav, descriptive │
│                                          link text        │
│ ─────────────────────────────────────────────────────── │
│                                                           │
│  Frequently asked questions                              │
│                                                           │
│  ▸ How do I reset my password?                           │
│  ▸ Where can I find an invoice?                          │
│      (answer includes a short list)  ← boundary case     │
│  ▸ Can I change my plan?                                 │
│  ▸ What payment methods are accepted?                    │
│  ▸ How do I cancel my subscription?                      │
│                                                           │
│  (5 items, plain <details>/<summary>, no JS, no ARIA)    │
│                                                           │
│ ─────────────────────────────────────────────────────── │
│                                                           │
│  Contact us                                              │
│                                                           │
│  ┌────────────┐   ┌────────────┐   ┌────────────┐        │
│  │ Email      │   │ Phone      │   │ Community  │        │
│  │ text only  │   │ text only  │   │ text only  │        │
│  └────────────┘   └────────────┘   └────────────┘        │
│                                                           │
│  (3 cards, plain text status — no colour-only signal)     │
│                                                           │
│  Address:                                                │
│  (a long, real, multi-line address)  ← boundary case      │
│                                                           │
│ ─────────────────────────────────────────────────────── │
│                                                           │
│  Support hours                                           │
│                                                           │
│  ┌ caption: "Hours by day and channel" ────────────────┐ │
│  │ Day     │ Email │ Phone │ Community                 │ │
│  │ Mon–Fri │ ...   │ ...   │ ...                        │ │
│  │ Weekend │ ...   │ ...   │ ...                        │ │
│  └──────────────────────────────────────────────────────┘│
│                                                           │
│  If a day/channel has no hours, say so in the cell        │
│  itself, e.g. "Closed" — that's your no-hours message,    │
│  as ordinary content, not a popup or JS-driven banner.    │
│                                                           │
└───────────────────────────────────────────────────────────┘
```