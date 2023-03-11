import { openPopup, closePopup } from "./index.js";

const popupFigure = document.querySelector('.popup_type_image');
const popupFigureImage = popupFigure.querySelector('.popup__image');
const popupFigureCaption = popupFigure.querySelector('.popup__caption');
const closeImgBtn = document.querySelector('#closeImg');

class Card {
  constructor(cardSelector, name, link) {
    this._cardSelector = cardSelector;
    this._name = name;
    this._link = link
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  _openPopup() {
    openPopup(popupFigure)
    popupFigureImage.src = this._link;
    popupFigureCaption.textContent = this._name;
    popupFigureImage.alt = this._name;
    closeImgBtn.addEventListener('click', () => {
      closePopup(popupFigure);
    })
  }

  _deleteCard() {
    this._element.remove();
  }

  _handlelikeButton(evt) {
    evt.target.classList.toggle('element__heart_active');
  }

  _setEventListeners() {
    this._element.querySelector('.element__picture').addEventListener('click', () => {
      this._openPopup();
    })
    this._element.querySelector('.element__btn-delete').addEventListener('click', () => {
      this._deleteCard();
    })
    this._element.querySelector('.element__heart').addEventListener('click', (evt) => {
      this._handlelikeButton(evt);
    })
  }

  createCard() {
    this._element = this._getTemplate();

    const image = this._element.querySelector('.element__picture');
    const title = this._element.querySelector('.element__title');

    image.src = this._link;
    image.alt = this._name
    title.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export {Card}