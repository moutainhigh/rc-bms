(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23850440"],{"107c":function(t,e,r){"use strict";var a=r("9125"),i=r.n(a);i.a},"8b5d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"table-box"},[r("div",{staticClass:"btn-main btn-add mb20",on:{click:function(e){return t.showDialog("top")}}},[t._v("新建顶级组织机构")]),r("table",{staticClass:"table",attrs:{cellspacing:"0"}},[t._m(0),t._l(t.table.list,(function(e,a){return r("tr",{key:a},[r("td",[r("span",{staticClass:"el-icon-caret-bottom",style:{marginLeft:30*e.tier+"px"}}),t._v("\n          "+t._s(e.orgName)+"\n        ")]),r("td",{attrs:{title:e.orgDesc}},[t._v(t._s(e.orgDesc))]),r("td",[r("span",{staticClass:"oper",on:{click:function(r){return t.showDialog("childer",e)}}},[t._v("添加下级组织")]),r("span",{staticClass:"col"}),r("span",{staticClass:"oper",on:{click:function(r){return t.showDialog("edit",e)}}},[t._v("修改")]),r("span",{staticClass:"col"}),r("span",{staticClass:"oper",on:{click:function(r){return t.remove(e)}}},[t._v("删除")])])])}))],2)]),r("el-dialog",{staticClass:"dialog",attrs:{modal:!1,"close-on-click-modal":!1,center:"",title:t.title,visible:t.dialog,width:"420px"},on:{"update:visible":function(e){t.dialog=e}}},[r("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"70px","label-position":"left"}},[r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"添加下级组织"===t.title,expression:"title === '添加下级组织'"}],attrs:{prop:"oldPassword",label:"上级组织"}},[r("el-input",{attrs:{value:t.org.query.parentName,disabled:""}})],1),r("el-form-item",{attrs:{prop:"oldPassword",label:"名称"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.org.query.orgName,callback:function(e){t.$set(t.org.query,"orgName",e)},expression:"org.query.orgName"}})],1),r("el-form-item",{attrs:{prop:"oldPassword",label:"说明"}},[r("el-input",{attrs:{type:"textarea",rows:7,placeholder:"请输入说明"},model:{value:t.org.query.orgDesc,callback:function(e){t.$set(t.org.query,"orgDesc",e)},expression:"org.query.orgDesc"}})],1)],1),r("div",{staticClass:"btns mt25"},[r("div",{staticClass:"btn-main mr15",on:{click:function(e){return t.addEdit()}}},[t._v("提交")]),r("div",{staticClass:"btn-main",on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])])],1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",{attrs:{width:"32%"}},[t._v("组织架构")]),r("th",{attrs:{width:"49%"}},[t._v("说明")]),r("th",{attrs:{width:"19%"}},[t._v("操作")])])}],n=(r("f763"),r("7a59"),r("63ff"),r("cec5")),s={name:"Info",data:function(){return{title:"新建顶级组织机构",table:{list:[],el:".table",url:"/organization/all"},org:{url:"/organization/add",query:{orgName:"",orgDesc:"",parentId:""}},dialog:!1,orgList:[],data:[{label:"中铁十五局项目经理管理部",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},mounted:function(){this.getOrgList(),this.getData()},methods:{handleNodeClick:function(t){console.log(t)},showDialog:function(t,e){this.dialog=!0,this.org.query={orgName:e?e.orgName:"",parentName:e?e.orgName:"",orgDesc:e?e.orgDesc:"",parentId:e?e.id:"",id:e&&e.id?e.id:""},"top"===t?this.title="新建顶级组织机构":"edit"===t?this.title="修改组织机构":(this.title="添加下级组织",this.org.query.orgName="",this.org.query.orgDesc="")},remove:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("删除后数据将无法恢复，是否确认删除？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});case 2:return t.next=4,this.$ajax({url:"/organization/delete",query:{id:e.id}});case 4:this.getData(),this.$remind("删除成功");case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getOrgList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/organization/all"});case 2:t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=function(t){t.forEach((function(t){r.table.list.push({orgName:t.orgName,orgDesc:t.orgDesc,id:t.id,tier:a}),t.childOrgList.length&&(i(t.childOrgList,++a),a--)}))},t.next=3,this.$ajax(this.table);case 3:e=t.sent,this.table.list=[],r=this,a=0,i(e.childOrgList),this.table.list=this.table.list.splice(0,this.table.list.length);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addEdit:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="",r=JSON.parse(JSON.stringify(this.org)),r.query.parentName=void 0,"修改组织机构"===this.title?(e="修改成功",r.url="/organization/update",r.query.parentId=void 0):(e="新建成功",r.url="/organization/add",r.query.id=void 0),t.next=6,this.$ajax(r);case 6:t.sent,this.dialog=!1,this.getData(),this.$remind(e);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},l=s,o=(r("107c"),r("6691")),c=Object(o["a"])(l,a,i,!1,null,"37024fea",null);e["default"]=c.exports},9125:function(t,e,r){}}]);
//# sourceMappingURL=chunk-23850440.92c1fd71.js.map