sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ndbs.training.html5ui5.controller.Homepage", {
            onInit: function () {

            },
            onAfterRendering: function () {
                //Standard request
                //App id'yi SAPUI5 library'si otomatik olarak ekler.
                this.getView().getModel().read("/Customers", {
                    filters: null,
                    sorters: null,
                    async: true,
                    success: (oData) => {
                        let aResult = oData.results;
                    },
                    error: (error) => {
                        let sMessage = error.message;
                    }
                });
            }
        });
    });
