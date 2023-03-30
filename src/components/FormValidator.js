export class FormValidator {
  constructor(validationConfig, formElement, submitButtonSelector) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveBtnClass = validationConfig.inactiveBtnClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._inputList = Array.from(formElement);
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }

  buttonDisabled() {
    this._submitButtonSelector.setAttribute('disabled', 'disabled');
    this._submitButtonSelector.classList.add(this._inactiveBtnClass);
  }

  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement, this._inputErrorClass, this._errorClass);
        this._toggleButtonState();
      });
    });
  }

  _showInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError(inputElement, errorElement, inputErrorClass, errorClass) {
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement, inputErrorClass, errorClass) {
    const errorElement = inputElement.nextElementSibling;
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorElement, inputErrorClass, errorClass)
    } else {
      this._hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
    }
  }
  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.buttonDisabled();
    } else {
      this._submitButtonSelector.removeAttribute('disabled');
      this._submitButtonSelector.classList.remove(this._inactiveBtnClass);
    }
  }
}