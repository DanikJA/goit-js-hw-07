import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
  




const galleryList = document.querySelector('.gallery');
const getGel = createImgCards(galleryItems);

galleryList.insertAdjacentHTML('beforeend', getGel )

function createImgCards(cards){
    const murkUp = cards.map(card => {
        return `<li class="gallery__item">
                 <a class="gallery__link" href="${card.original}">
                <img class="gallery__image" src="${card.preview}" data-source="${card.original}" alt="${card.description}" />
                 </a>
                </li>`
        
    }).join('');
    return murkUp;
}







