export  class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick.handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.element__heart').addEventListener('click', () => this._handleHeartClick());
    this._element.querySelector('.element__picture').addEventListener('click', () => this._handleCardClick());
    }
  

  generateCard() {
    this._element = this._getTemplate();
    this._handleHeartClick();
    this._deleteSetEventListeners();
    this._handleCardClickImage();
    this._setEventListeners();
    this._element.querySelector('.element__picture').src = this._link;
    this._element.querySelector('.element__picture').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    
    return this._element;
  }
  _deleteSetEventListeners() {
    this._element.querySelector('.element__btn-delete').addEventListener('click', function (event) {
      event.target.closest('.element').remove();
    });
  }

  _handleHeartClick() {
    this._element.querySelector('.element__heart').addEventListener('click', function (event) {
      event.target.classList.toggle('element__heart_active');
    });
  }

  

  _handleCardClickImage() {
    this._element.querySelector('.element__picture').addEventListener('click', () => {
      this._handleCardClick();
    });
  }
}
