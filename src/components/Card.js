export default class Card {
  constructor({name, link}, handleCardClick, cardConfig) {
    this._name = name;
    this._link = link;
    this._openImage = handleCardClick;
    this._cardConfig = cardConfig;
  }

  _getTemplate() {
    return document.querySelector(this._cardConfig.cardTemplateSelector).content.querySelector('.element').cloneNode(true);
  }

  _toggleLike() {
    this._cardLikeButton.classList.toggle('element__heart_active');
  }

  _deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _setEventListeners() {
    this._cardLikeButton = this._card.querySelector(this._cardConfig.likeButtonSelector);
    this._cardLikeButton.addEventListener('click', () => this._toggleLike());

    this._cardDeleteButton = this._card.querySelector(this._cardConfig.deleteButtonSelector);
    this._cardDeleteButton.addEventListener('click', () => this._deleteCard());

    this._cardImage.addEventListener('click', () => {
      this._openImage(this._link, this._name);
    })
  }

  createCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector(this._cardConfig.cardImageSelector);

    this._card.querySelector(this._cardConfig.cardTitleSelector).textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._name} (фотография)`;

    this._setEventListeners();

    return this._card;
  }
}




// export class Card {
//   constructor(data, templateSelector, handleCardClick) {
//     this._templateSelector = templateSelector;
//     this._name = data.name;
//     this._link = data.link;
//     this._handleCardClick = handleCardClick;
//   }

//   _getTemplate() {
//     return document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.element');
//   }

//   generateCard() {
//     this._item = this._getTemplate();
//     this._cardImage = this._item.querySelector('.element__picture');
//     this._cardImage.src = this._link;
//     this._cardImage.alt = this._name;
//     this._item.querySelector('.element__title').textContent = this._name;
    
//     this._setEventListeners();
//     return this._item;
//   }

//   _setEventListeners() {
//     this._item.querySelector('.element__btn-delete').addEventListener('click', () => {
//       this._item.remove();
//     });
//     this._item.querySelector('.element__heart').addEventListener('click', (evt) => {
//       evt.currentTarget.classList.toggle('element__heart_active');
//     });
//     this._cardImage.addEventListener('click', () => {
//       this._handleCardClick(this._name, this._link);
//     });
//   }
// }




// export class Card {
//   constructor(item, templateSelector, handleCardClick) {
//     // this._link = data.link;
//     // this._name = data.name;
//     this._item = item;
//     this._templateSelector = templateSelector;
//     this._handleCardClick = handleCardClick;
//   }
//   // DOM-элемент карточки
//   _getTemplate() {
//     // return document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.element');
//     const cardElement = document
//       .querySelector(this._templateSelector)
//       .content.querySelector(".element")
//       .cloneNode(true);
//     return cardElement;
//   }
//   //сгенерируем карточку и все ее части
//   generateCard() {
//     this._element = this._getTemplate();
//     this._element.querySelector(".element__title").textContent = this._item.name;
//     this._image = this._element.querySelector(".element__picture");
//     this._image.src = this._item.link;
//     this._image.alt = this._item.name;
//     this._like = this._element.querySelector(".element__heart");
//     this._trash = this._element.querySelector(".element__btn-delete");

//     this._setEventListeners();
//     return this._element;
//   }

//   //навешаем слушателей на кнопки и клики
//   _setEventListeners() {
//     this._image.addEventListener("click", () => {
//       this._handleCardClick(this._item);
//     });

//     this._like.addEventListener("click", () => {
//       this._toggleLike();
//     });

//     this._trash.addEventListener("click", () => {
//       this._deleteCard();
//     });
//   }
//   //отдельная функция на лайк
//   _toggleLike() {
//     this._like.classList.toggle("element__heart_active");
//   }

//   //отдельная функция на удаление
//   _deleteCard() {
//     this._element.remove();
//     this._element = null;
//   }
// }








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