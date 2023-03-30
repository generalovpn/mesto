import '../pages/index.css';

import { initialCards } from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import { popupEditForm } from "../utils/constants.js";
import { popupAddForm } from "../utils/constants.js";
import { editButton } from "../utils/constants.js";
import { addButton } from "../utils/constants.js";

import { editProfileClosePopupButton } from "../utils/constants.js";
import { addCardClosePopupButton } from "../utils/constants.js";
import { imageClosePopupButton } from "../utils/constants.js";

import { profileName } from "../utils/constants.js";
import { profileJob } from "../utils/constants.js";

import { nameInput } from "../utils/constants.js";
import { jobInput } from "../utils/constants.js";
import { titleInput } from "../utils/constants.js";
import { linkInput } from "../utils/constants.js";
import { elementCard } from "../utils/constants.js";
import { popupButtonSelectorAdd } from "../utils/constants.js";
import { popupButtonSelectorEdit } from "../utils/constants.js";
import { popupPhotosSelector } from "../utils/constants.js";
import { popupSettings } from "../utils/constants.js";


const userInfo = new UserInfo({ profileName, profileJob });

const photoPopup = new PopupWithImage(popupPhotosSelector);
photoPopup.setEventListeners();

const createCard = (data) => {
  const card = new Card(data, '.element-template_type_default', {
    handleCardClick: () => {
      photoPopup.open(data);
    }
  });
  return card;
}

const cardsList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = createCard(data);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, elementCard);
cardsList.renderItems();

const popupWithAddForm = new PopupWithForm('.popup_type_card', {
  submit: (data) => {
    const card = createCard(data);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement, 'prepend');
  }
});

const popupWithInfoForm = new PopupWithForm('.popup_type_profile', {
  submit: (data) => {
    userInfo.setUserInfo(data);
  }
});

popupWithAddForm.setEventListeners();
popupWithInfoForm.setEventListeners();

addButton.addEventListener('click', () => {
  popupWithAddForm.open();
});

addCardClosePopupButton.addEventListener('click', () => {
  popupWithAddForm.close();
});

editProfileClosePopupButton.addEventListener('click', () => {
  popupWithInfoForm.close();
});

imageClosePopupButton.addEventListener('click', () => {
  photoPopup.close();
});

editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.caption;
  popupWithInfoForm.open();
});

function submitFormEdit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

popupButtonSelectorEdit.addEventListener('click', (e) => {
  submitFormEdit(e);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupWithInfoForm.close()
});

const submitFormAdd = (e) => {
  e.preventDefault();
  const card = createCard({
    name: titleInput.value,
    link: linkInput.value
  });
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement, 'prepend');
  popupWithAddForm.close();
}

popupButtonSelectorAdd.addEventListener('click', (e) => {
  submitFormAdd(e)
});

const setFormsEventListeners = () => {
  popupEditForm.addEventListener('submit', submitFormEdit);
  popupAddForm.addEventListener('submit', submitFormAdd);
}

setFormsEventListeners();

const validPopupEditForm = new FormValidator(popupSettings, popupEditForm, popupButtonSelectorEdit);
validPopupEditForm.enableValidation();

const validPopupAddForm = new FormValidator(popupSettings, popupAddForm, popupButtonSelectorAdd);
validPopupAddForm.enableValidation();