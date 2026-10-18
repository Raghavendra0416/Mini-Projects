"use strict";
import {
    bookNames,
    authors,
    groupByGenre,
    sortByYear,
    sortedByTitle,
    getBookName
} from "./functions.js";

// Render data into an ordered or unordered list
function renderList(id, data, formatItem = (item) => item) {
    const container = document.getElementById(id);

    if (!container) return;

    // helps to create an lightweight, off-screen DOM container that lets you build and group multiple DOM nodes in memory before attaching them to the live page in a single operation
    const fragment = document.createDocumentFragment();

    Array.from(data).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = formatItem(item);
        fragment.append(li);
    });

    container.replaceChildren(fragment);
}

// Original book order
renderList("original", bookNames);

// Unique authors
renderList("authors", authors);

// Books grouped by genre
function renderGenres(id, groups) {
    const container = document.getElementById(id);

    if (!container) return;

    // helps to create an lightweight, off-screen DOM container that lets you build and group multiple DOM nodes in memory before attaching them to the live page in a single operation
    const fragment = document.createDocumentFragment();

    Object.entries(groups).forEach(([genre, titles]) => {
        const section = document.createElement("section");

        const heading = document.createElement("h3");
        heading.textContent = genre;

        const ul = document.createElement("ul");

        titles.forEach((title) => {
            const li = document.createElement("li");
            li.textContent = title;
            ul.append(li);
        });

        section.append(heading, ul);
        fragment.append(section);
    });

    container.replaceChildren(fragment);
}

renderGenres("genre", groupByGenre);

// Books sorted by title
renderList(
    "title",
    sortedByTitle,
    (book) => `${book.title} — ${book.author}`
);

// Books sorted by year
renderList(
    "year",
    sortByYear,
    (book) => `${book.year ?? "Year unknown"} — ${book.title}`
);


// Populate the book-selection dropdown
const bookSelect = document.getElementById("options");

const placeholder = document.createElement("option");
placeholder.value = "";
placeholder.textContent = "Select a book";
placeholder.disabled = true;
placeholder.selected = true;

const optionsFragment = document.createDocumentFragment();
optionsFragment.append(placeholder);

bookNames.forEach((title) => {
    const option = document.createElement("option");
    option.value = title;
    option.textContent = title;
    optionsFragment.append(option);
});

bookSelect.replaceChildren(optionsFragment);


// Display selected book details
const detailsContainer = document.getElementById("book-details");

bookSelect.addEventListener("change", () => {
    const book = getBookName(bookSelect.value);

    if (!book) {
        detailsContainer.textContent = "Book not found.";
        return;
    }

    const details = document.createElement("dl");

    const fields = [
        ["ID", book.id],
        ["Title", book.title],
        ["Author", book.author],
        ["Genre", book.genre],
        ["Year", book.year ?? "Unknown"]
    ];

    fields.forEach(([label, value]) => {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");

        dt.textContent = label;
        dd.textContent = value;

        details.append(dt, dd);
    });

    detailsContainer.replaceChildren(details);
});
