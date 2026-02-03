async function loadPartial(selector, url) {
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
}

// Load navbar & footer
loadPartial('#navbar', '/partials/navbar.html');
loadPartial('#footer', '/partials/footer.html');
