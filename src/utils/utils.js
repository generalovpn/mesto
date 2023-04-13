import Card from '../components/Card';
import {cardConfig} from './constants';
import {popupWithImage, userInfo, popupConfirmation, api} from '../pages/index.js';
import MyCard from '../components/MyCard.js';

export function createCard(data) {
	const card = data.owner._id === userInfo.profileId ? new MyCard(data, (src, name) => popupWithImage.open(src, name), cardConfig, (cardData) => {popupConfirmation.open(cardData);}, api) : new Card(data, (src, name) => popupWithImage.open(src, name), cardConfig, api);
	return card.createCard();
}