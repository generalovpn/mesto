import './index.css';

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';

import {addCardButton, editProfileButton, formConfig, initialCards, cardConfig} from '../utils/constants.js';


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