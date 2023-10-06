//@ui5-bundle logaligroup/products/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"logaligroup/products/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("logaligroup.products.Component",{metadata:{manifest:"json"}})});
},
	"logaligroup/products/i18n/i18n.properties":'# This is the resource bundle for logaligroup.products\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Report Products List\n\n#YDES: Application description\nappDescription=Report Products List\n\nflpTitle=Products\n\nflpSubtitle=\n',
	"logaligroup/products/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"logaligroup.products","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.11.0","toolsId":"2c6cb5fc-8955-46f8-87cb-e0d077dd4f71"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"Products-display":{"semanticObject":"Products","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.118.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"logaligroup.products.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ProductsList","target":"ProductsList"},{"pattern":"Products({key}):?query:","name":"ProductsObjectPage","target":"ProductsObjectPage"},{"pattern":"Products({key})/Reviews({key2}):?query:","name":"ReviewsObjectPage","target":"ReviewsObjectPage"}],"targets":{"ProductsList":{"type":"Component","id":"ProductsList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Products","variantManagement":"Page","navigation":{"Products":{"detail":{"route":"ProductsObjectPage"}}}}}},"ProductsObjectPage":{"type":"Component","id":"ProductsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Products","navigation":{"Reviews":{"detail":{"route":"ReviewsObjectPage"}}}}}},"ReviewsObjectPage":{"type":"Component","id":"ReviewsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Reviews"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
