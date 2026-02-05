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
async function loadAllPartials() {
  await loadPartial("#accessibility", "/partials/accessibilityMenu.html", () => {
    window.initAccessibilityMenu?.();
  });

  await loadPartial("#navbar", "/partials/navbar.html");
  await loadPartial("#footer", "/partials/footer.html");

  // Dispatch event to notify that all partials are loaded
  document.dispatchEvent(new Event('partial:loaded'));
}

loadAllPartials();


