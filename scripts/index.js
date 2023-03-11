import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const openPopapBtn = document.querySelector('.profile__btn-edit');
const closePopapBtn = document.querySelector('#edit-profile-close');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_profession');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const profileForm = document.querySelector('.popup__form_profile');
const openAddCardButton = document.querySelector('.profile__btn-add');
const inputAddCardName = document.querySelector('.popup__field_type_title');
const inputAddCardlink = document.querySelector('.popup__field_type_link');
const closePopapCard = document.querySelector('.popup__btn-close');
const cardsContainer = document.querySelector('.elements');
const popupFormCard = document.querySelector('#form-card');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card');
const formAddCard = document.querySelector('.popup__form');
const inputList = document.querySelectorAll('.popup__field');
const addCardButtonSave = popupAddCard.querySelector('.popup__btn-save');
const esc = 'Escape';

// Функция закрытия попап по оверлей
const setOverlayListener = function(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
}

// Фунция закрытия попап по кнопке ESC
const setEscListener = function(evt) {
  if(evt.key === esc) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Добавление карточек при загрузке
initialCards.forEach (function (item) {
  renderCard(item.link, item.name);
})

function renderCard(link, name) {
  const cardTemplate = new Card('#template-card', name, link);

  cardsContainer.prepend(cardTemplate.createCard());
}

// Добавление карточки через нажатие Enter
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(inputAddCardlink.value, inputAddCardName.value);
  const resetForm = new FormValidator(config, formAddCard);
  resetForm.resetForm();
  closePopup(popupAddCard);
  addCardButtonSave.disabled = true;
}

const enableValidation = (config, popup) => {
  const formValidatorEditProfile = new FormValidator(config, popup);
  formValidatorEditProfile.enableValidation();
}

// Открытие окна редактирования профиля
function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAboutMe.textContent;

  enableValidation(config, popupEditProfile);
}

// Изменение данных профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function closeAddCardPopup() {
  closePopup(popupAddCard);
  const resetForm = new FormValidator(config, formAddCard);
  resetForm.resetForm();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('mousedown', setOverlayListener);
  document.addEventListener('keydown', setEscListener);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', setOverlayListener);
  document.removeEventListener('keydown', setEscListener);
}

// Слушатель отправки формы профиля
profileForm.addEventListener('submit', handleProfileFormSubmit);

// Слушатель кнопки открытия попап профиля
openPopapBtn.addEventListener('click', openEditPopup);

// Слушатель кнопки закрытия попап профиля
closePopapBtn.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

// Слушатель кнопки открытия попап добавления карточки
openAddCardButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  inputList.forEach((input) => {
    input.addEventListener('keydown', () => {
      enableValidation(config, popupAddCard)
    })
  })
});

// Слушатель кнопки закрытия попап добавления карточки
closePopapCard.addEventListener('click', closeAddCardPopup);

// Слушатель кнопки отправки формы карточки
popupFormCard.addEventListener('submit', handleCardFormSubmit);

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitBtnSelector: '.popup__btn-save',
  inputErrorClass: '.popup__input-error',
  errorClass: '.popup__input-error_active'
}

export { openPopup, closePopup };