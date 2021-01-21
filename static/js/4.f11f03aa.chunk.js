(this["webpackJsonpHunger-Buddy"]=this["webpackJsonpHunger-Buddy"]||[]).push([[4],{50:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},51:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},53:function(e,t,n){"use strict";n.r(t);var r=n(32),a=n(3),c=n(0),s=n.n(c),i=n(17),o=n(50),u=n(51),d=new(function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"getAllRestaurants",value:function(e,t,n){return fetch("https://developers.zomato.com/api/v2.1/search?entity_id="+e+"&entity_type=city&start="+20*t+"&count=20&category=6",{method:"GET",headers:{"user-key":"4b22cef4949b6dd368a5b9a32cb83fbd"}}).then((function(e){return e.json()}))}}]),e}());function l(e,t,n){return function(r){return d.getAllRestaurants(e,t,n).then((function(e){e.error?r({type:"GET_RESTAURANTS_FAILURE",msg:"Get Restaurants Failure"}):"initLoad"===n?(r(function(e){return{type:"GET_INIT_RESTAURANTS_SUCCESS",response:e}}(e)),console.log("init restaurants")):(r(function(e){return{type:"GET_RESTAURANTS_SUCCESS",response:e}}(e)),console.log("subsequent restaurants load"))}))}}var f=new(function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"getRestaurantDetails",value:function(e){return fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id="+e,{method:"GET",headers:{"user-key":"4b22cef4949b6dd368a5b9a32cb83fbd"}}).then((function(e){return e.json()}))}}]),e}());var b=n(28),j=n(20),m=n(1),h=n(2),O=n(4),p=n.n(O),g=n(5),v=n(29),y=function(e){return s.a.forwardRef((function(t,n){return s.a.createElement("div",Object(m.a)({},t,{ref:n,className:p()(t.className,e)}))}))},x=s.a.createContext(null);x.displayName="CardContext";var E=x,R=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.variant,c=e.as,i=void 0===c?"img":c,o=Object(h.a)(e,["bsPrefix","className","variant","as"]),u=Object(g.a)(n,"card-img");return s.a.createElement(i,Object(m.a)({ref:t,className:p()(a?u+"-"+a:u,r)},o))}));R.displayName="CardImg",R.defaultProps={variant:null};var T=R,S=y("h5"),_=y("h6"),N=Object(v.a)("card-body"),C=Object(v.a)("card-title",{Component:S}),A=Object(v.a)("card-subtitle",{Component:_}),I=Object(v.a)("card-link",{Component:"a"}),k=Object(v.a)("card-text",{Component:"p"}),w=Object(v.a)("card-header"),U=Object(v.a)("card-footer"),P=Object(v.a)("card-img-overlay"),G=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.bg,i=e.text,o=e.border,u=e.body,d=e.children,l=e.as,f=void 0===l?"div":l,b=Object(h.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(g.a)(n,"card"),O=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(E.Provider,{value:O},s.a.createElement(f,Object(m.a)({ref:t},b,{className:p()(r,j,a&&"bg-"+a,i&&"text-"+i,o&&"border-"+o)}),u?s.a.createElement(N,null,d):d))}));G.displayName="Card",G.defaultProps={body:!1},G.Img=T,G.Title=C,G.Subtitle=A,G.Body=N,G.Link=I,G.Text=k,G.Header=w,G.Footer=U,G.ImgOverlay=P;var L=G,D=Object(v.a)("card-deck"),B=n(6);t.default=function(){var e=Object(i.c)(),t=Object(B.f)(),n=Object(c.useState)(0),s=Object(r.a)(n,2),o=s[0],u=s[1],d=Object(i.d)((function(e){return e.restaurantsReducer.restaurants})),m=Object(i.d)((function(e){return e.getCitiesReducer.cities.location_suggestions[0].entity_id}));Object(c.useEffect)((function(){e(l(m,o,"initLoad")).then((function(){var e=new IntersectionObserver(O,{root:null,rootMargin:"20px",threshold:1});h.current&&e.observe(h.current)}))}),[]);var h=Object(c.useRef)(null);Object(c.useEffect)((function(){console.log("componentDidUpdate",o),e(l(m,o,"notInitLoad"))}),[o]);var O=function(e){e[0].isIntersecting&&u((function(e){return e+1}))};function p(n){e(function(e){return function(t){return f.getRestaurantDetails(e).then((function(e){e.error?t({type:"GET_RESTAURANT_DETAILS_FAILURE",msg:"Get Restaurant Details Failure"}):t(function(e){return{type:"GET_RESTAURANT_DETAILS_SUCCESS",response:e}}(e))}))}}(n)).then((function(){t.push("/RestaurantDetails")}))}return Object(a.jsxs)("div",{className:"set-height restaurantsPage",children:[Object(a.jsx)(b.a,{}),Object(a.jsx)(j.a,{fluid:!0,style:{maxWidth:"1280px",margin:"0 auto"},children:Object(a.jsx)(D,{children:d&&d.map((function(e,t){return Object(a.jsxs)(L,{style:{minWidth:"18rem"},onClick:function(t){return p(e.restaurant.R.res_id)},children:[Object(a.jsx)(L.Img,{variant:"top",src:e.restaurant.thumb,alt:e.restaurant.name}),Object(a.jsxs)(L.Body,{children:[Object(a.jsx)(L.Title,{children:e.restaurant.name}),Object(a.jsxs)(L.Text,{children:["\u2606",e.restaurant.user_rating.aggregate_rating]})]})]},"restaurant"+t)}))})}),Object(a.jsx)("div",{className:"loading",ref:h,children:Object(a.jsx)("h2",{children:"Loading..."})})]})}}}]);
//# sourceMappingURL=4.f11f03aa.chunk.js.map