import { select, settings, templates } from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor(element) {
    const thisContact = this;

    thisContact.render(element);
    thisContact.initWidgets();
  }

  render(element) {
    const thisContact = this;

    /* generate HTML based on template */
    const generatedHTML = templates.contact();
    /* create element using utils.createElementFromHTML */
    thisContact.element = utils.createDOMFromHTML(generatedHTML);
    /* find contact container */
    const contactContainer = document.querySelector(select.containerOf.contact);
    /* add element to contact */
    contactContainer.appendChild(thisContact.element);

    thisContact.dom = {};

    thisContact.dom.wrapper = element;

    thisContact.dom.name = element.querySelector(select.contact.name);
    thisContact.dom.title = element.querySelector(select.contact.title);
    thisContact.dom.text = element.querySelector(select.contact.text);

    thisContact.dom.submitButton = element.querySelector(
      select.contact.submitContact
    );
  }

  initWidgets() {
    const thisContact = this;

    thisContact.dom.wrapper.addEventListener('updated', function () {
      thisContact.updateDOM();
    });

    thisContact.dom.submitButton.addEventListener('submit', function (event) {
      event.preventDefault();
      thisContact.sendMessage();
    });
  }

  sendMessage() {
    const thisContact = this;

    const url = settings.db.url + '/' + settings.db.contact;

    const payload = {
      name: thisContact.dom.name.value,
      title: thisContact.dom.title.value,
      text: thisContact.dom.text.value,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, options);

    console.log(payload);
  }
}

export default Contact;
