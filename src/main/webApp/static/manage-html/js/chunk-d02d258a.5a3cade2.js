(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d02d258a"],{"5fdd":function(e,t,r){},c122:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"table-box"},[r("el-input",{staticClass:"mr10",attrs:{placeholder:"请输入：角色名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getData()}},model:{value:e.table.query.condition.roleName,callback:function(t){e.$set(e.table.query.condition,"roleName","string"===typeof t?t.trim():t)},expression:"table.query.condition.roleName"}}),r("div",{staticClass:"btn-main ",on:{click:e.getData}},[e._v("查   询")]),r("div",{staticClass:"btn-main btn-add",on:{click:function(t){e.showDialog("add")}}},[e._v("新建自定义角色")]),r("table",{staticClass:"table",attrs:{cellspacing:"0"}},[e._m(0),e._l(e.table.list,function(t,i){return r("tr",[r("td",[e._v(e._s(i+1+(e.table.query.currentPage-1)*e.table.query.pageSize))]),r("td",[e._v(e._s(t.roleName))]),r("td",{attrs:{title:t.roleDesc}},[e._v(e._s(t.roleDesc))]),r("td",[e._v(e._s("00"===t.roleType?"默认":"自定义"))]),r("td",[e._v(e._s(new Date(t.createTime).$Format("yyyy-MM-dd hh:mm:ss")))]),r("td",[r("span",{staticClass:"oper",on:{click:function(r){e.getRoleDetail(t)}}},[e._v("修改")]),r("span",{staticClass:"col"}),r("span",{staticClass:"oper",on:{click:function(r){e.remove(t)}}},[e._v("删除")])])])}),r("no-data",{directives:[{name:"show",rawName:"v-show",value:!e.table.list.length,expression:"!table.list.length"}]})],2),r("el-pagination",{staticClass:"pagination",attrs:{"page-size":e.table.query.pageSize,"current-page":e.table.query.currentPage,layout:"prev, pager, next, jumper",total:e.table.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.table.query,"currentPage",t)}}})],1),r("el-dialog",{attrs:{modal:!1,center:"",title:e.title,"close-on-click-modal":!1,visible:e.dialog,width:"420px"},on:{"update:visible":function(t){e.dialog=t}}},[r("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"70px","label-position":"left"}},[r("el-form-item",{attrs:{prop:"oldPassword",label:"角色名称"}},[r("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.roleList.query.roleName,callback:function(t){e.$set(e.roleList.query,"roleName",t)},expression:"roleList.query.roleName"}})],1),r("el-form-item",{attrs:{prop:"oldPassword",label:"角色描述"}},[r("el-input",{attrs:{placeholder:"请输入角色描述"},model:{value:e.roleList.query.roleDesc,callback:function(t){e.$set(e.roleList.query,"roleDesc",t)},expression:"roleList.query.roleDesc"}})],1),r("el-form-item",{attrs:{prop:"oldPassword",label:"权限设置"}},[r("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("el-tree",{ref:"tree",staticClass:"el-tree",attrs:{data:e.authorities.list,props:e.defaultProps,"default-expanded-keys":["root"],"node-key":"id","show-checkbox":"","default-checked-keys":e.checkedKeys}}),r("div",{staticClass:"btn-set",attrs:{slot:"reference"},on:{click:function(t){e.$refs.tree.setCheckedKeys(e.checkedKeys),e.visible=!e.visible}},slot:"reference"},[e._v("设置权限")]),r("div",{staticClass:"btns mt25"},[r("div",{staticClass:"btn-main mr15",on:{click:function(t){e.checkedKeys=e.$refs.tree.getCheckedKeys(),e.visible=!1}}},[e._v("提交")]),r("div",{staticClass:"btn-main",on:{click:function(t){e.visible=!1}}},[e._v("关闭")])])],1)],1)],1),r("div",{staticClass:"btns mt25"},[r("div",{staticClass:"btn-main mr15",on:{click:function(t){e.editRole()}}},[e._v("提交")]),r("div",{staticClass:"btn-main",on:{click:function(t){e.dialog=!1}}},[e._v("关闭")])])],1)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",{attrs:{width:"13%"}},[e._v("序号")]),r("th",{attrs:{width:"14%"}},[e._v("角色名称")]),r("th",{attrs:{width:"25%"}},[e._v("角色描述")]),r("th",{attrs:{width:"14%"}},[e._v("类型")]),r("th",{attrs:{width:"14%"}},[e._v("创建时间")]),r("th",{attrs:{width:"20%"}},[e._v("操作")])])}],s=(r("96cf"),r("1da1")),n=(r("cadf"),r("551c"),r("097d"),{name:"Info",data:function(){return{table:{url:"/role/list",loading:".table",list:[],total:0,el:".table",query:{condition:{roleName:""},currentPage:1,pageSize:this.$conf.PAGES}},authorities:{url:"/role/authorities",list:[]},checkedKeys:[],roleList:{url:"/role/add",query:{roleName:"",roleDesc:"",authorities:[]}},visible:!1,title:"新建自定义角色",dialog:!1,defaultProps:{children:"authorities",label:"name"}}},methods:{showDialog:function(e,t){this.dialog=!0,this.checkedKeys=[],this.title="新建自定义角色",this.roleList.query={roleName:"",roleDesc:"",authorities:[]}},getRoleDetail:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/role/detail",query:{id:t.id}});case 2:for(i in r=e.sent,this.roleList.query={id:r.id,roleName:r.roleName,roleDesc:r.roleDesc,authorities:r.authorities},this.checkedKeys=[],r.authorities)this.checkedKeys.push(i);this.dialog=!0,this.title="修改自定义角色";case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getAuthorities:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax(this.authorities);case 2:t=e.sent,console.log(t),this.authorities.list=[t];case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax(this.table);case 2:t=e.sent,this.table.list=t.pageItems||[],this.table.total=t.totalCount;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$confirm("数据删除后将不能恢复，请确认是否删除！","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});case 2:return e.next=4,this.$ajax({url:"/role/delete",query:{id:t.id}});case 4:this.$remind("删除成功"),this.getData();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),editRole:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="","修改自定义角色"===this.title?(t="修改成功",this.roleList.url="/role/update"):(t="新建成功",this.roleList.url="/role/add"),this.roleList.query.authorities=this.checkedKeys,this.roleList.query.authorities.length){e.next=6;break}return this.$message.warning("请设置权限"),e.abrupt("return");case 6:if(this.roleList.query.roleName){e.next=9;break}return this.$message.warning("请输入角色名称"),e.abrupt("return");case 9:return e.next=11,this.$ajax(this.roleList);case 11:this.$remind(t),this.dialog=!1,this.table.query={condition:{roleName:""},currentPage:1,pageSize:this.$conf.PAGES},this.getData();case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleCurrentChange:function(e){this.table.query.currentPage=e,this.getData()}},mounted:function(){this.getData(),this.getAuthorities()}}),l=n,o=(r("eac8"),r("2877")),c=Object(o["a"])(l,i,a,!1,null,"b0b975e2",null);c.options.__file="Role.vue";t["default"]=c.exports},eac8:function(e,t,r){"use strict";var i=r("5fdd"),a=r.n(i);a.a}}]);
//# sourceMappingURL=chunk-d02d258a.5a3cade2.js.map