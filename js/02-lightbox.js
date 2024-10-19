import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const getEl = createGallery(galleryItems);

function createGallery(cards) {
    const markUp = cards.map(({original,preview,description}) => {
     return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`   
    }).join('');
    return markUp;
}

galleryEl.insertAdjacentHTML('beforeend', getEl);

const lightbox = new SimpleLightbox('.gallery__link', {
    captionDelay: 250,
    captionsData: 'alt',
});