function returnInfoForDiamantEN()
{
    return `<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="border: 2px solid #28a745; border-radius: 10px;">
      <div class="modal-header" style="background-color: #e6f7e6;">
        <h5 class="modal-title" id="diamondsModalLabel" style="color: #28a745; font-weight: bold;">Information about diamonds</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">For each correct answer, <span style="color: #28a745; font-weight: bold;">several diamonds</span> is awarded.</p>
        <p style="margin-bottom: 10px;">For each unresolved error, <span style="color: #dc3545; font-weight: bold;">three diamonds</span> are deducted.</p>
        <p style="margin-bottom: 10px;">To remove one error, you need to spend <span style="color: #ffc107; font-weight: bold;">two diamonds</span>.</p>
        <p style="margin-bottom: 10px;">Errors can be removed in the statistics section using the <span style="color: #007bff; font-style: italic;">"Reset"</span> button.</p>
        <p style="margin-bottom: 0;">To remove errors, you must have positive answers in each specific test.</p>
      </div>
      <div class="modal-footer" style="background-color: #f8f9fa;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;
}
