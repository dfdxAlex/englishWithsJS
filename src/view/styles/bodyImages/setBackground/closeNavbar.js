// Функция закрывает Гамбургер меню


export function closeNavbar() {
  const navbarCollapse = document.getElementById('navbarNav');
  const toggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
    toggler.classList.add('collapsed');
    toggler.setAttribute('aria-expanded', 'false');
  }
}

closeNavbar.help = `
Функция закрывает Гамбургер меню
`;
