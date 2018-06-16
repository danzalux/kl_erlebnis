/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ArticleSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"kl-ee/KL-EE/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"kl-ee/KL-EE/test/integration/pages/App",
	"kl-ee/KL-EE/test/integration/pages/Browser",
	"kl-ee/KL-EE/test/integration/pages/Master",
	"kl-ee/KL-EE/test/integration/pages/Detail",
	"kl-ee/KL-EE/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "kl-ee.KL-EE.view."
	});

	sap.ui.require([
		"kl-ee/KL-EE/test/integration/MasterJourney",
		"kl-ee/KL-EE/test/integration/NavigationJourney",
		"kl-ee/KL-EE/test/integration/NotFoundJourney",
		"kl-ee/KL-EE/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});