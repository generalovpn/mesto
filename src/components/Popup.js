export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.currentTarget === evt.target || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}





// export class Popup {
//   constructor(popupSelector) {
//     this._popup = document.querySelector(popupSelector);
//     this._closeBtnPopup = this._popup.querySelector('.popup__close');
//     this._handleEscClose = this._handleEscClose.bind(this);
//   }
  
//   open() {
//     this._popup.classList.add('popup_opened');
//     document.addEventListener('keydown', this._handleEscClose);
//   }

//   close() {
//     this._popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', this._handleEscClose);
//   }

//   _handleEscClose = (e) => {
//     if (e.key === 'Escape') {
//       this.close();
//     }
//   }

//   setEventListeners() {
//     this._popup.addEventListener('mousedown', (e) => {
//       if (e.target.classList.contains('popup')) {
//         this.close();
//       }
//     });
//     this._closeBtnPopup.addEventListener('click', () => {
//       this.close();
//     });
//   }
// }





// export class Popup {
//   constructor(popup) {
//     this._popup = popup;
//     this._closeButton = this._popup.querySelector(".popup__close");
//     this._handleEscClose = this._handleEscClose.bind(this)
//   }

//   open() {
//     document.addEventListener('keydown', this._handleEscClose);
//     this._popup.classList.add("popup_opened");
//   }

//   close() {
//     document.removeEventListener("keydown", this._handleEscClose);
//     this._popup.classList.remove("popup_opened");
//   }
//   _handleEscClose(evt) {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }

//   setEventListeners() {
//     this._popup.addEventListener("mousedown", (evt) => {
//       if (evt.target.classList.contains("popup")) {
//         this.close();
//       }
//     });
//     this._closeButton.addEventListener("click", () => {
//       this.close();
//     });
//   }
// }






// export class Popup {
//   constructor(popupSelector) {
//     this._popup = popupSelector;
//     this._handleEscClose = this._handleEscClose.bind(this);
//   }
  
//   open() {
//     this._popup.classList.add('popup_opened');
//     document.addEventListener('keydown', this._handleEscClose);
//   }
  
//   close() {
//     this._popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', this._handleEscClose);
//   }
  
//   _handleEscClose(evt) {
//     if (evt.key === 'Escape') {
//       this.close();
//     }
//   }
  
//   setEventListeners() {
//     this._popup.addEventListener('mousedown', (evt) => {
//       if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
//         this.close();
//       }
//     });
//   }
// }