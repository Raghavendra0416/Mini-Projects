"use strict";
const libraryCatalogue = [
    { id: 1, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", year: 1965 },
    { id: 2, title: "1984", author: "George Orwell", genre: "Sci-Fi", year: 1949 },
    { id: 3, title: "Animal Farm", author: "George Orwell", genre: "Fiction", year: 1945 },
    { id: 4, title: "Steve Jobs", author: "Walter Isaacson", genre: "Biography", year: 2011 },
    { id: 5, title: "Foundation", author: "Isaac Asimov", genre: "Sci-Fi", year: null },
    { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937 },
    { id: 7, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1954 },
    { id: 8, title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", year: 2011 }
];

const books = Object.freeze(libraryCatalogue);

console.log(books);


export { books };