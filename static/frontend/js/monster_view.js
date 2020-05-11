(function(e){function t(t){for(var r,i,c=t[0],o=t[1],u=t[2],m=0,f=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={monster_view:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("ac41")},ac41:function(e,t,n){"use strict";n.r(t);var r=n("5530"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),s=n("2f62"),i=(n("4de4"),n("a15b"),n("96cf"),n("1da1")),c=n("5e23"),o=(n("4160"),n("b64b"),n("07ac"),n("159b"),function(e,t){var n=t.entities;Object.keys(n).forEach((function(t){Object.values(n[t]).forEach((function(n){a["a"].set(e.entities[t],n.id,n)}))}))}),u=(n("99af"),n("d81d"),n("d3b7"),n("2ca0"),n("6f0d")),l="https://swarfarm.com/api/v2",m=Object(u["setup"])({baseURL:l,withCredentials:!0,cache:{maxAge:9e5,exclude:{query:!1,filter:function(e){return e.url.startsWith("/profiles")}}}});var f=m;function p(e){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.get("/monsters/".concat(t,"/"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function _(){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.next=3,f.get("/monsters/",{params:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return h=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.next=3,f.get("/skills/",{params:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var b=new c["c"].Entity("craftMaterials"),w=new c["c"].Entity("sources"),k=new c["c"].Entity("effects"),y=new c["c"].Entity("skills",{effects:[{effect:k}]}),x=new c["c"].Entity("monsters",{skills:[y],craft_materials:[{material:b}],source:[w]}),j=new c["c"].Entity("homunculusSkills",{craft_materials:[{material:b}],skill:y,prerequisites:[y],used_on:[x]});x.define({awakens_from:x,awakens_to:x}),y.define({used_on:[x]});var O={monster:x,source:w,craftMaterial:b,skill:y,effect:k,homunculusSkill:j},I={entities:{monsters:{},craftMaterials:{},sources:{},skills:{},effects:{}}},C={updateEntities:o},E={getFullMonster:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s,i,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a("getMonster",t);case 3:return s=n.sent,n.next=6,v({id__in:s.skills.join(",")});case 6:return i=n.sent,o=i.results,r("updateEntities",Object(c["b"])(o,[O.skill])),u=[s.awakens_to,s.awakens_from,s.transforms_into].filter((function(e){return Boolean(e)})),n.next=12,a("getMonsters",u);case 12:case"end":return n.stop()}}),n)})))()},getMonster:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,p(t);case 3:return a=n.sent,r("updateEntities",Object(c["b"])(a,O.monster)),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))()},getMonsters:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,_({id__in:t.join(",")});case 3:return a=n.sent,s=a.results,r("updateEntities",Object(c["b"])(s,[O.monster])),n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)})))()}},M={monster:function(e){return function(t){return Object(c["a"])(t,O.monster,e.entities)}}},R={namespaced:!0,state:I,mutations:C,actions:E,getters:M},S=R,P=(n("caad"),n("6062"),n("2532"),n("3ca3"),n("ddb0"),n("2909")),N={incomplete:-1,unawakened:0,awakened:1,second:2},q=function(e){return 10+5*e},$=function(e,t){return t===q(e)},T=function(e){switch(e){case 23e3:return[23e3,14700];case 19100:return[19100,10100];default:return[e]}};function B(e,t){return L.apply(this,arguments)}function L(){return L=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.get("/profiles/".concat(t,"/monsters/").concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return D=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,f.get("/profiles/".concat(t,"/monsters/"),{params:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}var U=new c["c"].Entity("runes"),F=new c["c"].Entity("runeBuilds",{runes:[U]}),V=new c["c"].Entity("monsterInstances",{monster:O.monster,default_build:F,rta_build:F});F.define({monster:V});var J={monsterInstance:V,runeBuild:F,rune:U},X={entities:{monsterInstances:{},runes:{},runeBuilds:{}},profileName:null,monsterInstanceId:null},H={updateEntities:o,setProfile:function(e,t){e.profileName=t},setMonsterInstanceViewing:function(e,t){e.monsterInstanceId=t}},W={fetchMonsterInstanceDetail:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.dispatch,t.next=3,r("getMonsterInstance",{id:n.monsterInstanceId});case 3:return a=t.sent,t.next=6,r("bestiary/getFullMonster",a.monster,{root:!0});case 6:return t.next=8,r("fetchFamily");case 8:case"end":return t.stop()}}),t)})))()},getMonsterInstance:function(e){var t=arguments;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s,i,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=e.commit,s=t.length>1&&void 0!==t[1]?t[1]:{},i=s.id,o=s.profileName,o=o||r.profileName,i=i||r.monsterInstanceId,n.next=6,B(o,i);case 6:return u=n.sent,a("updateEntities",Object(c["b"])(u,J.monsterInstance)),n.abrupt("return",u);case 9:case"end":return n.stop()}}),n)})))()},fetchFamily:function(e){var t=arguments;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s,i,o,u,l,m,f,p,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,a=e.getters,s=e.commit,i=e.dispatch,o=t.length>1&&void 0!==t[1]?t[1]:{},u=o.id,l=o.profileName,l=l||r.profileName,u=u||r.monsterInstanceId,m=a.monsterInstance(u),f=T(m.monster.family_id),n.next=8,A(l,{monster__family_id__in:f.join(",")});case 8:return p=n.sent,s("updateEntities",Object(c["b"])(p.results,[J.monsterInstance])),d=Object(P["a"])(new Set(p.results.filter((function(e){return e.id!==u})).map((function(e){return e.monster})))),n.next=13,i("bestiary/getMonsters",d,{root:!0});case 13:case"end":return n.stop()}}),n)})))()}},z={viewedMonsterInstance:function(e,t){return t.monsterInstance(e.monsterInstanceId)},monsterInstance:function(e,t,n){return function(t){return Object(c["a"])(t,J.monsterInstance,Object(r["a"])({},e.entities,{},n.bestiary.entities))}},ownedInstances:function(e,t){return Object.values(e.entities.monsterInstances).filter((function(t){return t.owner===e.profileName})).map((function(e){return t.monsterInstance(e.id)}))},family:function(e,t){var n=t.viewedMonsterInstance,r=t.ownedInstances;return r.filter((function(t){return T(n.monster.family_id).includes(t.monster.family_id)&&t.id!==e.monsterInstanceId}))}},G={namespaced:!0,state:X,mutations:H,actions:W,getters:z},K=G;a["a"].use(s["a"]);var Q=new s["a"].Store({state:{},mutations:{},actions:{},modules:{bestiary:S,profile:K}}),Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loaded?n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("Info",{attrs:{owner:e.owner,instance:e.monsterInstance,skill_ups_remaining:e.skill_ups_remaining}})],1),n("div",{staticClass:"col-lg-6"},[n("Runes")],1)]),n("Stats",{attrs:{owner:e.owner,instance:e.monsterInstance}}),n("Skills",{attrs:{owner:e.owner,instance:e.monsterInstance}})],1):e._e()},Z=[],ee=(n("13d5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel panel-default"},[e._m(0),n("div",{staticClass:"panel-body"},[n("Portrait",{attrs:{monster:e.monster,stars:e.instance.stars,level:e.instance.level,locked:e.instance.ignore_for_fusion,fodder:e.instance.fodder,storage:e.instance.in_storage}}),n("div",{staticClass:"bestiary-name"},[e.instance.custom_name?n("h1",[e._v(" "+e._s(e.instance.custom_name)+" "),n("small",[e._v(e._s(e.monster.name))])]):n("h1",[e._v(e._s(e.monster.name))]),n("p",{staticClass:"lead"},[n("img",{staticStyle:{height:"1em"},attrs:{src:"/static/herders/images/elements/"+e.monster.element.toLowerCase()+".png"}}),e._v(" "+e._s(e.monster.archetype)+" ")])])],1),n("table",{staticClass:"table table-condensed table-bordered"},[n("tbody",[e.instance.created?n("tr",[n("td",[e._v("Summoned On:")]),n("td",[e._v(e._s(e.instance.created))])]):e._e(),e.awakensTo?n("tr",[n("td",[e._v("Awakens to")]),n("td",[n("a",{attrs:{href:"/bestiary/"+e.awakensTo.bestiary_slug+"/",target:"_blank"}},[n("Portrait",{attrs:{small:"",monster:e.awakensTo,stars:e.awakensTo.base_stars}})],1),e._v(" "+e._s(e.monster.awaken_bonus)+" ")])]):e._e(),e.monster.can_awaken&&e.monster.awaken_level<1?n("tr",[n("td",[e._v("Awakening Essences:")]),n("td",{staticClass:"monster-awaken-materials"},e._l(e.monster.awaken_cost,(function(e,t){return n("ItemIcon",{key:t,attrs:{item:e.item,count:e.quantity}})})),1)]):e._e(),e.instance.tags.length?n("tr",[n("td",[e._v("Tags")]),n("td",e._l(e.instance.tags,(function(t){return n("Tag",{key:t.id},[e._v(e._s(t.name))])})),1)]):e._e(),e.priority?n("tr",[n("td",[e._v("Priority")]),n("td",[e._v(e._s(e.priority))])]):e._e(),e.skill_ups_remaining?n("tr",[n("td",[e._v("Skills to Max:")]),n("td",[e.skill_ups_remaining>0?[e._v(e._s(e.skill_ups_remaining))]:[n("p",{staticClass:"list-group-item-text"},[e._v("None!")])]],2)]):e._e(),e.skill_ups_remaining?n("tr",[n("td",[e._v("Possible Skill-Ups")]),n("td",e._l(e.family,(function(e){return n("SmallPortrait",{key:e.id,attrs:{monster:e.monster,stars:e.stars,level:e.level,locked:e.ignore_for_fusion}})})),1)]):e._e()])])])}),te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-heading"},[n("p",{staticClass:"panel-title"},[e._v("Monster Info")])])}],ne=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"tag"},[e._t("default")],2)}),re=[],ae={name:"Tag"},se=ae,ie=n("2877"),ce=Object(ie["a"])(se,ne,re,!1,null,null,null),oe=ce.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"monster-box"},[n("img",{attrs:{src:e.imageUrl,alt:e.monster.name}}),n("Stars",{attrs:{count:e.stars,"awaken-level":e.monster.awaken_level,"can-awaken":e.monster.can_awaken}}),e.level?n("span",{staticClass:"image-plus image-plus-right"},[e._v(e._s(e.maxLevel)+e._s(e.level))]):e._e(),n("div",{staticClass:"image-plus-icon"},[!e.locked&&e.monster.fusion_food?n("img",{attrs:{src:"/static/herders/images/icons/fusion.png"}}):e.locked&&e.monster.fusion_food?n("img",{attrs:{src:"/static/herders/images/icons/fusion_ignored.png"}}):e._e(),e.locked?n("span",{staticClass:"fa-stack"},[n("span",{staticClass:"fa fa-square fa-stack-2x"}),n("span",{staticClass:"fa fa-lock fa-stack-1x fa-inverse"})]):e._e(),e.fodder?n("span",{staticClass:"fa-stack"},[n("span",{staticClass:"fa fa-square fa-stack-2x"}),n("span",{staticClass:"fa fa-birthday-cake fa-stack-1x fa-inverse"})]):e._e(),e.storage?n("span",{staticClass:"fa-stack"},[n("span",{staticClass:"fa fa-square fa-stack-2x"}),n("span",{staticClass:"fa fa-bed fa-stack-1x fa-inverse"})]):e._e()])],1)},le=[],me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",e._l(e.count,(function(t){return n("img",{key:t,class:"monster-star monster-star-"+t,attrs:{src:e.imageUrl,alt:"star"}})})),0)},fe=[],pe={props:{count:{type:Number,default:1},awakenLevel:{type:Number,default:N.unawakened},canAwaken:{type:Boolean,default:!1}},computed:{imageUrl:function(){var e="/static/herders/images/stars";switch(this.awakenLevel){case N.incomplete:return"".concat(e,"/star-incomplete.png");case N.unawakened:return this.canAwaken?"".concat(e,"/star-unawakened.png"):"".concat(e,"/star-fodder.png");case N.awakened:return"".concat(e,"/star-awakened.png");case N.second:return"".concat(e,"/star-awakened2.png");default:return"".concat(e,"/star-fodder.png")}}}},de=pe,_e=Object(ie["a"])(de,me,fe,!1,null,null,null),ge=_e.exports,ve={props:{monster:Object,level:{type:Number,required:!1},stars:{type:Number,default:1},locked:{type:Boolean,default:!1},fodder:{type:Boolean,default:!1},storage:{type:Boolean,default:!1}},components:{Stars:ge},computed:{imageUrl:function(){return"/static/herders/images/monsters/".concat(this.monster.image_filename)},maxLevel:function(){return $(this.stars,this.level)?"MAX":""}}},he=ve,be=Object(ie["a"])(he,ue,le,!1,null,null,null),we=be.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"monster-image"},[n("img",{staticClass:"monster-thumb",attrs:{src:e.imageUrl,alt:e.monster.name}}),n("Stars",{attrs:{count:e.stars,"awaken-level":e.monster.awaken_level,"can-awaken":e.monster.can_awaken}}),e.level?n("span",{staticClass:"image-plus image-plus-right"},[e._v(e._s(e.maxLevel)+e._s(e.level))]):e._e(),e.locked?n("span",{staticClass:"image-plus image-plus-main"},[n("span",{staticClass:"fa fa-lock fa-stack-1x fa-inverse"})]):e._e()],1)},ye=[],xe={props:{monster:Object,level:{type:Number,required:!1},stars:{type:Number,default:1},locked:{type:Boolean,default:!1}},components:{Stars:ge},computed:{imageUrl:function(){return"/static/herders/images/monsters/".concat(this.monster.image_filename)},maxLevel:function(){return $(this.stars,this.level)?"MAX":""}}},je=xe,Oe=Object(ie["a"])(je,ke,ye,!1,null,null,null),Ie=Oe.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"element-essence",attrs:{"data-toggle":"tooltip","data-placement":"top","data-container":"body",title:e.item.name}},[n("img",{attrs:{src:"/static/herders/images/items/"+e.item.icon}}),e.count?n("span",{staticClass:"image-plus image-plus-right"},[e._v(e._s(e.count))]):e._e()])},Ee=[],Me={props:{item:{type:Object,required:!0},count:{type:Number,required:!1}}},Re=Me,Se=Object(ie["a"])(Re,Ce,Ee,!1,null,null,null),Pe=Se.exports,Ne={0:"Done",1:"Low",2:"Medium",3:"High"},qe={props:{owner:{type:String,required:!0},instance:{type:Object,required:!0},skill_ups_remaining:{type:Number,required:!1}},components:{Portrait:we,SmallPortrait:Ie,ItemIcon:Pe,Tag:oe},created:function(){this.fetchData()},computed:{priority:function(){return this.instance.priority?Ne[this.monster.priority]:null},monster:function(){return this.instance.monster},awakensTo:function(){return this.$store.getters["bestiary/monster"](this.monster.awakens_to)},family:function(){return this.$store.getters["profile/family"]}},methods:Object(r["a"])({},Object(s["b"])("profile",["fetchFamily"]),{},Object(s["b"])("bestiary",["getMonster"]),{fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchFamily({id:e.instance.id});case 2:case"end":return t.stop()}}),t)})))()}})},$e=qe,Te=Object(ie["a"])($e,ee,te,!1,null,null,null),Be=Te.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Runes")])},Ae=[],De={},Ue=De,Fe=Object(ie["a"])(Ue,Le,Ae,!1,null,null,null),Ve=Fe.exports,Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Skills")])},Xe=[],He={},We=He,ze=Object(ie["a"])(We,Je,Xe,!1,null,null,null),Ge=ze.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Stats")])},Qe=[],Ye={},Ze=Ye,et=Object(ie["a"])(Ze,Ke,Qe,!1,null,null,null),tt=et.exports,nt={name:"App",props:{instanceId:String,owner:String},components:{Info:Be,Runes:Ve,Skills:Ge,Stats:tt},data:function(){return{loaded:!1}},created:function(){this.fetchData()},methods:Object(r["a"])({},Object(s["d"])("profile",["setProfile","setMonsterInstanceViewing"]),{},Object(s["b"])("profile",["fetchMonsterInstanceDetail"]),{fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.setProfile(e.owner);case 2:return t.next=4,e.setMonsterInstanceViewing(e.instanceId);case 4:return t.next=6,e.fetchMonsterInstanceDetail();case 6:e.loaded=!0;case 7:case"end":return t.stop()}}),t)})))()}}),computed:Object(r["a"])({},Object(s["c"])("profile",{monsterInstance:"viewedMonsterInstance"}),{skills:function(){return this.loaded?this.monsterInstance.monster.skills:null},skill_ups_remaining:function(){if(!this.loaded)return null;var e=[this.monsterInstance.skill_1_level,this.monsterInstance.skill_2_level,this.monsterInstance.skill_3_level,this.monsterInstance.skill_4_level];return this.skills.reduce((function(t,n,r){return t+n.max_level-e[r]}),0)}})},rt=nt,at=Object(ie["a"])(rt,Y,Z,!1,null,null,null),st=at.exports;a["a"].config.productionTip=!1;var it=document.getElementById("app");new a["a"]({render:function(e){return e(st,{props:Object(r["a"])({},it.dataset)})},el:it,store:Q})}});