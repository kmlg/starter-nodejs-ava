const test = require('ava');

const Entity = require('..');

test('instance is created', t => {
	const entityInstance = new Entity();

	t.is(typeof entityInstance, 'object');
});

test('configuration is loaded', t => {
	const entityInstance = new Entity();

	t.is(typeof entityInstance.config, 'object');
	t.is(typeof entityInstance.config.name, 'string');
});
