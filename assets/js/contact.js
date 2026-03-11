/**
 * Contact Page specific functionality (Form simulation)
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulation
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Sending...';
            lucide.createIcons();

            setTimeout(() => {
                feedback.classList.remove('hidden', 'bg-red-500/20', 'text-red-500');
                feedback.classList.add('bg-green-500/20', 'text-green-500');
                feedback.innerText = 'Thank you! Your message has been sent successfully.';
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                form.reset();
                lucide.createIcons();
            }, 2000);
        });
    }
});
