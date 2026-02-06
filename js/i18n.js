// i18n.js - Internationalization support
function dsrIsSafeUrl(value) {
    if (!value) return true;
    const trimmed = value.trim().toLowerCase();
    if (trimmed.startsWith('#')) return true;
    if (trimmed.startsWith('/')) return true;
    if (trimmed.startsWith('./') || trimmed.startsWith('../')) return true;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('//')) return true;
    if (trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) return true;
    return false;
}

function dsrSanitizeHTMLToFragment(html) {
    const fragment = document.createDocumentFragment();
    if (typeof html !== 'string') return fragment;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const unsafeTags = new Set(['script', 'style', 'iframe', 'object', 'embed', 'link', 'meta', 'base']);
    const urlAttrs = new Set(['href', 'src', 'srcset', 'xlink:href', 'formaction', 'action']);

    const elements = doc.body.querySelectorAll('*');
    elements.forEach(el => {
        const tag = el.tagName.toLowerCase();
        if (unsafeTags.has(tag)) {
            el.remove();
            return;
        }

        Array.from(el.attributes).forEach(attr => {
            const name = attr.name.toLowerCase();
            const value = attr.value;

            if (name.startsWith('on') || name === 'style') {
                el.removeAttribute(attr.name);
                return;
            }

            if (urlAttrs.has(name)) {
                if (name === 'srcset') {
                    const parts = value.split(',').map(p => p.trim()).filter(Boolean);
                    const allSafe = parts.every(p => dsrIsSafeUrl(p.split(/\s+/)[0]));
                    if (!allSafe) {
                        el.removeAttribute(attr.name);
                    }
                    return;
                }

                if (!dsrIsSafeUrl(value)) {
                    el.removeAttribute(attr.name);
                }
            }
        });

        if (el.getAttribute('target') === '_blank') {
            const rel = el.getAttribute('rel') || '';
            const relParts = rel.split(/\s+/).filter(Boolean);
            if (!relParts.includes('noopener')) relParts.push('noopener');
            if (!relParts.includes('noreferrer')) relParts.push('noreferrer');
            el.setAttribute('rel', relParts.join(' ').trim());
        }
    });

    fragment.append(...Array.from(doc.body.childNodes));
    return fragment;
}

if (!window.dsrSanitizeFragment) {
    window.dsrSanitizeFragment = dsrSanitizeHTMLToFragment;
}
const i18n = {
    currentLang: 'de', // Default language
    translations: {},

    // Initialize i18n
    async init() {
        // Check if language is saved in localStorage
        const savedLang = localStorage.getItem('preferredLanguage') || 'de';
        await this.loadLanguage(savedLang);
    },

    // Load language file
    async loadLanguage(lang) {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${lang}.json`);
            }
            this.translations = await response.json();
            this.currentLang = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.updatePageLanguage();
            this.updateActiveButton();
            this.updateHTMLLang();
        } catch (error) {
            console.error('Error loading language file:', error);
            // Fallback to German if loading fails
            if (lang !== 'de') {
                await this.loadLanguage('de');
            }
        }
    },

    // Update HTML lang attribute
    updateHTMLLang() {
        document.documentElement.lang = this.currentLang;
    },

    // Get nested property from object using dot notation
    getNestedProperty(obj, path) {
        return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
    },

    // Update all elements with data-i18n attribute
    updatePageLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedProperty(this.translations, key);
            
            if (translation) {
                // Check if the element has data-i18n-attr for attribute translation
                const attr = element.getAttribute('data-i18n-attr');
                if (attr) {
                    element.setAttribute(attr, translation);
                } else {
                    const safeFragment = dsrSanitizeHTMLToFragment(translation);
                    element.replaceChildren(safeFragment);
                }
            } else {
                console.warn(`Translation not found for key: ${key}`);
            }
        });
    },

    // Update active state of language buttons
    updateActiveButton() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            const lang = btn.getAttribute('data-lang');
            if (lang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    // Setup language switcher buttons
    setupLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');

    buttons.forEach(btn => {
        // avoid binding the same button twice
        if (btn.dataset.i18nBound) return;

        btn.dataset.i18nBound = 'true';

        btn.addEventListener('click', async (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            if (lang !== this.currentLang) {
                await this.loadLanguage(lang);
            }
        });
    });

    },

    // Get translation by key
    t(key) {
        return this.getNestedProperty(this.translations, key) || key;
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}

document.addEventListener('partial:loaded', () => {
    i18n.setupLanguageSwitcher();
    i18n.updateActiveButton();
    i18n.updatePageLanguage();
});

