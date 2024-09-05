const hamburger = document.querySelector('#hamburger');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
const menu = document.querySelector('#menu');
const moon = document.querySelector('#moon');
const body = document.querySelector('body');
const hLinks = document.querySelectorAll('.hLink');

// Modo oscuro activado
/*const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
  body.classList.toggle('dark');
}*/

hamburger.addEventListener('click', ()=> {
  menu.classList.toggle('hidden');

  hamburgerLines.forEach((line) => {
    const removeClass = (line.classList.contains('bg-black')) ? 'bg-black' : 'bg-white';
    const addClass = (removeClass === 'bg-black') ? 'bg-white' : 'bg-black';
    line.classList.remove(removeClass);
    line.classList.add(addClass);
  });
});

hLinks.forEach(link=> {
  link.addEventListener('click', ()=> {
    menu.classList.toggle('hidden');
    hamburgerLines.forEach((line) => {
      line.classList.remove('bg-white');
      line.classList.add('bg-black');
    });
  })
});

moon.addEventListener('click', ()=> {
  body.classList.toggle('dark');
});
