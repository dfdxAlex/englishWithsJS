import { getImageBooble } from './getImageBooble.js';
import { getBonusBooble } from './getBonusBooble.js';

export function setBoobleUp(diamant, divCreate) {
    // постоянные настройки пузырька
    divCreate.innerHTML = getImageBooble(diamant) + getBonusBooble(diamant);
    divCreate.style.position = "absolute"; // Позволяет двигать элемент по координатам
    divCreate.id = 'boobleUp';
    document.body.appendChild(divCreate);
}