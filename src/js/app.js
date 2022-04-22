import { settings, select, classNames } from './settings.js';
import Product from './components/Product.js';

const app = {
  initData: function () {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;

    thisApp.data = {};

    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;

        thisApp.initGallery();
      });
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
  },

  initGallery: function () {
    const thisApp = this;

    let productList = [];

    for (let productData in thisApp.data.products) {
      new Product(
        thisApp.data.products[productData].id,
        thisApp.data.products[productData]
      );

      productList.push(thisApp.data.products[productData].name);
    }

    const productNameSelector = document.querySelectorAll(select.product.name);

    for (let product of productNameSelector) {
      const productName = product.innerHTML;

      const productIndex = productList.indexOf(productName) + 1;

      const productToStr = productIndex.toString();

      const adjNum = productToStr.padStart(2, '0');

      const productNumtoTxt = product.insertAdjacentHTML(
        'afterbegin',
        adjNum + '.' + ' '
      );
      console.log(productNumtoTxt);

      const productWrapper = product.parentElement.parentElement;

      if (productIndex % 2 == 0) {
        productWrapper.classList.add(classNames.product.rowReverse);

        console.log(productWrapper);
        console.log(productList);
      }

      const productDescription = product.nextElementSibling;

      if (productIndex == 1) {
        productDescription.classList.add(classNames.product.mostPopular);
      }
    }
  },
};

app.init();
