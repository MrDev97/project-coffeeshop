import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
    thisProduct.getElements();
  }

  renderInMenu() {
    const thisProduct = this;

    const generatedHTML = templates.product(thisProduct.data);

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    const productContainer = document.querySelector(
      select.containerOf.productsGalleryHome
    );

    productContainer.appendChild(thisProduct.element);
  }

  getElements() {
    const thisProduct = this;

    thisProduct.dom = {};

    thisProduct.dom.wrapper = thisProduct.element.querySelector(
      select.product.wrapper
    );
    thisProduct.dom.name = thisProduct.element.querySelector(
      select.product.name
    );
    thisProduct.dom.description = thisProduct.element.querySelector(
      select.product.description
    );
    thisProduct.dom.roasting = thisProduct.element.querySelector(
      select.product.roasting
    );
    thisProduct.dom.intensity = thisProduct.element.querySelector(
      select.product.intensity
    );
    thisProduct.dom.image = thisProduct.element.querySelector(
      select.product.image
    );
  }
}

export default Product;
