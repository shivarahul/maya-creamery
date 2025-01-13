const iceCreamRolls = [
    { name: "Chocolate Paradise", description: "Rich chocolate rolls topped with crispy chocolate flakes and nuts.", image: "images/roll1.jpg" },
    { name: "Strawberry Dream", description: "Sweet and creamy strawberry rolls with fresh strawberries and cream.", image: "images/roll2.jpg" },
    { name: "Sunny Mango", description: "Tropical mango rolls with fresh mango pieces and a citrus drizzle.", image: "images/roll3.jpg" },
    { name: "Vanilla Delight", description: "Classic vanilla rolls with caramel drizzle and cookie crumble.", image: "images/roll4.jpg" },
    { name: "Pistachio Dream", description: "Creamy pistachio rolls with a sprinkle of roasted pistachio.", image: "images/roll5.jpg" },
    { name: "Blueberry Bliss", description: "Refreshing blueberry rolls with a sweet blueberry compote.", image: "images/roll6.jpg" },
    { name: "Caramel Crunch", description: "Smooth caramel rolls with crunchy caramel pieces and a touch of sea salt.", image: "images/roll7.jpg" },
    { name: "Coconut Bliss", description: "Creamy coconut rolls with toasted coconut flakes and tropical flavors.", image: "images/roll8.jpg" },
    { name: "Matcha Green Tea", description: "Earthy matcha rolls with a drizzle of honey and a matcha dusting.", image: "images/roll9.jpg" },
    { name: "Tropical Fusion", description: "Mango and pineapple rolls with a splash of coconut cream.", image: "images/roll10.jpg" },
];

let itemsPerPage = 5;
let currentPage = 0;

function renderMenu() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const rollsToShow = iceCreamRolls.slice(startIndex, endIndex);

    rollsToShow.forEach(roll => {
        const rollItem = `
            <div class="col-md-4 menu-item" data-toggle="modal" data-target="#rollModal" data-name="${roll.name}" data-description="${roll.description}" data-image="${roll.image}">
                <img src="${roll.image}" alt="${roll.name}">
                <div class="details">
                    <p class="roll-name">${roll.name}</p>
                    <p class="description">${roll.description}</p>
                </div>
            </div>
        `;
        $('#menu-gallery').append(rollItem);
    });
}

$('#load-more').on('click', function() {
    currentPage++;
    renderMenu();

    // Hide the "Load More" button if all items are shown
    if ((currentPage + 1) * itemsPerPage >= iceCreamRolls.length) {
        $(this).hide();
    }
});

// Modal interaction
$('#rollModal').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const rollName = button.data('name');
    const rollDescription = button.data('description');
    const rollImage = button.data('image');

    const modal = $(this);
    modal.find('.modal-title').text(rollName);
    modal.find('#roll-description').text(rollDescription);
    modal.find('#roll-image').attr('src', rollImage);
});

// Initial load
renderMenu();
