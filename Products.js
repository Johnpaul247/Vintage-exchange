// SIDEBAR NAVIGATION
function toggleMenu() {
  const sidebarMenu = document.getElementById('sidebar-menu');
  sidebarMenu.classList.toggle('translate-y-full')
  sidebarMenu.classList.toggle('translate-y-0')
};



// PRODUCTS
const productList = [
  {
    Image: '/Img/IMG_2906.JPG',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },

  {
    Image: 'Img/IMG_2907.JPG',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },

  {
    Image: 'Img/IMG_2908.JPG',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },

  {
    Image: 'Img/IMG_2910.JPG',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },

  {
    Image: 'Img/vint.jpeg',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },

  {
    Image: 'Img/IMG_2915.JPG',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },

  {
    Image: 'Img/IMG_2917.JPG',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },

  {
    Image: 'Img/IMG_2902.JPG',
    Brand: 'Louis Vutton',
    Rating: '/Img/rating-45.png',
    Cart: 'Add to cart',
    Price: '100.00'
  },
]


function display(cards) {
  const productMenu = document.getElementById('product-menu');

  const cardElement = cards.map(card =>
    `<div class="flex flex-col gap-2 border border-gray-800 p-2 rounded-lg">
            <img class="w-[300px] rounded-lg" src="${card.Image}" alt="">
            <div class="flex justify-between">
              <p class="font-bold">${card.Brand}</p>
              <img class="w-[50px]" src="${card.Rating}" alt="">
            </div>
            <div class="flex justify-between">
              <button class="p-2 bg-gray-800 text-white rounded-tl-lg rounded-b-lg">${card.Cart}</button>
              <p class="font-semibold">${card.Price}</p>
            </div>
          </div>`
  ).join('')

  productMenu.innerHTML = cardElement;
}
display(productList)