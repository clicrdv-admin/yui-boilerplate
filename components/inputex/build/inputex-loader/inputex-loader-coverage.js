if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/inputex-loader/inputex-loader.js']) {
   __coverage__['build/inputex-loader/inputex-loader.js'] = {"path":"build/inputex-loader/inputex-loader.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":10},"end":{"line":3,"column":22}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":838,"column":3}},"2":{"start":{"line":4,"column":3},"end":{"line":807,"column":5}},"3":{"start":{"line":809,"column":3},"end":{"line":811,"column":4}},"4":{"start":{"line":810,"column":6},"end":{"line":810,"column":32}},"5":{"start":{"line":812,"column":3},"end":{"line":814,"column":4}},"6":{"start":{"line":813,"column":6},"end":{"line":813,"column":29}},"7":{"start":{"line":815,"column":3},"end":{"line":815,"column":43}},"8":{"start":{"line":818,"column":3},"end":{"line":820,"column":26}},"9":{"start":{"line":821,"column":3},"end":{"line":833,"column":4}},"10":{"start":{"line":822,"column":5},"end":{"line":832,"column":6}},"11":{"start":{"line":825,"column":7},"end":{"line":825,"column":35}},"12":{"start":{"line":828,"column":7},"end":{"line":830,"column":8}},"13":{"start":{"line":829,"column":10},"end":{"line":829,"column":70}},"14":{"start":{"line":834,"column":3},"end":{"line":834,"column":53}},"15":{"start":{"line":835,"column":3},"end":{"line":835,"column":59}}},"branchMap":{"1":{"line":809,"type":"if","locations":[{"start":{"line":809,"column":3},"end":{"line":809,"column":3}},{"start":{"line":809,"column":3},"end":{"line":809,"column":3}}]},"2":{"line":812,"type":"if","locations":[{"start":{"line":812,"column":3},"end":{"line":812,"column":3}},{"start":{"line":812,"column":3},"end":{"line":812,"column":3}}]},"3":{"line":822,"type":"if","locations":[{"start":{"line":822,"column":5},"end":{"line":822,"column":5}},{"start":{"line":822,"column":5},"end":{"line":822,"column":5}}]},"4":{"line":828,"type":"if","locations":[{"start":{"line":828,"column":7},"end":{"line":828,"column":7}},{"start":{"line":828,"column":7},"end":{"line":828,"column":7}}]}},"code":["(function () { /* This file is auto-generated by src/loader/scripts/meta_join.js */","","YUI().use(function(Y) {","   var CONFIG = {","      groups: {","         'inputex': {","            base: 'inputex/src/',","            combine: false,","            modules: {","    \"inputex\": {","        \"requires\": [","            \"intl\",","            \"node\",","            \"plugin\",","            \"pluginhost-base\",","            \"pluginhost-config\",","            \"base-pluginhost\",","            \"node-pluginhost\"","        ],","        \"skinnable\": true","    },","    \"inputex-autocomplete\": {","        \"ix_provides\": \"autocomplete\",","        \"requires\": [","            \"inputex-string\",","            \"autocomplete\"","        ],","        \"skinnable\": true","    },","    \"inputex-base\": {","        \"requires\": [","            \"inputex\",","            \"widget\",","            \"widget-stdmod\"","        ]","    },","    \"inputex-builder\": {","        \"requires\": [","            \"inputex\",","            \"inputex-autocomplete\",","            \"inputex-base\",","            \"inputex-button\",","            \"inputex-checkbox\",","            \"inputex-choice\",","            \"inputex-color\",","            \"inputex-combine\",","            \"inputex-datatable\",","            \"inputex-date\",","            \"inputex-datepicker\",","            \"inputex-dateselectmonth\",","            \"inputex-datesplit\",","            \"inputex-datetime\",","            \"inputex-ddlist\",","            \"inputex-dsselect\",","            \"inputex-email\",","            \"inputex-field\",","            \"inputex-file\",","            \"inputex-form\",","            \"inputex-group\",","            \"inputex-hidden\",","            \"inputex-imagecropper\",","            \"inputex-inplaceedit\",","            \"inputex-integer\",","            \"inputex-ipv4\",","            \"inputex-jsonschema\",","            \"inputex-jsontreeinspector\",","            \"inputex-keyopvalue\",","            \"inputex-keyvalue\",","            \"inputex-lens\",","            \"inputex-linkedcombo\",","            \"inputex-list\",","            \"inputex-map\",","            \"inputex-menu\",","            \"inputex-multiautocomplete\",","            \"inputex-multiselect\",","            \"inputex-number\",","            \"inputex-object\",","            \"inputex-panel\",","            \"inputex-password\",","            \"inputex-radio\",","            \"inputex-ratingstars\",","            \"inputex-ratingstarsform\",","            \"inputex-rpc\",","            \"inputex-rte\",","            \"inputex-select\",","            \"inputex-serialize\",","            \"inputex-slider\",","            \"inputex-smdtester\",","            \"inputex-string\",","            \"inputex-stringavailability\",","            \"inputex-textarea\",","            \"inputex-textautotag\",","            \"inputex-time\",","            \"inputex-timeinterval\",","            \"inputex-timerange\",","            \"inputex-tinymce\",","            \"inputex-tree\",","            \"inputex-type\",","            \"inputex-uneditable\",","            \"inputex-uppercase\",","            \"inputex-url\",","            \"inputex-vector\",","            \"inputex-visus\",","            \"dd-plugin\"","        ],","        \"skinnable\": true","    },","    \"inputex-button\": {","        \"requires\": [","            \"inputex\"","        ]","    },","    \"inputex-calendar-today-highlight-plugin\": {","        \"requires\": [","            \"plugin\",","            \"calendar\",","            \"datatype-date-math\"","        ],","        \"skinnable\": true","    },","    \"inputex-calendar-week-number-plugin\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\"","        ],","        \"requires\": [","            \"plugin\",","            \"calendar\",","            \"datatype-date-math\"","        ],","        \"skinnable\": true","    },","    \"inputex-calendar-year-navigator-plugin\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\"","        ],","        \"requires\": [","            \"intl\",","            \"node-base\",","            \"node-event-delegate\",","            \"plugin\",","            \"panel\",","            \"inputex-group\",","            \"inputex-select\",","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-checkbox\": {","        \"ix_provides\": \"boolean\",","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-choice\": {","        \"requires\": [","            \"inputex\"","        ]","    },","    \"inputex-color\": {","        \"ix_provides\": \"color\",","        \"requires\": [","            \"inputex-field\",","            \"node-event-delegate\",","            \"event-outside\",","            \"overlay\"","        ],","        \"skinnable\": true","    },","    \"inputex-combine\": {","        \"ix_provides\": \"combine\",","        \"requires\": [","            \"inputex-group\"","        ],","        \"skinnable\": true","    },","    \"inputex-datatable\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"intl\",","            \"node-event-delegate\",","            \"inputex-group\",","            \"inputex-panel\",","            \"datatable\",","            \"overlay\"","        ],","        \"skinnable\": true","    },","    \"inputex-date\": {","        \"ix_provides\": \"date\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-datepicker\": {","        \"ix_provides\": \"datepicker\",","        \"requires\": [","            \"inputex-date\",","            \"event-outside\",","            \"node-event-delegate\",","            \"overlay\",","            \"calendar\"","        ],","        \"skinnable\": true","    },","    \"inputex-dateselectmonth\": {","        \"ix_provides\": \"dateselectmonth\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-combine\",","            \"inputex-string\",","            \"inputex-select\"","        ]","    },","    \"inputex-datesplit\": {","        \"ix_provides\": \"datesplit\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-combine\",","            \"inputex-integer\"","        ]","    },","    \"inputex-datetime\": {","        \"ix_provides\": \"datetime\",","        \"requires\": [","            \"inputex-datepicker\",","            \"inputex-combine\",","            \"inputex-time\"","        ]","    },","    \"inputex-ddlist\": {","        \"requires\": [","            \"inputex-field\",","            \"array-extras\",","            \"sortable\"","        ],","        \"skinnable\": true","    },","    \"inputex-domain-name\": {","        \"ix_provides\": \"domain-name\",","        \"lang\": [","            \"en\",","            \"fr\"","        ],","        \"requires\": [","            \"intl\",","            \"inputex-string\"","        ]","    },","    \"inputex-dsselect\": {","        \"ix_provides\": \"dsselect\",","        \"requires\": [","            \"inputex-select\",","            \"datasource\"","        ]","    },","    \"inputex-email\": {","        \"ix_provides\": \"email\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-field\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex\",","            \"intl\"","        ],","        \"skinnable\": true","    },","    \"inputex-file\": {","        \"ix_provides\": \"file\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-form\": {","        \"ix_provides\": \"form\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"io-base\",","            \"json-stringify\",","            \"inputex-group\",","            \"inputex-button\"","        ],","        \"skinnable\": true","    },","    \"inputex-group\": {","        \"ix_provides\": \"group\",","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-hidden\": {","        \"ix_provides\": \"hidden\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-imagecropper\": {","        \"ix_provides\": \"imagecropper\",","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-inplaceedit\": {","        \"ix_provides\": \"inplaceedit\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"inputex-button\",","            \"anim-base\",","            \"anim-color\",","            \"inputex-visus\"","        ],","        \"skinnable\": true","    },","    \"inputex-integer\": {","        \"ix_provides\": \"integer\",","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-ipv4\": {","        \"ix_provides\": \"ipv4\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-jsonschema\": {","        \"requires\": [","            \"inputex\"","        ]","    },","    \"inputex-jsontreeinspector\": {","        \"requires\": [","            \"inputex\"","        ],","        \"skinnable\": true","    },","    \"inputex-keyopvalue\": {","        \"ix_provides\": \"keyopvalue\",","        \"requires\": [","            \"inputex-keyvalue\"","        ]","    },","    \"inputex-keyvalue\": {","        \"ix_provides\": \"keyvalue\",","        \"requires\": [","            \"inputex-combine\"","        ]","    },","    \"inputex-lens\": {","        \"ix_provides\": \"lens\",","        \"requires\": [","            \"inputex-group\",","            \"inputex-inplaceedit\"","        ]","    },","    \"inputex-linkedcombo\": {","        \"requires\": [","            \"inputex-select\",","            \"inputex-choice\"","        ]","    },","    \"inputex-list\": {","        \"ix_provides\": \"list\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"anim-base\",","            \"anim-color\"","        ],","        \"skinnable\": true","    },","    \"inputex-map\": {","        \"ix_provides\": \"map\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-menu\": {","        \"ix_provides\": \"menu\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"node-event-delegate\",","            \"node-menunav-improved\"","        ],","        \"skinnable\": true","    },","    \"inputex-multiautocomplete\": {","        \"ix_provides\": \"multiautocomplete\",","        \"requires\": [","            \"inputex-autocomplete\",","            \"json\",","            \"inputex-ddlist\"","        ]","    },","    \"inputex-multiselect\": {","        \"ix_provides\": \"multiselect\",","        \"requires\": [","            \"inputex-select\",","            \"inputex-ddlist\"","        ]","    },","    \"inputex-number\": {","        \"ix_provides\": \"number\",","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-object\": {","        \"ix_provides\": \"object\",","        \"requires\": [","            \"inputex-list\",","            \"inputex-combine\",","            \"inputex-string\"","        ]","    },","    \"inputex-panel\": {","        \"requires\": [","            \"inputex\",","            \"panel\",","            \"inputex-base\"","        ]","    },","    \"inputex-password\": {","        \"ix_provides\": \"password\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-radio\": {","        \"ix_provides\": \"radio\",","        \"requires\": [","            \"selector\",","            \"node-event-delegate\",","            \"inputex-field\",","            \"inputex-choice\",","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-ratingstars\": {","        \"ix_provides\": \"ratingstars\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\"","        ],","        \"skinnable\": true","    },","    \"inputex-ratingstarsform\": {","        \"ix_provides\": \"ratingstarsform\",","        \"requires\": [","            \"inputex-ratingstars\",","            \"inputex-form\"","        ]","    },","    \"inputex-rpc\": {","        \"requires\": [","            \"json\",","            \"inputex\",","            \"io-base\",","            \"inputex-jsonschema\",","            \"jsonp\"","        ]","    },","    \"inputex-rte\": {","        \"ix_provides\": \"html\",","        \"requires\": [","            \"inputex-field\",","            \"yui2-editor\"","        ]","    },","    \"inputex-select\": {","        \"ix_provides\": \"select\",","        \"requires\": [","            \"inputex-field\",","            \"inputex-choice\"","        ]","    },","    \"inputex-serialize\": {","        \"ix_provides\": \"serialize\",","        \"requires\": [","            \"inputex-string\",","            \"json\"","        ]","    },","    \"inputex-slider\": {","        \"ix_provides\": \"slider\",","        \"requires\": [","            \"inputex-field\",","            \"slider\"","        ],","        \"skinnable\": true","    },","    \"inputex-smdtester\": {","        \"requires\": [","            \"inputex-rpc\",","            \"inputex-jsontreeinspector\"","        ]","    },","    \"inputex-string\": {","        \"ix_provides\": \"string\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-field\",","            \"event-key\"","        ],","        \"skinnable\": true","    },","    \"inputex-stringavailability\": {","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\",","            \"event-key\",","            \"io-base\",","            \"json-parse\"","        ],","        \"skinnable\": true","    },","    \"inputex-textarea\": {","        \"ix_provides\": \"text\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-textautotag\": {","        \"ix_provides\": \"autotag\",","        \"requires\": [","            \"inputex-textarea\"","        ]","    },","    \"inputex-time\": {","        \"ix_provides\": \"time\",","        \"requires\": [","            \"inputex-combine\",","            \"inputex-select\"","        ]","    },","    \"inputex-timeinterval\": {","        \"ix_provides\": \"timeinterval\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-combine\",","            \"inputex-select\"","        ]","    },","    \"inputex-timerange\": {","        \"ix_provides\": \"timerange\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\"","        ],","        \"requires\": [","            \"intl\",","            \"inputex-combine\",","            \"inputex-select\"","        ]","    },","    \"inputex-tinymce\": {","        \"ix_provides\": \"tinymce\",","        \"requires\": [","            \"inputex-field\"","        ]","    },","    \"inputex-tree\": {","        \"ix_provides\": \"tree\",","        \"requires\": [","            \"inputex-string\",","            \"inputex-list\",","            \"inputex-inplaceedit\"","        ]","    },","    \"inputex-type\": {","        \"ix_provides\": \"type\",","        \"requires\": [","            \"inputex-field\",","            \"inputex-group\",","            \"inputex-select\",","            \"inputex-list\",","            \"inputex-string\",","            \"inputex-checkbox\",","            \"inputex-integer\"","        ],","        \"skinnable\": true","    },","    \"inputex-uneditable\": {","        \"ix_provides\": \"uneditable\",","        \"requires\": [","            \"inputex-field\",","            \"inputex-visus\"","        ]","    },","    \"inputex-uppercase\": {","        \"ix_provides\": \"uppercase\",","        \"requires\": [","            \"inputex-string\"","        ]","    },","    \"inputex-url\": {","        \"ix_provides\": \"url\",","        \"lang\": [","            \"en\",","            \"fr\",","            \"de\",","            \"ca\",","            \"es\",","            \"fr\",","            \"it\",","            \"nl\"","        ],","        \"requires\": [","            \"inputex-string\"","        ],","        \"skinnable\": true","    },","    \"inputex-vector\": {","        \"ix_provides\": \"vector\",","        \"requires\": [","            \"inputex-combine\"","        ]","    },","    \"inputex-visus\": {","        \"requires\": [","            \"inputex\",","            \"dump\"","        ]","    },","    \"node-menunav-improved\": {","        \"requires\": [","            \"event-resize\",","            \"node-menunav\"","        ]","    }","}","         }","      }","   };","","   if (typeof YUI_config === 'undefined') {","      YUI_config = {groups: {}};","   }","   if (typeof YUI_config.groups === 'undefined') {","      YUI_config.groups = {};","   }","   Y.mix(YUI_config.groups, CONFIG.groups);","","   // Loop through all modules","   var modules = YUI_config.groups.inputex.modules,","       allModules = [],","       modulesByType = {};","   for(var moduleName in modules) {","     if (modules.hasOwnProperty(moduleName) ) {","       ","       // Build a list of all inputEx modules","       allModules.push(moduleName);","       ","       // Build a reverse index on which module provides what type","       if(modules[moduleName].ix_provides) {","          modulesByType[modules[moduleName].ix_provides] = moduleName;","       }","       ","     }","   }","   YUI_config.groups.inputex.allModules = allModules;","   YUI_config.groups.inputex.modulesByType = modulesByType;","","","});","","","}());"]};
}
var __cov_mS1hMY04dNTyBGRy2IyOhQ = __coverage__['build/inputex-loader/inputex-loader.js'];
__cov_mS1hMY04dNTyBGRy2IyOhQ.s['1']++;YUI().use(function(Y){__cov_mS1hMY04dNTyBGRy2IyOhQ.f['1']++;__cov_mS1hMY04dNTyBGRy2IyOhQ.s['2']++;var CONFIG={groups:{'inputex':{base:'inputex/src/',combine:false,modules:{'inputex':{'requires':['intl','node','plugin','pluginhost-base','pluginhost-config','base-pluginhost','node-pluginhost'],'skinnable':true},'inputex-autocomplete':{'ix_provides':'autocomplete','requires':['inputex-string','autocomplete'],'skinnable':true},'inputex-base':{'requires':['inputex','widget','widget-stdmod']},'inputex-builder':{'requires':['inputex','inputex-autocomplete','inputex-base','inputex-button','inputex-checkbox','inputex-choice','inputex-color','inputex-combine','inputex-datatable','inputex-date','inputex-datepicker','inputex-dateselectmonth','inputex-datesplit','inputex-datetime','inputex-ddlist','inputex-dsselect','inputex-email','inputex-field','inputex-file','inputex-form','inputex-group','inputex-hidden','inputex-imagecropper','inputex-inplaceedit','inputex-integer','inputex-ipv4','inputex-jsonschema','inputex-jsontreeinspector','inputex-keyopvalue','inputex-keyvalue','inputex-lens','inputex-linkedcombo','inputex-list','inputex-map','inputex-menu','inputex-multiautocomplete','inputex-multiselect','inputex-number','inputex-object','inputex-panel','inputex-password','inputex-radio','inputex-ratingstars','inputex-ratingstarsform','inputex-rpc','inputex-rte','inputex-select','inputex-serialize','inputex-slider','inputex-smdtester','inputex-string','inputex-stringavailability','inputex-textarea','inputex-textautotag','inputex-time','inputex-timeinterval','inputex-timerange','inputex-tinymce','inputex-tree','inputex-type','inputex-uneditable','inputex-uppercase','inputex-url','inputex-vector','inputex-visus','dd-plugin'],'skinnable':true},'inputex-button':{'requires':['inputex']},'inputex-calendar-today-highlight-plugin':{'requires':['plugin','calendar','datatype-date-math'],'skinnable':true},'inputex-calendar-week-number-plugin':{'lang':['en','fr','de'],'requires':['plugin','calendar','datatype-date-math'],'skinnable':true},'inputex-calendar-year-navigator-plugin':{'lang':['en','fr','de'],'requires':['intl','node-base','node-event-delegate','plugin','panel','inputex-group','inputex-select','inputex-string'],'skinnable':true},'inputex-checkbox':{'ix_provides':'boolean','requires':['inputex-field'],'skinnable':true},'inputex-choice':{'requires':['inputex']},'inputex-color':{'ix_provides':'color','requires':['inputex-field','node-event-delegate','event-outside','overlay'],'skinnable':true},'inputex-combine':{'ix_provides':'combine','requires':['inputex-group'],'skinnable':true},'inputex-datatable':{'lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['intl','node-event-delegate','inputex-group','inputex-panel','datatable','overlay'],'skinnable':true},'inputex-date':{'ix_provides':'date','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-string'],'skinnable':true},'inputex-datepicker':{'ix_provides':'datepicker','requires':['inputex-date','event-outside','node-event-delegate','overlay','calendar'],'skinnable':true},'inputex-dateselectmonth':{'ix_provides':'dateselectmonth','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-combine','inputex-string','inputex-select']},'inputex-datesplit':{'ix_provides':'datesplit','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-combine','inputex-integer']},'inputex-datetime':{'ix_provides':'datetime','requires':['inputex-datepicker','inputex-combine','inputex-time']},'inputex-ddlist':{'requires':['inputex-field','array-extras','sortable'],'skinnable':true},'inputex-domain-name':{'ix_provides':'domain-name','lang':['en','fr'],'requires':['intl','inputex-string']},'inputex-dsselect':{'ix_provides':'dsselect','requires':['inputex-select','datasource']},'inputex-email':{'ix_provides':'email','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-string']},'inputex-field':{'lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex','intl'],'skinnable':true},'inputex-file':{'ix_provides':'file','requires':['inputex-field']},'inputex-form':{'ix_provides':'form','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['io-base','json-stringify','inputex-group','inputex-button'],'skinnable':true},'inputex-group':{'ix_provides':'group','requires':['inputex-field'],'skinnable':true},'inputex-hidden':{'ix_provides':'hidden','requires':['inputex-field']},'inputex-imagecropper':{'ix_provides':'imagecropper','requires':['inputex-field'],'skinnable':true},'inputex-inplaceedit':{'ix_provides':'inplaceedit','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-field','inputex-button','anim-base','anim-color','inputex-visus'],'skinnable':true},'inputex-integer':{'ix_provides':'integer','requires':['inputex-string']},'inputex-ipv4':{'ix_provides':'ipv4','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-string']},'inputex-jsonschema':{'requires':['inputex']},'inputex-jsontreeinspector':{'requires':['inputex'],'skinnable':true},'inputex-keyopvalue':{'ix_provides':'keyopvalue','requires':['inputex-keyvalue']},'inputex-keyvalue':{'ix_provides':'keyvalue','requires':['inputex-combine']},'inputex-lens':{'ix_provides':'lens','requires':['inputex-group','inputex-inplaceedit']},'inputex-linkedcombo':{'requires':['inputex-select','inputex-choice']},'inputex-list':{'ix_provides':'list','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-field','anim-base','anim-color'],'skinnable':true},'inputex-map':{'ix_provides':'map','requires':['inputex-field']},'inputex-menu':{'ix_provides':'menu','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-field','node-event-delegate','node-menunav-improved'],'skinnable':true},'inputex-multiautocomplete':{'ix_provides':'multiautocomplete','requires':['inputex-autocomplete','json','inputex-ddlist']},'inputex-multiselect':{'ix_provides':'multiselect','requires':['inputex-select','inputex-ddlist']},'inputex-number':{'ix_provides':'number','requires':['inputex-string']},'inputex-object':{'ix_provides':'object','requires':['inputex-list','inputex-combine','inputex-string']},'inputex-panel':{'requires':['inputex','panel','inputex-base']},'inputex-password':{'ix_provides':'password','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-string'],'skinnable':true},'inputex-radio':{'ix_provides':'radio','requires':['selector','node-event-delegate','inputex-field','inputex-choice','inputex-string'],'skinnable':true},'inputex-ratingstars':{'ix_provides':'ratingstars','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-field'],'skinnable':true},'inputex-ratingstarsform':{'ix_provides':'ratingstarsform','requires':['inputex-ratingstars','inputex-form']},'inputex-rpc':{'requires':['json','inputex','io-base','inputex-jsonschema','jsonp']},'inputex-rte':{'ix_provides':'html','requires':['inputex-field','yui2-editor']},'inputex-select':{'ix_provides':'select','requires':['inputex-field','inputex-choice']},'inputex-serialize':{'ix_provides':'serialize','requires':['inputex-string','json']},'inputex-slider':{'ix_provides':'slider','requires':['inputex-field','slider'],'skinnable':true},'inputex-smdtester':{'requires':['inputex-rpc','inputex-jsontreeinspector']},'inputex-string':{'ix_provides':'string','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-field','event-key'],'skinnable':true},'inputex-stringavailability':{'lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-string','event-key','io-base','json-parse'],'skinnable':true},'inputex-textarea':{'ix_provides':'text','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-string']},'inputex-textautotag':{'ix_provides':'autotag','requires':['inputex-textarea']},'inputex-time':{'ix_provides':'time','requires':['inputex-combine','inputex-select']},'inputex-timeinterval':{'ix_provides':'timeinterval','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-combine','inputex-select']},'inputex-timerange':{'ix_provides':'timerange','lang':['en','fr','de'],'requires':['intl','inputex-combine','inputex-select']},'inputex-tinymce':{'ix_provides':'tinymce','requires':['inputex-field']},'inputex-tree':{'ix_provides':'tree','requires':['inputex-string','inputex-list','inputex-inplaceedit']},'inputex-type':{'ix_provides':'type','requires':['inputex-field','inputex-group','inputex-select','inputex-list','inputex-string','inputex-checkbox','inputex-integer'],'skinnable':true},'inputex-uneditable':{'ix_provides':'uneditable','requires':['inputex-field','inputex-visus']},'inputex-uppercase':{'ix_provides':'uppercase','requires':['inputex-string']},'inputex-url':{'ix_provides':'url','lang':['en','fr','de','ca','es','fr','it','nl'],'requires':['inputex-string'],'skinnable':true},'inputex-vector':{'ix_provides':'vector','requires':['inputex-combine']},'inputex-visus':{'requires':['inputex','dump']},'node-menunav-improved':{'requires':['event-resize','node-menunav']}}}}};__cov_mS1hMY04dNTyBGRy2IyOhQ.s['3']++;if(typeof YUI_config==='undefined'){__cov_mS1hMY04dNTyBGRy2IyOhQ.b['1'][0]++;__cov_mS1hMY04dNTyBGRy2IyOhQ.s['4']++;YUI_config={groups:{}};}else{__cov_mS1hMY04dNTyBGRy2IyOhQ.b['1'][1]++;}__cov_mS1hMY04dNTyBGRy2IyOhQ.s['5']++;if(typeof YUI_config.groups==='undefined'){__cov_mS1hMY04dNTyBGRy2IyOhQ.b['2'][0]++;__cov_mS1hMY04dNTyBGRy2IyOhQ.s['6']++;YUI_config.groups={};}else{__cov_mS1hMY04dNTyBGRy2IyOhQ.b['2'][1]++;}__cov_mS1hMY04dNTyBGRy2IyOhQ.s['7']++;Y.mix(YUI_config.groups,CONFIG.groups);__cov_mS1hMY04dNTyBGRy2IyOhQ.s['8']++;var modules=YUI_config.groups.inputex.modules,allModules=[],modulesByType={};__cov_mS1hMY04dNTyBGRy2IyOhQ.s['9']++;for(var moduleName in modules){__cov_mS1hMY04dNTyBGRy2IyOhQ.s['10']++;if(modules.hasOwnProperty(moduleName)){__cov_mS1hMY04dNTyBGRy2IyOhQ.b['3'][0]++;__cov_mS1hMY04dNTyBGRy2IyOhQ.s['11']++;allModules.push(moduleName);__cov_mS1hMY04dNTyBGRy2IyOhQ.s['12']++;if(modules[moduleName].ix_provides){__cov_mS1hMY04dNTyBGRy2IyOhQ.b['4'][0]++;__cov_mS1hMY04dNTyBGRy2IyOhQ.s['13']++;modulesByType[modules[moduleName].ix_provides]=moduleName;}else{__cov_mS1hMY04dNTyBGRy2IyOhQ.b['4'][1]++;}}else{__cov_mS1hMY04dNTyBGRy2IyOhQ.b['3'][1]++;}}__cov_mS1hMY04dNTyBGRy2IyOhQ.s['14']++;YUI_config.groups.inputex.allModules=allModules;__cov_mS1hMY04dNTyBGRy2IyOhQ.s['15']++;YUI_config.groups.inputex.modulesByType=modulesByType;});
