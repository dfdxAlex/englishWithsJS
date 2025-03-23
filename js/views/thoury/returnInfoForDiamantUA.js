function returnInfoForDiamantUA()
{
    return `<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="border: 2px solid #28a745; border-radius: 10px;">
      <div class="modal-header" style="background-color: #e6f7e6;">
        <h5 class="modal-title" id="diamondsModalLabel" style="color: #28a745; font-weight: bold;">Інформація про діаманти</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">За кожну правильну відповідь нараховується <span style="color: #28a745; font-weight: bold;">кілька діамантів</span>.</p>
        <p style="margin-bottom: 10px;">За кожну не зняту помилку знімається <span style="color: #dc3545; font-weight: bold;">три діаманти</span>.</p>
        <p style="margin-bottom: 10px;">Для зняття однієї помилки витрачається <span style="color: #ffc107; font-weight: bold;">два діаманти</span>.</p>
        <p style="margin-bottom: 10px;">Помилки знімаються в розділі статистики кнопкою <span style="color: #007bff; font-style: italic;">"Скинути"</span>.</p>
        <p style="margin-bottom: 0;">Для зняття помилок необхідно мати позитивні відповіді у кожному конкретному тесті.</p>
      </div>
      <div class="modal-footer" style="background-color: #f8f9fa;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
      </div>
    </div>
  </div>
</div>
`;
}
