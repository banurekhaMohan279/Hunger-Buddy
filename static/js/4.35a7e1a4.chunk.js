(this["webpackJsonpHunger-Buddy"]=this["webpackJsonpHunger-Buddy"]||[]).push([[4],{38:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},39:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return u}))},40:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},41:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return s}));var a=n(40);function o(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?Object(a.a)(t):e}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,u=r(t);if(e){var a=r(this).constructor;n=Reflect.construct(u,arguments,a)}else n=u.apply(this,arguments);return o(this,n)}}},42:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return u}))},45:function(t,e,n){"use strict";n.r(e);var r=n(38),u=n(39),a=n(40),o=n(42),s=n(41),c=n(1),i=n(0),f=n.n(i),l=n(12),p=new(function(){function t(){Object(r.a)(this,t)}return Object(u.a)(t,[{key:"getAllRestaurants",value:function(){return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=7&entity_type=city&category=6",{method:"GET",headers:{"user-key":"4b22cef4949b6dd368a5b9a32cb83fbd"}}).then((function(t){return t.json()}))}}]),t}());var b=new(function(){function t(){Object(r.a)(this,t)}return Object(u.a)(t,[{key:"getRestaurantDetails",value:function(t){return fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id="+t,{method:"GET",headers:{"user-key":"4b22cef4949b6dd368a5b9a32cb83fbd"}}).then((function(t){return t.json()}))}}]),t}());var h=n(20),y=n(3),d=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(t){var u;return Object(r.a)(this,n),(u=e.call(this,t)).getRestaurantDetails=u.getRestaurantDetails.bind(Object(a.a)(u)),u}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch((function(t){return p.getAllRestaurants().then((function(e){e.error?t({type:"GET_RESTAURANTS_FAILURE",msg:"Get Restaurants Failure"}):t(function(t){return{type:"GET_RESTAURANTS_SUCCESS",response:t}}(e))}))}))}},{key:"getRestaurantDetails",value:function(t){var e=this;this.props.dispatch(function(t){return function(e){return b.getRestaurantDetails(t).then((function(t){t.error?e({type:"GET_RESTAURANT_DETAILS_FAILURE",msg:"Get Restaurant Details Failure"}):e(function(t){return{type:"GET_RESTAURANT_DETAILS_SUCCESS",response:t}}(t))}))}}(t)).then((function(){e.props.history.push("/RestaurantDetails")}))}},{key:"render",value:function(){var t=this,e=this.props.restaurants&&this.props.restaurants.restaurants;return Object(c.jsxs)("div",{className:"retaurantsPage",children:[Object(c.jsx)(h.a,{}),Object(c.jsx)("div",{className:"restaurantList",children:e&&e.map((function(e,n){return Object(c.jsxs)("div",{className:"restaurant",onClick:function(n){return t.getRestaurantDetails(e.restaurant.R.res_id)},children:[Object(c.jsx)("img",{src:e.restaurant.thumb,alt:e.restaurant.name,className:"restaurantThumbNail"}),Object(c.jsxs)("h4",{className:"restaurantName",children:[" ",e.restaurant.name," "]}),Object(c.jsxs)("span",{children:["\u2606",e.restaurant.user_rating.aggregate_rating]})]},"restaurant"+n)}))})]})}}]),n}(f.a.Component);e.default=Object(y.g)(Object(l.b)((function(t){return{restaurants:t.restaurantsReducer.restaurants,cities:t.getCitiesReducer.cities}}))(d))}}]);
//# sourceMappingURL=4.35a7e1a4.chunk.js.map