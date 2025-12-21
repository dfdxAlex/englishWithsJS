export function cleanupBootstrapModals() {
    // Удаляем все старые модалки
    document.querySelectorAll('.modal').forEach(m => m.remove());

    // Удаляем backdrop
    document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());

    // Возвращаем body в норму
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('padding-right');
}