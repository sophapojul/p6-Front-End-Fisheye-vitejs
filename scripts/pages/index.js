import '../../css/style.scss';
import photographerFactory from '../factories/photographer';

async function getPhotographers() {
  const res = await fetch('../../data/photographers.json');
  const data = await res.json();
  const { photographers } = data;
  return photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
