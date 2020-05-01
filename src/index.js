const Config = require('../config');

class Entity {
	constructor(...args) {
		console.log(...args);

		this.config = {...Config};
	}
}

// EntityInstance = new Entity()

module.exports = Entity;
