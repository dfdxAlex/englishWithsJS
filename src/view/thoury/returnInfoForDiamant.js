import '../styles/returnInfoForDiamant.scss';

export function returnInfoForDiamant()
{
    return `<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog return-info-for-diamant">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="diamondsModalLabel">Информация о диамантах</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>За каждый правильный ответ начисляется <span>несколько диамантов</span>.</p>
        <p>За каждую не снятую ошибку снимается <span>три диаманта</span>.</p>
        <p>Для снятия одной ошибки тратится <span>два диаманта</span>.</p>
        <p>Снимаются ошибки в разделе статистики кнопкой <span>"Сбросить"</span>.</p>
        <p>Для отмены ошибок необходимо иметь положительные ответы в каждом конкретном тесте.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div>
`;
}
