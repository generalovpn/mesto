export default class UserInfo {
	constructor(profileNameSelector, profileDescriptionSelector, profileAvatarSelector) {
		this.profileName = document.querySelector(profileNameSelector);
		this.profileDescription = document.querySelector(profileDescriptionSelector);
		this.profileAvatar = document.querySelector(profileAvatarSelector);
	}
	
	getUserInfo() {
		return {
			profileName: this.profileName.textContent,
			profileDescription: this.profileDescription.textContent
		};
	}
	
	setUserInfo({ nameInput, jobInput, _id }) {
		this.profileName.textContent = nameInput;
		this.profileDescription.textContent = jobInput;
	}
	
	getUserID(_id) {
		this.profileId = _id;
	}
	
	setUserAvatar(link) {
		this.profileAvatar.src = link;
	}
}