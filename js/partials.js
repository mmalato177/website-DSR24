async function loadPartial(selector, url) {
  const res = await fetch(url);
  if (!res.ok) return;

  const html = await res.text();
  const template = document.createElement('template');
  template.innerHTML = html;

  document.querySelector(selector)
    .appendChild(template.content.cloneNode(true));

  // 🔔 fire event instead of calling i18n
  document.dispatchEvent(new CustomEvent('partial:loaded', {
    detail: { selector, url }
  }));
}

// Load navbar & footer
loadPartial('#accessibility', '/partials/accessibility.html', () => {
	initAccessibilityMenu();
});


loadPartial('#navbar', '/partials/navbar.html');
loadPartial('#footer', '/partials/footer.html');
