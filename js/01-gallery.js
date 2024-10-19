import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
  
// const galleryEl = document.querySelector('.gallery');
// const getEl = makeGalleryFn(galleryItems);
// galleryEl.insertAdjacentHTML('beforeend', getEl);

// function makeGalleryFn(cards){
//     const markUp = cards.map(card => {
//         return `<li class="gallery__item">
//   <a class="gallery__link" href="${card.original}">
//     <img
//       class="gallery__image"
//       src="${card.preview}"
//       data-source="${card.original}"
//       alt="${card.description}"
//     />
//   </a>
// </li>`
//     }).join('');
//     return markUp;
// }

// function openModalPhotoOnClick(event) {
//     event.preventDefault();

//     const currentImg = event.target.dataset.source;
    
//     if(!currentImg) {
//         return;
//     }
    
//   const instance = basicLightbox.create(`
//     <img src="${currentImg}" width="800" height="600">
// `);
  
// instance.show()
// }

// galleryEl.addEventListener('click', openModalPhotoOnClick);   

const galleryEl = document.querySelector('.gallery');
const getEl = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', getEl);

function createGallery(cards){
  const markUp = cards.map(({original,preview,description}) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('')
  return markUp;
}


function openModalWindow(event){
  event.preventDefault();

  const currentImg = event.target.dataset.source;

  if(!currentImg){
    return;
  }
  
  const instance = basicLightbox.create(`
    <img src="${currentImg}" width="800" height="600">
`)
  instance.show();

  const closeModal = (e) => {
    if(e.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown',closeModal )
   }
  }
  document.addEventListener('keydown', closeModal);
}

galleryEl.addEventListener('click', openModalWindow);