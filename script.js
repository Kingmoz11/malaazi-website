const navToggle = document.querySelector('.nav-toggle');
const topbar = document.querySelector('.topbar');

if (navToggle && topbar) {
  navToggle.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.querySelector('.message-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Sent';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1600);
    }
  });
}
