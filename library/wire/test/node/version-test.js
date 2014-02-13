(function(buster) {
	"use strict";

	var assert, refute, fail, bowerJson, packageJson, wire;

	assert = buster.assert;
	refute = buster.refute;
	fail = buster.assertions.fail;

	wire = require('../../wire');
	bowerJson = require('../../bower');
	packageJson = require('../../package');

	buster.testCase('wire/version', {
		'should have the same name for package.json and bower.json': function () {
			assert.same(bowerJson.name, packageJson.name);
		},
		'should have the same version for wire, package.json, and bower.json': function () {
			assert.same(wire.version, packageJson.version);
			assert.same(bowerJson.version, packageJson.version);
		}
	});
}(require('buster')));
