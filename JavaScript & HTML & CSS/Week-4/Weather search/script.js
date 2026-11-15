const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const offlineCheckbox = document.getElementById('offline-checkbox');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    resultContainer.textContent = "Loading...";
    searchBtn.disabled = true;

    let fetchUrl = './weather.json';
    if (offlineCheckbox.checked) {
        fetchUrl = 'https://this-host-does-not-exist.invalid/';
    }

    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            renderResult(data);
        })
        .catch(error => {
            renderResult('error');

            document.getElementById('retry-btn').addEventListener('click', () => {
                searchBtn.click();
            });
        })
        .finally(() => {
            searchBtn.disabled = false;
        });
});

function renderResult(data) {
    if (data === 'error') {
        resultContainer.innerHTML = `
            <p>Error version: Could not reach data. Check your connection.</p>
            <button id="retry-btn">Retry</button>`;
        return;
    }

    const searchString = cityInput.value.trim().toLowerCase();
    const foundCity = data.find((item) =>
        item.city.toLowerCase().includes(searchString)
    );

    if (!foundCity) {
        resultContainer.innerHTML = `<p>Unknown city</p>`;
        return;
    }

    resultContainer.innerHTML = `
        <p>${foundCity.city}, ${foundCity.country}</p>
        <p>${foundCity.temperature}°C, ${foundCity.condition}</p>
        <p>Wind: ${foundCity.wind}</p>`;
}