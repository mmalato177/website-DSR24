async function loadPartial(selector, url, init) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) return;

  const html = await res.text();
  let fragment;
  if (window.dsrSanitizeFragment) {
    fragment = window.dsrSanitizeFragment(html);
  } else {
    const template = document.createElement("template");
    template.innerHTML = html;
    fragment = template.content.cloneNode(true);
  }

  el.appendChild(fragment);

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


