YUI.add("inputex-timerange",function(e,t){var n=e.Lang,r=e.inputEx;r.TimeRange=function(e){var t=[],n=[],i,s=[],o;for(i=0;i<25;i++)o=i<10?"0":"",o+=i,n.push({value:o}),i<24&&t.push({value:o});s=[{value:"00"},{value:"05"},{value:"10"},{value:"15"},{value:"20"},{value:"25"},{value:"30"},{value:"35"},{value:"40"},{value:"45"},{value:"50"},{value:"55"}],e.fields=[{type:"select",choices:t},{type:"select",choices:s},{type:"select",choices:n},{type:"select",choices:s}],e.separators=e.separators||[!1,"H","&nbsp; \u00e0 &nbsp;","H",!1],r.TimeRange.superclass.constructor.call(this,e),this.inputs[3].on("updated",this.toggleEndMinutes,this)},e.extend(r.TimeRange,r.CombineField,{setOptions:function(t){r.TimeRange.superclass.setOptions.call(this,t),this.messages=e.mix(this.messages,e.Intl.get("inputex-timerange")),t.minTime&&this.setMinTime(t.mintime)},setMinTime:function(e){this.options.minTime=e,this.setClassFromState()},onChange:function(){this.setClassFromState(),r.TimeRange.superclass.onChange.call(this)},getValue:function(){var e=r.TimeRange.superclass.getValue.call(this),t=[];return t.push(e[0]+":"+e[1]),t.push(e[2]+":"+e[3]),t},setValue:function(e,t){var n=e[0].split(":").concat(e[1].split(":"));r.TimeRange.superclass.setValue.call(this,n,t),this.toggleEndMinutes()},toggleEndMinutes:function(){var e=this.inputs[2],t=this.inputs[3];e.getValue()==="24"?(t.setValue("00",!1),t.disable()):t.enable()},getStateString:function(t){var n=this.getValue(),i=this.options.minTime;return t===r.stateInvalid&&n[0]>=n[1]?this.messages.incorrectOrder:t===r.stateInvalid&&i&&n[0]<=i?e.Lang.sub(this.messages.minTimeError,{minTime:i}):r.TimeRange.superclass.getStateString.call(this,t)},validate:function(){var e=this.getValue(),t=e[1].split(":");return t[0]=="24"&&t[1]!="00"?!1:e[0]>=e[1]?!1:this.options.minTime&&e[0]<=this.options.minTime?!1:!0}}),r.registerType("timerange",r.TimeRange)},"@VERSION@",{requires:["intl","inputex-combine","inputex-select"],lang:["en","fr","de"],ix_provides:"timerange"});
