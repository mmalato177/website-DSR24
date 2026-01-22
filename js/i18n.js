// i18n.js - Internationalization support
const i18n = {
    currentLang: 'de', // Default language
    translations: {},

    // Initialize i18n
    async init() {
        // Check if language is saved in localStorage
        const savedLang = localStorage.getItem('preferredLanguage') || 'de';
        await this.loadLanguage(savedLang);
        this.setupLanguageSwitcher();
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
                    // Default: update innerHTML
                    element.innerHTML = translation;
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
            btn.addEventListener('click', async (e) => {
                const lang = e.target.getAttribute('data-lang');
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
