import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInHome();
    thisProduct.renderInProducts();
    thisProduct.getElements();
  }

  renderProduct() {
    const thisProduct = this;

    const generatedHTML = templates.product(thisProduct.data);

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
  }

  renderInHome() {
    const thisProduct = this;

    thisProduct.renderProduct();

    const homeGalleryContainer = document.querySelector(
      select.containerOf.productsGalleryHome
    );

    homeGalleryContainer.appendChild(thisProduct.element);
  }

  renderInProducts() {
    const thisProduct = this;

    thisProduct.renderProduct();

    const productsGalleryContainer = document.querySelector(
      select.containerOf.productsGalleryProducts
    );

    productsGalleryContainer.appendChild(thisProduct.element);
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
