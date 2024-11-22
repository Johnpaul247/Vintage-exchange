// SIDEBAR NAVIGATIION FOR MOBILE
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('translate-y-full')
  menu.classList.toggle('translate-y-0')
};

// TESTIMONIALS
const cardList = [
  {
    Quote: "/Img/qoutess.png",
    Name: 'Emma S. Brooklyn, NY',
    Comment: 'Vintage Clothing Exchange helped me find the perfect retro dress for my friend’s 80s-themed party! The selection is amazing, and the quality of the pieces is better than I expected.',
    Profile: "/Img/Mask-Group.png",
    Name: "Mrs. Jane Doe",
    Position: "CEO Jane Corp",
  },

  {
    Quote: "/Img/qoutess.png",
    Name: 'Jake M. Portland, OR',
    Comment: 'As a vintage seller, I love how easy it is to list my items. The platform is straightforward, and my pieces get visibility from people who truly appreciate vintage fashion.',
    Profile: "/Img/Ellipse.png",
    Name: "Richard Ramsey",
    Position: "CEO Richy Wears",
  },

  {
    Quote: "/Img/qoutess.png",
    Name: 'Sophia R. Chicago, IL',
    Comment: 'Trading clothes has never been this fun or easy! I swapped a vintage bomber jacket I wasn’t wearing anymore for a rare 90s graphic tee that I’ve been looking for forever. ',
    Profile: "Img/Ellipse-1.png",
    Name: "Sabrina Capenter",
    Position: "CEO Reese Collections",
  },
]

function display(cards) {
  const cardMenu = document.getElementById('card-menu');

  const cardElement = cards.map(card => 
    `<div class="flex flex-col gap-6 shadow-xl p-2">
      <img class="w-[70px] text-center" src="${card.Quote}" alt="">
      <p>${card.Comment}</p>
      <div class="flex gap-4">
        <img src="${card.Profile}" alt="">
        <div class="flex flex-col gap-2 mt-2">
          <h1 class="font-bold text-xl">${card.Name}</h1>
          <p>${card.Position}</p>
        </div>
      </div>
    </div>`
  ).join('')

  cardMenu.innerHTML = cardElement
}

display(cardList);