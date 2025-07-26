export function helpForHomeMenuPL()
{
    return `
    <div class="modal" tabindex="-1" id="infoModal" style="display: block; background-color: rgba(0,0,0,0.5);">
      <div class="modal-dialog" style="max-width: 600px; margin: 10% auto;">
        <div class="modal-content" style="border-radius: 12px; padding: 20px; font-family: sans-serif;">
          <div class="modal-body" style="color: #333;">
            <h5 style="margin-bottom: 16px;">Nawigacja po sekcjach</h5>
            <p><strong>Pierwszy element menu</strong> — wybór testu gramatycznego.</p>
            <p><strong>Drugi element menu</strong> — wybór testów do nauki słówek.</p>
            <p><strong>Trzeci element menu</strong> — <em>pomoc</em>. Znajdziesz tu zarówno informacje o zadaniu, jak i zasady gramatyczne związane z tematem testu.</p>
            <p><strong>Sekcja "Statystyka"</strong> — pokazuje osiągnięcia w bieżącym teście.</p>
            <p><strong>Sekcja "Setting"</strong> — wybór typu testu.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer" style="border-top: none; text-align: right;">
            <button type="button" class="btn btn-primary" onclick="document.getElementById('infoModal').style.display='none';">
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
}
