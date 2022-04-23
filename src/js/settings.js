export const select = {
  templateOf: {
    product: '#template-product',
    contact: '#template-contact',
  },
  containerOf: {
    pages: '#pages',
    productsGalleryHome: '#home__gallery > .container',
    productsGalleryProducts: '#products__gallery > .container',
    products: '#products',
    contact: '#contact',
  },
  all: {
    homeProducts: '#home > .product__wrapper',
  },
  product: {
    wrapper: '.product__wrapper',
    name: '.product__name',
    description: '.product__description',
    roasting: '.product__roasting',
    intensity: '.product__intensity',
    image: '.product__image',
  },
  contact: {
    submitContact: '.contact__form',
    name: '[name="name"]',
    title: '[name="title"]',
    text: '[name="message"]',
  },
  nav: {
    links: '.nav__wrapper a',
  },
  section: {
    home: 'home',
    products: 'products',
  },
  button: {
    discover: 'discover',
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
    contacts: 'contacts',
    contact: 'contact',
  },
};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.product).innerHTML
  ),
  contact: Handlebars.compile(
    document.querySelector(select.templateOf.contact).innerHTML
  ),
};
