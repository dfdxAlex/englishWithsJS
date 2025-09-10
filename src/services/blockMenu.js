// Функция находит элемент и прячет его

export function blockMenu(name, typ='now')
{
    const el = document.querySelector(name);
    if (el && typ=='now') {
        el.style.display = 'block';
         console.log('показали сейчас');
        return true;
    } 

    if (el && typ!='now') {
        el.addEventListener(typ, ()=>{blockMenu(name)});
        el.style.display = 'block';
        console.log('показали ');
        return true;
    }
    
    return false;
    

};