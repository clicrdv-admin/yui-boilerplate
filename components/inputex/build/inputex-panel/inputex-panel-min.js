YUI.add("inputex-panel",function(e,t){e.inputEx.Panel=e.Base.create("panel",e.Panel,[e.inputEx.Base],{hide:function(){e.inputEx.Panel.superclass.hide.apply(this,arguments),this.get("field").hide()},show:function(){e.inputEx.Panel.superclass.show.apply(this,arguments),this.get("field").show()}})},"@VERSION@",{requires:["inputex","panel","inputex-base"]});
