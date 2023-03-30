export class UserInfo {
  constructor(userSelector) {
    this._name = userSelector.profileName.textContent;
    this._caption = userSelector.profileJob.textContent
  }

  getUserInfo() {
    const data = {
      name: this._name,
      caption: this._caption
    }
    return data;
  }

  setUserInfo(data) {
    this._name = data.name;
    this._caption = data.caption;
  }
}