(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b45e57"],{"37f7":function(t,e,l){},5244:function(t,e,l){"use strict";var a=l("37f7"),i=l.n(a);i.a},e3fb:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("el-tree",{staticClass:"el-tree",attrs:{data:t.data,props:t.defaultProps,"default-expanded-keys":["中铁十五局项目经理管理部","一级 2","二级 2-1","二级 2-1-1","二级 2-2"],"node-key":"label"},on:{"node-click":t.handleNodeClick}}),l("div",{staticClass:"table-box"},[l("el-input",{staticClass:"mr10",attrs:{placeholder:"请输入：姓名/手环编号/手机号"}}),l("div",{staticClass:"btn-main "},[t._v("查   询")]),l("div",{staticClass:"btn-main btn-add",on:{click:function(e){t.showDialog("add")}}},[t._v("新建人员信息")]),l("table",{staticClass:"table",attrs:{cellspacing:"0"}},[t._m(0),t._l(13,function(e){return l("tr",[l("td",[t._v("1")]),l("td",[t._v("刘彻")]),l("td",[t._v("39821033")]),l("td",[t._v("工程部长")]),l("td",[t._v("18888888888")]),l("td",[t._v("在职")]),l("td",[t._v("2018-09-09")]),l("td",[l("span",{staticClass:"oper",on:{click:function(e){t.showDialog("edit")}}},[t._v("修改")]),l("span",{staticClass:"col"}),l("span",{staticClass:"oper",on:{click:function(e){t.remove()}}},[t._v("删除")])])])})],2),l("el-pagination",{staticClass:"pagination",attrs:{"page-size":100,layout:"prev, pager, next, jumper",total:1e3}})],1),l("el-dialog",{staticClass:"dialog",attrs:{modal:!1,center:"",title:t.title,visible:t.dialog,width:"420px"},on:{"update:visible":function(e){t.dialog=e}}},[l("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"70px","label-position":"left"}},[l("el-form-item",{attrs:{prop:"oldPassword",label:"姓名"}},[l("el-input",{attrs:{placeholder:"请输入姓名"}})],1),l("el-form-item",{attrs:{prop:"oldPassword",label:"手环编号"}},[l("el-input",{attrs:{placeholder:"请输入手环编号"}})],1),l("el-form-item",{attrs:{prop:"oldPassword",label:"职位"}},[l("el-select",{attrs:{placeholder:"请选择职位"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),l("el-form-item",{attrs:{prop:"oldPassword",label:"手机号"}},[l("el-input",{attrs:{placeholder:"请输入手机号"}})],1),l("el-form-item",{attrs:{prop:"oldPassword",label:"状态"}},[l("el-radio",{attrs:{border:"",label:"1"}},[t._v("入场")]),l("el-radio",{attrs:{border:"",label:"2"}},[t._v("离场")])],1),l("el-form-item",{attrs:{prop:"oldPassword",label:"入场时间"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"}})],1)],1),l("div",{staticClass:"btns mt25"},[l("div",{staticClass:"btn-main mr15"},[t._v("提交")]),l("div",{staticClass:"btn-main",on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])])],1)],1)},i=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("tr",[l("th",{attrs:{width:"8%"}},[t._v("序号")]),l("th",{attrs:{width:"8%"}},[t._v("姓名")]),l("th",{attrs:{width:"12%"}},[t._v("手环编号")]),l("th",{attrs:{width:"14%"}},[t._v("角色")]),l("th",{attrs:{width:"14%"}},[t._v("手机号")]),l("th",{attrs:{width:"8%"}},[t._v("状态")]),l("th",{attrs:{width:"18%"}},[t._v("入/离职时间")]),l("th",{attrs:{width:"18%"}},[t._v("操作")])])}],r=(l("96cf"),l("1da1")),s=(l("cadf"),l("551c"),l("097d"),{name:"Info",data:function(){return{title:"新建人员信息",dialog:!1,options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],data:[{label:"中铁十五局项目经理管理部",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},methods:{handleNodeClick:function(t){console.log(t)},showDialog:function(t){this.dialog=!0,this.title="add"===t?"新建人员信息":"修改人员信息"},remove:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("您确认删除该用户吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}),n=s,o=(l("5244"),l("2877")),d=Object(o["a"])(n,a,i,!1,null,"3664521c",null);d.options.__file="Info.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-52b45e57.51144a63.js.map