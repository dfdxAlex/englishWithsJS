import './styles/helpForHomeMenuRU.scss';

export function helpForHomeMenuUA()
{
    return `
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Навігація по розділах</h5>
            <p><strong>Перший пункт меню</strong> — вибір тесту з граматики.</p>
            <p><strong>Другий пункт меню</strong> — вибір тестів для вивчення слів.</p>
            <p><strong>Третій пункт меню</strong> — <em>допомога</em>. Тут можна знайти як інформацію про суть завдання, так і граматичні правила за темою тесту.</p>
            <p><strong>Розділ "Статистика"</strong> — показує досягнення у поточному тесті.</p>
            <p><strong>Розділ "Setting"</strong> — вибір типу тесту.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="button-close-info-modal">
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
}
