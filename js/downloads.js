// Downloads Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Download Button Functionality
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the parent download card to access title
            const downloadCard = this.closest('.download-card');
            const title = downloadCard.querySelector('.download-title')?.textContent || 'Document';
            
            // In a real application, this would trigger an actual download
            console.log('Downloading:', title);
            
            // Show a visual feedback
            const icon = this.querySelector('i');
            const originalClass = icon.className;
            const originalBg = this.style.background;
            
            // Change to checkmark
            icon.className = 'fas fa-check';
            this.style.background = '#28a745';
            
            // Add download animation to the card
            downloadCard.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                icon.className = originalClass;
                this.style.background = originalBg;
                downloadCard.style.transform = '';
            }, 2000);
            
            // You can implement actual file download here
            // Example: window.location.href = `downloads/filename.pdf`;
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});
