import { debounce, searchCities } from "./helpers.js";
import { renderCities, renderCompare } from "./renderCities.js";

const input = document.getElementById('search');
const status = document.getElementById('status');
const list = document.getElementById('cityList');

let controller;
let currentResults = [];
let selected = [];

async function runSearch(query) {
    controller?.abort();
    controller = new AbortController();

    status.textContent = "Loading...";
    try {
        currentResults = await searchCities(query, controller.signal);
        renderCities(currentResults);
        status.textContent = currentResults.length ? "" : `No cities found for "${query}"`;
    } catch (err) {
        if (err.name === "AbortError") return;   // newer search took over, show nothing
        renderCities([]);
        status.textContent = "Network error. Please try again.";
    }
}

const debouncedSearch = debounce(runSearch, 400);

input.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    if (!value) {
        debouncedSearch.cancel();
        controller?.abort();
        currentResults = [];
        renderCities([]);
        status.textContent = "";
        return;
    }
    debouncedSearch(value);
});

// Registered once, using event delegation
list.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const city = currentResults.find(c => c.id === Number(li.dataset.id));
    if (!city || selected.some(c => c.id === city.id)) return;

    selected = [...selected, city].slice(-2);   // keep the latest two
    renderCompare(selected);

    const names = selected.map(c => c.city.toLowerCase()).join(',');
    history.replaceState(null, '', `?cities=${names}`);
});

async function restoreFromUrl() {
    const param = new URLSearchParams(location.search).get('cities');
    if (!param) return;

    const names = param.split(',').map(n => n.trim().toLowerCase());
    const response = await fetch("./weather.json");
    const data = await response.json();

    selected = names
        .map(n => data.find(c => c.city.toLowerCase() === n))
        .filter(Boolean)
        .slice(0, 2);
    renderCompare(selected);
}

restoreFromUrl();