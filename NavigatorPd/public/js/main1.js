document.addEventListener('DOMContentLoaded', function () {
    const shopListContainer = document.getElementById('shopListContainer');
    const categoryDropdown = document.getElementById('categoryDropdown');

    function fetchResultsFromServer(searchTerm) {
        const selectedCategories = Array.from(categoryDropdown.selectedOptions).map(option => option.value);

        // Check if no categories are selected
        if (selectedCategories.length === 0) {
            fetch(`/api/search?term=${searchTerm}`)
                .then(response => response.json())
                .then(data => displayShopList(data))
                .catch(error => console.error('Error fetching data:', error));
        } else {
            fetch(`/api/search?term=${searchTerm}&categories=${selectedCategories.join(',')}`)
                .then(response => response.json())
                .then(data => displayShopList(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }
    function updateShopList() {
        const searchTerm = document.getElementById('pointAInput').value.toLowerCase();
        fetchResultsFromServer(searchTerm);
    }

    function displayShopList(shops) {
        shopListContainer.innerHTML = '';
    
        if (shops.length > 0) {
            const ul = document.createElement('ul');
            shops.forEach(shop => {
                const li = document.createElement('li');
                li.textContent = shop.name;
                li.addEventListener('click', function () {
                    document.getElementById('pointAInput').value = shop.name;
                    incrementSelectionCount(shop.id);
                    hideShopList();
                });
                ul.appendChild(li);
            });
            shopListContainer.appendChild(ul);
            shopListContainer.classList.add('active');
        } else {
            hideShopList();
        }
    }
    
    function incrementSelectionCount(shopId) {
        // Используйте метод POST для увеличения счетчика выбора
        fetch(`/api/incrementSelectionCount?shopId=${shopId}`, { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    console.error('Ошибка при увеличении счетчика выбора:', response.statusText);
                }
            })
            .catch(error => console.error('Ошибка при увеличении счетчика выбора:', error));
    }
    

    function hideShopList() {
        shopListContainer.innerHTML = '';
        shopListContainer.classList.remove('active');
    }

    // Add 'input' event listener to the search input
    const pointAInput = document.getElementById('pointAInput');
    pointAInput.addEventListener('input', function () {
        updateShopList();
    });

    // Add 'focus' event listener to show shop list when the input is focused
    pointAInput.addEventListener('focus', function () {
        const searchTerm = document.getElementById('pointAInput').value.toLowerCase();
        fetchResultsFromServer(searchTerm);
    });

    
    pointAInput.addEventListener('blur', function () {
        setTimeout(hideShopList, 5000);
    });

    document.addEventListener('click', function (event) {
        const isClickInsideShopList = shopListContainer.contains(event.target);
        const isClickOnpointAInput = event.target === pointAInput;

        if (!isClickInsideShopList && !isClickOnpointAInput) {
            hideShopList();
        } else if (isClickInsideShopList && event.target.tagName === 'LI') {
            hideShopList();
        }
    });

    // Fetch categories and update the dropdown
    fetch('/api/categories')
        .then(response => response.json())
        .then(data => updateCategoryDropdown(data))
        .catch(error => console.error('Error fetching categories:', error));

    function updateCategoryDropdown(categories) {
        const categoryDropdown = document.getElementById('categoryDropdown');

        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id; // Assuming each category has an 'id' property
            option.textContent = category.name; // Assuming each category has a 'name' property
            categoryDropdown.appendChild(option);
        });

        // Initialize Select2 for the multi-select dropdown
        $(categoryDropdown).select2();
    }
});
