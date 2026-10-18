"use strict";
import { books } from "./books.js";

// Get book names in their original order
const bookNames = books.map((book) => book.title);

// Get unique authors
const authors = new Set(books.map((book) => book.author));

// Group books by genre
const groupByGenre = books.reduce((groups, book) => {
    if (!groups[book.genre]) {
        groups[book.genre] = [];
    }

    groups[book.genre].push(book.title);

    return groups;
}, {});

// Sort by year (unknown years go last)
const sortByYear = [...books].sort((a, b) => {
    if (a.year === null && b.year === null) return 0;
    if (a.year === null) return 1;
    if (b.year === null) return -1;

    return a.year - b.year;
});

// Sort by title
const sortedByTitle = [...books].sort((a, b) =>
    a.title.localeCompare(b.title)
);

// Find a book by title
function getBookName(name) {
    return books.find(
        (book) =>
            book.title.toLowerCase() === name.trim().toLowerCase()
    );
}

export {
    bookNames,
    authors,
    groupByGenre,
    sortByYear,
    sortedByTitle,
    getBookName
};