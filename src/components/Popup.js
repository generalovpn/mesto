export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleClickClose = this._handleClickClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  _handleClickClose(e) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }
  
  setEventListeners() {
    this._popupElement.addEventListener('click', this._handleClickClose);
  }

  _removeEventListeners() {
    this._popupElement.removeEventListener('click', this._handleClickClose);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
}