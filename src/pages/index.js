import './index.css';

import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card";
import {cardConfig} from "../utils/constants";

import {addCardButton, editProfileButton, formConfig, initialCards} from "../utils/constants.js"
// import {createCard} from "../utils/utils.js";

function createCard(data) {
  const card = new Card(data, (src, name) => popupWithImage.open(src, name), cardConfig);
  return card.createCard();
}

const cardsSection = new Section({
  items: initialCards, renderer: (item) => {
    return createCard(item);
  }
}, '.elements');

cardsSection.renderItems();

const userInfo = new UserInfo('.profile__name', '.profile__about-me');

const popupEditProfile = new PopupWithForm('.popup_type_profile', (inputValues) => {
  userInfo.setUserInfo(inputValues);
});

popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_type_card', ({titleInput, linkInput}) => {
  cardsSection.addItem(createCard({name: titleInput, link: linkInput}));
})

popupAddCard.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_type_image')

popupWithImage.setEventListeners();

const profileValidation = new FormValidator(formConfig, popupEditProfile.form);
const newCardValidation = new FormValidator(formConfig, popupAddCard.form);

profileValidation.enableValidation();
newCardValidation.enableValidation();

editProfileButton.addEventListener('click', () => {
  const {profileName, profileDescription} = userInfo.getUserInfo();

  popupEditProfile.form.nameInput.value = profileName;
  popupEditProfile.form.jobInput.value = profileDescription;

  profileValidation.resetValidation();

  popupEditProfile.open();
});

addCardButton.addEventListener('click', () => {
  newCardValidation.resetValidation();
  popupAddCard.open();
});












// import '../pages/index.css';

// import {
//   initialCards,
//   validationConfig,
//   popupProfile,
//   popupCards,
//   popupView,
//   btnOpenProfile,
//   btnOpenCards,
//   cardsContainer,
//   nameProfile,
//   jobProfile,
//   formValidators
//   // selectorsNamesForValidation,
//   // popupForEditAuthor,
//   // popupForAddCard,
//   // popupForScaleImage,
//   // profileEditOpenBtn,
//   // cardAddOpenBtn,
//   // formForEditAuthor,
//   // formForAddCard,
//   // authorProfile,
//   // authorJobProfile,
//   // authorProfileInput,
//   // authorJobProfileInput,
//   // placeElements,
//   // initialCards,
// } from '../utils/constants.js';

// import { Section } from "../components/Section.js";
// import { Card } from "../components/Card.js";
// import { FormValidator } from "../components/FormValidator.js";
// import { PopupWithImage } from "../components/PopupWithImage.js";
// import { PopupWithForm } from "../components/PopupWithForm.js";
// import { UserInfo } from "../components/UserInfo.js";

// //общее создание карточки из конструктора класса кард

// function createCard(item) {
//   const card = new Card(item, ".template-card", handleCardClick);
//   const cardElement = card.generateCard();
//   return cardElement;
// }
// // вставляем в ДОМ
// function renderCard(item) {
//   const cardElement = createCard(item);
//   return cardElement;
// }

// const cardSection = new Section(
//   { items: initialCards, renderer: renderCard },
//   cardsContainer
// );
// cardSection.renderItems();

// function handleCardClick(data) {
//   popupImage.open(data);
// }

// //инстанс попапа профиля
// function submitEditProfile({ hero, profession }) {
//   userInfo.setUserInfo({ hero, profession });
//   popupWithProfile.setInputValues(userInfo.getUserInfo());
//   popupWithProfile.open();
// }

// const userInfo = new UserInfo({ nameProfile, jobProfile });
// const popupWithProfile = new PopupWithForm(popupProfile, submitEditProfile);
// popupWithProfile.setEventListeners();

// //инстанс попапа изображения
// const popupImage = new PopupWithImage(popupView);
// popupImage.setEventListeners();

// // инстанс попапа формы добавления картинок
// function submitAddCard({ name, link }) {
//   cardSection.addItem(createCard({ name: name, link: link }));
// }

// const popupWithCard = new PopupWithForm(popupCards, submitAddCard);
// popupWithCard.setEventListeners();

// //открытие попапов
// btnOpenProfile.addEventListener("click", () => {
//   popupWithProfile.open();
//   formValidators['profileForm'].resetValidation();
//   popupWithProfile.setInputValues(userInfo.getUserInfo());
  
// });

// btnOpenCards.addEventListener("click", () => {
//   popupWithCard.open();
//   formValidators["cardForm"].resetValidation();
  
// });

// // Включение валидации
// const enableValidation = (validationConfig) => {
//   const formList = Array.from(
//     document.querySelectorAll(validationConfig.formSelector)
//   );
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(validationConfig, formElement);
//     const formName = formElement.getAttribute("name");

//     formValidators[formName] = validator;
//     validator.enableValidation();
//   });
// }

// enableValidation(validationConfig);










// const validatorFormForEditAuthor = new FormValidator(selectorsNamesForValidation, formForEditAuthor);
// const validatorFromForAddCard = new FormValidator(selectorsNamesForValidation, formForAddCard);

// const cards = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       const cardItem = handleNewCard(item);
//       cards.addItem(cardItem);
//     },
//   },
//   placeElements
// );

// const dataInfo = new UserInfo({
//   nameAuthor: authorProfile,
//   infoAuthor: authorJobProfile,
// });

// const popupProfile = new PopupWithForm(popupForEditAuthor, (data) => dataInfo.setUserInfo(data));
// const popupCard = new PopupWithForm(popupForAddCard, (data) => {
//   cards.addItem(handleNewCard(data));
// });
// const popupScaleImage = new PopupWithImage(popupForScaleImage);

// function handleCardClick(evt) {
//   popupScaleImage.open(evt.target);
// }

// function handleNewCard(card) {
//   const newCard = new Card(card, '.template-card', handleCardClick).generateCard();
//   return newCard;
// }

// validatorFormForEditAuthor.enableValidation();
// validatorFromForAddCard.enableValidation();
// cards.renderItems();
// popupProfile.setEventListeners();
// popupCard.setEventListeners();
// popupScaleImage.setEventListeners();

// profileEditOpenBtn.addEventListener('click', () => {
//   popupProfile.open();
//   const { nameAuthor, infoAuthor } = dataInfo.getUserInfo();
//   authorProfileInput.value = nameAuthor;
//   authorJobProfileInput.value = infoAuthor;
//   validatorFormForEditAuthor.resetValidation();
// });

// cardAddOpenBtn.addEventListener('click', () => {
//   popupCard.open();
//   validatorFromForAddCard.resetValidation();
// });