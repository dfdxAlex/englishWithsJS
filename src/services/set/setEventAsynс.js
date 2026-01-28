
export function setEventAsynс(calback, eventName, id)
{
    const idResetErrorByDynamicMenu = setInterval(()=>{
        const smileForDinamicMenu = document.getElementById(id);
        if (smileForDinamicMenu) {
            smileForDinamicMenu.addEventListener(eventName, () => {
                calback();
            });
            clearInterval(idResetErrorByDynamicMenu);
        } 
    }, 200);
}