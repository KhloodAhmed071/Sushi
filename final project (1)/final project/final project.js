
function updateQuantity(button, change) {
    const countElement = button.parentNode.querySelector(".count");
    let currentCount = parseInt(countElement.textContent);
    

    currentCount += change;

    if (currentCount < 0) {
        currentCount = 0;
    }

    
    countElement.textContent = currentCount;
}

const sushiData = [
    { img: 'img project1.png', name: 'URAMAKI FINGER', price: '1000 EGP', description: 'A bite-sized sushi roll with rice on the outside filled with ingredients like avocado or fish. Perfect for casual events.' },
    { img: 'img project2.png', name: 'URAMAKI FINGER', price: '4000 EGP', description: 'A bite-sized sushi roll with rice on the outside filled with ingredients like avocado or fish. Perfect for casual events.' },
    { img: 'img project3.png', name: 'URAMAKI FINGER', price: '1000 EGP', description: 'A bite-sized sushi roll with rice on the outside filled with ingredients like avocado or fish. Perfect for casual events.' },
    { img: 'img project4.png', name: 'URAMAKI FINGER', price: '2000 EGP', description: 'A bite-sized sushi roll with rice on the outside filled with ingredients like avocado or fish. Perfect for casual events.' },
    { img: 'img project5.png', name: 'URAMAKI FINGER', price: '1500 EGP', description: 'A bite-sized sushi roll with rice on the outside filled with ingredients like avocado or fish. Perfect for casual events.' },
    { img: 'img project6.png', name: 'URAMAKI FINGER', price: '25000 EGP', description: 'A bite-sized sushi roll with rice on the outside filled with ingredients like avocado or fish. Perfect for casual events.' },
];

function generateCards() {
    const container = document.querySelector('.card-container');
    sushiData.map(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p class="price">${item.price}</p>
            <p class="description">${item.description}</p>
            <div class="rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="quantity">
                <button class="decrease" onclick="updateQuantity(this, -1)">-</button>
                <span class="count">0</span>
                <button class="increase" onclick="updateQuantity(this, 1)">+</button>
            </div>
        `;
        container.appendChild(card);
    });
}

generateCards();