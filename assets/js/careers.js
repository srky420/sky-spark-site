/**
 * Careers Page specific functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // CV Upload Simulation
    const cvForm = document.getElementById('cv-form');
    const cvFeedback = document.getElementById('cv-feedback');
    const uploadInput = document.getElementById('cv-upload');

    if (cvForm) {
        cvForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = cvForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.disabled = true;
            btn.innerText = 'Uploading...';

            setTimeout(() => {
                cvFeedback.classList.remove('hidden');
                btn.innerText = originalText;
                btn.disabled = false;
                cvForm.reset();
            }, 1500);
        });
    }

    // Update label text on file select
    if (uploadInput) {
        uploadInput.addEventListener('change', (e) => {
            const fileName = e.target.files[0]?.name;
            if (fileName) {
                const labelText = cvForm.querySelector('label p.font-semibold');
                labelText.innerText = `Selected: ${fileName}`;
                labelText.classList.add('text-blue-400');
            }
        });
    }
});
