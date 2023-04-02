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







// import { Popup } from './Popup.js';

// export class PopupWithImage extends Popup {
//   constructor(popup) {
//     super(popup);
//     this._popupImg = this._popup.querySelector(".popup__image");
//     this._popupImgName = this._popup.querySelector(".popup__caption");
//   }
//   open(data) {
//     super.open();
//     this._popupImg.src = data.link;
//     this._popupImg.alt = data.name;
//     this._popupImgName.textContent = data.name;
//   }
// }



// export class PopupWithImage extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this._image = this._popup.querySelector('.popup__image');
//     this._imageTitle = this._popup.querySelector('.popup__caption');
//   }

//   open(data) {
//     super.open();
//     this._image.src = data.src;
//     this._image.alt = data.alt;
//     this._imageTitle.textContent = data.alt;
//   }
// }