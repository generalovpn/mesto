let popup = document.querySelector('.popup');
let profileButtonEdit = document.querySelector('.profile__batton-edit');
let popupButtonClose = document.querySelector('.popup__button-close');
let elementHeart = document.querySelectorAll('.element__heart');
let popupBtnSave = document.querySelector('.popup__btn-save');

profileButtonEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);

function openPopup () {
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileAboutMe.textContent;
}

function closePopup(){
  popup.classList.remove('popup_opened')
}

popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    closePopup()
  }
});


elementHeart.forEach(function (elementHeart) {
  elementHeart.addEventListener('click', function() {
    elementHeart.classList.toggle('active')
  })
});

let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__about-me');

function handleFormSubmit(evt) {
  evt.preventDefault();

  let profileName = document.querySelector('.profile__name');
  let profileAboutMe = document.querySelector('.profile__about-me');

  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
popupBtnSave.addEventListener('click', closePopup);
