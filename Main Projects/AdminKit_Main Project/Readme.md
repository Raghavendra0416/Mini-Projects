# AdminKit Lite

A responsive, accessibility-focused administrative interface built with semantic HTML and CSS.

The project is being developed incrementally so that each milestone focuses on understanding the browser's native behavior before application logic, JavaScript, validation libraries, or custom components are introduced.

The current work is intentionally framework-free and JavaScript-free for the relevant milestone.

---

## 1. Project Overview

### Project name

**AdminKit Lite**

### Main objective

Build a small administrative interface that demonstrates practical frontend fundamentals:

- Semantic HTML
- Accessible forms
- CSS cascade and box model
- Flexbox and Grid
- Responsive design
- Native interactive elements
- Keyboard and focus accessibility
- Browser DevTools
- Separation of CSS responsibilities
- Incremental implementation and scope control

The project is also intended to be useful as a frontend learning project and as an interview/demo project.

---

# 2. Assignment Context

The assignment is designed as a **framework-free week**. The purpose is not simply to make the pages look good, but to understand what HTML and CSS provide natively before hiding those details behind JavaScript, component libraries, or more advanced abstractions.

The broader assignment is based around an AdminKit-style interface and includes a **Community Event Registration** mini-project.

The assignment topics are:

| Topic | What is being practiced |
|---|---|
| Semantic HTML | Choosing elements based on meaning and structure |
| Forms | Labels, inputs, selects, textareas, checkboxes, buttons and form structure |
| CSS Cascade | Understanding inheritance, specificity and stylesheet order |
| Box Model | Content, padding, border and margin |
| Flexbox | One-dimensional layouts and alignment |
| Grid | Two-dimensional layouts such as cards and page sections |
| Responsive Design | Adapting layouts for different screen sizes |
| Native Interactive Elements | Using browser-provided controls such as buttons, links, inputs and selects |
| Keyboard and Focus Accessibility | Making the interface usable without a mouse |
| Browser DevTools | Inspecting HTML, CSS, layout, focus and responsive behavior |

---

# 3. What the Assignment Provides

The assignment provides **requirements and responsibilities**, but it does not provide a complete pixel-perfect design for every milestone.

For the current AdminKit slice, the assignment explicitly provides the following:

### HTML responsibility

`adminkit/index.html` must contain:

- A labelled queue selector
- Date range controls
- An Apply button
- All controls inside a form

### CSS responsibility

`adminkit/styles/base.css` is responsible for shared defaults for:

- `label`
- `input`
- `select`
- `button`

`adminkit/styles/tokens.css` is responsible for:

- Focus-related tokens
- Border-related tokens

### Completion requirements

The current milestone is complete when:

- Every control has a programmatic label.
- Button type is explicit.
- Focus remains visible.
- The form action is intentionally non-functional and this limitation is documented.

### Explicitly deferred

The assignment says to keep the following for later:

- Submission handler
- Validation library
- Settings page
- Custom select component

The instruction is also clear that later requirements should not be pulled into today's milestone just because a related file is already open.

---

# 4. What the Assignment Does NOT Provide

The assignment does **not** give us a complete visual specification for today's card.

It does not explicitly define:

- Exact card width or height
- Exact card position
- A pixel-perfect visual mockup
- Exact card heading or supporting text
- Queue option names
- Number of queue options
- Exact date-control labels
- Exact spacing values for the card
- Exact desktop arrangement
- Exact mobile arrangement
- Exact border radius or visual treatment
- Exact button dimensions
- Real business data for the selector

Therefore, these details must be treated as **implementation decisions**, not hidden assignment requirements.

---

# 5. What We Are Assuming

Because the assignment gives the required controls but does not provide all UI details, the project makes a few reasonable assumptions.

## 5.1 Queue options

The assignment requires a **queue selector**, but does not provide the queue names.

For the UI, we can use placeholder/example values such as:

```html
<option value="">Select queue</option>
<option value="queue-1">Queue 1</option>
<option value="queue-2">Queue 2</option>
<option value="queue-3">Queue 3</option>
```

These are **example implementation data**, not requirements supplied by the assignment.

Another sensible option is to use generic names such as `Support Queue`, `General Queue`, and `Priority Queue`, but they should still be understood as design choices.

## 5.2 Date range controls

The assignment says **date range controls**, so the natural HTML implementation is:

- Start Date: `<input type="date">`
- End Date: `<input type="date">`

This uses the browser's native date control and stays aligned with the assignment's focus on native HTML behavior.

## 5.3 Card design

We assume the new form should be presented as a compact **Settings Preview** card that fits the existing AdminKit dashboard.

The card should use the existing project's spacing, typography, borders, and layout conventions instead of introducing an unrelated visual style.

## 5.4 Responsive behavior

The broader assignment requires responsive design, so we assume:

- Desktop: controls can be arranged in a row or grid.
- Mobile: controls should stack or otherwise remain easy to use without horizontal overflow.

The assignment does not prescribe the exact breakpoint or exact mobile arrangement, so those remain implementation decisions.

---

# 6. Why Are We Doing This?

The current slice is deliberately small because it teaches several important frontend concepts at the same time.

## Why semantic form HTML?

We want to understand how the browser already provides labels, keyboard interaction, form controls, focus handling, and accessible semantics without JavaScript.

## Why native controls?

A native `<select>` and `<input type="date">` already have built-in keyboard and browser behavior. Replacing them with custom components too early would hide the fundamentals we are trying to learn.

## Why shared CSS in `base.css`?

Labels, inputs, selects and buttons appear in multiple parts of the project. Their common visual defaults should therefore be defined in one shared location instead of duplicated throughout page-specific CSS.

## Why design tokens in `tokens.css`?

Reusable tokens prevent the same border and focus values from being repeated throughout the stylesheet and make future design changes easier.

## Why visible focus?

Keyboard users need to know which control currently has focus. Removing or hiding focus makes navigation difficult or impossible for users who do not use a mouse.

## Why keep the form non-functional?

The current milestone is focused on **structure, semantics, styling and accessibility**. Submission logic belongs to a later requirement. Keeping it non-functional prevents unrelated work from entering the current milestone.

## Why avoid a custom select?

The assignment explicitly lists the custom select component as later work. Today we are intentionally using the native `<select>` so that its browser behavior can be understood first.

---

# 7. Current Project Structure

```text
adminkit-lite/
├── index.html
├── users.html
├── settings.html
├── registration.html
├── assets/
│   └── images/
└── styles/
    ├── tokens.css
    ├── base.css
    ├── layout.css
    ├── components.css
    └── pages.css
```

The assignment's daily slice may reference the project using the `adminkit/` path, while the overall project is organized around the same HTML and CSS files shown above.

---

# 8. Pages in the Project

## Dashboard — `index.html`

The main AdminKit dashboard.

The current slice adds the **Settings Preview** form fragment to this page.

Existing dashboard concepts include:

- Dashboard overview
- Summary cards
- Recent activity
- System status
- Main navigation

## Users — `users.html`

A user-management page containing:

- User search form
- User table
- Name
- Email
- Role
- Status
- Joined date

## Settings — `settings.html`

A broader settings page exists in the overall project, but **settings page work is explicitly later for today's milestone**.

Do not expand or redesign this page as part of the current slice.

## Registration — `registration.html`

The Community Event Registration mini-project containing:

- Event title and description
- Full Name
- Email Address
- Experience Level
- Dietary Requirements
- Terms checkbox
- Register/Cancel actions
- Example success message
- Example validation error

---

# 9. CSS File Responsibilities

The CSS is split by responsibility so the project stays organized and easier to maintain.

## `styles/tokens.css`

Contains reusable design tokens such as:

- Colors
- Spacing
- Typography values
- Border values
- Radius values
- Focus values

For **today's slice**, the important focus is on border and focus tokens.

Example concept:

```css
:root {
    --color-border: ...;
    --color-focus: ...;
}
```

## `styles/base.css`

Contains shared/default styling used throughout the project.

For today's slice, shared defaults are required for:

```text
label
input
select
button
```

## `styles/layout.css`

Responsible for structural layout such as:

- Header/navigation arrangement
- Main content positioning
- Flexbox layouts
- Grid layouts
- Responsive page structure

## `styles/components.css`

Responsible for reusable components such as:

- Cards
- Buttons
- Form groups
- Tables
- Messages
- Other repeated UI patterns

## `styles/pages.css`

Responsible for styles that are specific to an individual page and are not appropriate as shared component rules.

---

# 10. Today's Slice — Settings Preview Card

## Objective

Add the AdminKit **Settings Preview** card as a **non-submitting form fragment** to `index.html`.

This is not a complete settings system. It is a UI and accessibility milestone.

---

# 11. Today's Layout

Because the assignment does not provide a fixed mockup, the following is a recommended implementation.

## Desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ Settings Preview                                             │
│                                                              │
│ Queue                     Start Date          End Date        │
│ ┌─────────────────────┐   ┌──────────────┐    ┌────────────┐ │
│ │ Select queue      ▼ │   │ 2026-09-01   │    │ 2026-09-02 │ │
│ └─────────────────────┘   └──────────────┘    └────────────┘ │
│                                                              │
│                                            ┌──────────────┐  │
│                                            │    Apply     │  │
│                                            └──────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Mobile

```text
┌─────────────────────────────┐
│ Settings Preview            │
│                             │
│ Queue                       │
│ ┌─────────────────────────┐ │
│ │ Select queue          ▼ │ │
│ └─────────────────────────┘ │
│                             │
│ Start Date                  │
│ ┌─────────────────────────┐ │
│ │ 2026-09-01              │ │
│ └─────────────────────────┘ │
│                             │
│ End Date                    │
│ ┌─────────────────────────┐ │
│ │ 2026-09-02              │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │          Apply          │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

The exact layout can differ as long as it remains usable, responsive, and consistent with the existing AdminKit interface.

---

# 12. Suggested HTML Structure

```html
<section class="settings-preview">
    <h2>Settings Preview</h2>

    <!-- Submission handling is intentionally not implemented in this milestone. -->
    <form action="#" method="get">
        <div class="form-field">
            <label for="queue">Queue</label>
            <select id="queue" name="queue">
                <option value="">Select queue</option>
                <option value="queue-1">Queue 1</option>
                <option value="queue-2">Queue 2</option>
                <option value="queue-3">Queue 3</option>
            </select>
        </div>

        <div class="form-field">
            <label for="start-date">Start Date</label>
            <input type="date" id="start-date" name="start-date">
        </div>

        <div class="form-field">
            <label for="end-date">End Date</label>
            <input type="date" id="end-date" name="end-date">
        </div>

        <button type="submit">Apply</button>
    </form>
</section>
```

This structure is an implementation example. It should be adapted to the project's existing naming and markup conventions.

---

# 13. Accessibility Requirements

## Programmatic labels

Every form control must have a programmatic label.

Correct:

```html
<label for="start-date">Start Date</label>
<input id="start-date" type="date" name="start-date">
```

The label's `for` value must match the control's `id`.

Do not rely on placeholder text as the only label.

## Explicit button type

Use:

```html
<button type="submit">Apply</button>
```

Do not depend on the browser's implicit button type.

## Visible focus

Keyboard focus must remain visible.

A possible implementation is:

```css
input:focus,
select:focus,
button:focus {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
}
```

The exact visual treatment can follow the project's existing design tokens, but the focus indicator must remain easy to see.

---

# 14. Form Behavior

The form is intentionally **non-functional in this milestone**.

That means:

- The user can interact with the controls.
- The user can move through the controls with the keyboard.
- The Apply button exists and is correctly typed.
- Actual application of the settings is not implemented yet.
- Submission handling is documented as a limitation.

Example:

```html
<form action="#" method="get">
```

The exact non-functional implementation can follow the team's chosen convention, but the limitation must be clear in the source.

---

# 15. Topics Covered by Today's Slice

Today's work is small, but it covers several foundational topics.

### HTML

- `<form>`
- `<label>`
- `<select>`
- `<option>`
- `<input type="date">`
- `<button>`
- Programmatic label association using `for` and `id`

### Accessibility

- Form labeling
- Keyboard navigation
- Focus visibility
- Native interactive controls
- Avoiding inaccessible custom-control behavior

### CSS

- Shared control styling
- CSS custom properties/design tokens
- Borders
- Focus styling
- Spacing
- Responsive layout
- Flexbox/Grid where appropriate

### Browser behavior

- Native select behavior
- Native date input behavior
- Native button behavior
- Keyboard focus behavior
- Form semantics

### Development practice

- Separating shared styles from page/component-specific styles
- Working from requirements rather than inventing unnecessary behavior
- Keeping later requirements out of the current milestone
- Using DevTools to inspect and test the implementation

---

# 16. What We Are NOT Doing Today

The following are intentionally outside the current slice:

```text
❌ Submission handler
❌ JavaScript form processing
❌ Validation library
❌ Settings page implementation/expansion
❌ Custom select component
❌ Complex backend/API integration
❌ Advanced state management
```

These should only be introduced when a later milestone explicitly requires them.

---

# 17. Definition of Done

Today's slice is complete when:

- [ ] Settings Preview card is present on the dashboard.
- [ ] Queue selector exists.
- [ ] Queue selector has a programmatic label.
- [ ] Start Date control exists.
- [ ] Start Date control has a programmatic label.
- [ ] End Date control exists.
- [ ] End Date control has a programmatic label.
- [ ] Apply button exists.
- [ ] Button type is explicitly declared.
- [ ] Shared control defaults are defined in `base.css`.
- [ ] Border styling uses a reusable token.
- [ ] Focus styling uses a reusable focus token.
- [ ] Focus remains visible during keyboard navigation.
- [ ] Form submission is intentionally non-functional.
- [ ] The limitation is documented in the source.
- [ ] No later requirement has been pulled into this milestone.

---

# 18. Manual Testing Checklist

## Mouse test

- Can the queue selector be opened and changed?
- Can the start and end dates be entered?
- Can the Apply button be reached and activated?

## Keyboard test

Use `Tab` to move through the page.

Verify that:

- Focus reaches the queue selector.
- Focus reaches the Start Date control.
- Focus reaches the End Date control.
- Focus reaches the Apply button.
- Focus remains visually obvious at every step.

## Label test

Inspect the HTML and confirm:

```text
label[for] → matching control[id]
```

Every control should have a corresponding label.

## Responsive test

Check the card at desktop and mobile widths.

Confirm that:

- Controls remain readable.
- Controls remain usable.
- No unexpected horizontal scrolling is introduced.
- The mobile layout is easy to use with a keyboard or touch input.

## DevTools test

Use browser DevTools to inspect:

- Computed styles
- Box model
- Grid/Flex layout
- Focus state
- Responsive viewport behavior
- Label/control associations in the DOM

---

# 19. Interview/Demo Explanation

A useful way to explain today's work in an interview is:

> “This milestone adds a settings-preview form fragment to the dashboard using semantic HTML and native form controls. The assignment specified the queue selector, date-range controls, Apply button, shared control styling, border/focus tokens, and accessibility requirements, but it did not provide a complete visual mockup or queue data. So I made reasonable UI assumptions while keeping the implementation within the stated scope. The form is intentionally non-functional because submission handling and validation are deferred to a later milestone.”

This demonstrates that the implementation was driven by the requirements rather than by adding functionality prematurely.

---

# 20. Scope and Decision-Making Principle

The project should follow this rule throughout development:

> **Implement what the current milestone requires, make reasonable assumptions only where the assignment is silent, document those assumptions, and do not implement future requirements early.**

This keeps each milestone understandable and makes it easier to explain:

1. What the assignment asked for.
2. What was missing from the assignment.
3. What design decisions were made to fill those gaps.
4. Why those decisions were appropriate.
5. What was deliberately left for later.

---

# 21. Technology

Current milestone:

- HTML5
- CSS3
- Native browser form controls
- Flexbox
- CSS Grid
- Responsive CSS
- CSS custom properties
- Browser DevTools

JavaScript is intentionally not part of the current milestone.

---

# 22. Future Work

Future requirements may introduce behavior and abstraction that are deliberately excluded today, including:

- Form submission handling
- Validation
- Settings page functionality
- Custom select behavior
- JavaScript/application logic
- Additional stateful interactions

These should be added only when their corresponding milestone requires them.
