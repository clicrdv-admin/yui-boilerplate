YUI.add("inputex-menu",function(e,t){var n=e.inputEx,r=e.Lang,i=e.Node.create,s="vertical",o="horizontal";n.MenuField=function(e){n.MenuField.superclass.constructor.call(this,e)},n.MenuField.MENU_TEMPLATE='<div class="yui3-menu" id="{menu_id}"><div class="yui3-menu-content"><ul>{menu_items}</ul></div></div>',n.MenuField.MENU_ITEM_TEMPLATE='<li class="{item_class}"><a href="{href}" class="{label_class}">{label}</a>{submenu}</li>',e.extend(n.MenuField,n.Field,{setOptions:function(t){n.MenuField.superclass.setOptions.call(this,t),this.messages=e.mix(this.messages,e.Intl.get("inputex-menu")),this.options.className=t.className?t.className:"inputEx-Field inputEx-MenuField",this.options.typeInvite=t.typeInvite||this.messages.menuTypeInvite,this.options.menuTrigger=t.menuTrigger||"click",this.options.menuOrientation=t.menuOrientation||s,this.options.menuItems=t.menuItems,this.options.constrained=t.constrained||!1,this.options.menuConfig=t.menuConfig||{autoSubmenuDisplay:this.options.menuTrigger==="mouseover"}},renderComponent:function(){this.hiddenEl=n.cn("input",{type:"hidden",name:this.options.name||"",value:this.options.value||""}),this.fieldContainer.appendChild(this.hiddenEl),this.renderMenu(this.fieldContainer)},renderMenu:function(t){this._textFromValue={},this._valueFromHref={};var s=this,u,a=function(t,i,o){if(o>5)throw new Error("MenuField : too much recursion, menuItems property should be 5 level deep at most.");var u="",f=i.length,l,c,h,p;for(p=0;p<f;p++)l=i[p],h=e.guid(),c={label:l.text,href:"#"+h,submenu:"",label_class:"yui3-menuitem-content",item_class:l.classname||""},r.isUndefined(l.submenu)?(c.item_class+=" yui3-menuitem",s._textFromValue[l.value]=l.text,s._valueFromHref["#"+h]=l.value):(c.label_class="yui3-menu-label",c.submenu=a(h,l.submenu.itemdata,o+1),c.item_class+=" yui3-submenu"),u+=e.Lang.sub(n.MenuField.MENU_ITEM_TEMPLATE,c);return e.Lang.sub(n.MenuField.MENU_TEMPLATE,{menu_id:t,menu_items:u})};if(!this.options.menuItems)throw new Error("Missing 'menuItems' property in options");this._menu=i(a(e.guid(),[{text:this.options.typeInvite,submenu:{itemdata:this.options.menuItems}}],0)),this._menu.one(".yui3-menu-content").addClass("yui3-menu-content-root"),this._menu.one(".yui3-submenu").addClass("yui3-menu-button"),this._menu.one(".yui3-menu-label").addClass("yui3-menu-button-label"),e.UA.ie===7&&(u=this._menu.all("a"),u.each(function(e){var t=e.get("href");e.set("href","#"+t.split("#")[1])})),this.options.menuOrientation===o&&this._menu.addClass("yui3-menu-horizontal yui3-menubuttonnav"),this.options.constrained&&this._menu.addClass("yui3-menu-constrained"),this._rootItemLabel=e.Node.create('<em class="placeholder"></em>').set("text",this.options.typeInvite),this._menu.one(".yui3-menu-label").setHTML(this._rootItemLabel),this._menu.plug(e.Plugin.NodeMenuNavImproved,this.options.menuConfig),this._menu.appendTo(t)},initEvents:function(){this._menu.delegate("click",e.bind(this.onItemClick,this),"a")},onItemClick:function(e){var t=e.currentTarget,n;e.preventDefault(),t.hasClass("yui3-menuitem-content")&&(n=t.getAttribute("href",2),this.setValue(this._valueFromHref[n],!0),this._menu.menuNav._hideAndFocusLabel())},getValue:function(){return this.hiddenEl.value},setValue:function(e,t){var r=this._textFromValue[e];r?(this._rootItemLabel.set("text",r),this._rootItemLabel.removeClass("placeholder")):(this._rootItemLabel.set("text",this.options.typeInvite),this._rootItemLabel.addClass("placeholder")),this.hiddenEl.value=this._textFromValue[e]?e:"",n.MenuField.superclass.setValue.call(this,e,t)}}),n.registerType("menu",n.MenuField)},"@VERSION@",{requires:["inputex-field","node-event-delegate","node-menunav-improved"],skinnable:!0,ix_provides:"menu",lang:["en","fr","de","ca","es","fr","it","nl"]});
