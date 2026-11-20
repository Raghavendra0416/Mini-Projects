// Create src/ui/requestState.js with visible loading, empty, and error painters.
// Error includes a Retry button.
// Empty and error must use different copy.

function createMessage(text, modifier) {
    const message = document.createElement("p");
    message.className = `request-state request-state--${modifier}`;
    message.textContent = text;
    return message;
}

/** Shown while products are being fetched. */
function paintLoading(container, text = "Loading products...") {
    const message = createMessage(text, "loading");
    message.setAttribute("role", "status");
    message.setAttribute("aria-live", "polite");
    container.replaceChildren(message);
}

/** Shown when the request worked but nothing matches (no data / no results). */
function paintEmpty(container, text = "No products match your search. Try a different name or category.") {
    const message = createMessage(text, "empty");
    message.setAttribute("role", "status");
    container.replaceChildren(message);
}

/** Shown when the request failed. Includes a Retry button. */
function paintError(container, onRetry, text = "We couldn't load the products. Check your connection and try again.") {
    const wrapper = document.createElement("div");
    wrapper.className = "request-state request-state--error";
    wrapper.setAttribute("role", "alert");
    // #products is a grid, so span the full width and centre the content
    wrapper.style.gridColumn = "1 / -1";
    wrapper.style.textAlign = "center";

    const message = document.createElement("p");
    message.textContent = text;

    const retryBtn = document.createElement("button");
    retryBtn.type = "button"; // never submit the form
    retryBtn.className = "retry-btn";
    retryBtn.textContent = "Retry";
    retryBtn.addEventListener("click", onRetry);

    wrapper.append(message, retryBtn);
    container.replaceChildren(wrapper);
}

export { paintLoading, paintEmpty, paintError };