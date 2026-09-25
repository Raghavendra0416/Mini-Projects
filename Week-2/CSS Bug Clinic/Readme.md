## This Mini Project is build to show failures and show how they are resolved.

### What failures does this project should contain?
1. Clipped text
2. Unwanted Page Scroll
3. Hidden focus
4. A layer covering a control
5. Include at least one specificity conflict
6. Overflow
7. Collapsed Margin
8. Flex min-width
9. Stacking
10. Grid-Sizing
11. Long word
12. Missing asset
13. Mobile width defect 

### Other Instructions:
- Keep a short repair log beside the code
- Reproduce every defect before changing code
- Record observed evidence, root cause, minimal fix, and verification
- Use DevTools rule toggling and computed styles
- Keep before and after screenshots for three defects

### How the page should look?
-  A header sits above a lead story
- a row of smaller story cards
-  a compact sidebar
```
Broken page                         Repaired page
┌ News dashboard ─────────┐         ┌ News dashboard ─────────┐
│ Lead story text overfl...│         │ Lead story wraps safely │
│ [card][card]────→ scroll │         │ [card] [card]           │
│ menu hidden under image │         │ menu above image         │
│ focus cannot be seen    │         │ focus ring visible       │
└─────────────────────────┘         └──────────────────────────┘

Repair log: defect | evidence | cause | fix | verification
```

| Failure                | Typical Problem                |
| ---------------------- | ------------------------------ |
| Clipped Text           | Text gets cut off              |
| Unwanted Page Scroll   | Unexpected scrollbar           |
| Hidden Focus           | No keyboard focus indicator    |
| Layer Covering Control | Controls can't be clicked      |
| Specificity Conflict   | Wrong CSS rule applied         |
| Overflow               | Content escapes container      |
| Collapsed Margin       | Unexpected spacing             |
| Flex Min-Width         | Flex items won't shrink        |
| Stacking               | Wrong z-index layering         |
| Grid Sizing            | Grid columns size incorrectly  |
| Long Word              | Word causes layout break       |
| Missing Asset          | Image/font/file not found      |
| Mobile Width Defect    | Layout breaks on small screens |


-------
┌──────────────────────── News Dashboard ────────────────────────┐
│ Header                                                         │
├─────────────────────────┬──────────────────────────────────────┤
│ Lead Story              │ Compact Sidebar                     │
│ Main article            │ Trending                            │
│ Hero image              │ Newsletter                          │
│ Summary                 │ Weather                             │
├─────────────────────────┴──────────────────────────────────────┤
│ Story Card  │ Story Card │ Story Card │ Story Card             │
└────────────────────────────────────────────────────────────────┘