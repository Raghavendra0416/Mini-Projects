function renderCities(citiesList) {
    const ul = document.getElementById("cityList");
    ul.innerHTML = "";

    citiesList.forEach((ele) => {
        const li = document.createElement('li');
        li.textContent = `${ele.city}, ${ele.country}`;
        li.dataset.id = ele.id;
        ul.appendChild(li);
    })
}

function renderCompare(cities) {
    document.getElementById('compare').innerHTML = cities.map(c => `
        <article class="cities">
            <h2>${c.city}</h2>
            <p>${c.temperature}°C ${c.condition}</p>
            <p>Wind ${c.wind}</p>
        </article>`).join('');
}

export {
    renderCities,
    renderCompare
};