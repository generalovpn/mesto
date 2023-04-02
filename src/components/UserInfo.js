export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector) {
    this.profileName = document.querySelector(profileNameSelector);
    this.profileDescription = document.querySelector(profileDescriptionSelector);
  }

  getUserInfo() {
    return {
      profileName: this.profileName.textContent,
      profileDescription: this.profileDescription.textContent
    }
  }

  setUserInfo({nameInput, jobInput}) {
    this.profileName.textContent = nameInput;
    this.profileDescription.textContent = jobInput;
  }
}