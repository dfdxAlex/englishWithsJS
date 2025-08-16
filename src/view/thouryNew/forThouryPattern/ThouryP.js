

export function ThouryP(typ = "start", id=0)
{
    if (typ === "start") return `<p id="thoury-pattern-p-${id}">`;
    else return `</p>`;
}