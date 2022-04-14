export const select = {
  templateOf: {
    galleryProduct: '#template-gallery-product',
  },
  containerOf: {
    pages: '#pages',
    home: '#home__page',
    products: '#products__page',
    contact: '#contact__page',
  },
  all: {
    products: '#products > .product__wrapper',
  },
  galleryProduct: {
    wrapper: '.product__wrapper',
    name: '.product__name',
    description: '.product__description',
    roasting: '.product__roasting',
    intensity: '.product__intensity',
    image: '.product__intensity',
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
  galleryProduct: Handlebars.compile(
    document.querySelector(select.templateOf.galleryProduct).innerHTML
  ),
};
