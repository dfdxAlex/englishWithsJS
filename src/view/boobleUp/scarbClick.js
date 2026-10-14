export function scarbClick(xx=1, forBooble, DataOk)
{
    const selectScarb = document.querySelector('.div-for-scarb');

    if (!selectScarb) return;

    const x = selectScarb.getBoundingClientRect().left + window.scrollX;
    const y = selectScarb.getBoundingClientRect().top + window.scrollY;

    selectScarb.remove();
    document.querySelector('#bonus-diamant')?.remove();

    const bonusForScarb = document.createElement('div');
    bonusForScarb.classList.add('bonus-for-scarb');

    const span = document.createElement('span');
    span.classList.add('text-about-scarb');
    span.textContent = forBooble.diamant * xx;

    // специально для статистики, сбрасывается в статистике ежедневной
    forBooble.bonusX2 = forBooble.diamant * xx;

    bonusForScarb.appendChild(span);

    bonusForScarb.style.left = `${x}px`;
    bonusForScarb.style.top = `${y}px`;

    document.body.appendChild(bonusForScarb);

    DataOk.addOk(forBooble.diamant * xx);

    setTimeout(() => {
        bonusForScarb.remove();
    }, 2500);
}
