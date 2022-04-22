import { settings, select, classNames } from './settings.js';
import Product from './components/Product.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.pages.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

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

    thisApp.initPages();
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
