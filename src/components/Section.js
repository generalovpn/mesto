export default class Section {
	constructor(renderer,
		containerSelector
	) {
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	}
	
	addItem(...items) {
		this._container.prepend(...items);
	}
	
	renderItems(renderedItems) {
		const items = renderedItems.map(item => {
			return this._renderer(item);
		});
		
		this.addItem(...items);
	}
}