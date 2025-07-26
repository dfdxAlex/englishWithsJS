export function helpForHomeMenuRU()
{
    return `
    <div class="modal" tabindex="-1" id="infoModal" style="display: block; background-color: rgba(0,0,0,0.5);">
      <div class="modal-dialog" style="max-width: 600px; margin: 10% auto;">
        <div class="modal-content" style="border-radius: 12px; padding: 20px; font-family: sans-serif;">
          <div class="modal-body" style="color: #333;">
            <h5 style="margin-bottom: 16px;">Навигация по разделам</h5>
            <p><strong>Первый пункт меню</strong> — выбор теста по грамматике.</p>
            <p><strong>Второй пункт меню</strong> — выбор тестов для изучения слов.</p>
            <p><strong>Третий пункт меню</strong> — <em>помощь</em>. Здесь можно найти как информацию о сути задания, так и грамматические правила по теме теста.</p>
            <p><strong>Раздел "Статистика"</strong> — отображает достижения в текущем тесте.</p>
            <p><strong>Раздел "Setting"</strong> — выбор типа теста.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer" style="border-top: none; text-align: right;">
            <button type="button" class="btn btn-primary" onclick="document.getElementById('infoModal').style.display='none';">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>    
    `;
}
