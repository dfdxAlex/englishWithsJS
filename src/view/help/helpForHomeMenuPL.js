import './styles/helpForHomeMenuRU.scss';

export function helpForHomeMenuPL()
{
    return `
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Nawigacja po sekcjach</h5>
            <p><strong>Pierwszy element menu</strong> — wybór testu gramatycznego.</p>
            <p><strong>Drugi element menu</strong> — wybór testów do nauki słówek.</p>
            <p><strong>Trzeci element menu</strong> — <em>pomoc</em>. Znajdziesz tu zarówno informacje o zadaniu, jak i zasady gramatyczne związane z tematem testu.</p>
            <p><strong>Sekcja "Statystyka"</strong> — pokazuje osiągnięcia w bieżącym teście.</p>
            <p><strong>Sekcja "Setting"</strong> — wybór typu testu.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
}
