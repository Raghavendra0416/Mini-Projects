## What needs to be done?
-  Need to add the movies and need to show "No films added yet." when there are no movies.
- Set titles using textContent (not innerHTML) to safely render characters like < and >.
- Assign a stable data-movie-id to each row.
- Clear the input field after adding a movie.
- Ensure updating a movie's title in your data also updates that row's text.
- Include an h1 and a visible label on the title field.

## What needs to be done?
- Each movie row now has visible state and actions: watched or not watched, a rating choice, and Delete. 
- Put the actions inside the row so it is obvious which movie they affect. 
- A nested icon may sit inside a button, but the button still needs readable text or an accessible name. i.e use `aria-label=""`.


```
┌ Film club watchlist ───────────────────────────────┐
│ [Movie title                         ] [Add]       │
│                                                   │
│ The Lunchbox   Not watched  Rating [3 ▾] [Mark] [Delete]
│ Arrival        Watched      Rating [5 ▾] [Undo] [Delete]
│                                                   │
│ One listener lives on this list, not on each row. │
└───────────────────────────────────────────────────┘   
```
