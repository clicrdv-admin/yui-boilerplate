YUI.add("inputex-textautotag",function(e,t){var n=e.inputEx;n.TextAutoTag=function(e){n.TextAutoTag.superclass.constructor.call(this,e),this.on("updated",this.handleUpdate,this,!0)},e.extend(n.TextAutoTag,n.Textarea,{setOptions:function(e){n.TextAutoTag.superclass.setOptions.call(this,e),this.textKey=e.textKey||"context",this.tmpWordsCount=0,this.service=new n.RPC.Service(e.smd||"yuiExtractor.smd",{success:this.initAutoTag,scope:this}),this.autoTagMethodName=e.autoTagMethodName||"requestTags",this.tagEl=typeof e.tagEl=="string"?document.getElementById(e.tagEl):e.tagEl},initAutoTag:function(){this.serviceReady=!0},addTags:function(e){this.tagEl.appendChild(n.cn("span",null,null,e.ResultSet.Result.join(",")))},getTags:function(e,t){this.serviceReady&&this.service[this.autoTagMethodName]({context:this.getValue()},t)},handleUpdate:function(){var e=this.getValue();if(this.doWeRequest(e)){var t={success:function(e){this.addTags(e)},failure:function(e){},scope:this};this.getTags(e,t)}},handleResponse:function(e,t,n,r){console.log(this,"callback",e,t,n,r)},doWeRequest:function(e){var t=e.split(" ").length;return this.tmpWordsCount=t,!0}}),n.registerType("autotag",n.Textarea)},"@VERSION@",{requires:["inputex-textarea"],ix_provides:"autotag"});
