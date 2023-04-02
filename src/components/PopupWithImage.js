import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCapture = this._popup.querySelector('.popup__caption');
  }

  open(src, name) {
    this._popupImage.src = src;
    this._popupImage.alt = name;
    this._popupCapture.textContent = name;
    super.open();
  }
}