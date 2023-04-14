import './index.css';

import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { Card } from '../components/Card.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { Api } from '../components/Api.js';

import { formValidationConfig } from '../utils/constants.js';


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    authorization: "a9110206-e08b-4912-9750-2ef951bd76b4",
    "Content-Type": "application/json",
  },
});

/** Промис **/
Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([resUser, resCard]) => {
  userCurrentId = resUser._id;
  userInfo.setUserInfo(resUser);
  userInfo.setUserAvatar(resUser);
  cardsContainer.renderItems(resCard, userCurrentId)
})
.catch((err) => alert(err))

/**-------------Карточки с изображением---------------------- */

/**Создание Popup изображения */
const cardImagePopup = new PopupWithImage('.popup_type_image');

/** Функция создания карточки */
const createCard = (data, user) => {
  const card = new Card({data: data, userId: user, templateSelector: '.template-card',

  handleCardDelete: (cardID, cardElement) => {
    popupFormDelete.open(cardID, cardElement);
  },

  handleCardClick: () => {
    cardImagePopup.open(data);
  },

  handleCardLike: (cardId) => {
    api.putCardLike(cardId)
    .then((res) => {
      card.renderCardLike(res);
    })
    .catch((err) => alert(err))
  },

  handleCardDeleteLike: (cardId) => {
    api.deleteCardLike(cardId)
    .then((res) => {
      card.renderCardLike(res)
    })
    .catch((err) => alert(err))
  }
  });

  return card.generateCard();
}

/**Функция создания секции */
const cardsContainer = new Section({
  renderer: (item, userID) => {
    cardsContainer.addItem(createCard(item, userID));
  },
}, '.elements');

/**-------------Popup добавления и редактирования----------------- */

/** Найти кнопки открытия Popup */
const popupOpenEdit = document.querySelector('.profile__btn-edit');
const popupOpenAdd = document.querySelector('.profile__btn-add');
const popupOpenAvatar = document.querySelector('.profile__avatar');
let userCurrentId;

/**Получение формы профиля */
const userInfo = new UserInfo({
  selectorUserName: '.profile__name',
  selectorUserJob: '.profile__about-me',
  selectorUserAvatar: '.profile__img'
})

/**Функция создания Popup редактировапния профиля */
const popupFormProfile = new PopupWithForm('.popup_type_profile', {
  submitCallback: (data) => {
    popupFormProfile.renderPreloader(true, 'Загрузка...')
    api.setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupFormProfile.close();
    })
    .catch((err) => alert(err))
    .finally(() => {
      popupFormProfile.renderPreloader(false);
    })
  }
})

/**Функция открытия Popup редактировапния профиля */
popupOpenEdit.addEventListener('click', () => {
  popupFormProfile.open();
  popupFormProfile.setInputValues(userInfo.getUserInfo());
  validatorForms['form-profile'].clearValidationForm();
});

/**Функция создания Popup добавления карточки */
const  popupFormAddCards = new PopupWithForm('.popup_type_card', {
  submitCallback: (data) => {
    popupFormAddCards.renderPreloader(true, 'Сохранение...')
    api.addNewCard(data)
    .then((newCard) => {
      cardsContainer.prependItem(createCard(newCard, userCurrentId));
      popupFormAddCards.close();
    })
    .catch((err) => alert(err))
    .finally(() => {
      popupFormAddCards.renderPreloader(false);
    })
  }
})

/**Функция открытия Popup добавления карточки */
popupOpenAdd.addEventListener('click', () => {
  popupFormAddCards.open();
  validatorForms['form-place'].clearValidationForm();
});

/**Функция создания Popup редактирования аватара */
const popupFormAvatar = new PopupWithForm('.popup_type_avatar', {
  submitCallback: (data) => {
    popupFormAvatar.renderPreloader(true, 'Загрузка...')
    api.setUserAvatar(data)
    .then((resUser) => {
      userInfo.setUserAvatar(resUser);
      popupFormAvatar.close();
    })
    .catch((err) => alert(err))
    .finally(() => {
      popupFormAvatar.renderPreloader(false);
    })
  }
})

/**Функция открытия Popup аватара */
popupOpenAvatar.addEventListener('click', () => {
  popupFormAvatar.open();
  validatorForms['form-avatar'].clearValidationForm();
})

/**Функция создания Popup подтверждения удаления */
const popupFormDelete = new PopupWithConfirmation('.popup_type_confirm', {
  submitCallback: (id, card) => {
    popupFormDelete.renderPreloader(true, 'Удаление...');
    api.deleteCard(id)
    .then(() => {
      card.deleteCard();
      popupFormDelete.close();
    })
    .catch((err) => alert(err))
    .finally(() => {
      popupFormDelete.renderPreloader(false);
    })
  }
})
/**------------------Валидация---------------------- */

/**Получение экземпляров класса */
const validatorForms = {};

/**Функция валидации */
const enableValidation = (data) => {
  const listForm = Array.from(document.querySelectorAll(data.formSelector))
  listForm.forEach((formElement) => {
    const formValidator = new FormValidator(data, formElement);
    const formName = formElement.getAttribute('name');

    validatorForms[formName] = formValidator;
    formValidator.enableValidation();
  })
}

/**Вызов функции валидации */
enableValidation(formValidationConfig);

/**Слушатели */
cardImagePopup.setEventListeners();
popupFormProfile.setEventListeners();
popupFormAddCards.setEventListeners();
popupFormAvatar.setEventListeners();
popupFormDelete.setEventListeners();