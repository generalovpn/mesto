import Card from './Card.js';

export default class MyCard extends Card {
	constructor(data,
		handleCardClick,
		cardConfig,
		confirm,
		api
	) {
		super(data,
			handleCardClick,
			cardConfig,
			api
		);
		this._confirm = confirm;
	}
	
	_setEventListeners() {
		super._setEventListeners();
		
		this._cardDeleteButton = document.createElement('button');
		this._cardDeleteButton.classList.add(this._cardConfig.deleteButtonClass,
			'hover'
		);
		this._cardDeleteButton.addEventListener('click',
			() => {
				this._confirm(this);
			}
		);
		this._card.append(this._cardDeleteButton);
	}
	
	deleteCard() {
		this._card.remove();
		this._card = null;
	}
}