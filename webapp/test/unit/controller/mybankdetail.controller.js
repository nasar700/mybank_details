/*global QUnit*/

sap.ui.define([
	"mybank_detail/controller/mybankdetail.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mybankdetail Controller");

	QUnit.test("I should test the mybankdetail controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
