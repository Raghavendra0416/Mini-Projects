## Must Work:
#### Round 1:
When User clicks button print below:
- console.log: logs - `click-start`
- setTimeout(..., 0): logs - `timeout-0`
- Promise.resolve().then(...): logs - `promise-then`
- console.log: logs - `click-end`.
Disable or hide the button until a "I have predicted" checkbox is on.

#### Round 2:
- Add a fake fetch, not the browser fetch API.
    ```
        function fakeFetch() {
        return new Promise((resolve) => {
        setTimeout(() => resolve("catalogue"), 0);
        });
        }
    ```
- In the same click (or a second button), call fakeFetch().then(...) and log when the promise function starts, when fakeFetch returns, and when then runs. Predict the full order again before running.



## What the Page needs to do?
- On the left block: User Should enter the expected/Predicted Output.
- On the right block: When user clicks on run, User should see the Observed Result. So, user can compare both the outputs.
- The User can click on the reset button to reset the observed output.(Not mandotory).
- Disable or hide the button until a "I have predicted" checkbox is on.

## Layout:
```
┌ Predict first ───────────┐  ┌ Observed after Run ─────┐
│ 1 click-start           │  │ 1 click-start           │
│ 2 click-end             │  │ 2 click-end             │
│ 3 promise-then          │  │ 3 promise-then          │
│ 4 timeout-0             │  │ 4 timeout-0             │
│ [ ] I have predicted    │  │                         │
│ [Run, initially locked] │  │ [Reset]                 │
└─────────────────────────┘  └─────────────────────────┘
```

