function card1(city) {
    console.log("city1:", city);

    const card1 = document.getElementById('city1');
    card1.innerHTML =
        `<p>${city.city},</p>
        <p>${city.temperature}°C ${city.condition}</p>
        <p>Wind: ${city.wind}</p>`;
}

function card2(city) {
    console.log("city2:", city);

    const card2 = document.getElementById('city2');
    card2.innerHTML =
        `<p>${city.city},</p>
        <p>${city.temperature}°C ${city.condition}</p>
        <p>Wind: ${city.wind}</p>`;
}

export {
    card1,
    card2
}