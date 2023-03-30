import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  open({ link, name }) {
    this._popupElement.querySelector('.popup__caption').textContent = name;
    const imageElement = this._popupElement.querySelector('.popup__image');

    imageElement.src = link;
    imageElement.alt = `Изображение ${name}`;

    super.open();
  }
}