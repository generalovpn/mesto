let profileBtnEdit = document.querySelector('.profile__btn-edit');
let popup = document.querySelector('.popup');
let popupBtnClose = document.querySelector('.popup__btn-close');
let popupBtnSave = document.querySelector('.popup__btn-save');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_profession');
let profileName = document.querySelector('.profile__name');
let profileAboutMe = document.querySelector('.profile__about-me');
let elementHeart = document.querySelectorAll('.element__heart');


profileBtnEdit.addEventListener('click', openPopup);
popupBtnClose.addEventListener('click', closePopup);

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAboutMe.textContent;
}

function closePopup(){
  popup.classList.remove('popup_opened')
}

elementHeart.forEach(function (elementHeart) {
  elementHeart.addEventListener('click', function() {
    elementHeart.classList.toggle('active')
  })
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
popupBtnSave.addEventListener('click', closePopup);
