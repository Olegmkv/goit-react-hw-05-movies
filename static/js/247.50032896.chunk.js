"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{687:function(t,n,e){e.d(n,{Bt:function(){return h},Ny:function(){return d},Tg:function(){return f},d5:function(){return v},qB:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="https://api.themoviedb.org/3/",o=new URLSearchParams({api_key:"fbaf0d2e5045632a4f9c1a9b28b2fdb1",language:"en-US"}),s=new URLSearchParams({api_key:"fbaf0d2e5045632a4f9c1a9b28b2fdb1",language:"en-US",include_adult:!1,query:""}),f=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/movie/day?").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.set("query",n),t.next=3,u.Z.get("".concat(i,"search/movie?").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"?").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/credits?").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/reviews?").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},247:function(t,n,e){e.r(n);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(687),o=e(791),s=e(689),f=e(184);n.default=function(){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],p=(0,s.UO)();return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.d5)(p.movieId);case 3:n=t.sent,c(n.cast),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}p.movieId&&function(){t.apply(this,arguments)}()}),[p.movieId]),(0,f.jsx)("ul",{children:e.map((function(t){var n;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(null!==(n=t.profile_path)&&void 0!==n?n:"/2oPeMkoUKWPUtYlC0TtAYpCgFOt.jpg"),alt:t.name,width:"100"}),(0,f.jsx)("h4",{children:t.name}),(0,f.jsx)("p",{children:t.character})]},t.id)}))})}}}]);
//# sourceMappingURL=247.50032896.chunk.js.map