export function helpForHomeMenuUA()
{
    return `
    <div class="modal" tabindex="-1" id="infoModal" style="display: block; background-color: rgba(0,0,0,0.5);">
      <div class="modal-dialog" style="max-width: 600px; margin: 10% auto;">
        <div class="modal-content" style="border-radius: 12px; padding: 20px; font-family: sans-serif;">
          <div class="modal-body" style="color: #333;">
            <h5 style="margin-bottom: 16px;">Навігація по розділах</h5>
            <p><strong>Перший пункт меню</strong> — вибір тесту з граматики.</p>
            <p><strong>Другий пункт меню</strong> — вибір тестів для вивчення слів.</p>
            <p><strong>Третій пункт меню</strong> — <em>допомога</em>. Тут можна знайти як інформацію про суть завдання, так і граматичні правила за темою тесту.</p>
            <p><strong>Розділ "Статистика"</strong> — показує досягнення у поточному тесті.</p>
            <p><strong>Розділ "Setting"</strong> — вибір типу тесту.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer" style="border-top: none; text-align: right;">
            <button type="button" class="btn btn-primary" onclick="document.getElementById('infoModal').style.display='none';">
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
}
