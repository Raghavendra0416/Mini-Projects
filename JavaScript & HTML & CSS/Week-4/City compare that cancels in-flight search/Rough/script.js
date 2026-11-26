// script.js
import { debounce, cancelDebounce } from "./helpers.js";
import { renderCities } from "./renderCities.js";
import { card1, card2 } from "./cards.js"

// Seach Cities
const input = document.getElementById('search');
input.addEventListener('input', async (e) => {
    const value = e.target.value;
    if (!value.trim()) {
        cancelDebounce();
        renderCities([]);
        return;
    }
    const filteredCities = await debounce(value);
    renderCities(filteredCities);

    // Add city Cards
    let count = 0;
    const ul = document.getElementById('cityList');

    ul.addEventListener('click', (e) => {
        const selectedCity = e.target.innerText.split(',')[0].toLowerCase().trim('');
        if (count === 2) {
            console.log("count resets");
            count = 0;
        }
        count++;

        if (count === 1) {
            const city1 = filteredCities.filter(ele => ele.city.toLowerCase() === selectedCity);
            card1(city1[0]);
        } else if (count === 2) {
            const city2 = filteredCities.filter(ele => ele.city.toLowerCase() === selectedCity);
            card2(city2[0]);
        }

        console.log(count);
    })
});
