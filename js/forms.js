// ============================================
// FORM HANDLING
// ============================================

function initForms() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
}

function handleSubmit(e) {
    e.preventDefault();
    
    // Show toast
    showToast();
    
    // Reset form
    e.target.reset();
}

function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}