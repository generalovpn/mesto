import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
	constructor(popupSelector, formSubmit) {
		super(popupSelector);
		this._formSubmit = formSubmit;
		this.form = this._popup.querySelector('.popup__form');
		this.button = this.form.querySelector('.popup__btn-save');
		this.defaultButtonText = this.button.textContent;
	}
	
	_getInputValues() {
		this._inputList = this.form.querySelectorAll('.popup__input');
		this._formValues = {};
		this._inputList.forEach(input => {
			this._formValues[input.name] = input.value;
		});
		
		return this._formValues;
	}
	
	_renderLoading(isLoading) {
		if (isLoading) {
			this.button.textContent = 'Сохранение...';
		} else {
			this.button.textContent = this.defaultButtonText;
		}
	}
	
	setEventListeners() {
		super.setEventListeners();
		
		this.form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._renderLoading(true);
			this._formSubmit(this._getInputValues(), this._renderLoading, this.button)
				.catch(err => {
					console.log(err);
				})
				.finally(() => {
					this._renderLoading(false);
					this.close();
				});
		});
	}
	
	close() {
		super.close();
    this.form.reset();
	}
}