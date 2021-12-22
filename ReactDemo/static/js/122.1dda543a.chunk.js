"use strict";(self.webpackChunklession_02=self.webpackChunklession_02||[]).push([[122],{122:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var r=a(152);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l=a(791),o=a(184),d="toggle_sidebar",c="toggle_theme",m=function(e,t){switch(t.type){case d:return s(s({},e),{},{isSidebarOpened:t.value});case c:return s(s({},e),{},{theme:t.value});default:return e}},u={isSidebarOpened:!1},x=l.createContext({state:u,dispatch:function(){return null}}),p=function(e){var t=e.children,a=l.useReducer(m,u),i=(0,r.Z)(a,2),n=i[0],s=i[1];return(0,o.jsx)(x.Provider,{value:[n,s],children:t})},g="light",h="dark",f="system",y=function(e){return e?localStorage.setItem("theme",e):e=localStorage.getItem("theme"),e===f&&(e="",localStorage.removeItem("theme")),"dark"===e||!e&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),e},v=a(871);function j(e){return(0,o.jsx)("div",{className:"card-container",children:(0,o.jsx)("div",{className:"card-content",children:"Dashboard"})})}var b=a(504);function N(e){return(0,o.jsx)("div",{className:"my-4",children:(0,o.jsxs)("div",{className:"mx-auto max-w-full w-[500px]",children:[(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"ghost-container",children:[(0,o.jsx)("div",{className:"ghost-backdrop"}),(0,o.jsxs)("div",{className:"ghost-object bg-gray-200 dark:bg-white relative",children:[(0,o.jsxs)("div",{className:"ghost-eyes",children:[(0,o.jsx)("div",{className:"ghost-eye-left"}),(0,o.jsx)("div",{className:"ghost-eye-right"})]}),(0,o.jsx)("div",{className:"ghost-mouth"}),(0,o.jsxs)("div",{className:"ghost-bottom",children:[(0,o.jsx)("div",{className:"one bg-gray-200 dark:bg-white"}),(0,o.jsx)("div",{className:"two bg-gray-200 dark:bg-white"}),(0,o.jsx)("div",{className:"three bg-gray-200 dark:bg-white"}),(0,o.jsx)("div",{className:"four bg-gray-200 dark:bg-white"})]})]}),(0,o.jsx)("div",{className:"ghost-shadow shadow-[0_50px_15px_5px_#d7d7d7] dark:shadow-[0_50px_15px_5px_#3b3769]"})]})}),(0,o.jsxs)("div",{className:"flex flex-col items-center mt-20",children:[(0,o.jsx)("div",{className:"font-bold text-3xl",children:"Whoops!"}),(0,o.jsx)("div",{className:"max-auto max-w-full w-[300px] text-center my-6",children:(0,o.jsx)("span",{className:"text-gray-600 dark:text-gray-200",children:"It seems like we couldn't find the page you were looking for"})})]}),(0,o.jsxs)("div",{className:"mt-2 mx-auto flex justify-center",children:[(0,o.jsx)(b.rU,{to:"",className:"btn-blue mr-2",children:"Go Back"}),(0,o.jsx)(b.rU,{to:"",className:"btn-blue",children:"Home"})]})]})})}function w(e){return(0,v.V$)([{path:"/",element:(0,o.jsx)(j,{})},{path:"/*",element:(0,o.jsx)(N,{})}])}var k=a.p+"static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg";var C=function(e){var t=(0,l.useContext)(x),a=(0,r.Z)(t,2),i=a[0],n=a[1],s=i.isSidebarOpened;return(0,o.jsx)("div",{className:"layout-header fixed top-0 left-0 w-screen z-40 transition-colors duration-400 ease-linear",children:(0,o.jsxs)("div",{className:"layout-header-nav w-full h-full flex items-center px-2 pr-4 bg-white dark:bg-gray-800 shadow-[0_15px_30px_0px_rgba(82,63,105,0.05)] transition-colors duration-400 ease-linear",children:[(0,o.jsxs)(b.rU,{to:"",className:"flex items-center",children:[(0,o.jsx)("div",{className:"app-logo",children:(0,o.jsx)("img",{src:k,className:"app-logo-img",alt:"logo"})}),(0,o.jsx)("div",{className:"app-title text-3xl font-bold transition-colors duration-400 ease-linear",children:"React App"})]}),(0,o.jsx)("div",{className:"flex-1"}),(0,o.jsx)("div",{className:"hover:text-blue-700 cursor-pointer -rotate-45 mr-4 transition-colors duration-400 ease-linear",onClick:function(){e.onThemeChanged&&e.onThemeChanged()},children:(0,o.jsx)("span",{className:"mdi mdi-36px mdi-moon-waning-crescent "})}),(0,o.jsx)("div",{className:"app-menu-toggler lg:hidden hover:text-blue-700 cursor-pointer transition-colors duration-400 ease-linear",onClick:function(){n({type:d,value:!s})},children:(0,o.jsx)("span",{className:"mdi mdi-36px mdi-menu"})})]})})};var O=function(e){return(0,o.jsx)("div",{className:"layout-footer fixed z-40 bottom-0 left-0 w-screen",children:(0,o.jsx)("div",{className:"layout-footer-nav w-full h-full flex items-center px-4 bg-white dark:bg-gray-800 shadow-[0_-15px_30px_0px_rgba(82,63,105,0.05)] transition-colors duration-400 ease-linear",children:(0,o.jsx)("div",{children:"Footer"})})})},_=[];function P(e){var t,a,i,n=e.item,s=(0,l.useContext)(x),c=(0,r.Z)(s,2)[1],m=(0,l.useState)({childHeight:0}),u=(0,r.Z)(m,2)[1],p=(0,l.useRef)(null),g=(0,v.WU)({pathname:n.url}),h=(0,v.bS)({path:g.pathname,end:!0});n.active=!!h;var f=n.items&&n.items.length;if("item"===n.type){var y="relative flex flex-col w-full pl-3 mt-2 rounded transition-colors duration-400 ease-linear",j="min-h-[2rem] flex items-center w-full h-full group transition-colors duration-400 ease-linear",N="transition-colors duration-400 ease-linear",w="font-medium text-base tracking-wide ml-2 transition-colors duration-200 ease-linear";!0!==n.active||f?n.opened&&f?y+=" text-gray-800 dark:text-gray-200":(y+=" text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200",w+=" text-gray-400 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200",N+=" text-gray-300 dark:text-gray-600 group-hover:text-gray-800 dark:group-hover:text-gray-200"):y+=" bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",y+=" cursor-pointer";var k=function(){n.childHeight=p&&p.current&&p.current.children[0].clientHeight||0,u({childHeight:n.childHeight})};if(f){var C=0;n.opened&&(C=n.childHeight+50),a=(0,o.jsx)("div",{className:"pl-2 overflow-hidden transition-[max-height] duration-200 ease-linear",ref:p,style:{maxHeight:"".concat(C,"px")},children:(0,o.jsx)("div",{className:"relative overflow-hidden",children:n.items.map((function(e,t){return e.icon="mdi mdi-circle text-[0.3rem] mr-2",(0,o.jsx)("div",{className:"menu-children-items",children:(0,o.jsx)(P,{item:e,onItemClicked:function(){setTimeout((function(){k()}),100)}})},t)}))})});var O="absolute right-5 transition-transform duration-200 ease-linear";n.opened&&(O+=" rotate-90"),i=(0,o.jsx)("div",{className:O,children:(0,o.jsx)("span",{className:"mdi mdi-chevron-right text-2xl font-extrabold"})})}var _=!f&&n.url,S=function(t){var a=t.children;return f||void 0===n.url||null===n.url?(0,o.jsx)("div",{className:j,onClick:function(){n.opened=!n.opened,k(),e.onItemClicked&&e.onItemClicked()},children:a}):(0,o.jsx)(b.OL,{to:_,className:j,onClick:function(){c({type:d,value:!1})},children:a})};t=(0,o.jsxs)("div",{className:y,children:[(0,o.jsxs)(S,{children:[n.icon&&(0,o.jsx)("span",{className:n.icon+" "+N}),(0,o.jsx)("span",{className:w,children:n.text}),f&&i||""]}),f&&a||""]})}else if("split"===n.type){" bg-gray-700",t=(0,o.jsx)("div",{className:"w-full h-px px-3 mt-2 bg-gray-700"})}else if("spacing"===n.type){t=(0,o.jsx)("div",{className:"w-full h-px px-3 mt-4"})}else if("grouping"===n.type){t=(0,o.jsx)("div",{className:"w-full font-medium text-gray-400 text-xs tracking-wider px-3 mt-4 uppercase",children:n.text})}return(0,o.jsx)("div",{name:n.name,children:t})}function S(e){var t=(0,v.WU)({pathname:e.url}),a=(0,v.bS)({path:t.pathname,end:!0});"item"===e.type&&e.url&&(!!a&&(e.active=e.opened=!0),(e.items||[]).map((function(t){return S(t),t.opened&&(e.opened=!0),!1})))}function A(e){return _.length||(_.push({name:"spacer",type:"spacing"},{type:"grouping",name:"homeGroup",text:"Dashboard"},{name:"dashboard",url:"",text:"Dashboard",icon:"mdi mdi-24px mdi-home-outline",type:"item"},{name:"landingPage",url:"/landingPage",text:"Landing Page",icon:"mdi mdi-24px mdi-floor-plan",type:"item"},{name:"spacer",type:"spacing"},{type:"grouping",name:"productionGroup",text:"Features"},{name:"todo",url:"todo",text:"Todo",icon:"mdi mdi-24px mdi-clipboard-list-outline",type:"item"},{name:"employees",url:"employees",text:"Employees",icon:"mdi mdi-24px mdi-account",type:"item",items:[{name:"list-employee",url:"employees",text:"All Employees",type:"item"},{name:"add-employee",url:"employees/add",text:"Add Employee",type:"item"}]},{name:"eCommerce",url:"eCommerce",text:"eCommerce",icon:"mdi mdi-24px mdi-cart-outline",type:"item",items:[{name:"orders",url:"orders",text:"Orders",type:"item"},{name:"catalogs",url:"catalogs",text:"Catalogs",type:"item",items:[{name:"list-catalog",url:"catalogs",text:"All Catalogs",type:"item"},{name:"add-catalog",url:"catalogs/add",text:"Add Catalog",type:"item"}]},{name:"products",url:"products",text:"Products",type:"item",items:[{name:"list-product",url:"products",text:"All Products",type:"item"},{name:"add-product",url:"products/add",text:"Add Product",type:"item"}]}]},{name:"spacer",type:"spacing"},{type:"grouping",name:"settingGroup",text:"App Settings"},{name:"settings",url:"settings",text:"Settings",icon:"mdi mdi-24px mdi-cog",type:"item"},{name:"configurations",url:"configurations",text:"Configurations",icon:"mdi mdi-24px mdi-database-settings-outline",type:"item"},{name:"spacer",type:"spacing"}),_.map((function(e){return S(e)}))),(0,o.jsx)("div",{className:"w-full",children:_.map((function(e,t){return(0,o.jsx)("div",{children:(0,o.jsx)(P,{item:e})},t)}))})}function H(e){var t=(0,l.useContext)(x),a=(0,r.Z)(t,2),i=a[0],n=a[1],s="fixed left-0 z-50 lg:z-30 lg:block transition-transform",c="layout-sidebar-backdrop fixed z-[45] lg:z-0 w-screen h-screen lg:hidden bg-gray-600/80 transition-colors duration-400 ease-linear";return i.isSidebarOpened||(c+=" hidden",s+=" -translate-x-full lg:translate-x-0"),(0,o.jsxs)(l.Fragment,{children:[(0,o.jsx)("div",{className:"layout-sidebar "+s,children:(0,o.jsx)("div",{className:"layout-sidebar-nav h-full flex bg-white dark:bg-gray-800 px-4 transition-colors duration-400 ease-linear overflow-y-auto overflow-x-hidden overscroll-contain",children:(0,o.jsx)("div",{className:"app-sidebar w-full",children:(0,o.jsx)(A,{})})})}),(0,o.jsx)("div",{onClick:function(){n({type:d,value:!1})},className:c})]})}function D(e){var t=y();return(0,o.jsxs)("div",{className:"app-container font-poppins dark:text-gray-300",children:[(0,o.jsxs)(p,{children:[(0,o.jsx)(C,{onThemeChanged:function(){y(t=t===g?h:g)}}),(0,o.jsx)(H,{})]}),(0,o.jsx)("div",{className:"layout-body layout-body-container bg-gray-100 dark:bg-gray-900 dark:text-gray-300 transition-colors duration-400 ease-linear",children:(0,o.jsx)("div",{className:"layout-body-wrapper",children:(0,o.jsx)(w,{})})}),(0,o.jsx)(O,{})]})}}}]);
//# sourceMappingURL=122.1dda543a.chunk.js.map