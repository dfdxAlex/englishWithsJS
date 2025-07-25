function nav()
{
    document.getElementById('nav').innerHTML = `
     <nav class="navbar navbar-expand-sm navbar-light bg-light" id="first-teg-nav-for-nav">
    <div class="container-fluid" id="nav-first-div">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li id="helpVideo">
            <button onclick = "Help.viewhandleHelpToTranslate(helpForHomeMenuRU(),'vkQYDmiTlmQ')" type = "button" class="fs-6 text-primary mb-3 button-help">&#10067;</button>
          </li>
          <li class="nav-item" id="nav-item-burger">
            <div class="nav-link" id="burger"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="word"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="help"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="statistic">Statistic</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="setting">Setting</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="button_lang_selected"></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="select-level-test"></div>
    `;
}
