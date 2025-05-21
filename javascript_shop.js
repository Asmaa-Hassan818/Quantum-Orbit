document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search button'); 

    searchButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        const searchQuery = searchInput.value.trim().toLowerCase();
        performSearch(searchQuery);
    });
searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchQuery = searchInput.value.trim().toLowerCase();
            performSearch(searchQuery);
        }
    });

    function performSearch(query) {
        const allProducts = document.querySelectorAll('.pro');
        const allSections = document.querySelectorAll('.category-section');

        if (!query) {
            allProducts.forEach(product => {
                product.style.display = 'block';
            });
            allSections.forEach(section => {
                section.style.display = 'block';
            });
            return;
        }

        let foundMatch = false;

        allSections.forEach(section => {
            const products = section.querySelectorAll('.pro');
            let Match = false;

            products.forEach(product => {
                const productText = product.textContent.toLowerCase();
                if (productText.includes(query)) {
                    product.style.display = 'block';
                    Match = true;
                    foundMatch = true;
                } else {
                    product.style.display = 'none';
                }
            });

            section.style.display = Match ? 'block' : 'none';
        });

        if (!foundMatch) {
            showMessage();
        } else {
            scroll();
        }
    }

    function showMessage() {
        alert('No products found!!');
    }

    function scroll() {
        const firstSection = document.querySelector('.category-section[style="display: block;"]');
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});