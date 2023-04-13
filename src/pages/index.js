import './index.css';

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import {buttonAddCard, buttonEditProfile, buttonEditAvatar, formConfig} from '../utils/constants.js';

import {createCard} from '../utils/utils.js';


export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers:{
    authorization: 'a9110206-e08b-4912-9750-2ef951bd76b4',
    'Content-Type': 'application/json'
  }
})


const cardsSection = new Section((item) => {return createCard(item);}, '.elements');

api.getInitialCards()
	.then(res => {
		cardsSection.renderItems(res);
	})
	.catch(err => {
		console.log(err);
	});

export const userInfo = new UserInfo('.profile__name', '.profile__about-me', '.profile__avatar');

api.getProfileData()
	.then(({about, avatar, name, _id}) => {
		userInfo.setUserInfo({
			nameInput: name,
			jobInput: about
		});
		userInfo.getUserID(_id);
		userInfo.setUserAvatar(avatar);
	})
	.catch(err => {
		console.log(err);
	});

const popupEditProfile = new PopupWithForm('.popup_type_profile', (inputValues) => {
	const { nameInput, jobInput } = inputValues;
	return api.editProfileData(nameInput, jobInput)
		.then(({name, about}) => {
			userInfo.setUserInfo({
				nameInput: name,
				jobInput: about
			});
		});
	});


const popupAddCard = new PopupWithForm('.popup_type_card', ({titleInput, linkInput}) => {
	return api.postNewCard(titleInput, linkInput)
	.then(res => {
		cardsSection.addItem(createCard(res));
	});
});

export const popupWithImage = new PopupWithImage('.popup_type_image');

const popupEditAvatar = new PopupWithForm('.popup_type_avatar', ({avatarLinkInput}) => {
	return api.editAvatar(avatarLinkInput)
		.then(({avatar}) => {
			userInfo.setUserAvatar(avatar);
	});
});


export const popupConfirmation = new PopupWithConfirmation('.popup_type_confirm', (card) => {
	return api.deleteCard(card._id)
		.then(() => {
			card.deleteCard();
	});
});


popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
popupAddCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupConfirmation.setEventListeners();

const profileValidation = new FormValidator(formConfig, popupEditProfile.form);
const newCardValidation = new FormValidator(formConfig, popupAddCard.form);
const editAvatarValidation = new FormValidator(formConfig, popupEditAvatar.form);

profileValidation.enableValidation();
newCardValidation.enableValidation();
editAvatarValidation.enableValidation();

buttonEditProfile.addEventListener('click', () => {
	const {profileName, profileDescription} = userInfo.getUserInfo();
	popupEditProfile.form.nameInput.value = profileName;
	popupEditProfile.form.jobInput.value = profileDescription;
	profileValidation.resetValidation();
	popupEditProfile.open();
});

buttonAddCard.addEventListener('click', () => {
	newCardValidation.resetValidation();
	popupAddCard.open();
});

buttonEditAvatar.addEventListener('click', () => {
	popupEditAvatar.open()
});