sap.ui.define([
	"sap/ui/test/Opa5",
	"kl-ee/KL-EE/test/integration/pages/Common"
], function(Opa5, Common) {
	"use strict";

	Opa5.createPageObjects({
		onTheBrowserPage : {
			baseClass : Common,

			actions : {

				iChangeTheHashToObjectN : function (iObjIndex) {
					return this.waitFor(this.createAWaitForAnEntitySet({
						entitySet : "Objects",
						success : function (aEntitySet) {
							Opa5.getHashChanger().setHash("/ArticleSet/" + aEntitySet[iObjIndex].ArticleID);
						}
					}));
				},

				iChangeTheHashToTheRememberedItem : function () {
					return this.waitFor({
						success : function () {
							var sObjectId = this.getContext().currentItem.id;
							Opa5.getHashChanger().setHash("/ArticleSet/" + sObjectId);
						}
					});
				},

				iChangeTheHashToSomethingInvalid : function () {
					return this.waitFor({
						success : function () {
							Opa5.getHashChanger().setHash("/somethingInvalid");
						}
					});
				}

			},

			assertions : {

				iShouldSeeTheHashForObjectN : function (iObjIndex) {
					return this.waitFor(this.createAWaitForAnEntitySet({
						entitySet : "Objects",
						success : function (aEntitySet) {
							var oHashChanger = Opa5.getHashChanger(),
								sHash = oHashChanger.getHash();
							Opa5.assert.strictEqual(sHash, "ArticleSet/" + aEntitySet[iObjIndex].ArticleID, "The Hash is not correct");
						}
					}));
				},

				iShouldSeeTheHashForTheRememberedObject : function () {
					return this.waitFor({
						success : function () {
							var sObjectId = this.getContext().currentItem.id,
								oHashChanger = Opa5.getHashChanger(),
								sHash = oHashChanger.getHash();
							Opa5.assert.strictEqual(sHash, "ArticleSet/" + sObjectId, "The Hash is not correct");
						}
					});
				},

				iShouldSeeAnEmptyHash : function () {
					return this.waitFor({
						success : function () {
							var oHashChanger = Opa5.getHashChanger(),
								sHash = oHashChanger.getHash();
							Opa5.assert.strictEqual(sHash, "", "The Hash should be empty");
						},
						errorMessage : "The Hash is not Correct!"
					});
				}

			}

		}

	});

});