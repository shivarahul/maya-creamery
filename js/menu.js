$(document).ready(function() {
    // Sample data for ice cream rolls
    const iceCreamRolls = [
        {
            name: 'Classic Vanilla',
            description: 'A smooth and creamy vanilla ice cream roll topped with chocolate chips and a caramel drizzle.',
            image: 'images/roll1.jpg'
        },
        {
            name: 'Chocolate Heaven',
            description: 'Rich and decadent chocolate ice cream rolls with a sprinkle of crushed nuts and a berry syrup.',
            image: 'images/roll2.jpg'
        },
        {
            name: 'Strawberry Bliss',
            description: 'Refreshing strawberry ice cream rolls, topped with fresh strawberries and a whipped cream drizzle.',
            image: 'images/roll3.jpg'
        },
        {
            name: 'Tropical Mango',
            description: 'Mango ice cream rolls with a tropical twist, topped with shredded coconut and a hint of lime.',
            image: 'images/roll4.jpg'
        },
        {
            name: 'Matcha Delight',
            description: 'Green tea flavored ice cream rolls, complemented by a touch of honey and crushed almonds.',
            image: 'images/roll5.jpg'
        },
        {
            name: 'Mint Choco Crunch',
            description: 'A refreshing mint ice cream roll with crunchy chocolate bits and a minty syrup drizzle.',
            image: 'images/roll6.jpg'
        }
    ];

    let currentIndex = 0;
    const itemsPerLoad = 3;

    // Function to load the ice cream rolls
    function loadIceCreamRolls() {
        const container = $('#menu-gallery');
        const endIndex = Math.min(currentIndex + itemsPerLoad, iceCreamRolls.length);

        // Loop through the array to add items to the gallery
        for (let i = currentIndex; i < endIndex; i++) {
            const roll = iceCreamRolls[i];
            const menuItem = `
                <div class="col-md-4">
                    <div class="menu-item animate__animated animate__fadeIn">
                        <img src="${roll.image}" alt="${roll.name}">
                        <div class="details">
                            <h4 class="roll-name">${roll.name}</h4>
                            <p class="description">${roll.description.substring(0, 50)}...</p>
                        </div>
                    </div>
                </div>
            `;
            container.append(menuItem);
        }

        currentIndex = endIndex;  // Update currentIndex for next load

        // Hide the "Load More" button if all items have been loaded
        if (currentIndex >= iceCreamRolls.length) {
            $('#load-more').hide();
        }
    }

    // Click event for Load More button
    $('#load-more').click(function() {
        loadIceCreamRolls();
    });

    // Initial load of ice cream rolls
    loadIceCreamRolls();

    // Modal functionality
    $(document).on('click', '.menu-item', function() {
        const rollName = $(this).find('.roll-name').text();
        const rollDescription = $(this).find('.description').text();
        const rollImage = $(this).find('img').attr('src');

        // Set modal content
        $('#rollModalLabel').text(rollName);
        $('#roll-description').text(rollDescription);
        $('#roll-image').attr('src', rollImage);

        // Show modal
        $('#rollModal').modal('show');
    });
});
