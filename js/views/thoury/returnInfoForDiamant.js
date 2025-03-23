function returnInfoForDiamant()
{
    return `<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="border: 2px solid #28a745; border-radius: 10px;">
      <div class="modal-header" style="background-color: #e6f7e6;">
        <h5 class="modal-title" id="diamondsModalLabel" style="color: #28a745; font-weight: bold;">Информация о диамантах</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">За каждый правильный ответ начисляется <span style="color: #28a745; font-weight: bold;">несколько диамантов</span>.</p>
        <p style="margin-bottom: 10px;">За каждую не снятую ошибку снимается <span style="color: #dc3545; font-weight: bold;">три диаманта</span>.</p>
        <p style="margin-bottom: 10px;">Для снятия одной ошибки тратится <span style="color: #ffc107; font-weight: bold;">два диаманта</span>.</p>
        <p style="margin-bottom: 10px;">Снимаются ошибки в разделе статистики кнопкой <span style="color: #007bff; font-style: italic;">"Сбросить"</span>.</p>
        <p style="margin-bottom: 0;">Для отмены ошибок необходимо иметь положительные ответы в каждом конкретном тесте.</p>
      </div>
      <div class="modal-footer" style="background-color: #f8f9fa;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div>
`;
}
