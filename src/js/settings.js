export const select = {
  templateOf: {
    product: '#template-product',
  },
  containerOf: {
    pages: '#pages',
    productsGalleryHome: '#productsGallery__home',
    products: '#products__page',
    contact: '#contact__page',
  },
  all: {
    products: '#products > .product__wrapper',
  },
  product: {
    wrapper: '.product__wrapper',
    name: '.product__name',
    description: '.product__description',
    roasting: '.product__roasting',
    intensity: '.product__intensity',
    image: '.product__image',
  },
  nav: {
    links: '.nav__wrapper a',
  },
};

export const classNames = {
  product: {
    rowReverse: 'reverse',
    mostPopular: 'most-popular',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  amountParams: {
    defaultValue: 1,
    defaultMin: 1,
    defaultMax: 10,
  },
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
    product: 'product',
  },
};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.product).innerHTML
  ),
};
