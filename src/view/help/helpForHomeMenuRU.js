import './styles/helpForHomeMenuRU.scss';

export function helpForHomeMenuRU()
{
    return `
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div>
            <h5>Навигация по разделам</h5>
            <p><strong>Первый пункт меню</strong> — выбор теста по грамматике.</p>
            <p><strong>Второй пункт меню</strong> — выбор тестов для изучения слов.</p>
            <p><strong>Третий пункт меню</strong> — <em>помощь</em>. Здесь можно найти как информацию о сути задания, так и грамматические правила по теме теста.</p>
            <p><strong>Раздел "Статистика"</strong> — отображает достижения в текущем тесте.</p>
            <p><strong>Раздел "Setting"</strong> — выбор типа теста.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>    
    `;
}
