// Package metadata file for Meteor.js
'use strict'

const PACKAGE_NAME = 'paintserver:sortablejs'

Package.describe({
	name: PACKAGE_NAME,
	summary: 'Sortable: reactive minimalist reorderable drag-and-drop lists on modern browsers and touch devices',
	version: '1.0.0',
	git: 'https://github.com/paintserver/meteor-sortablejs.git',
	documentation: 'README.md'
})

Package.onUse(function (api) {
	api.versionsFrom('1.4.4.1')
	api.use(['templating', 'ecmascript'], 'client')
	api.use('dburles:mongo-collection-instances@0.3.4')
	api.export('Sortable')
	api.addFiles([
		'template.html',
		'reactivize.js'
	], 'client')
	api.addFiles('methods-client.js', 'client')
	api.addFiles('methods-server.js', 'server')
})

Package.onTest(function (api) {
	api.use(PACKAGE_NAME, 'client')
	api.use('tinytest', 'client')
	api.addFiles('test.js', 'client')
})

Npm.depends({
	'sortablejs': '1.5.1'
})