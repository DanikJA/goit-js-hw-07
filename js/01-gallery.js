import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
  

// const galleryList = document.querySelector('.gallery');
// const getGel = createImgCards(galleryItems);

// galleryList.insertAdjacentHTML('beforeend', getGel )

// function createImgCards(cards){
//     const murkUp = cards.map(card => {
//         return `<li class="gallery__item">
//                  <a class="gallery__link" href="${card.original}">
//                 <img class="gallery__image" src="${card.preview}" data-source="${card.original}" alt="${card.description}" />
//                  </a>
//                 </li>`
        
//     }).join('');
//     return murkUp;
// }



const galleryEl = document.querySelector('.gallery');

const getEl = makeGalleryFn(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', getEl);

function makeGalleryFn(cards){
    const markUp = cards.map(card => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${card.original}">
    <img
      class="gallery__image"
      src="${card.preview}"
      data-source="{card.original}"
      alt="${card.description}"
    />
  </a>
</li>`
    }).join('');
    return markUp;
}


galleryEl.addEventListener('click', openModalPhotoOnClick);

function openModalPhotoOnClick(event) {
    event.preventDefault();

    const currentImg = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">
`)

instance.show()
}

