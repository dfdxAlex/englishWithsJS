
export function delElToDinamicMenu(idName)
{
    const dell = document.getElementById(idName);
    if (!dell) return;
    if (dell) dell.remove();
}