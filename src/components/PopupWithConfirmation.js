import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
	constructor(popupSelector, submit) {
		super(popupSelector);
		this._submit = submit;
		this.form = this._popup.querySelector('.popup__form');
	}
	
	setEventListeners() {
		super.setEventListeners();
		
		this.form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submit(this._data).catch(err => {
				console.log(err);
			})
			.finally(() => {
				this.close();
			});
		});
	}
	
	open(data) {
		super.open();
		this._data = data;
	}
}