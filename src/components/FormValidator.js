export default class FormValidator {
  constructor(formConfig, formElement) {
    this._formConfig = formConfig;
    this._formElement = formElement;
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._formConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formConfig.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._formConfig.inputErrorClass);
    errorElement.classList.remove(this._formConfig.errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._formConfig.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'true');
    } else {
      this._buttonElement.classList.remove(this._formConfig.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  resetValidation = () => {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }

  enableValidation = () => {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._formConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._formConfig.submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
}





// export class FormValidator {
//   constructor(config, formElement) {
//     this._formElement = formElement;
//     this._inputSelector = config.inputSelector;
//     this._submitBtnSelector = config.submitBtnSelector;
//     this._inactiveBtnClass = config.inactiveBtnClass;
//     this._inputErrorClass = config.inputErrorClass;
//     this._errorClass = config.errorClass;
//     this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
//     this._buttonElement = this._formElement.querySelector(this._submitBtnSelector);
//   }

//   _showInputError(inputElement, errorMessage) {
//     const errorElement = this._formElement.querySelector(`#${inputElement.id} + .popup__input-error`); 
//     inputElement.classList.add(this._inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(this._errorClass);
//   }

//   _hideInputError(inputElement) {
//     const errorElement = this._formElement.querySelector(`#${inputElement.id} + .popup__input-error`);
//     inputElement.classList.remove(this._inputErrorClass);
//     errorElement.classList.remove(this._errorClass);
//     errorElement.textContent = '';
//   }

//   _checkInputValidity(inputElement) {
//     if (!inputElement.validity.valid) {
//       this._showInputError(inputElement, inputElement.validationMessage);
//     } else {
//       this._hideInputError(inputElement);
//     }
//   }
  
//   _toggleButtonState() {
//     if (this._hasInvalidInput()) {
//       this._buttonElement.classList.add(this._inactiveBtnClass);
//       this._buttonElement.disabled = true;
//     } else {
//       this._buttonElement.classList.remove(this._inactiveBtnClass);
//       this._buttonElement.disabled = false;
//     }
//   }

//   _hasInvalidInput() {
//     return this._inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   }
  
//   _setEventListener() {
//     this._toggleButtonState();
//     this._inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         this._checkInputValidity(inputElement);
//         this._toggleButtonState();
//       });
//     });
//   }

//   enableValidation = () => {
//     this._toggleButtonState();
//     this._setEventListener();
//   }

//   resetValidation() {
//     this._inputList.forEach((inputElement) => {
//       this._hideInputError(inputElement);
//     })
//     this._toggleButtonState();
//   }
// }






// export class FormValidator {
//   constructor(validationConfig, formElement) {
//     this._inputSelector = validationConfig.inputSelector;
//     this._submitButtonSelector = validationConfig.submitButtonSelector;
//     this._inactiveButtonClass = validationConfig.inactiveButtonClass;
//     this._inputErrorClass = validationConfig.inputErrorClass;
//     this._errorClass = validationConfig.errorClass;
//     this._formElement = formElement;
//     this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
//     this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
//   }

//   // показываем ошибку
//   _showInputError(inputElement) {
//     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(this._inputErrorClass);
//     errorElement.textContent = inputElement.validationMessage;
//     errorElement.classList.add(this._errorClass);
//   }

//   // скрываем ошибку
//   _hideInputError(inputElement) {
//     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(this._inputErrorClass);
//     errorElement.classList.remove(this._errorClass);
//     errorElement.textContent = "";
//   }
//   // выборка для хайда ошибки
//   _isValid(inputElement) {
//     if (!inputElement.validity.valid) {
//       this._showInputError(inputElement, inputElement.validationMessage);
//     } else {
//       this._hideInputError(inputElement);
//     }
//   }

//   // кнопка сабмита туда сюда
//   _toggleButtonState() {
//     if (this._hasInvalidInput()) {
//       this._buttonElement.disabled = true;
//       this._buttonElement.classList.add(this._inactiveButtonClass);
//     } else {
//       this._buttonElement.disabled = false;
//       this._buttonElement.classList.remove(this._inactiveButtonClass);
//     }
//   }

//   resetValidation() {
//     this._toggleButtonState();
//     this._inputList.forEach((inputElement) => {
//       this._hideInputError(inputElement);
//     });
//   }

//   _hasInvalidInput() {
//     return this._inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   }

//   //слушатели инпутов в формах
//   _setEventListeners() {
//     this._toggleButtonState();
//     this._initResetListener();
//     this._inputList.forEach((inputElement) => {
//       inputElement.addEventListener("input", () => {
//         this._isValid(inputElement);
//         this._toggleButtonState();
//       });
//     });
//   }
//   //функция очищение поля
//   _initResetListener() {
//     this._formElement.addEventListener("reset", () => {
//       setTimeout(() => {
//         this._toggleButtonState();
//       }, 0);
//     });
//   }

//   enableValidation() {
//     this._setEventListeners();
//   }
// }









// export class FormValidator {
//   constructor(selectorsNames, formElement) {
//     this._formElement = formElement;
//     this._selectorsNames = selectorsNames;
//     this._buttonElement = this._formElement.querySelector(this._selectorsNames.submitButtonSelector);
//     this._inputsList = Array.from(formElement.querySelectorAll(this._selectorsNames.inputSelector));
//   }
  
//   _showInputError(inputElement, errorMessage) {
//     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(this._selectorsNames.inputErrorClass);
//     errorElement.classList.add(this._selectorsNames.errorClass);
//     errorElement.textContent = errorMessage;
//   }
  
//   _hideInputError(inputElement) {
//     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(this._selectorsNames.inputErrorClass);
//     errorElement.classList.remove(this._selectorsNames.errorClass);
//     errorElement.textContent = '';
//   }
  
//   _checkInputValidity(inputElement) {
//     if (!inputElement.validity.valid) {
//       this._showInputError(inputElement, inputElement.validationMessage);
//     } else {
//       this._hideInputError(inputElement);
//     }
//   }
  
//   _hasInvalidInput() {
//     return this._inputsList.some((input) => {
//       return !input.validity.valid;
//     });
//   }
  
//   _hasInputWithoutSpaces() {
//     return this._inputsList.some((input) => {
//       if (input.type === 'url' && input.value !== '' && input.value.includes(' ')) {
//         this._showInputError(input, 'Использование пробелов в ссылке запрещено.');
//         return true;
//       }
//     });
//   }
  
//   _disabledButton() {
//     this._buttonElement.classList.add(this._selectorsNames.inactiveButtonClass);
//     this._buttonElement.disabled = true;
//   }
  
//   _activeButton() {
//     this._buttonElement.classList.remove(this._selectorsNames.inactiveButtonClass);
//     this._buttonElement.disabled = false;
//   }
  
//   _toggleButtonState() {
//     if (this._hasInvalidInput() || this._hasInputWithoutSpaces()) {
//       this._disabledButton();
//     } else {
//       this._activeButton();
//     }
//   }
  
//   resetValidation() {
//     this._toggleButtonState();
//     this._inputsList.forEach((item) => {
//       this._hideInputError(item);
//     });
//   }
  
//   _setEventListeners() {
//     this._inputsList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         this._checkInputValidity(inputElement);
//         this._toggleButtonState();
//       });
//     });
//   }
  
//   enableValidation() {
//     this._setEventListeners();
//     }
// }