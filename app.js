const hamburger = document.querySelector('#hamburger');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
const menu = document.querySelector('#menu');
const moon = document.querySelector('#moon');
const body = document.querySelector('body');
const hLinks = document.querySelectorAll('.hLink');

const technologies = document.querySelectorAll('.technologies');
const lightFolder = 'light';
const darkFolder = 'dark';

const logo = document.querySelector('#logo');

// Modo oscuro activado
let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
  body.classList.toggle('dark');
}

changeLightDarkMode(prefersDarkScheme);

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');

  hamburgerLines.forEach(line => {
    if (!prefersDarkScheme) {
      const removeClass = (line.classList.contains('bg-black')) ? 'bg-black' : 'bg-white';
      const addClass = (removeClass === 'bg-black') ? 'bg-white' : 'bg-black';
      line.classList.remove(removeClass);
      line.classList.add(addClass);
    }
  });
});

hLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburgerLines.forEach((line) => {
      line.classList.remove('bg-white');
      line.classList.add('bg-black');
    });
  })
});

moon.addEventListener('click', () => {
  body.classList.toggle('dark');
  prefersDarkScheme = !prefersDarkScheme;

  changeLightDarkMode(prefersDarkScheme);
});

function changeLightDarkMode(isDark) {
  changeFolderTechnologies(isDark);
  changeFolderLogo(isDark);
  changeColorHamburgerMenu(isDark);
}

/**
 * Método para cambiar el folder (light/dark) de las tecnologías
 * @param boolean isDark
 */
function changeFolderTechnologies(isDark) {
  technologies.forEach(img => {
    const src = (isDark)
      ? img.src.replace('light', 'dark')
      : img.src.replace('dark', 'light');

    img.src = src;
  });
}

function changeFolderLogo(isDark) {
  const src = (isDark)
  ? logo.src.replace('light', 'dark')
  : logo.src.replace('dark', 'light');

  logo.src = src;
}

function changeColorHamburgerMenu(isDark) {
  const className = (isDark) ? 'bg-white' : 'bg-black';
  hamburgerLines.forEach(line => {
    line.classList.remove(['bg-black', 'bg-white']);
    line.classList.add(className);
  });
}
