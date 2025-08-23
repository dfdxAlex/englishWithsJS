

export function setStatisticForButton(level)
{
    return `
        <h4 class="for-h4-header-button"> 
            💎 ${Math.round(localStorage.getItem(`level${level}_Ok`))}
            💀 ${Math.round(localStorage.getItem(`level${level}_Error`))}
        </h4>
    `;
}