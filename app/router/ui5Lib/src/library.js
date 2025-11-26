sap.ui.define([], function () {
    "use strict";
    sap.ui.getCore().initLibrary({
        name: "csc.ui5lib",
        dependencies: [
            "sap.ui.core",
            "sap.ui.mdc",
            "sap.m"
        ],
        controls: [],
        elements: [],
        version: "1.0.0"
    });
    return csc.ui5lib;
});
