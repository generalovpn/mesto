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

// Переменные для попап-профиль
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const profileForm = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_profession');
const imgPopup = document.querySelector('.popup_type_image');
const captionPopup = imgPopup.querySelector('.popup__caption');
const cardsContainer = document.querySelector('.elements');
const templateCard = document.querySelector('.template-card');
const popupActiveClass = 'popup_opened';

// Инициализация для CARD
function addCardListeners(card, cardData) {
  card.querySelector('.element__heart').addEventListener('click', activeBtnLike);
  card.querySelector('.element__btn-delete').addEventListener('click', deleteCard);
  card.querySelector('.element__picture').addEventListener('click', () => {
    openPopupCard(cardData)
  });
}

const formAddNewCard = popupCard.querySelector('.popup__form');
formAddNewCard.addEventListener('submit', addCard);
const cardElement = document.querySelector('.template-card').content;

// Создание CARD
function createCard(data) {
  const newCard = cardElement.querySelector('.element').cloneNode(true);
  const elementImage = newCard.querySelector('.element__picture');

  elementImage.src = data.link;
  elementImage.alt = data.name;

  newCard.querySelector('.element__title').textContent = data.name;

  addCardListeners(newCard, data);
  return newCard;
}

// Функия редактирования PROFILE
function editProfile() {
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = jobInput.value;
}

// Функция открытия попап PROFILE
function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAboutMe.textContent;
  openPopup(popupProfile);
}

// Функция добавления CARD
function addTemplateCard(data) {
  const cardClone = createCard(data)
  cardsContainer.prepend(cardClone);
}

function addCard(event) {
  event.preventDefault();
  const cardName = event.target.querySelector('.popup__field_type_title').value;
  const cardLink = event.target.querySelector('.popup__field_type_link').value;
  addTemplateCard({name: cardName, link: cardLink});
  event.target.reset();
  closePopup(popupCard);
}

// Инициализация CARDS при загрузке страницы
initialCards.map(addTemplateCard);

// Фукция закрытия попап
popups.forEach(popup => {
  const btnClose = popup.querySelector('.popup__close');
  btnClose.addEventListener('click', () => closePopup(popup));
});

// Функция открытия попап
function openPopup(popup) {
  popup.classList.add(popupActiveClass);
  document.addEventListener('keydown', closeByEsc);
}

// Функция закрытия попап
function closePopup(popup) {
  popup.classList.remove(popupActiveClass);
  document.removeEventListener('keydown', closeByEsc);
}

const addCardButton = document.querySelector('.profile__btn-add');
const editButton = document.querySelector('.profile__btn-edit');
const imgButton = document.querySelector('.element__picture');

addCardButton.addEventListener('click', () => openPopup(popupCard));
editButton.addEventListener('click', openPopupProfile);

// Функция закрытия попап ESC
function closeByEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

// Функция открытия фото CARD
const elImg = imgPopup.querySelector('img');

function openPopupCard(cardData) {
  elImg.src = cardData.link;
  elImg.alt = cardData.name;
  captionPopup.textContent = cardData.name;
  openPopup(imgPopup);
};

profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  editProfile();
  closePopup(popupProfile);
});

// Функция удаления CARD
function deleteCard(event) {
  const card = event.target.closest('.element');
  card.remove();
};

// Функция LIKE
function activeBtnLike(event) {
  event.target.classList.toggle('element__heart_active');
};

// Функция звкрытия попап кликом на оверлэй
popups.forEach((popup) => { 
  popup.addEventListener('click', (evt) => { 
    if (evt.target.classList.contains(popupActiveClass)) {
        closePopup(popup); 
    } 
  })
});