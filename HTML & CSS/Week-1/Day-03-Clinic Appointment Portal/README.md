# Responsive Clinic Appointment Portal

## Wednesday: Responsive Design

This is a small learning project focused only on the responsive-design tasks listed in the assignment. The goal is to satisfy the minimum pass criteria without adding unnecessary features.

## Topics and Why They Matter

| Topic | Why it matters |
|---|---|
| Mobile-first CSS | Starts with the least complex layout. |
| Media queries | Change the layout when the content needs it. |
| Fluid units | Allow interfaces to adapt to available space. |
| Overflow | Data-heavy interfaces often fail here. |
| Responsive tables | Tables require an explicit small-screen strategy. |

## Mini-project: Clinic Appointment Portal

Build one clinic page containing:

- A header and mobile navigation
- Doctor cards
- An upcoming-appointments table
- Appointment action buttons

Design and test the page for:

- Small phone: approximately 320px
- Tablet: approximately 768px
- Desktop: approximately 1440px


## Key technical expectations
- Write base CSS for small screens first.
- Use fluid sizing such as %, rem, fr, minmax(), and clamp() where appropriate.
- Add media queries only when the content stops working.
- Use a native <details> element for mobile navigation.
- Change the doctor-card column count as space becomes available.
- Give the table an intentional narrow-screen solution, such as horizontal scrolling or a card-style layout.
- Prevent unintended page-level horizontal scrolling.
- Keep buttons comfortably operable and text naturally readable.

## Deliverables
- Complete the clinic mini-project.
- Apply the same responsive principles to all three AdminKit pages.
- Test at approximately 320px, 768px, and 1440px.
- Capture one screenshot at each size.
- Fix every accidental overflow issue.

## File Structure
```
clinic-appointment-portal/
├── index.html
├── css/
│   └── styles.css
└── README.md
```
Purpose
- index.html: All page content
- css/styles.css: Mobile-first and responsive styling
- images/doctors/: Doctor images, if used
- screenshots/: Required viewport screenshots
- README.md: Assignment, layout, criteria, and daily notes

No JavaScript file is necessary unless you later add behaviour that the assignment explicitly requires. The native < details > navigation works without JavaScript.


## Project Scope

Keep the project small and limited to the assignment requirements.

The project does not require:

- Authentication or login pages
- A real appointment-booking system
- A database or backend
- Dashboards or charts
- Advanced filtering or search
- Complex JavaScript interactions
- Extra pages or features not required by the assignment

## Suggested Page Structure

1. Header and navigation
2. Main heading and short introduction
3. Doctor cards section
4. Upcoming appointments section
5. Optional simple footer

```
Header / Navigation
Main
 ├── Page heading
 ├── Doctor cards
 └── Upcoming appointments table
Footer (optional)
```

## Suggested Layout

### Small Phone Layout

At approximately 320px:

- Display the clinic name and a mobile navigation disclosure in the header.
- Use a native `details` element for the navigation disclosure.
- Stack navigation links vertically when the menu is open.
- Display the page heading and short introduction below the header.
- Display doctor cards in one column.
- Keep appointment buttons large enough to operate comfortably.
- Place the appointments table inside an intentionally scrollable area if it is wider than the screen.
- Ensure the table area may scroll horizontally without causing the entire page to scroll.
- Use comfortable spacing and readable text without phone-specific font-size fixes.

Suggested visual order:

1. Clinic name and menu
2. Page title and introduction
3. Doctor card
4. Doctor card
5. Additional doctor cards if included
6. Upcoming appointments heading
7. Scrollable appointments table

```
┌────────────────────────────┐
│ Clinic Portal       [Menu] │
│ ┌────────────────────────┐ │
│ │ Home                   │ │
│ │ Doctors                │ │
│ │ Appointments           │ │
│ └────────────────────────┘ │
├────────────────────────────┤
│ Clinic Appointment Portal  │
│ Find doctors and manage    │
│ upcoming appointments.     │
│                            │
│ Our Doctors                │
│ ┌────────────────────────┐ │
│ │ Dr. Anjali Rao         │ │
│ │ General Physician      │ │
│ │ Available today        │ │
│ │ [Book Appointment]     │ │
│ └────────────────────────┘ │
│ ┌────────────────────────┐ │
│ │ Dr. Ravi Kumar         │ │
│ │ Cardiologist           │ │
│ │ Available tomorrow     │ │
│ │ [Book Appointment]     │ │
│ └────────────────────────┘ │
│                            │
│ Upcoming Appointments      │
│ ┌────────────────────────┐ │
│ │ ← Scroll table →       │ │
│ │ Date | Doctor | Status │ │
│ │ ...                    │ │
│ └────────────────────────┘ │
└────────────────────────────┘
```

Mobile behaviour
- Use < details > and < summary > for navigation.
- Display doctor cards in one column.
- Put the table inside a horizontally scrollable container.
- Allow action buttons to become full-width if necessary.
- Keep page padding around 1rem.
- Ensure only the table container scrolls, not the entire page.

### Tablet Layout

At approximately 768px:

- Show the navigation horizontally when enough space is available.
- Display doctor cards in two columns.
- Keep the table overflow strategy as a safety measure.
- Keep actions easy to operate and allow them to wrap if needed.
- Use the same content as the phone layout rather than adding tablet-only features.


```
┌──────────────────────────────────────────┐
│ Clinic Portal   Home Doctors Appointments│
├──────────────────────────────────────────┤
│ Clinic Appointment Portal                │
│                                          │
│ Our Doctors                              │
│ ┌──────────────────┐ ┌─────────────────┐ │
│ │ Doctor 1         │ │ Doctor 2        │ │
│ │ [Book]           │ │ [Book]          │ │
│ └──────────────────┘ └─────────────────┘ │
│                                          │
│ Upcoming Appointments                    │
│ ┌──────────────────────────────────────┐ │
│ │ Date │ Time │ Doctor │ Status │Action│ │
│ └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

Tablet behaviour
- Navigation can switch to a normal horizontal list when space allows.
- Doctor cards become two columns.
- The table remains scrollable as a safety measure.
- Action buttons can remain beside each other if they fit.

### Desktop Layout

At approximately 1440px:

- Use a centered content area with a reasonable maximum width.
- Display the clinic name and navigation horizontally.
- Display doctor cards in three columns when space permits.
- Show the appointments table at its natural width.
- Keep spacing clear and consistent.
- Do not add desktop-only features that are outside the assignment.

```
┌────────────────────────────────────────────────────────┐
│ Clinic Portal        Home  Doctors  Appointments       │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Clinic Appointment Portal                             │
│  Find doctors and manage upcoming appointments.        │
│                                                        │
│  Our Doctors                                           │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │ Doctor 1     │ │ Doctor 2     │ │ Doctor 3     │   │
│  │ [Book]       │ │ [Book]       │ │ [Book]       │   │
│  └──────────────┘ └──────────────┘ └──────────────┘   │
│                                                        │
│  Upcoming Appointments                                 │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Date │ Time │ Doctor │ Specialty │ Status │Action│  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

Desktop behaviour
- Use a centered container with a reasonable max-width.
- Display navigation horizontally.
- Doctor cards can use three columns.
- Display the complete table naturally.
- Keep the design simple and spacious.

## Recommended table columns
```
| Date   | Time     | Doctor         | Specialty  | Status    | Action     |
| ------ | -------- | -------------- | ---------- | --------- | ---------- |
| Aug 22 | 10:30 AM | Dr. Anjali Rao | General    | Confirmed | Cancel     |
| Aug 25 | 2:00 PM  | Dr. Ravi Kumar | Cardiology | Pending   | Reschedule |

```


## Suggested Content

### Header Navigation

Use only a few relevant links, such as:

- Home
- Doctors
- Appointments

### Doctor Cards

Each doctor card may contain:

- Doctor name
- Specialty
- Availability text
- One appointment action button

Three sample doctor cards are enough to demonstrate responsive columns.

### Upcoming Appointments Table

The table may contain these columns:

- Date
- Time
- Doctor
- Specialty
- Status
- Action

Two or three sample appointments are enough to demonstrate table responsiveness and overflow handling.

## Mini-project Pass Criteria

- [ ] Works at 320px without accidental horizontal page scrolling.
- [ ] Navigation remains usable on a phone.
- [ ] Doctor cards change columns based on available space.
- [ ] The table has an intentional overflow or alternative layout.
- [ ] Text remains readable without viewport-specific font-size hacks.
- [ ] Buttons do not become too small to operate.

## Main-project Integration

- [ ] Make the AdminKit shell mobile-first.
- [ ] Use a native `details` element for the small-screen navigation disclosure.
- [ ] Add breakpoints only where the current layout stops working.
- [ ] Test all three pages at approximately 320px, 768px and 1440px.
- [ ] Record one screenshot at each size.
- [ ] Fix all unintended page overflow.

## Interview Gate

Know and be able to explain:

- Mobile-first approach
- Viewport
- Relative units
- Content-driven breakpoints
- Table overflow

### Interview Questions

#### Q007: What does mobile-first CSS mean in practice?

Your answer:

> Write your answer here.

Self-rating: Strong / Partial / Weak

#### Q008: Why should breakpoints be based on content rather than device names?

Your answer:

> Write your answer here.

Self-rating: Strong / Partial / Weak

#### Q009: What strategies can make a wide table usable on a narrow screen?

Your answer:

> Write your answer here.

Self-rating: Strong / Partial / Weak

## Delivery

- [ ] I can state what I built today.
- [ ] The mini-project meets its minimum pass criteria.
- [ ] I recorded any incomplete main-project criterion.
- [ ] I committed the work.

## Understanding

- [ ] I wrote one concept I can explain without notes.
- [ ] I wrote one concept I used but do not yet understand.
- [ ] I identified which work I completed independently.
- [ ] I identified where documentation, another person or AI helped.

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
