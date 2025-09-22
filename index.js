
    // Simple step navigation functions
    function showStep1() {
    document.querySelector(".search-card-surface").style.display = "none";
    const categoryPickerSurface = document.getElementById('category-picker-surface');
    const productVerifySurface = document.getElementById('product-verify-surface');
    const productSelectSurface = document.getElementById('product-select-surface');
    const productRegisterSurface = document.getElementById('product-register-surface');

    if (categoryPickerSurface) categoryPickerSurface.classList.remove('d-none');
    if (productVerifySurface) productVerifySurface.classList.add('d-none');
    if (productSelectSurface) productSelectSurface.classList.add('d-none');
    if (productRegisterSurface) productRegisterSurface.classList.add('d-none');
}

    function showStep2() {
    document.querySelector(".search-card-surface").style.display = "none";
    const categoryPickerSurface = document.getElementById('category-picker-surface');
    const productVerifySurface = document.getElementById('product-verify-surface');
    const productSelectSurface = document.getElementById('product-select-surface');
    const productRegisterSurface = document.getElementById('product-register-surface');

    if (categoryPickerSurface) categoryPickerSurface.classList.add('d-none');
    if (productVerifySurface) productVerifySurface.classList.remove('d-none');
    if (productSelectSurface) productSelectSurface.classList.add('d-none');
    if (productRegisterSurface) productRegisterSurface.classList.add('d-none');
}

    function showStep3() {
    document.querySelector(".search-card-surface").style.display = "none";
    const categoryPickerSurface = document.getElementById('category-picker-surface');
    const productVerifySurface = document.getElementById('product-verify-surface');
    const productSelectSurface = document.getElementById('product-select-surface');
    const productRegisterSurface = document.getElementById('product-register-surface');

    if (categoryPickerSurface) categoryPickerSurface.classList.add('d-none');
    if (productVerifySurface) productVerifySurface.classList.add('d-none');
    if (productSelectSurface) productSelectSurface.classList.remove('d-none');
    if (productRegisterSurface) productRegisterSurface.classList.add('d-none');
}

    function showStep4() {
    const categoryPickerSurface = document.getElementById('category-picker-surface');
    const productVerifySurface = document.getElementById('product-verify-surface');
    const productSelectSurface = document.getElementById('product-select-surface');
    const productRegisterSurface = document.getElementById('product-register-surface');

    if (categoryPickerSurface) categoryPickerSurface.classList.add('d-none');
    if (productVerifySurface) productVerifySurface.classList.add('d-none');
    if (productSelectSurface) productSelectSurface.classList.add('d-none');
    if (productRegisterSurface) productRegisterSurface.classList.remove('d-none');
}

    function hideAllSteps() {
    document.querySelector(".search-card-surface").style.display = "none";
    const categoryPickerSurface = document.getElementById('category-picker-surface');
    const productVerifySurface = document.getElementById('product-verify-surface');
    const productSelectSurface = document.getElementById('product-select-surface');
    const productRegisterSurface = document.getElementById('product-register-surface');

    if (categoryPickerSurface) categoryPickerSurface.classList.add('d-none');
    if (productVerifySurface) productVerifySurface.classList.add('d-none');
    if (productSelectSurface) productSelectSurface.classList.add('d-none');
    if (productRegisterSurface) productRegisterSurface.classList.add('d-none');
}

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
    // Bind close buttons
    const categoryCloseBtn = document.getElementById('categoryCloseBtnSurface');
    const verifyCloseBtn = document.getElementById('verifyCloseBtnSurface');
    const productSelectCloseBtn = document.getElementById('productSelectCloseBtn');
    const productBackBtn = document.getElementById('productBackBtn');
    const notFoundBtn = document.getElementById('notFoundBtn');
    const productRegisterCloseBtn = document.getElementById('productRegisterCloseBtn');

    if (categoryCloseBtn) {
    categoryCloseBtn.addEventListener('click', hideAllSteps);
}

    if (verifyCloseBtn) {
    verifyCloseBtn.addEventListener('click', hideAllSteps);
}

    if (productSelectCloseBtn) {
    productSelectCloseBtn.addEventListener('click', hideAllSteps);
}

    if (productBackBtn) {
    productBackBtn.addEventListener('click', showStep2);
}

    if (notFoundBtn) {
    notFoundBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showStep1();
});
}

    if (productRegisterCloseBtn) {
    productRegisterCloseBtn.addEventListener('click', hideAllSteps);
}

    // Show success modal on final submit
    const finalSubmitBtn = document.getElementById('finalSubmitBtn');
    if (finalSubmitBtn) {
    finalSubmitBtn.addEventListener('click', function(){
    const m = new bootstrap.Modal(document.getElementById('successRegisterModal'));
    m.show();
});
}
});

        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('mobile-open');
    });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
        const sidebar = document.getElementById('sidebar');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');

        if (window.innerWidth <= 768 &&
        !sidebar.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)) {
        sidebar.classList.remove('mobile-open');
    }
    });

        // Menu item click handlers
        document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all items
            document.querySelectorAll('.menu-item').forEach(menuItem => {
                menuItem.classList.remove('active');
            });

            // Add active class to clicked item
            this.classList.add('active');

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('mobile-open');
            }
        });
    });

        // Theme toggle functionality
        function toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

        // Initialize theme on page load
        document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
    });

        // Handle window resize
        window.addEventListener('resize', function() {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth > 768) {
        sidebar.classList.remove('mobile-open');
    }

    });


        function hidden1() {
        document.querySelector('.results-list-container').style.display = 'block';
        document.querySelector('#card1').style.display = 'block';
        document.querySelector('.search-card-surface').style.display = 'none';
    }

        // ========== SEARCH CARD FUNCTIONALITY ==========

        // Search input and autocomplete functionality
        const searchInput = document.getElementById('productSearch');
        const autocompleteDropdown = document.getElementById('searchSuggestions');
        const notFoundBtn = document.getElementById('notFoundBtn');
        const viewProductListBtn = document.getElementById('viewProductListBtn');
        const searchCard = document.querySelector('.search-card-surface');
        const resultsContainer = document.querySelector('.results-list-container');

        // Function to hide all results elements
        function hideAllResults() {
        document.querySelector('.page-header').style.display = 'none';
        document.querySelector('.results-toolbar').style.display = 'none';
        document.querySelector('.results-header').style.display = 'none';
        document.querySelectorAll('.result-row').forEach(row => {
        row.style.display = 'none';
    });
        resultsContainer.style.display = 'none';
    }

        // Function to show all results elements
        function showAllResults() {
        document.querySelector('.page-header').style.display = 'block';
        document.querySelector('.results-toolbar').style.display = 'block';
        document.querySelector('.results-header').style.display = 'grid';
        document.querySelectorAll('.result-row').forEach(row => {
        row.style.display = 'grid';
    });
        resultsContainer.style.display = 'flex';
    }

        // Show autocomplete when input is focused
        searchInput.addEventListener('focus', function() {
        autocompleteDropdown.classList.add('show');
    });

        // Hide autocomplete when clicking outside
        document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !autocompleteDropdown.contains(event.target)) {
        autocompleteDropdown.classList.remove('show');
    }
    });

        // Handle search input typing
        searchInput.addEventListener('input', function() {
        const value = this.value.trim();
        if (value.length > 0) {
        autocompleteDropdown.classList.add('show');
        // Show results when user types
        showResults();
    } else {
        autocompleteDropdown.classList.remove('show');
        // Hide results when input is empty
        hideResults();
    }
    });

        // Handle autocomplete item selection
        document.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', function() {
            const primaryText = this.querySelector('.autocomplete-primary').textContent;
            const secondaryText = this.querySelector('.autocomplete-secondary').textContent;
            searchInput.value = primaryText;
            autocompleteDropdown.classList.remove('show');

            // Create product data from selection
            const productData = {
                title: primaryText,
                code: 'STA-' + Math.floor(Math.random() * 10000), // Generate random code
                refPrice: '۱۵,۳۵۰,۰۰۰',
                commission: '۸%',
                brand: 'برند نمونه',
                image: '/img/placeholder-product.png'
            };

            // Open verify modal with product data
            handleModalFlow('search_select', productData);

            console.log('Selected item:', primaryText, 'Opening verify modal');
        });
    });

        // Handle view product list button click
        if (typeof viewProductListBtn !== 'undefined' && viewProductListBtn) viewProductListBtn.addEventListener('click', function() {
        // Hide search card

        searchCard.style.display = 'none';

        // Show results container
        resultsContainer.style.display = 'block';

        // Show toolbar and table
        document.querySelector('.results-toolbar').style.display = 'flex';
        document.querySelector('.results-header').style.display = 'grid';
        document.querySelectorAll('.result-row').forEach(row => {
        row.style.display = 'grid';
    });

        // Show page header
        document.querySelector('.page-header').style.display = 'block';
    });

        // Handle "Not Found" button click
        if (typeof notFoundBtn !== 'undefined' && notFoundBtn) notFoundBtn.addEventListener('click', function() {
        console.log('Product not found - opening add variant modal');

        // Create default product data for new product
        const productData = {
        title: searchInput.value || 'کالای جدید',
        code: 'STA-NEW-' + Math.floor(Math.random() * 1000),
        refPrice: 'قیمت مرجع تعیین نشده',
        commission: 'تعیین نشده',
        brand: 'برند جدید',
        image: '/img/placeholder-product.png'
    };

        // Open add variant modal directly
        handleModalFlow('not_found', productData);
    });

        // Handle search form submission
        if (typeof searchInput !== 'undefined' && searchInput) searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
        event.preventDefault();
        const searchTerm = this.value.trim();
        if (searchTerm) {
        console.log('Searching for:', searchTerm);

        // Create product data from search term
        const productData = {
        title: searchTerm,
        code: 'STA-SEARCH-' + Math.floor(Math.random() * 1000),
        refPrice: '۱۵,۳۵۰,۰۰۰',
        commission: '۸%',
        brand: 'برند نمونه',
        image: '/img/placeholder-product.png'
    };

        // Open verify modal with search results
        handleModalFlow('search_select', productData);
        autocompleteDropdown.classList.remove('show');
    }
    }
    });

        // Handle action buttons
        if (document.querySelector('.search-card-link')) document.querySelector('.search-card-link').addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Back button clicked');
        // Here you would typically navigate back
    });

        if (document.querySelector('.search-card-action-btn')) document.querySelector('.search-card-action-btn').addEventListener('click', function() {
        console.log('View product list clicked');
        // Here you would typically navigate to product list
    });

        // ========== RESULTS LIST FUNCTIONALITY ==========

        // Filter chips functionality
        document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            // Toggle active state
            this.classList.toggle('active');

            // Here you would typically show a dropdown or modal for filter options
            console.log('Filter clicked:', this.querySelector('.chip-label').textContent);
        });
    });

        // Add product button functionality
        if (document.querySelector('.add-product-btn')) document.querySelector('.add-product-btn').addEventListener('click', function() {
        console.log('Add new product clicked');
        // Here you would typically navigate to add product page or show modal
    });

        // Result row interactions
        document.querySelectorAll('.result-row').forEach(row => {
        // Row click handler
        row.addEventListener('click', function(event) {
            // Don't trigger if clicking on action button
            if (!event.target.closest('.result-actions')) {
                console.log('Result row clicked');

                // Extract product data from the row
                const productData = {
                    title: this.querySelector('.product-title').textContent,
                    code: this.querySelector('.product-code').textContent,
                    refPrice: this.querySelector('.min-price-col').textContent,
                    commission: this.querySelector('.commission-col').textContent,
                    brand: 'برند نمونه', // This would come from actual data
                    image: this.querySelector('.product-thumb img').src
                };

                // Show the verify modal
                showVerifyModal(productData);
            }
        });

    });

        // Status badge interactions (if needed)
        document.querySelectorAll('.status-badge').forEach(badge => {
        badge.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Status badge clicked:', this.textContent);
            // Here you could show status details or change status
        });
    });

        // Product title click handler
        document.querySelectorAll('.product-title').forEach(title => {
        title.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Product title clicked:', this.textContent);
            // Here you would typically navigate to product details
        });
    });

        // Product code click handler
        document.querySelectorAll('.product-code').forEach(code => {
        code.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Product code clicked:', this.textContent);
            // Here you could copy code to clipboard or show code details
        });
    });

        // Product thumb click handler
        document.querySelectorAll('.product-thumb img').forEach(thumb => {
        thumb.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Product image clicked');
            // Here you would typically show image modal or gallery
        });
    });

        // ========== MODAL FUNCTIONALITY ==========

        // Get modal instances
        const verifyModal = new bootstrap.Modal(document.getElementById('modal-verify-same-product'));
        const becameSellerModal = new bootstrap.Modal(document.getElementById('modal-became-seller'));
        const addVariantModal = new bootstrap.Modal(document.getElementById('modal-add-variant'));

        // Function to show modal with product data
        function showVerifyModal(productData) {
        // Update modal content with product data
        if (productData) {
        document.querySelector('.product-title-value').textContent = productData.title || 'لورم ایپسوم متن ساختگی...';
        document.querySelector('.product-info-item:nth-child(3) .product-info-value').textContent = productData.code || 'STA-12345';
        document.querySelector('.product-info-item:nth-child(4) .product-info-value').textContent = productData.refPrice || '۱۵,۲۴۶,۰۰۰';
        document.querySelector('.product-info-item:nth-child(5) .product-info-value').textContent = productData.commission || '۹%';
        document.querySelector('.product-info-item:nth-child(6) .product-info-value').textContent = productData.brand || 'نمونه';

        if (productData.image) {
        document.querySelector('.product-info-image').src = productData.image;
    }
    }

        // Show modal
        verifyModal.show();
    }

        // Function to show became seller modal with product data
        function showBecameSellerModal(productData) {
        // Update modal content with product data
        if (productData) {
        document.querySelector('.modal-subtext').textContent = `شما فروشنده این کالا با کد کالایی ${productData.code || 'STA-12345'} شدید، برای فروش کالا، تنوع آن را ثبت کنید.`;
        document.querySelector('.product-confirmation-text').textContent = productData.title || 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...';
        document.querySelector('.product-confirmation-code').textContent = productData.code || 'STA-12345';

        if (productData.image) {
        document.querySelector('.product-confirmation-image').src = productData.image;
    }
    }

        // Show modal
        becameSellerModal.show();
    }

        // Modal button handlers - Verify Modal Primary Button
        if (document.querySelector('#btn-sell-this')) document.querySelector('#btn-sell-this').addEventListener('click', function() {
        console.log('Verify modal primary button clicked - opening became seller modal');

        // Extract product data from the verify modal
        const productData = {
        title: document.querySelector('.product-title-value').textContent,
        code: document.querySelector('.product-info-item:nth-child(3) .product-info-value').textContent,
        refPrice: document.querySelector('.product-info-item:nth-child(4) .product-info-value').textContent,
        commission: document.querySelector('.product-info-item:nth-child(5) .product-info-value').textContent,
        image: document.querySelector('.product-info-image').src
    };

        // Use flow management
        handleModalFlow('verify_primary', productData);
    });

        // Modal close handlers
        if (document.querySelector('#modal-verify-same-product .btn-close')) document.querySelector('#modal-verify-same-product .btn-close').addEventListener('click', function() {
        console.log('Modal closed via close button');
    });

        if (document.querySelector('#modal-verify-same-product .btn-outline-secondary')) document.querySelector('#modal-verify-same-product .btn-outline-secondary').addEventListener('click', function() {
        console.log('Modal closed via back button');
    });

        // Function to show add variant modal with product data
        function showAddVariantModal(productData) {
        // Update modal content with product data
        if (productData) {
        document.querySelector('#modal-add-variant .modal-subtext').textContent = `شما فروشنده این کالا با کد کالایی ${productData.code || 'STA-12345'} شدید، برای فروش کالا، تنوع آن را ثبت کنید.`;
        document.querySelector('#modal-add-variant .product-confirmation-text').textContent = productData.title || 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...';
        document.querySelector('#modal-add-variant .product-confirmation-code').textContent = productData.code || 'STA-12345';

        if (productData.image) {
        document.querySelector('#modal-add-variant .product-confirmation-image').src = productData.image;
    }
    }

        // Reset form
        document.getElementById('variantForm').reset();

        // Show modal
        addVariantModal.show();
    }

        // Second modal button handlers - Became Seller Modal Primary Button
        if (document.querySelector('.modal-register-variant-btn')) document.querySelector('.modal-register-variant-btn').addEventListener('click', function() {
        console.log('Became seller modal primary button clicked - opening add variant modal');

        // Extract product data from the became seller modal
        const productData = {
        title: document.querySelector('#modal-became-seller .product-confirmation-text').textContent,
        code: document.querySelector('#modal-became-seller .product-confirmation-code').textContent,
        image: document.querySelector('#modal-became-seller .product-confirmation-image').src
    };

        // Use flow management
        handleModalFlow('became_seller_primary', productData);
    });

        // Second modal close handlers
        if (document.querySelector('#modal-became-seller .btn-close')) document.querySelector('#modal-became-seller .btn-close').addEventListener('click', function() {
        console.log('Became seller modal closed via close button');
    });

        if (document.querySelector('#modal-became-seller .btn-outline-secondary')) document.querySelector('#modal-became-seller .btn-outline-secondary').addEventListener('click', function() {
        console.log('Became seller modal closed via back button');
    });

        // Third modal button handlers
        if (document.querySelector('.modal-add-to-list-btn')) document.querySelector('.modal-add-to-list-btn').addEventListener('click', function() {
        console.log('Add to variant list clicked');

        // Validate form
        const form = document.getElementById('variantForm');
        if (form.checkValidity()) {
        // Collect form data
        const formData = {
        brand: document.getElementById('brandSelect').value,
        size: document.getElementById('sizeSelect').value,
        deliveryTime: document.getElementById('deliveryTime').value,
        maxOrder: document.getElementById('maxOrder').value,
        stockQuantity: document.getElementById('stockQuantity').value,
        salePrice: document.getElementById('salePrice').value
    };

        console.log('Variant data:', formData);

        // Here you would typically save the variant data
        addVariantModal.hide();

        // Show success message
        alert('تنوع کالا با موفقیت به لیست اضافه شد');
    } else {
        // Show validation errors
        form.reportValidity();
    }
    });

        if (document.getElementById('addNewVariantBtn')) document.getElementById('addNewVariantBtn').addEventListener('click', function() {
        console.log('Add new variant clicked');

        // Validate current form first
        const form = document.getElementById('variantForm');
        if (form.checkValidity()) {
        // Collect current form data
        const formData = {
        brand: document.getElementById('brandSelect').value,
        size: document.getElementById('sizeSelect').value,
        deliveryTime: document.getElementById('deliveryTime').value,
        maxOrder: document.getElementById('maxOrder').value,
        stockQuantity: document.getElementById('stockQuantity').value,
        salePrice: document.getElementById('salePrice').value
    };

        console.log('Current variant data:', formData);

        // Reset form for new variant
        form.reset();

        // Show success message
        alert('تنوع قبلی ذخیره شد. فرم برای تنوع جدید بازنشانی شد');
    } else {
        // Show validation errors
        form.reportValidity();
    }
    });

        // Third modal close handlers
        if (document.querySelector('#modal-add-variant .btn-close')) document.querySelector('#modal-add-variant .btn-close').addEventListener('click', function() {
        console.log('Add variant modal closed via close button');
    });

        // Form validation and formatting
        if (document.getElementById('salePrice')) document.getElementById('salePrice').addEventListener('input', function(e) {
        // Format price with commas
        let value = e.target.value.replace(/,/g, '');
        if (value && !isNaN(value)) {
        e.target.value = parseInt(value).toLocaleString('fa-IR');
    }
    });

        // Form submission prevention
        if (document.getElementById('variantForm')) document.getElementById('variantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submission prevented - using button handlers instead');
    });

        // Modal events
        if (document.getElementById('modal-verify-same-product')) document.getElementById('modal-verify-same-product').addEventListener('hidden.bs.modal', function() {
        console.log('Modal hidden');
        // Reset modal content if needed
    });

        if (document.getElementById('modal-verify-same-product')) document.getElementById('modal-verify-same-product').addEventListener('shown.bs.modal', function() {
        console.log('Modal shown');
        // Focus management or other setup
    });

        // Second modal events
        if (document.getElementById('modal-became-seller')) document.getElementById('modal-became-seller').addEventListener('hidden.bs.modal', function() {
        console.log('Became seller modal hidden');
        // Reset modal content if needed
    });

        if (document.getElementById('modal-became-seller')) document.getElementById('modal-became-seller').addEventListener('shown.bs.modal', function() {
        console.log('Became seller modal shown');
        // Focus management or other setup
    });

        // Third modal events
        if (document.getElementById('modal-add-variant')) document.getElementById('modal-add-variant').addEventListener('hidden.bs.modal', function() {
        console.log('Add variant modal hidden');
        // Reset form if needed
        document.getElementById('variantForm').reset();
    });

        if (document.getElementById('modal-add-variant')) document.getElementById('modal-add-variant').addEventListener('shown.bs.modal', function() {
        console.log('Add variant modal shown');
        // Focus on first input
        document.getElementById('brandSelect').focus();
    });

        // ========== RESULTS VISIBILITY MANAGEMENT ==========

        // Function to show results section
        function showResults() {
        showAllResults();
    }

        // Function to hide results section
        function hideResults() {
        hideAllResults();
    }

        // ========== MODAL FLOW MANAGEMENT ==========

        // Function to handle complete modal flow
        function handleModalFlow(action, productData) {
        console.log('Modal flow action:', action, 'with data:', productData);

        switch(action) {
        case 'search_select':
        showVerifyModal(productData);
        break;
        case 'verify_primary':
        verifyModal.hide();
        setTimeout(() => showBecameSellerModal(productData), 300);
        break;
        case 'became_seller_primary':
        becameSellerModal.hide();
        setTimeout(() => showAddVariantModal(productData), 300);
        break;
        case 'not_found':
        showAddVariantModal(productData);
        break;
        default:
        console.log('Unknown modal flow action:', action);
    }
    }

        // Enhanced event handlers with better logging
        document.addEventListener('DOMContentLoaded', function() {
        console.log('Modal flow system initialized');
        console.log('Available actions:');
        console.log('- Search input selection → Verify modal');
        console.log('- Verify modal primary → Became seller modal');
        console.log('- Became seller modal primary → Add variant modal');
        console.log('- Not found button → Add variant modal');
    });




        function showVerifyModal() {
        const el = document.getElementById('modal-verify-same-product');
        const modal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el); // سازگار
        modal.show();
    }

        function hideVerifyModal() {
        const el = document.getElementById('modal-verify-same-product');
        const modal = bootstrap.Modal.getInstance(el);
        if (modal) modal.hide();
    }
        function showModal2() {
        hideVerifyModal()
        const el = document.getElementById('modal-became-seller');
        const modal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el); // سازگار
        modal.show();
    }
        function hideModal2() {
        const el = document.getElementById('modal-became-seller');
        const modal = bootstrap.Modal.getInstance(el);
        if (modal) modal.hide();
    }
        function showModal3() {
        hideModal2();
        const el = document.getElementById('modal-add-variant');
        const modal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el); // سازگار
        modal.show();
    }
        function hideModal3() {
        const el = document.getElementById('modal-add-variant');
        const modal = bootstrap.Modal.getInstance(el);
        if (modal) modal.hide();
    }
