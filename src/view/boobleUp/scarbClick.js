export function scarbClick(xx=1, diamant, DataOk)
{
    const selectScarb = document.querySelector('.scarb');

    if (!selectScarb) return;

    const x = selectScarb.getBoundingClientRect().left + window.scrollX;
    const y = selectScarb.getBoundingClientRect().top + window.scrollY;

    selectScarb.remove();
    document.querySelector('#bonus-diamant')?.remove();

    const bonusForScarb = document.createElement('div');
    bonusForScarb.classList.add('bonus-for-scarb');

    const span = document.createElement('span');
    span.classList.add('text-about-scarb');
    span.textContent = diamant * xx;

    bonusForScarb.appendChild(span);

    bonusForScarb.style.left = `${x}px`;
    bonusForScarb.style.top = `${y}px`;

    document.body.appendChild(bonusForScarb);

    DataOk.addOk(diamant * xx);

    setTimeout(() => {
        bonusForScarb.remove();
    }, 2500);
}
