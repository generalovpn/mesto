import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(selectorPopup, { submitCallback }) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._buttonSubmit = this._popup.querySelector('.popup__btn-save');
  }

  /**Функция открытия Popup и получения данных о карточке */
  open(cardElement, idCard) {
    super.open();
    this.id = idCard;
    this.card = cardElement;
  }

  /**Функция отображения Preloader */
  renderPreloader(loading, displayText) {
    if (!this._buttonSubmit) return;
    if (loading) {
      this.defaulText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = displayText;
    } else {
      this._buttonSubmit.textContent = this.defaulText;
    }
  }

  /**Слушатель */
  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._submitCallback(this.id, this.card);
    })
  }
}

export { PopupWithConfirmation };