function initAccessibilityMenu(root = document) {
  const toggleBtn = root.querySelector("#accessibility-toggle");
  const menu = root.querySelector("#accessibility-menu");
  const closeBtn = root.querySelector("#close-menu");
  const resetBtn = root.querySelector("#reset-btn");
  const content = document.getElementById("main-content");

  if (!toggleBtn || !menu || !closeBtn || !content) return;

  /* =========================
     FONT SIZE (GLOBAL SCALE)
  ========================= */

  let fontScale = 1;

  function applyFontScale() {
    document.documentElement.style.setProperty(
      "--a11y-font-scale",
      fontScale
    );
  }

  /* =========================
     RESET
  ========================= */

  resetBtn?.addEventListener("click", e => {
    e.preventDefault();

    content.classList.remove(
      "high-contrast",
      "invert-colors",
      "bw"
    );

    fontScale = 1;
    applyFontScale();
  });

  /* =========================
     MENU OPEN / CLOSE
  ========================= */

  toggleBtn.addEventListener("click", () => {
    menu.classList.add("open");
    toggleBtn.style.opacity = "0";
    toggleBtn.style.pointerEvents = "none";
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    toggleBtn.style.opacity = "1";
    toggleBtn.style.pointerEvents = "auto";
  });

  /* =========================
     ACTION BUTTONS
  ========================= */

  menu.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      // Visual modes
      if (action === "high-contrast") {
        content.classList.toggle("high-contrast");
      }

      if (action === "invert-colors") {
        content.classList.toggle("invert-colors");
      }

      if (action === "bw") {
        content.classList.toggle("bw");
      }

      // Font size
      if (action === "font-increase") {
        fontScale = Math.min(1.5, fontScale + 0.1);
        applyFontScale();
      }

      if (action === "font-decrease") {
        fontScale = Math.max(0.8, fontScale - 0.1);
        applyFontScale();
      }
    });
  });
}

/* Make it available for partials.js */
window.initAccessibilityMenu = initAccessibilityMenu;
