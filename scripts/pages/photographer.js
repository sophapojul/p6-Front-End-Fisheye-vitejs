import '../../css/style.scss';
import { displayModal, closeModal } from '../utils/contactForm';
import { getPhotographers, getProductPhotographers } from '../utils/api';
import {
  photographerFactory,
  productPhotographerFactory,
  getProductSort
} from '../factories/photographer';

/**
 * `displayPhotograph` takes a photographer object and displays it on the page
 * @param   {Object}  photographer - This is the photographer object that we want to display.
 */
const displayPhotograph = (photographer) => {
  const photographHeader = document.querySelector('.photograph-header');
  const photographModel = photographerFactory(photographer);
  const userCardDOM = photographModel.getOneUserCardDOM();
  photographHeader.appendChild(userCardDOM);
};
/**
 * It takes an array of objects as an argument, and returns the object that has the same id as the id
 * in the url
 * @param   {Array.<Object>} data - an array of objects
 * @returns    {Object} The Photograph object that matches the id in the URL.
 */
const getPhotograph = (data) => {
  const url = new URL(window.location.href);
  const params = url.searchParams.get('id');
  const id = parseInt(params, 10);
  const Photograph = data.find((el) => el.id === id);
  return Photograph;
};
const displayProductPhotograph = (media) => {
  const photographHeader = document.querySelector('.photograph-product');
  media.forEach((product) => {
    const productPhotographModel = productPhotographerFactory(product);
    const userCardDOM = productPhotographModel.getProductUserCardDOM();
    photographHeader.appendChild(userCardDOM);
  });
};
const getProductPhotograph = (data) => {
  const url = new URL(window.location.href);
  const params = url.searchParams.get('id');
  const id = parseInt(params, 10);
  const productPhotograph = data.filter((el) => el.photographerId === id);
  return productPhotograph;
};
(async () => {
  const photographers = await getPhotographers();
  const photograph = await getPhotograph(photographers);
  getProductSort();
  const media = await getProductPhotographers();
  const productPhotograph = await getProductPhotograph(media);
  displayPhotograph(photograph);
  const openBtn = document.querySelector('.contact_button');
  const closeImg = document.querySelector('.modal img');
  openBtn.addEventListener('click', displayModal);
  closeImg.addEventListener('click', closeModal);
  displayProductPhotograph(productPhotograph);
})();
