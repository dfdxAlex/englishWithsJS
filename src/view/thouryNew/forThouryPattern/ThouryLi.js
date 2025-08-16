
export function ThouryLi(typ = "start", id=0)
{
    if (typ === "start") return `<li id="thoury-pattern-li-${id}">`;
    else return `</li>`;
}