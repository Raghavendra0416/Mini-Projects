let data = ["The Lunchbox", "Cats < Dogs", "Arrival"];
// let data = [];

const noMovie = document.getElementById("no-movies");
const ListELe = document.getElementById("movies-list");

if (data.length === 0) {
    noMovie.style.display = 'block';
    ListELe.style.display = 'none';
}

function renderMovies(movies) {
    const att = "data-movie-id";
    ListELe.innerText = "";
    movies.forEach((movie, i) => {
        const li = document.createElement('li');
        li.setAttribute(att, i);
        li.innerText = movie;

        ListELe.appendChild(li);
    });
}

// Inital render
renderMovies(data);

document.getElementById('myForm').addEventListener("submit", handleData);

function handleData(e) {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const title = formData.get('title');
    const title = document.getElementById('title');

    data = [...data, title.value];

    renderMovies(data);

    title.value = "";
}