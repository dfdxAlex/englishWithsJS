function nav()
{
    document.getElementById('nav').innerHTML = `
     <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <!--<a class="navbar-brand" href="#">Brand</a>-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <div class="nav-link" id="burger"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="word"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="statistic">Statistic</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="button-setting">Setting</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="button_lang_selected"></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
}
