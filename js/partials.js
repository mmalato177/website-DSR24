async function loadPartial(selector, url, init) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) return;

  const html = await res.text();
  const template = document.createElement("template");
  template.innerHTML = html;

  el.appendChild(template.content.cloneNode(true));

  init?.(el);
}

/* load components */
loadPartial("#accessibility", "/partials/accessibilityMenu.html", () => {
  window.initAccessibilityMenu?.();
});

loadPartial("#navbar", "/partials/navbar.html");
loadPartial("#footer", "/partials/footer.html");


