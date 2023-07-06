import { galleryItems } from './gallery-items.js';
// Change code below this line

let head = document.querySelector("head");
let basicLightBoxCss = document.createElement("link");
basicLightBoxCss.rel = "stylesheet";
basicLightBoxCss.href = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css";
head.appendChild(basicLightBoxCss);

let body = document.querySelector("body");
let basicLightBoxScript = document.createElement("script");
basicLightBoxScript.src = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
body.appendChild(basicLightBoxScript);

let gallery = document.querySelector(".gallery");

for (let index = 0; index < galleryItems.length; index++) {
    let galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");
    gallery.appendChild(galleryItem);

    let galleryLink = document.createElement("a");
    galleryLink.href = galleryItems[index].original;
    galleryLink.classList.add("gallery__link");
    galleryItem.appendChild(galleryLink);

    let galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = galleryItems[index].preview;
    galleryImage.dataset.source = galleryItems[index].original;
    galleryImage.alt = galleryItems[index].description;
    galleryLink.appendChild(galleryImage);   
}

let lightboxInstance;

let images = document.querySelectorAll(".gallery__link");
images.forEach((image) => {
    image.addEventListener("click", (event) => {
    let imageLink = image.getAttribute("href");
    event.preventDefault();

    lightboxInstance = basicLightbox.create(`
        <img width="100%" height="100%" src="${imageLink}">`,{});

    lightboxInstance.show();
    });

    image.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.keyCode === 27 && lightboxInstance) {
        lightboxInstance.close();
    }
    });
});

