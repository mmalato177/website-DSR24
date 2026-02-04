// Blog Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Blog Search Functionality
    const searchInput = document.getElementById('blog-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const blogCards = document.querySelectorAll('#blog-grid .col-12');
    const noResults = document.getElementById('no-results');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            // Show/hide clear button
            if (searchTerm.length > 0) {
                clearSearchBtn.classList.add('active');
            } else {
                clearSearchBtn.classList.remove('active');
            }
            
            filterBlogPosts();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            this.classList.remove('active');
            filterBlogPosts();
            searchInput.focus();
        });
    }

    // Category Filter Functionality
    const categoryButtons = document.querySelectorAll('.btn-category');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            filterBlogPosts();
        });
    });

    // Filter Blog Posts based on search and category
    function filterBlogPosts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeCategory = document.querySelector('.btn-category.active');
        const selectedCategory = activeCategory ? activeCategory.dataset.category : 'all';
        
        let visibleCount = 0;
        
        blogCards.forEach(card => {
            const category = card.dataset.category;
            const title = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';
            
            const matchesSearch = !searchTerm || title.includes(searchTerm) || excerpt.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            
            if (matchesSearch && matchesCategory) {
                card.classList.remove('hidden');
                card.style.display = '';
                visibleCount++;
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }

    // Read More Button Functionality
    const readMoreButtons = document.querySelectorAll('.btn-read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.dataset.postId;
            
            // In a real application, you would navigate to a full blog post page
            // For now, we'll just show an alert
            console.log('Opening blog post:', postId);
            
            // You can implement navigation to a detailed blog post page here
            // window.location.href = `blog-post.html?id=${postId}`;
        });
    });

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
            icon.className = 'fas fa-check';
            this.style.background = '#28a745';
            
            setTimeout(() => {
                icon.className = originalClass;
                this.style.background = '';
            }, 2000);
            
            // You can implement actual file download here
            // window.location.href = `downloads/filename.pdf`;
        });
    });

    // Pagination Functionality
    const paginationLinks = document.querySelectorAll('.pagination .page-link');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Don't do anything if disabled
            if (this.parentElement.classList.contains('disabled')) {
                return;
            }
            
            // Remove active class from all
            document.querySelectorAll('.pagination .page-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active to clicked (if it's a number)
            if (!this.querySelector('i')) {
                this.parentElement.classList.add('active');
            }
            
            // Scroll to top of blog section smoothly
            const blogSection = document.getElementById('blog-section');
            if (blogSection) {
                blogSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // In a real application, you would load different blog posts here
            console.log('Loading page:', this.textContent.trim());
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

    // Lazy Loading for Images (if needed)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

});
