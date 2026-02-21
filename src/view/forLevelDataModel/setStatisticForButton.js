

export function setStatisticForButton(level)
{
    // console.log(level);
    // console.log(`<h4 class="for-h4-header-button"> 
    //         💎 ${Math.round(localStorage.getItem(`level${level}_Ok`))}
    //         💀 ${Math.round(localStorage.getItem(`level${level}_Error`))}
    //     </h4>`);
    return `
        <h4 class="for-h4-header-button"> 
            💎 ${Math.round(localStorage.getItem(`level${level}_Ok`))}
            💀 ${Math.round(localStorage.getItem(`level${level}_Error`))}
        </h4>
    `;
}