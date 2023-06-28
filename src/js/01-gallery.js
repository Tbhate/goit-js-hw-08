// Import the SimpleLightbox module
import SimpleLightbox from "simplelightbox";
// Import the SimpleLightbox CSS styles
import "simplelightbox/dist/simple-lightbox.min.css";
// Import the galleryItems from the local file
import { galleryItems } from './gallery-items.js';

// Output the galleryItems to verify it's being imported correctly
console.log(galleryItems);

// Select the gallery container and the gallery link
const gallery = document.querySelector(".gallery");
const pictureLink = document.querySelector(".gallery__link");

// Generate the markup for the gallery items



const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.preview}" alt="${item.description}"></a></li>`
  )
  .join("");

// Insert the markup into the gallery container
gallery.insertAdjacentHTML("beforeend", markup);


// Create an instance of SimpleLightbox

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });