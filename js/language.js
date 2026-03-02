// ============================================
// MULTI-LANGUAGE SUPPORT (i18n)
// ============================================

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.industries': 'Industries',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.quote': 'Request Quote',
        'hero.badge': 'Inspection Excellence',
        'hero.title1': 'Smart Insight',
        'hero.title2': 'Technologies',
        'hero.subtitle': 'Advanced NDT & Asset Integrity Services for Industrial Excellence in Algeria',
        'hero.cta1': 'Explore Services',
        'hero.cta2': 'Contact Us',
        'stats.years': 'Years Experience',
        'stats.projects': 'Projects Completed',
        'stats.experts': 'Certified Experts',
        'stats.support': '/7 Support',
        'about.label': 'Who We Are',
        'about.title': 'Precision Inspection for Critical Assets',
        'services.label': 'Our Expertise',
        'services.title': 'Comprehensive NDT Solutions',
        'projects.label': 'Case Studies',
        'projects.title': 'Proven Results',
        'projects.viewall': 'View All Projects',
        'projects.readmore': 'Read More',
        'contact.label': 'Get In Touch',
        'contact.title': 'Request a Quote',
        'form.submit': 'Send Request',
        'footer.rights': 'All rights reserved.'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.services': 'Services',
        'nav.industries': 'Industries',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',
        'nav.quote': 'Demander un Devis',
        'hero.badge': 'Excellence en Inspection',
        'hero.title1': 'Smart Insight',
        'hero.title2': 'Technologies',
        'hero.subtitle': 'Services Avancés de CND et d\'Intégrité des Actifs pour l\'Excellence Industrielle en Algérie',
        'hero.cta1': 'Explorer les Services',
        'hero.cta2': 'Contactez-Nous',
        'stats.years': 'Années d\'Expérience',
        'stats.projects': 'Projets Réalisés',
        'stats.experts': 'Experts Certifiés',
        'stats.support': '/7 Support',
        'about.label': 'Qui Nous Sommes',
        'about.title': 'Inspection de Précision pour Actifs Critiques',
        'services.label': 'Notre Expertise',
        'services.title': 'Solutions CND Complètes',
        'projects.label': 'Études de Cas',
        'projects.title': 'Résultats Prouvés',
        'projects.viewall': 'Voir Tous les Projets',
        'projects.readmore': 'Lire Plus',
        'contact.label': 'Contactez-Nous',
        'contact.title': 'Demander un Devis',
        'form.submit': 'Envoyer la Demande',
        'footer.rights': 'Tous droits réservés.'
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'من نحن',
        'nav.services': 'الخدمات',
        'nav.industries': 'الصناعات',
        'nav.projects': 'المشاريع',
        'nav.contact': 'اتصل بنا',
        'nav.quote': 'طلب عرض سعر',
        'hero.badge': 'تميز في الفحص',
        'hero.title1': 'سمارت إنسايت',
        'hero.title2': 'تكنولوجيز',
        'hero.subtitle': 'خدمات الفحص غير المتلف والسلامة الأصولية المتقدمة للتميز الصناعي في الجزائر',
        'hero.cta1': 'استكشف الخدمات',
        'hero.cta2': 'اتصل بنا',
        'stats.years': 'سنوات خبرة',
        'stats.projects': 'مشروع منجز',
        'stats.experts': 'خبير معتمد',
        'stats.support': '/7 دعم',
        'about.label': 'من نحن',
        'about.title': 'فحص دقيق للأصول الحرجة',
        'services.label': 'خبرتنا',
        'services.title': 'حلول الفحص الشاملة',
        'projects.label': 'دراسات الحالة',
        'projects.title': 'نتائج مثبتة',
        'projects.viewall': 'عرض جميع المشاريع',
        'projects.readmore': 'اقرأ المزيد',
        'contact.label': 'تواصل معنا',
        'contact.title': 'اطلب عرض سعر',
        'form.submit': 'إرسال الطلب',
        'footer.rights': 'جميع الحقوق محفوظة.'
    }
};

let currentLang = 'en';

function initLanguage() {
    // Set initial language
    setLanguage('en');
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Re-initialize icons for RTL
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}