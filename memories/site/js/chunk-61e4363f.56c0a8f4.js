(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61e4363f"],{"0b42":function(t,e,r){var n=r("da84"),a=r("e8b5"),i=r("68ee"),o=r("861d"),c=r("b622"),u=c("species"),f=n.Array;t.exports=function(t){var e;return a(t)&&(e=t.constructor,i(e)&&(e===f||a(e.prototype))?e=void 0:o(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?f:e}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),i=r("2d00"),o=a("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2e6b":function(t,e,r){"use strict";var n=r("1da1"),a=r("d4ec"),i=r("bee2"),o=(r("99af"),r("96cf"),r("ecb7")),c=r("773f"),u=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,[{key:"tipBlog",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].post("".concat(c["a"].baseApiUrl,"/tipOff/article"),e));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getTipOffData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].get("".concat(c["a"].baseApiUrl,"/tipOff/article"),{params:e}));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"ignoreTipOffDataById",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].delete("".concat(c["a"].baseApiUrl,"/tipOff/tipOffData/").concat(e.tipOffId)));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"deleteTipOffDataById",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",o["a"].delete("".concat(c["a"].baseApiUrl,"/tipOff/article/").concat(e.tipOffId)));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["a"]=new u},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},8418:function(t,e,r){"use strict";var n=r("a04b"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?a.f(t,o,i(0,r)):t[o]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d039"),o=r("e8b5"),c=r("861d"),u=r("7b0b"),f=r("07fa"),s=r("8418"),l=r("65f0"),p=r("1dde"),d=r("b622"),b=r("2d00"),h=d("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=a.TypeError,w=b>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=p("concat"),y=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},D=!w||!O;n({target:"Array",proto:!0,forced:D},{concat:function(t){var e,r,n,a,i,o=u(this),c=l(o,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],y(i)){if(a=f(i),p+a>v)throw g(m);for(r=0;r<a;r++,p++)r in i&&s(c,p,i[r])}else{if(p>=v)throw g(m);s(c,p++,i)}return c.length=p,c}})},be63:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tipOffData}},[r("el-table-column",{attrs:{prop:"blogId",label:"博客id",width:"180"}}),r("el-table-column",{attrs:{prop:"title",label:"博客标题",width:"180"}}),r("el-table-column",{attrs:{label:"博客封面",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("el-image",{staticStyle:{width:"180px"},attrs:{src:t.row.cover}})]}}])}),r("el-table-column",{attrs:{prop:"description",label:"博客简介",width:"180"}}),r("el-table-column",{attrs:{prop:"reason",label:"举报原因"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return t.goDetail(e.row)}}},[t._v("详情")]),r("el-button",{attrs:{type:"primary"},on:{click:function(r){return t.ignoreTipOff(e.row)}}},[t._v("忽略举报")]),r("el-button",{attrs:{type:"danger"},on:{click:function(r){return t.rejectedBlog(e.row)}}},[t._v("删除文章")])]}}])})],1)],1)},a=[],i=r("2e6b"),o={name:"TipOff",data:function(){return{tipOffData:[],searchParams:{limit:10,offset:0},totalNum:0}},created:function(){this.getTipOffData()},methods:{getTipOffData:function(){var t=this;i["a"].getTipOffData(this.searchParams).then((function(e){t.totalNum=e.data.data.totalNum,t.tipOffData=e.data.data.tipOffData}))},goDetail:function(t){this.$router.push("/article/".concat(t.blogId))},ignoreTipOff:function(t){var e=this;i["a"].ignoreTipOffDataById({tipOffId:t._id}).then((function(t){200===t.status&&(e.$message.success("忽略成功"),e.getTipOffData())}))},rejectedBlog:function(t){var e=this;i["a"].deleteTipOffDataById({tipOffId:t._id}).then((function(t){200===t.status&&(e.$message.success("删除成功"),e.getTipOffData())}))}}},c=o,u=r("2877"),f=Object(u["a"])(c,n,a,!1,null,"b4f80428",null);e["default"]=f.exports},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-61e4363f.56c0a8f4.js.map