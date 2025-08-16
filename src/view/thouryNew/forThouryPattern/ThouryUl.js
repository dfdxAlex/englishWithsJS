
export function ThouryUl(typ = "start", id=0)
{
    if (typ === "start") return `<ul id="thoury-pattern-ui-${id}">`;
    else return `</ul>`;
}