// сбросс ошибок
export function succesP(ok, err)
{
    // Если хватает пунктов для сбрасывания ошибок
    if (err*2 <= ok) {
        err *= 2;
        ok = ok - err;
        err = 0;
    } else  {
        err = err - Math.floor(ok / 2);
        ok = 0;
    } 

    return [ok, err];
}