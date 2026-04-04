// js/i18n.js - Translation system
(function () {
    'use strict';

    const I18n = {
        translations: {},
        currentLang: 'en',
        isLoading: false,

        // Initialize
        async init() {
            // Load all languages
            await Promise.all([
                this.loadLang('en'),
                this.loadLang('fr'),
                this.loadLang('ar')
            ]);

            // Check for saved preference
            const savedLang = localStorage.getItem('sit-lang');
            if (savedLang && this.translations[savedLang]) {
                this.currentLang = savedLang;
            }

            this.applyTranslations();
            this.updateDirection();
        },

        // Load a language file
        async loadLang(lang) {
            try {
                const response = await fetch(`lang/${lang}.json?v=20260325`);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                this.translations[lang] = await response.json();
                console.log(`✓ Loaded ${lang}.json`);
            } catch (error) {
                console.error(`✗ Failed to load ${lang}.json:`, error);
                this.translations[lang] = {}; // Empty fallback
            }
        },

        // Apply translations to all elements
        applyTranslations() {
            const trans = this.translations[this.currentLang];
            if (!trans) return;

            // Find all elements with data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if (trans[key]) {
                    el.textContent = trans[key];
                } else {
                    console.warn(`Missing translation: ${key} for ${this.currentLang}`);
                }
            });

            // Update language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
            });
        },

        // Switch language
        async setLanguage(lang) {
            if (!this.translations[lang]) {
                await this.loadLang(lang);
            }

            this.currentLang = lang;
            localStorage.setItem('sit-lang', lang);

            this.applyTranslations();
            this.updateDirection();

            // Re-initialize Lucide icons for RTL
            if (window.lucide) {
                setTimeout(() => lucide.createIcons(), 0);
            }

            // Dispatch custom event
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));
        },

        // Update HTML direction for Arabic
        updateDirection() {
            const isRTL = this.currentLang === 'ar';
            document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
            document.documentElement.lang = this.currentLang;
        },

        // Get translation for a key (useful for JS)
        t(key, fallback = '') {
            return this.translations[this.currentLang]?.[key] ||
                this.translations['en']?.[key] ||
                fallback;
        }
    };

    // Expose globally
    window.I18n = I18n;

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => I18n.init());
    } else {
        I18n.init();
    }
})();