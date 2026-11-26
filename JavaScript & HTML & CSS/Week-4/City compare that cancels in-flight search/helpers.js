// helpers.js
export function debounce(fn, delay = 400) {
    let timer;
    const debounced = (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
    debounced.cancel = () => clearTimeout(timer);
    return debounced;
}

export async function searchCities(query, signal) {
    const response = await fetch("./weather.json", { signal });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();

    const q = query.trim().toLowerCase();
    return data.filter(c => c.city.toLowerCase().includes(q));
}

