export default class Api {
	constructor({ baseUrl, headers }) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}
	
	getInitialCards() {
		return fetch(`${this.baseUrl}/cards`, {
      method: 'GET', 
      headers: this.headers
		})
    .then(res => {
			if (res.ok) {
				return res.json();
			}
				
			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	getProfileData() {
		return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
			headers: this.headers
		})
    .then(res => {
			if (res.ok) {
				return res.json();
			}
      return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	editProfileData(name, about) {
		return fetch(`${this.baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				name: name,
				about: about
			})
		})
    .then(res => {
			if (res.ok) {
				return res.json();
			}
      
      return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	postNewCard(name, link) { 
    return fetch(`${this.baseUrl}/cards`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify({
				name: name,
				link: link
			})
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
				
			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	deleteCard(cardId) {
		return fetch(`${this.baseUrl}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this.headers
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
				
			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	addCardLike(cardId) {
		return fetch(`https://mesto.nomoreparties.co/v1/cohort-63/cards/${cardId}/likes`, {
      method: 'PUT',
			headers: {
				authorization: 'a9110206-e08b-4912-9750-2ef951bd76b4',
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	removeCardLike(cardId) {
		return fetch(`https://mesto.nomoreparties.co/v1/cohort-63/cards/${cardId}/likes`, {
      method: 'DELETE',
			headers: {
				authorization: 'a9110206-e08b-4912-9750-2ef951bd76b4',
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
	
	editAvatar(link) {
		return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				avatar: link
			})
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}
}