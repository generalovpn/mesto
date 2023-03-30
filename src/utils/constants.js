export const initialCards = [
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

export const popupForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitBtnSelector: '.popup__btn-save',
  errorClass: '.popup__input-error',
}

export const imageData = {
  imageSelector: '.popup__image',
  captionSelector: '.popup__caption'
}

export const popupEditProfile = document.querySelector('.popup_type_profile');
export const popupAddElement = document.querySelector('.popup_type_card');
export const popupEditForm = document.forms.formProfile;
export const popupAddForm = document.forms.formCard;

export const editButton = document.querySelector('.profile__btn-edit');
export const addButton = document.querySelector('.profile__btn-add');

export const editProfileClosePopupButton = popupEditProfile.querySelector('.popup__close');
export const addCardClosePopupButton = popupAddElement.querySelector('.popup__close-add');
export const imageClosePopupButton = document.querySelector('.popup__delete-button');

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__about-me');

export const nameInput = document.querySelector('.popup__field_type_name');
export const jobInput = document.querySelector('.popup__field_type_profession');

export const titleInput = document.querySelector('.popup__field_type_title');
export const linkInput = document.querySelector('.popup__field_type_link');

export const elementCard = '.elements';

export const popupButtonSelectorAdd = document.querySelector('.popup__btn-add');
export const popupButtonSelectorEdit = document.querySelector('.popup__btn-edit');

export const popupPhotosSelector = '.popup_type_image';

export const popupSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  // submitBtnSelector: '.popup__btn-save',
  inactiveBtnClass: 'popup__btn-save_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active',
};