YUI.add("inputex-multiselect",function(e,t){var n=e.inputEx,r=e.Lang;n.MultiSelectField=function(e){n.MultiSelectField.superclass.constructor.call(this,e)},e.extend(n.MultiSelectField,n.SelectField,{renderComponent:function(){n.MultiSelectField.superclass.renderComponent.call(this),this.ddlist=new n.DDListField({parentEl:this.fieldContainer})},initEvents:function(){e.on("change",this.onAddNewItem,this.el,this),this.ddlist.on("itemRemoved",this.onItemRemoved,this),this.ddlist.on("updated",this.fireUpdatedEvt,this)},onItemRemoved:function(e){this.showChoice({value:e}),this.el.selectedIndex=0,this.fireUpdatedEvt()},onAddNewItem:function(){var e,t,r;this.el.selectedIndex!==0&&(e=n.MultiSelectField.superclass.getValue.call(this),t=this.getChoicePosition({value:e}),r=this.choicesList[t],this.ddlist.addItem({value:e,label:r.label}),this.hideChoice({position:t}),this.el.selectedIndex=0,this.fireUpdatedEvt())},setValue:function(e,t){var n,i,s,o,u=[];if(!r.isArray(e))return;for(n=0,i=this.choicesList.length;n<i;n+=1)this.showChoice({position:n});for(n=0,i=e.length;n<i;n+=1)s=this.getChoicePosition({value:e[n]}),o=this.choicesList[s],u.push({value:o.value,label:o.label}),this.hideChoice({position:s});this.ddlist.setValue(u),this.el.selectedIndex=0,t!==!1&&this.fireUpdatedEvt()},clear:function(e){this.setValue(r.isUndefined(this.options.value)?[]:this.options.value,e)},getValue:function(){return this.ddlist.getValue()},isEmpty:function(){return this.getValue().length===0}}),n.registerType("multiselect",n.MultiSelectField)},"@VERSION@",{requires:["inputex-select","inputex-ddlist"],ix_provides:"multiselect"});
