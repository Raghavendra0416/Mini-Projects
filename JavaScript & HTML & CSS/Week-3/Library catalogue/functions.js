"use strict";
import { books } from "./books.js";

// Unique Authors
let authors = new Set();

// Group By Genere
let groupByGenere = {};

// Function
books.map((book) => {
    authors.add(book.author);

    if (!(book.genre in groupByGenere)) {
        groupByGenere[book.genre] = [book.title];
    } else {
        groupByGenere[book.genre].push(book.title);
    }
});

// Sort By Year
// If Year is null then adds the book at last.
const sortByYear = [...books].sort((a, b) => {
    // To Add the year with null at the end.
    if (a.year === null) return 1;
    if (b.year === null) return -1;

    return a.year - b.year;
});

// Sort by title
const sortedBooks = [...books].sort(
    (a, b) => a.title.localeCompare(b.title)
);



// Get By Book Name
function getBookName(name) {
    return books.filter((book) => { book.title = name });
}

export {
    authors,
    groupByGenere,
    sortByYear,
    sortedBooks,
    getBookName,
}