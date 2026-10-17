import './styles/renderAppVersion.scss'
/**
 * Рендер версии приложения в левом нижнем углу экрана
 */
export function renderAppVersion(version = 'v1.0.0') {
    let versionEl = document.getElementById('app-version');

    if (!versionEl) {
        versionEl = document.createElement('div');
        versionEl.id = 'app-version';
        document.body.appendChild(versionEl);
    }

    versionEl.textContent = version;
}