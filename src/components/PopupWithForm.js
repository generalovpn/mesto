import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this.form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this.form.querySelectorAll('.popup__input');

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._formSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();

    this.form.reset();
  }
}












// import { Popup } from './Popup.js';

// export class PopupWithForm extends Popup {
//   constructor(popup, handleSubmitForm) {
//     super(popup);
//     this._handleSubmitForm = handleSubmitForm;
//     this._form = this._popup.querySelector('.popup__form');
//     this._inputList = this._popup.querySelectorAll('.popup__field');
    
    
//   }
  
//   _getInputValues() {
//     this._formValues = {};
//     this._inputList.forEach((input) => {
//       this._formValues[input.name] = input.value;
//     });
//     return this._formValues;
//   }

//   setInputValues(data) {
//     this._inputList.forEach((input) => {
//       input.value = data[input.name];
//     });
//   }

//   close() {
//     this._form.reset();
//     super.close();
//   }

//   setEventListeners() {
//     this._popup.addEventListener("submit", (e) => {
//       e.preventDefault();
//       this._handleSubmitForm(this._getInputValues());
//       this.close();
//     });
//     super.setEventListeners();
//   }
// }







// import { Popup } from "./Popup.js";

// export class PopupWithForm extends Popup {
//   constructor(popup, handleSubmitForm) {
//     super(popup);
//     this._handleSubmitForm = handleSubmitForm;
//     this._inputList = this._popup.querySelectorAll(".popup__field");
//     this._form = this._popup.querySelector(".popup__form");
//   }

//   _getInputValues() {
//     this._formValues = {};
//     this._inputList.forEach((input) => {
//       this._formValues[input.name] = input.value;
//     });
//     return this._formValues;
//   }

//   setInputValues(data) {
//     this._inputList.forEach((input) => {
//       input.value = data[input.name];
//     });
//   }

//   close() {
//     this._form.reset();
//     super.close();
//   }

//   setEventListeners() {
//     this._popup.addEventListener("submit", (e) => {
//       e.preventDefault();
//       this._handleSubmitForm(this._getInputValues());
//       this.close();
//     });
//     super.setEventListeners();
//   }
// }





// import { Popup } from './Popup';

// export class PopupWithForm extends Popup {
//   constructor(popupSelector, submitForm) {
//     super(popupSelector);
//     this._formContainer = this._popup.querySelector('.popup__form');
//     this._inputsList = this._formContainer.querySelectorAll('.popup__field');
//     this._submitForm = submitForm;
//   }

//   _getInputValues() {
//     this._formValues = {};

//     this._inputsList.forEach((input) => {
//       this._formValues[input.name] = input.value;
//     });
//     return this._formValues;
//   }

//   close() {
//     super.close();
//     this._formContainer.reset();
//   }

//   setEventListeners() {
//     super.setEventListeners();

//     this._formContainer.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//       this._submitForm(this._getInputValues());
//       this.close();
//     });
//   }
// }