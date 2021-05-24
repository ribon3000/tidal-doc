(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(311)),o={title:"repeatCycles",permalink:"wiki/repeatCycles/",layout:"wiki",tags:["Functions"]},i={unversionedId:"reference/time-functions/repeatCycles",id:"reference/time-functions/repeatCycles",isDocsHomePage:!1,title:"repeatCycles",description:"Type:",source:"@site/docs/reference/time-functions/repeatCycles.md",slug:"/reference/time-functions/repeatCycles",permalink:"/docs/reference/time-functions/repeatCycles",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/time-functions/repeatCycles.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621614610},p=[],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Type_signature",title:"wikilink"},"Type"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},"repeatCycles :: Int -> Pattern a -> Pattern\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"repeatCycles")," is a function that repeats each cycle of a given\npattern a given number of times.. It takes two inputs, the number of\nrepeats, and the pattern you are transforming."),Object(c.b)("p",null,"For example, to repeat each random cycle of notes three times:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ repeatCycles 3 $ sound "arpy(5,8)" # n (irand 8)\n')),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/wiki/Category:Randomness_and_chance",title:"wikilink"},"Category:Randomness and\nchance")," ",Object(c.b)("a",{parentName:"p",href:"/wiki/Category:Time_Functions",title:"wikilink"},"Category:Time\nFunctions")))}s.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||f[m]||c;return n?a.a.createElement(y,i(i({ref:t},l),{},{components:n})):a.a.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);