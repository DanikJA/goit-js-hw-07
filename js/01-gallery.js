import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
  

const galleryEl = document.querySelector('.gallery');

const getEl = makeGalleryFn(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', getEl);
////////////////////////////////////////////////////////////////////////////////
function makeGalleryFn(cards){
    const markUp = cards.map(card => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${card.original}">
    <img
      class="gallery__image"
      src="${card.preview}"
      data-source="${card.original}"
      alt="${card.description}"
    />
  </a>
</li>`
    }).join('');
    return markUp;
}

let instance;

function openModalPhotoOnClick(event) {
  event.preventDefault();

  const currentImg = event.target.dataset.source;
    
  if (!currentImg) {
    return;
  }
    
  instance = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">

  ,{  onClose: () => {
       window.removeEventListener('keydown', closeOnClick);
    }
  }
`);
  instance.show();
  window.addEventListener('keydown', closeOnClick);

};
  

function closeOnClick(event){
  if(event.code === 'Escape') {
    instance.close();
  }
}

galleryEl.addEventListener('click', openModalPhotoOnClick);     