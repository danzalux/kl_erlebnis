/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"kl-ee/KL-EE/test/integration/NavigationJourneyPhone",
		"kl-ee/KL-EE/test/integration/NotFoundJourneyPhone",
		"kl-ee/KL-EE/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});