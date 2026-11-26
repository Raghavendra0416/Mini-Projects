// Varibales
let cities = [];
let timer;

// Fetch Cities
async function fetchCities() {
    if (cities.length > 0) return;
    try {
        const response = await fetch("./weather.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        cities = await response.json();
    } catch (error) {
        console.error(error.message);
    }
}

// Filter Cities
function filterCities(userInput) {
    const query = userInput.trim().toLowerCase();
    if (!query) return [];

    return cities.filter(ele =>
        ele.city.toLowerCase().includes(query)
    );
}

// Debounce
function debounce(text, delay = 1000) {
    clearTimeout(timer);

    return new Promise((resolve) => {
        timer = setTimeout(async () => {
            await fetchCities();
            const filteredCities = filterCities(text);
            resolve(filteredCities);
        }, delay);
    });
}

function cancelDebounce() {
    clearTimeout(timer);
}

export {
    debounce,
    cancelDebounce
}
