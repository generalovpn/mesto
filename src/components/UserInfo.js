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







// export class UserInfo {
//   constructor({ nameProfile, jobProfile }) {
//     this._name = document.querySelector(nameProfile);
//     this._job = document.querySelector(jobProfile);
//   }

//   getUserInfo() {
//     return {
//       hero: this._name.textContent,
//       profession: this._job.textContent,
//     };
//   }

//   setUserInfo({ hero, profession }) {
//     this._name.textContent = hero;
//     this._job.textContent = profession;
//   }
// }



// export class UserInfo {
//   constructor({ nameAuthor, infoAuthor }) {
//     this._nameAuthor = nameAuthor;
//     this._infoAuthor = infoAuthor;
//   }
  
//   getUserInfo() {
//     this._userInfoValues = {
//       nameAuthor: this._nameAuthor.textContent,
//       infoAuthor: this._infoAuthor.textContent,
//     };
//     return this._userInfoValues;
//   }
  
//   setUserInfo(newData) {
//     this._nameAuthor.textContent = newData.nameAuthor;
//     this._infoAuthor.textContent = newData.infoAuthor;
//   }
// }