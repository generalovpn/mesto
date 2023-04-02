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
    })

    this.addItem(...items);
  }
}








// export class Section {
//   constructor({ items, renderer }, container) {
//     this._initialCards = items;
//     this._renderer = renderer;
//     this._container = document.querySelector(container);
//   }

//   renderItems() {
//     this._initialCards.forEach((item) => {
//       this._container.append(this._renderer(item));
//     });
//   }

//   addItem(item) {
//     this._container.prepend(item);
//   }
// }




// export class Section {
//   constructor({ items, renderer }, containerSelector) {
//     this._items = items;
//     this._renderer = renderer;
//     this._container = containerSelector;
//   }
  
//   addItem(element) {
//     this._container.prepend(element);
//   }
  
//   renderItems() {
//     this._items.forEach((item) => {
//       this._renderer(item);
//     });
//   }
// }