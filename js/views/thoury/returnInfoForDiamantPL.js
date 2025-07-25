function returnInfoForDiamantPL()
{
    return `<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="border: 2px solid #28a745; border-radius: 10px;">
      <div class="modal-header" style="background-color: #e6f7e6;">
        <h5 class="modal-title" id="diamondsModalLabel" style="color: #28a745; font-weight: bold;">Informacje o diamentach</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">Za każdą poprawną odpowiedź przyznawany jest <span style="color: #28a745; font-weight: bold;">kilka diamentów</span>.</p>
        <p style="margin-bottom: 10px;">Za każdy niezredukowany błąd odejmowane są <span style="color: #dc3545; font-weight: bold;">trzy diamenty</span>.</p>
        <p style="margin-bottom: 10px;">Aby usunąć jeden błąd, trzeba zużyć <span style="color: #ffc107; font-weight: bold;">dwa diamenty</span>.</p>
        <p style="margin-bottom: 10px;">Błędy można usuwać w sekcji statystyk przyciskiem <span style="color: #007bff; font-style: italic;">"Zresetuj"</span>.</p>
        <p style="margin-bottom: 0;">Aby usunąć błędy, należy uzyskać pozytywne odpowiedzi w każdym konkretnym teście.</p>
      </div>
      <div class="modal-footer" style="background-color: #f8f9fa;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
      </div>
    </div>
  </div>
</div>
`;
}
