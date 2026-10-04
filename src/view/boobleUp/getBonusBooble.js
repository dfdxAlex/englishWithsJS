
export function getBonusBooble(diamant)
{
    
    if (diamant === '-1' || diamant === '0') {
        return '';
    }

    return `<span class="score">${diamant}</span>`;
}