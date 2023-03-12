import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

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

const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card');
const popupOpenImage = document.querySelector('.popup_type_image');
const popupEditForm = document.forms.formProfile;
const popupAddForm = document.forms.formCard;
const popupOpenBtnEdit = document.querySelector('.profile__btn-edit');
const popupOpenBtnAdd = document.querySelector('.profile__btn-add');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_profession');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
// const template = document.querySelector('#template-card').content.queruSelector('.element');
const cards = document.querySelector('.elements');
const titleInput = document.querySelector('.popup__field_type_title');
const linkInput = document.querySelector('.popup__field_type_link');
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__caption');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitBtnSelector: '.popup__btn-save',
  inactiveBtnClass: 'popup__btn-save_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active',
}

// Два отдельных экземпляра ФормВалид для двух форм
const validPopupEditForm = new FormValidator(config, popupEditForm);
validPopupEditForm.enableValidation();

const validPopupAddForm = new FormValidator(config, popupAddForm);
validPopupAddForm.enableValidation();

function showInitialCards() {
  initialCards.map((item) => {
    const card = createCard(item);
    cards.append(card);
  });
}

showInitialCards();

function createCard(data) {
  const card = new Card(data, '#template-card', handleCardClick);
  return card.generateCard();
}

function handleCardClick(name, link) {
  openPopup(popupOpenImage);
  popupImage.src = link;
  popupImage.alt = name;
  popupSubtitle.textContent = name;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handlerEscapeKey);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlerEscapeKey);
}

popupOpenBtnEdit.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAboutMe.textContent;
});

popupOpenBtnAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

function handlerEscapeKey(evt) {
  if(evt.key === 'Escape') {
  const popupOpened = document.querySelector('.popup_opened');
  if (popupOpened) {
  closePopup(popupOpened);
    }
  }
}

popupEditForm.addEventListener('submit', handleEditSubmit);
popupAddForm.addEventListener('submit', handleAddSubmit);

function handleEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handleAddSubmit(evt) {
  evt.preventDefault();
  const title = titleInput.value;
  const link = linkInput.value;

  const card = createCard({ name: title, link: link });

  cards.prepend(card);
  popupAddForm.reset();
  validPopupAddForm.resetValidation();
  closePopup(popupAddCard);
}