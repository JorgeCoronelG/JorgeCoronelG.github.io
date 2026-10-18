// Menú móvil
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

const setMenu = (open: boolean) => {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('hidden', !open);
};
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

// Scroll-spy
const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
const spied = document.querySelectorAll<HTMLElement>('[data-nav]');
const setActive = (id: string) =>
  links.forEach((a) => {
    const on = a.dataset.navLink === id;
    on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
  });

const spy = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && setActive((e.target as HTMLElement).dataset.nav!)),
  { rootMargin: '-45% 0px -50% 0px' },
);
spied.forEach((s) => spy.observe(s));

// Aparición al hacer scroll
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }),
    { threshold: 0.12 },
  );
  reveals.forEach((r) => io.observe(r));
} else {
  reveals.forEach((r) => r.classList.add('is-visible'));
}
