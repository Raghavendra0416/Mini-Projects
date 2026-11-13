// let data = ["The Lunchbox", "Cats < Dogs", "Arrival"];

let data = [
    { movie: "The Lunchbox", watched: true, rating: 3 },
    { movie: "Cats < Dogs", watched: false, rating: 2 },
    { movie: "Arrival", watched: true, rating: 4 },
];

const noMovie = document.getElementById("no-movies");
const listEle = document.getElementById("movies-list");
const form = document.getElementById("myForm");
const titleInput = document.getElementById("title");

if (data.length === 0) {
    noMovie.style.display = 'block';
    ListELe.style.display = 'none';
}

function renderMovies(movies) {
    listEle.replaceChildren();

    const isEmpty = movies.length === 0;
    noMovie.style.display = isEmpty ? "block" : "none";
    listEle.style.display = isEmpty ? "none" : "block";

    movies.forEach((item, i) => {
        const li = document.createElement('li');
        li.dataset.movieId = i;

        //Title
        const title = document.createElement("strong");
        title.textContent = item.movie;

        // Watched status
        const status = document.createElement("span");
        status.className = "status";
        status.textContent = item.watched ? "Watched" : "Not watched";

        // Rating select
        const select = document.createElement("select");
        select.dataset.action = "rating";
        select.setAttribute("aria-label", `Rating for ${item.movie}`);
        for (let r = 1; r <= 5; r++) {
            const option = document.createElement("option");
            option.value = r;
            option.textContent = r;
            select.appendChild(option);
        }
        select.value = item.rating;

        // Toggle button
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.dataset.action = "toggle";
        toggleBtn.textContent = item.watched ? "Undo" : "Mark";
        toggleBtn.setAttribute(
            "aria-label",
            item.watched
                ? `Mark ${item.movie} as not watched`
                : `Mark ${item.movie} as watched`
        );


        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.dataset.action = "delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("aria-label", `Delete ${item.movie}`);

        li.append(title, " ", status, " Rating ", select, " ", toggleBtn, " ", deleteBtn);
        listEle.appendChild(li);
    });
}


listEle.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const li = btn.closest("li");
    const index = Number(li.dataset.movieId);

    if (btn.dataset.action === "toggle") {
        data[index].watched = !data[index].watched;
    } else if (btn.dataset.action === "delete") {
        data = data.filter((_, i) => i !== index);
    }

    renderMovies(data);
});


listEle.addEventListener("change", (e) => {
    if (e.target.dataset.action !== "rating") return;

    const index = Number(e.target.closest("li").dataset.movieId);
    data[index].rating = Number(e.target.value);

    renderMovies(data);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = titleInput.value.trim();
    if (!value) return;

    data = [...data, { movie: value, watched: false, rating: 3 }];
    renderMovies(data);

    titleInput.value = "";
    titleInput.focus();
});

// Initial render
renderMovies(data);