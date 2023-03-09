import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const addGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  )
  .join("");
galleryEl.insertAdjacentHTML("afterbegin", addGalleryItems);

const galleryBox = document.querySelector("div.gallery");
galleryBox.addEventListener("click", handleClickOnImage);

function handleClickOnImage(ev) {
  ev.preventDefault();

  if (ev.target.className !== "gallery__image") {
    return;
  } else {
    const instance = basicLightbox.create(`
        <img src="${ev.target.dataset.source}" width="1200" height="800">
    `);
    instance.show();
  }
}
