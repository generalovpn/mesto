// Проверка валмдности
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  }
};

// Отображение ошибок
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  if (!inputElement) return;
  inputElement.classList.add(inputErrorClass);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!errorElement) return;
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};

// Скрытие (не отображение) ошибок
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement) return;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  if (!errorElement) return;
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// Неактивная кнопка попап
const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
  const isFormValid = formElement && formElement.checkValidity();
  buttonElement.classList.toggle(inactiveButtonClass, !isFormValid);
  buttonElement.disabled = !isFormValid;
};

function removeButtonState(buttonElement, inactiveButtonClass) {
  toggleButtonState(false, buttonElement, inactiveButtonClass)
};

// Валидация
const setEventListeners = (formElement, {
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  
  formElement.addEventListener('submit', e => {
    e.preventDefault();
    removeButtonState(buttonElement, inactiveButtonClass)
  });
    
  toggleButtonState(formElement, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(formElement, buttonElement, inactiveButtonClass);
    });
  })
};

// Валидация для всех форм в HTML
const enableValidation = ({formSelector, ...rest}) => {
  const getFormList = Array.from(document.querySelectorAll(formSelector));
  getFormList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  })
};

// Настройки передаются при включении валидации и вызове enableValidation
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
});