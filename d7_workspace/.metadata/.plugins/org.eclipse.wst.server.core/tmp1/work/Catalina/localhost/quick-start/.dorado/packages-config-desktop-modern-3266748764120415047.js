$packagesConfig.contextPath="/quick-start";
$packagesConfig.patterns={
	"dorado-js":{
		"contentType":"text\/javascript",
		"charset":"UTF-8",
		"url":">dorado\/client\/${fileName}.dpkg?skin=modern&cacheBuster=1449154461252"
	},
	"dorado-css":{
		"contentType":"text\/css",
		"charset":"UTF-8",
		"url":">dorado\/client\/skins\/modern\/${fileName}.dpkg?cacheBuster=1449154461252"
	},
	"res-js":{
		"contentType":"text\/javascript",
		"charset":"UTF-8",
		"url":">\/${fileName}.dpkg?cacheBuster=1449154461252"
	},
	"res-css":{
		"contentType":"text\/css",
		"charset":"UTF-8",
		"url":">\/${fileName}.dpkg?cacheBuster=1449154461252"
	},
	"res-css$2":{
		"contentType":"text\/css",
		"charset":"UTF-8",
		"url":">dorado\/client\/resources\/icons\/silk\/${fileName}.dpkg?cacheBuster=1449154461252"
	},
	"res-css$3":{
		"contentType":"text\/css",
		"charset":"UTF-8",
		"url":">dorado\/client\/resources\/icons\/font-awesome\/${fileName}.dpkg?cacheBuster=1449154461252"
	},
	"res-css$4":{
		"contentType":"text\/css",
		"charset":"UTF-8",
		"url":">dorado\/client\/resources\/icons\/entypo\/${fileName}.dpkg?cacheBuster=1449154461252"
	},
	"js":{
		"contentType":"text\/javascript",
		"charset":"UTF-8",
		"url":">\/${fileName}.dpkg?cacheBuster=1449154461252"
	},
	"css":{
		"contentType":"text\/css",
		"charset":"UTF-8",
		"url":">\/${fileName}.dpkg?cacheBuster=1449154461252"
	}
};
$packagesConfig.packages={
	"common":{
		"pattern":"js"
	},
	"silk":{
		"pattern":"res-css$2"
	},
	"font-awesome-support":{
		"pattern":"res-css$3"
	},
	"font-awesome":{
		"pattern":"res-css$3",
		"depends":[
			"font-awesome-support"
		],
		"fileNames":[
			"font-awesome:font-awesome"
		]
	},
	"entypo-support":{
		"pattern":"res-css$4"
	},
	"entypo":{
		"pattern":"res-css",
		"depends":[
			"entypo-support"
		]
	},
	"nprogress-skin":{
		"pattern":"dorado-css"
	},
	"nprogress":{
		"pattern":"dorado-js",
		"depends":[
			"nprogress-skin"
		]
	},
	"jquery":{
		"pattern":"dorado-js"
	},
	"jquery-ui":{
		"pattern":"dorado-js",
		"depends":[
			"jquery"
		]
	},
	"jquery-plugins":{
		"pattern":"dorado-js",
		"depends":[
			"jquery"
		]
	},
	"json2":{
		"pattern":"dorado-js"
	},
	"underscore":{
		"pattern":"dorado-js"
	},
	"core-skin":{
		"pattern":"dorado-css"
	},
	"core":{
		"pattern":"dorado-js",
		"depends":[
			"jquery",
			"jquery-ui",
			"json2",
			"underscore",
			"core-skin"
		]
	},
	"touch-patch":{
		"pattern":"dorado-js",
		"depends":[
			"core"
		]
	},
	"desktop-support-skin":{
		"pattern":"dorado-css"
	},
	"desktop-support":{
		"pattern":"dorado-js",
		"depends":[
			"jquery-plugins",
			"core",
			"desktop-support-skin"
		]
	},
	"data":{
		"pattern":"dorado-js",
		"depends":[
			"core"
		]
	},
	"widget-support-skin":{
		"pattern":"dorado-css"
	},
	"widget-support":{
		"pattern":"dorado-js",
		"depends":[
			"touch-patch",
			"data",
			"widget-support-skin"
		]
	},
	"widget":{
		"pattern":"dorado-js",
		"depends":[
			"widget-support"
		]
	},
	"base-widget-skin":{
		"pattern":"dorado-css"
	},
	"base-widget":{
		"pattern":"dorado-js",
		"depends":[
			"widget",
			"base-widget-skin"
		]
	},
	"base-widget-desktop-skin":{
		"pattern":"dorado-css"
	},
	"base-widget-desktop":{
		"pattern":"dorado-js",
		"depends":[
			"desktop-support",
			"base-widget",
			"base-widget-desktop-skin"
		]
	},
	"grid-skin":{
		"pattern":"dorado-css"
	},
	"grid":{
		"pattern":"dorado-js",
		"depends":[
			"base-widget-desktop",
			"grid-skin"
		]
	},
	"tree-skin":{
		"pattern":"dorado-css"
	},
	"tree":{
		"pattern":"dorado-js",
		"depends":[
			"base-widget-desktop",
			"tree-skin"
		]
	},
	"block-view-skin":{
		"pattern":"dorado-css"
	},
	"block-view":{
		"pattern":"dorado-js",
		"depends":[
			"base-widget-desktop",
			"block-view-skin"
		]
	},
	"tree-grid":{
		"pattern":"dorado-js",
		"depends":[
			"grid",
			"tree"
		]
	},
	"debugger-skin":{
		"pattern":"dorado-css"
	},
	"debugger":{
		"pattern":"dorado-js",
		"depends":[
			"base-widget",
			"debugger-skin"
		]
	},
	"tag-editor-skin":{
		"pattern":"dorado-css"
	},
	"tag-editor":{
		"pattern":"dorado-js",
		"depends":[
			"base-widget-desktop",
			"list",
			"tag-editor-skin"
		]
	},
	"color-picker-skin":{
		"pattern":"dorado-css"
	},
	"color-picker":{
		"pattern":"dorado-js",
		"depends":[
			"base-widget-desktop",
			"color-picker-skin"
		]
	},
	"list":{
		"pattern":"dorado-js",
		"depends":[
			"base-widget-desktop"
		]
	}
};
