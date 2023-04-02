export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(...items) {
    this._container.prepend(...items);
  }

  renderItems() {
    const items = this._renderedItems.map(item => {
      return this._renderer(item);
    });
    this.addItem(...items);
  }
}