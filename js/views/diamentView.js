function diamentView(diament, emodzi, smile)
{
    let strHeader = `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background-color: #f0f8ff; border-bottom: 2px solid #dcdcdc;">
        <div style="display: flex; align-items: center;">
            <span style="font-size: 1.5rem; color: #333; margin-right: 8px;">${diament}</span>
            <span style="margin: 0 4px; font-size: 1.5rem;" data-bs-toggle="modal" data-bs-target="#diamondsModal">${emodzi}</span>
        </div>
        <div style="display: flex; align-items: center;">
        <button onclick = "Help.viewhandleHelpToTranslate(helpForProgramRU(),'RwzDBkaEwjI')" type = "button" style = "font-sise: 0.55rem" class="text-primary mb-3 button-help">&#10067;</button> 
            ${smile}  
        </div>
    </div>`;
    document.querySelector('#diament').innerHTML = strHeader;
}
