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

export const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_visible',
};

export const cardConfig = {
  likeButtonSelector: '.element__heart',
  deleteButtonSelector: '.element__btn-delete',
  cardImageSelector: '.element__picture',
  cardSelector: '.element',
  cardTitleSelector: '.element__title',
  cardTemplateSelector: '.template-card'
}

// export const popupProfile = document.querySelector('.popup_type_profile');
// export const popupCards = document.querySelector('.popup_type_card');
// export const popupView = document.querySelector('.popup_type_image');

export const editProfileButton = document.querySelector('.profile__btn-edit');
export const addCardButton = document.querySelector('.profile__btn-add');

// export const profileForm = document.forms['profileForm'];
// export const cardForm  = document.forms['cardForm'];
// export const formValidators = {profileForm, cardForm};
// export const cardsContainer = '.elements';
// export const nameProfile = '.profile__name';
// export const jobProfile = '.profile__about-me';





// export const popupForEditAuthor = document.querySelector('.popup_type_profile');
// export const popupForAddCard = document.querySelector('.popup_type_card');
// export const popupForScaleImage = document.querySelector('.popup_type_image');

// export const profileEditOpenBtn = document.querySelector('.profile__btn-edit');
// export const cardAddOpenBtn = document.querySelector('.profile__btn-add');
  
// export const formForEditAuthor = popupForEditAuthor.querySelector('.popup__form_profile');
// export const formForAddCard = popupForAddCard.querySelector('.popup__form_card');
  
// export const authorProfile = document.querySelector('.profile__name');
// export const authorJobProfile = document.querySelector('.profile__about-me');

// export const authorProfileInput = document.querySelector('.popup__field_type_name');
// export const authorJobProfileInput = document.querySelector('.popup__field_type_profession');
  
// export const placeElements = document.querySelector('.elements');