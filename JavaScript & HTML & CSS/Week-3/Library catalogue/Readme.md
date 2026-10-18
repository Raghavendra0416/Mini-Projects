## What needs to be done?
- Create a hardcoded array of at least eight book objects with the properties `{id, title, author, genre, year}`.
- Include at least three different genres, some repeating authors, and at least one book with a missing year.

***Important - Do Not Update the Original Array, only read the data.***

## Logic Implementation
- Extract a list of unique authors using a `Set`.
- Group the books by genre using a `Map`.
- A `title-sorted list` that does not change the original array's order(copy, then sort).
- A `year-sorted list` with a written missing-year policy. i.e Create a year-sorted list and document your sorting policy for missing years in a `Readme.md` file.
- Print or render: original order, unique authors, each genre group, sorted-by-title order.
- Use pure JavaScript. Do not use external libraries or fetch calls.

## Need to Pass:
- After sorting, the original array's order shold be unchanged (log both- changed and original).
- Unique author list should not have duplicates.
- The total count of books inside all Map arrays combined must exactly match your original array length (no missing, no duplicates).
i.e We will be creating a new array for a genere every time for a book, and the new array's contains the books related to that genere. So, by combining all the genere books should be same as the length of the books in the original array. the new array should not contain any duplicates of the same book in different geners.
- Missing years should follow the policy and need to be noted in the `Readme.md`
.i.e 
issue: When you sort your books by year, JavaScript needs to know what to do with the book(s) that don't have a year listed.
policy: You must decide on a specific rule for this. For example, your rule could be: "Books with no year will always appear at the very end of the sorted list."
Noting: Note the rule in `Readme.md`


## Page Layout:
```
┌ Library catalogue ───────────────────────────────┐
│ Original shelf order                            │
│ 1. River Town   2. Night Bus   3. Small Worlds  │
│                                                  │
│ Unique authors: A. Sen, M. Rao, T. Ali           │
│                                                  │
│ Grouped by genre                                 │
│ Fiction: River Town, Small Worlds                │
│ Essays: Night Bus                                │
│                                                  │
│ Sorted view [Title ▾]                            │
└──────────────────────────────────────────────────┘
```