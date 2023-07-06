import { galleryItems } from './gallery-items.js';
// // Change code below this line

let head = document.querySelector('head');
let simpleLightBoxCss = document.createElement('link');
simpleLightBoxCss.rel = 'stylesheet';
simpleLightBoxCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.1/simple-lightbox.css';
head.appendChild(simpleLightBoxCss);

let body = document.querySelector('body');
let simpleLightBoxScript = document.createElement('script');
simpleLightBoxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.1/simple-lightbox.min.js';

simpleLightBoxScript.onload = function () {
  let gallery = document.querySelector('.gallery');

  for (let index = 0; index < galleryItems.length; index++) {
    let galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');
    gallery.appendChild(galleryItem);

    let galleryLink = document.createElement('a');
    galleryLink.href = galleryItems[index].original;
    galleryLink.classList.add('gallery__link');
    galleryItem.appendChild(galleryLink);

    let galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = galleryItems[index].preview;
    galleryImage.dataset.source = galleryItems[index].original;
    galleryImage.alt = galleryItems[index].description;
    galleryLink.appendChild(galleryImage);
  }

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
};

body.appendChild(simpleLightBoxScript);
