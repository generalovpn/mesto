class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formSelector = config.formSelector;
    this._form = form;
    this._buttonSubmint = this._form.querySelector(this._submitButtonSelector);
  }

  /**Функция валидации формы */
  enableValidation() {
    this._addInputListners();
  };

  /**Добавить класс ошибки */
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    inputElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  /**Снять класс ошибки */
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  }

  /**Проверить валидность поля */
  _handleFormInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  /**Функция переключения кнопки сабмит */
  _toggleButton() {
    this._isFormValid = this._form.checkValidity();
    this._buttonSubmint.disabled = !this._isFormValid;
    this._buttonSubmint.classList.toggle(this._inactiveButtonClass, !this._isFormValid);
  }

  /**Объявить функцию слушателей всех инпутов */
  _addInputListners() {
    this._toggleButton();
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._handleFormInput(inputElement);
        this._toggleButton();
      });
    })
  };

  /**Сбросить валидацию после закрытия формы */
  clearValidationForm() {
    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }
}

export { FormValidator };




// export default class FormValidator {
// 	constructor(formConfig,
// 		formElement
// 	) {
// 		this._formConfig = formConfig;
// 		this._formElement = formElement;
// 	}
	
// 	_showInputError = (inputElement,
// 		errorMessage
// 	) => {
// 		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		
// 		inputElement.classList.add(this._formConfig.inputErrorClass);
// 		errorElement.textContent = errorMessage;
// 		errorElement.classList.add(this._formConfig.errorClass);
// 	};
	
// 	_hideInputError = (inputElement) => {
// 		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		
// 		inputElement.classList.remove(this._formConfig.inputErrorClass);
// 		errorElement.classList.remove(this._formConfig.errorClass);
// 		errorElement.textContent = '';
// 	};
	
// 	_checkInputValidity = (inputElement) => {
// 		if (!inputElement.validity.valid) {
// 			this._showInputError(inputElement,
// 				inputElement.validationMessage
// 			);
// 		} else {
// 			this._hideInputError(inputElement);
// 		}
// 	};
	
// 	_hasInvalidInput = () => {
// 		return this._inputList.some(inputElement => {
// 			return !inputElement.validity.valid;
// 		});
// 	};
	
// 	_toggleButtonState = () => {
// 		if (this._hasInvalidInput()) {
// 			this._buttonElement.classList.add(this._formConfig.inactiveButtonClass);
// 			this._buttonElement.setAttribute('disabled',
// 				'true'
// 			);
// 		} else {
// 			this._buttonElement.classList.remove(this._formConfig.inactiveButtonClass);
// 			this._buttonElement.removeAttribute('disabled');
// 		}
// 	};
	
// 	resetValidation = () => {
// 		this._toggleButtonState();
		
// 		this._inputList.forEach((inputElement) => {
// 			this._hideInputError(inputElement);
// 		});
// 	};
	
// 	enableValidation = () => {
// 		this._inputList = Array.from(this._formElement.querySelectorAll(this._formConfig.inputSelector));
// 		this._buttonElement = this._formElement.querySelector(this._formConfig.submitButtonSelector);
		
// 		this._toggleButtonState();
		
// 		this._inputList.forEach(inputElement => {
// 			inputElement.addEventListener('input',
// 				() => {
// 					this._checkInputValidity(inputElement);
// 					this._toggleButtonState();
// 				}
// 			);
// 		});
// 	};
// }