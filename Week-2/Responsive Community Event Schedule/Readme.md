# Responsive Community Event Schedule

### Requirements:
- Mobile 1st Approach.
- Show Sessions(2-3) as Readable blocks.
- Time & Title should be the 1st thing the user should notice and also should have: with speaker, track, and room close by.


At Wider Width:
- sessions can form a grid or a carefully designed table.
- Long titles must expand the row or card instead of overlapping the next item.

### Must Work:
- User should see  date, time, title, speaker, track, and room for at least eight sessions.
- Use Grid for overall cards or schedule regions and Flexbox for small internal rows.
- Make sure a person's name and title are easy to scan, don't break the layout, and don't get messy if they are unusually long.
- Ensure that text doesn't overlap, clip awkwardly, or stretch the page layout when a title or name is too long.
- Use table for one card.

### Boundary cases to trigger
- Two sessions share a start time
- Title is 80 characters
- Viewport is 320 px
- Zoom is 200%

### Constraints
- No device-name breakpoints such as iPhone
- No fixed heights
- No horizontal page scroll

### How does the layout Look:
- Follow Mobile 1st Approach.
- It should only conatin cards.
- Cards should contain different information like:
    Tables, Address, paragraph, content(title, date, time, speaker, track)..etc..
- The Cards should be responsive
- When the page becomes wider(desktop) then the title should be shown clearly by taking the desktop width.

### Why am i building the layout like this?
Because Each card contains different information and will be having different screen sizes.
So when Cards are of differnt screen sizes and needs to be responsive, it is hard to control them like: overflowing of text, aligning of text, sizes of text, controlling the data inside the card, also making the data inside the card responsive, controlling overflow.
**By Doing all this makes better practice.**



------------------------------------------------------------------------
## What is left to do?
- Add 3 more cards inside the Events.
- Use Grid inside the container and control the responsiveness for different screens.

As suggested for cards:
- Start with 1 column for narrow layout.
- took space as per content for wider screens.

- Adjust the cards content inside correctly.