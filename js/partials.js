async function loadPartial(selector, url,callback) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to load ${url}`);
    return;
  }

  const html = await res.text();
  const template = document.createElement('template');
  template.innerHTML = html;

  document
    .querySelector(selector)
    .appendChild(template.content.cloneNode(true));
  
  if (callback) callback();

}

// Load navbar & footer
loadPartial('#navbar', '/partials/navbar.html', () => {
    i18n.setupLanguageSwitcher();
    i18n.updateActiveButton();
    i18n.updatePageLanguage();
});
loadPartial('#footer', '/partials/footer.html');


