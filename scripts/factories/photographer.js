// @ts-nocheck
let WindowObjectReference = null;
/**
 * If the window is already open, focus on it. If it's not open, open it
 * @param  {String} strUrl - The URL of the page to open in the new window.
 * @param  {String} val - the id of the image to be displayed
 */
function openWindow(strUrl, val) {
  const urlPhotograph = new URL(strUrl, window.location.href);
  urlPhotograph.search = `?id=${val}`;
  // || WindowObjectReference.location.search !== paramsPhotograph
  if (
    WindowObjectReference == null ||
    WindowObjectReference.closed ||
    !Object.values(WindowObjectReference.location).includes(
      `${urlPhotograph.search}`
    )
  ) {
    /* si le pointeur vers l'objet window n'existe pas, ou s'il existe
           mais que la fenêtre a été fermée */
    WindowObjectReference = window.open(urlPhotograph);
  } else {
    WindowObjectReference.focus();
  }
}
/**
 * It creates an element, sets its text content, sets its attributes, sets its class name, and
 * appends it to a parent element
 * @param   {Element} tagParent - the parent element of the element to be created
 * @param   {String}  tagName - the name of the tag you want to create.
 * @param   {String}  [text=''] - the text content of the element
 * @param   {Object}  [attributValue={}] - an object containing the attributes and their values
 * @param   {string}  [attributValue.src] - source of the media file
 * @param   {string}  [attributValue.alt] - alternative text of the image
 * @param   {string}  [attributValue.role] - Aria role
 * @param   {string}  [attributValue.tabindex] - tabindex
 * @param   {string}  [attributValue.class] - the class name of the element
 * @param   {string}  [attributValue.type] -
 * @param   {string}  [attributValue.aria-haspopup] -
 * @param   {string}  [attributValue.ariaExpanded] -
 * @param   {string}  [attributValue.name] - element name
 * @param   {string}  [attributValue.value] - element value
 * @param   {Boolean} [attributValue.controls] - to allow the user to control video playback, including volume, seeking, and pause/resume playback.
 * @param   {*}  [attributValue.id] - Element's id
 */
function addElement(tagParent, tagName, text = '', attributValue = {}) {
  const elt = document.createElement(tagName);
  elt.textContent = text;
  Object.entries(attributValue).forEach(([key, value]) =>
    elt.setAttribute(key, value)
  );
  return tagParent.appendChild(elt);
}
/**
 * It takes an object as an argument and returns an object with two properties:
 *
 * data: the object passed as an argument
 * getUserCardDOM: a function that returns a DOM element
 * @param   {{ name: string, id: number, city: string, country: string, tagline: string, price: number, portrait: string}} data - the data object that will be used to create the photographer object
 * @typedef  {Object} Object
 * @property  {Object} data - the object
 * @property  {function} getUserCardDOM - a function that returns a DOM element
 * @return   {Object} An object with two properties: data and getUserCardDOM.
 */
function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data;
  const picture = `assets/images/${portrait}`;
  /**
   * It creates a DOM element for a user card.
   * @returns  {HTMLElement} the article element.
   */
  function getUserCardDOM() {
    const article = document.createElement('article');
    addElement(article, 'img', null, {
      src: picture,
      id,
      class: 'article-img'
    });
    addElement(article, 'h2', name, { class: 'article-title' });
    addElement(article, 'div', `${city}, ${country}`, {
      class: 'article-location'
    });
    addElement(article, 'p', tagline, { class: 'article-tagline' });
    addElement(article, 'span', `${price}€/jour`, {
      class: 'article-price'
    });
    const img = article.firstElementChild;
    const photographPathName = 'photographer.html';
    img.addEventListener('click', () => {
      const photographId = this.data.id;
      openWindow(photographPathName, photographId);
    });
    return article;
  }
  function getOneUserCardDOM() {
    const section = document.createElement('section');
    const div = addElement(section, 'div', null, { class: 'bio' });
    addElement(div, 'h2', name, { class: 'section-title' });
    addElement(div, 'div', `${city}, ${country}`, {
      class: 'section-location'
    });
    addElement(div, 'q', tagline, { class: 'section-tagline' });
    addElement(section, 'button', 'Contactez-moi', {
      class: 'contact_button',
      role: 'button'
    });
    addElement(section, 'img', null, {
      class: 'section-img',
      src: picture,
      alt: name,
      id
    });
    return section;
  }
  return {
    data,
    getUserCardDOM,
    getOneUserCardDOM
  };
}
const main = document.querySelector('main');
const divDropdown = addElement(main, 'div', null, { class: 'dropdown' });
const mainSection = addElement(main, 'section', null, {
  class: 'photograph-product'
});
function getProductSort() {
  const button = addElement(divDropdown, 'button', 'Trier par', {
    class: 'dropdown-toggle',
    type: 'button',
    'aria-haspopup': 'true'
  });
  // addElement(button, 'i', '', { class: 'fa fa-angle-right' });
  const svg = addElement(button, 'svg', '', {
    width: '16',
    height: '11',
    viewBox: '0 0 16 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  });
  addElement(svg, 'path', '', {
    d: 'M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L1.64355e-07 8.66663L1.88 10.5466Z',
    fill: 'green'
  });
  const menuDropdown = addElement(divDropdown, 'ul', null, {
    class: 'dropdown-menu active',
    role: 'listbox',
    'aria-expanded': 'false'
  });
  addElement(menuDropdown, 'li', 'Popularité', {
    class: 'option',
    id: 'option',
    role: 'option',
    tabindex: '0'
  });
  addElement(menuDropdown, 'li', 'Date', {
    class: 'option',
    id: 'option',
    role: 'option',
    tabindex: '0'
  });
  addElement(menuDropdown, 'li', 'Titre', {
    class: 'option',
    id: 'option',
    role: 'option',
    tabindex: '0'
  });
  // const select = addElement(customSelect, 'select', null, 'product-sort', {
  //   name: 'product-sort',
  //   id: 'product-sort',
  //   role: 'menu'
  // });
  // addElement(select, 'option', 'Trier par', '', { value: 'Trier par' });
  // addElement(select, 'option', 'Popularité', '', { value: 'Popular' });
  // addElement(select, 'option', 'Date', '', { value: 'Date' });
  // addElement(select, 'option', 'Titre', '', { value: 'Title' });
  // return select;
}
/**
 * It takes in an object, and returns an object with a method that returns a DOM element
 * @param   {Object} data - This is the data that we're going to use to create the productPhotographerFactory.
 * @returns an object with two properties. The first property is the data that was passed into the
 * function. The second property is a function that returns a DOM element.
 */
function productPhotographerFactory(data) {
  const { id, photographerId, title, image, video, likes } = data;
  const heart = `assets/images/heart.svg`;
  const product = `assets/images/${photographerId}/${image}`;
  const media = `assets/images/${photographerId}/${video}`;
  /**
   * It creates a DOM element for a product card
   * @returns  {HTMLElement} The article element.
   */
  function getProductUserCardDOM() {
    const article = addElement(mainSection, 'article', null, {
      class: 'product'
    });
    if (data.video) {
      addElement(article, 'video', null, {
        class: 'product-video',
        controls: true,
        src: media
      });
    } else {
      addElement(article, 'img', null, {
        class: 'product-img',
        src: product,
        alt: title,
        id
      });
    }
    const footer = addElement(article, 'footer', null, {
      class: 'product-footer'
    });
    addElement(footer, 'p', title, { class: 'product-title' });
    addElement(footer, 'span', likes, { class: 'product-likes' });
    addElement(footer, 'img', null, {
      class: 'product-heart',
      role: 'img',
      src: heart
    });
    return article;
  }
  return { data, getProductUserCardDOM };
}

export {
  photographerFactory,
  addElement,
  productPhotographerFactory,
  getProductSort
};
