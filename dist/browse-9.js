(()=>{var t={88:t=>{t.exports={debug:!0,backend:!1,gl:null,gWidth:600,gHeight:800,currentScale:1,highResScale:2.5,imgSaveMode:!1,hash:null,onStart:function(){},onFinish:function(){},meta:{0:{title:"Composition",vals:""},1:{title:"NFT Collection",val:""},2:{title:"Data Usage",val:""},3:{title:"Type",val:""},4:{title:"Interactive",val:""}}}},865:(t,e,r)=>{var n=r(413).psbc;t.exports=function(t){var e={};e.hash=t.hash,e.randomFunc=t.randomFunc,e.gWidth=t.gWidth,e.gHeight=t.gHeight,e.backend=t.backend,e.debug=t.debug,e.imgSaveMode=t.imgSaveMode,e.onStart=t.onStart,e.onFinish=t.onFinish,e.currentScale=t.currentScale,e.highResScale=t.highResScale,e.dataUsageScale=e.randomFunc.r_num(.5,1),e.meta={0:null,1:null,2:null,3:null,4:null},e.sketches=t.sketches,t.hasOwnProperty("sketchId")?e.sketchId=t.sketchId:e.sketchId=e.randomFunc.r_int(1,Object.keys(e.sketches).length),e.sketch=e.sketches[e.sketchId],e.meta[0]=e.sketch.title,e.meta[1]=t.collection.name,e.meta[2]=e.dataUsageScale>.85?"Max":e.dataUsageScale>.65?"Mid":"Low",e.meta[3]=e.sketch.type,e.meta[4]=e.sketch.interactive?"Yes":"No",e.collectionData=t.collectionData,"Dynamic"===e.sketch.type&&t.transactions?(e.transactions=t.transactions,e.dataStartIndex=e.randomFunc.r_int(0,Object.keys(e.transactions).length-1),e.dataMax=e.randomFunc.r_int(150,450)):(delete e.collectionData.transactionMin,delete e.collectionData.transactionMax);var r=Object.keys(e.collectionData.allColors).length,o=[];for(var a in e.collectionData.allColors)o.push(a);var i=e.randomFunc.r_int(0,r-1);e.colors=[];for(var c=i;c<i+20;c++)e.colors.push(o[c%r]);delete e.collectionData.allColors,e.color_main=e.randomFunc.r_ar(e.colors),e.color_bg=n(-.992,e.color_main),e.color_fr=n(.6,e.color_main);var u=Object.keys(e.collectionData.stats);for(var s in u)e.collectionData.dynamic[u[s]]=e.collectionData.stats[u[s]];return delete e.collectionData.stats,delete t.transactions,e}},735:t=>{t.exports={1:{key:"shape-1",title:"Shape 1",type:"Static",interactive:!1},2:{key:"shape-2",title:"Shape 2",type:"Dynamic",interactive:!0},3:{key:"shape-3",title:"Shape 3",type:"Animated",interactive:!0},4:{key:"shape-4",title:"Shape 4",type:"Animated",interactive:!0},5:{key:"shape-5",title:"Shape 5",type:"Animated",interactive:!0},6:{key:"shape-6",title:"Shape 6",type:"Static",interactive:!1},7:{key:"shape-7",title:"Shape 7",type:"Animated",interactive:!0},8:{key:"shape-8",title:"Shape 8",type:"Static",interactive:!1},9:{key:"shape-9",title:"Shape 9",ype:"Animated",interactive:!0}}},151:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function d(){}function p(){}function y(){}var v={};s(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(E([])));m&&m!==n&&o.call(m,i)&&(v=m);var b=y.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,r){function n(a,i,c,u){var s=f(t[a],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==e(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,s(b,"constructor",y),s(y,"constructor",p),p.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),s(b,u,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(){var t,e=(t=r().mark((function t(e,n){var o,a,i,c,u,s,l,f,h,d,p,y,v,g,m,b,w,x,k,S,_,L,E,O,j,F;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F=function(){return o.r_ar(Object.values(n.collectionData.static))*n.dataUsageScale},j=function(){return o.r_ar(Object.values(n.collectionData.dynamic))*n.dataUsageScale},L=function(t,r,n,o,a,i,c){var u=a*i,s=Math.round(u%(w-1));if(b[s][1]){var l=b[s][2],f=2*b[s][0];if(e.push(),l){var h=e.color(c);h.setAlpha(70),e.fill(h)}e.scale(10*d),e.translate(t,r),e.rectMode(e.CENTER),e.push(),e.rotate(v*f);var p=.4*n;e.beginShape();for(var y=0;y<360;y+=360/o){var g=p*e.sin(y),m=p*e.cos(y);e.vertex(g,m)}e.endShape(e.CLOSE),e.pop(),e.pop()}},_=function(t,r){var o=e.color(n.colors[t%n.colors.length]);e.push(),e.noFill(),e.stroke(o),e.strokeWeight(.5),e.translate(a/2,i/2);var c=e.int(e.random(3,8+S)),u=e.int(e.random(30,100));e.beginShape();for(var s,l=0;l<360;l+=360/u){s=l+.1*f*(x%2==0?1:-1)*d*20;var h=t*e.sin(s)*d*4,p=t*e.cos(s)*d*4;L(h,p,r,c,t,l,o)}e.endShape(e.CLOSE),e.pop()},o=n.randomFunc,a=n.gWidth,i=n.gHeight,c=n.backend?a*n.currentScale:e.windowWidth,u=n.backend?i*n.currentScale:e.windowHeight,c=a*(s=a/i<c/u?u/i:c/a),u=i*s,f=20,h=.09,d=n.backend?.09:.5,p=!1,v=0,b=[],w=999,x=0,e.setup=function(){l=e.createCanvas(c,u),e.frameRate(60),e.pixelDensity(e.max(1,s)),e.rectMode(e.CENTER),l.mouseOver((function(){p=!0})),l.mouseOut((function(){p=!1})),e.color(n.color_main),m=e.color(n.color_bg),e.color(n.color_fr),e.background(m),y=o.r_num(0,1e3)*(150*F()),e.angleMode(e.DEGREES),g=e.createGraphics(a,i);for(var t=0;t<o.r_int(1250,2500)+250*F();t++)g.fill(o.r_ar(n.colors)),g.noStroke(),g.ellipse(e.randomGaussian(a/2,.3*a),e.randomGaussian(i/2,.3*i),o.r_num(0,1)<.99?o.r_num(.001*a,.004*a):o.r_num(.007*a,.01*a));for(var r,f,h,d=0;d<w;d++)r=o.r_num(.5,2.4)*o.r_num(0,1)>.5?1:-1,f=o.r_num(0,1)>.4,h=o.r_num(0,1)>.7,b.push([r,f,h]);S=4*j()},e.draw=function(){f=e.frameCount,e.push(),e.scale(s),d+=.05*(h-d),e.randomSeed(y),e.background(m),e.image(g,0,0),k=e.int(e.random(50,80)),x=0;for(var t=0;t<i;t+=k)_(t,i*e.random(.03,.05)),x++;v+=.7,e.pop(),n.backend&&(e.noLoop(),n.onFinish(l))},e.mouseDragged=function(t){p&&(t.offsetX,t.offsetY)},E=function(){h>1&&(h=1),h<.08&&(h=.08)},e.mouseWheel=function(t){if(p)return h=d+(t.delta>0?-.08:.08)*d*4,E(),t.preventDefault(),t.stopPropagation(),!1},O=0,e.touchStarted=function(t){O=e.mouseY},e.touchMoved=function(t){return h=d+(e.mouseY>O?-.08:.08)*d*4,E(),O=e.mouseY,t.preventDefault(),!1},e.windowResized=function(){location.reload()};case 29:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))});return function(t,r){return e.apply(this,arguments)}}()},413:function(t,e){var r=this;function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.psbc=function(t,e,r,n){return a(t,e,r,n)};var a=function(t,e,o,a){var i,c,u,s,l,f,h,d=parseInt,p=Math.round,y="string"==typeof o;return"number"!=typeof t||t<-1||t>1||"string"!=typeof e||"r"!=e[0]&&"#"!=e[0]||o&&!y?null:(r.pSBCr||(r.pSBCr=function(t){var e=t.length,r={};if(e>9){var o;if(o=n(t=t.split(","),4),i=o[0],c=o[1],u=o[2],y=o[3],(e=t.length)<3||e>4)return null;r.r=d("a"==i[3]?i.slice(5):i.slice(4)),r.g=d(c),r.b=d(u),r.a=y?parseFloat(y):-1}else{if(8==e||6==e||e<4)return null;e<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(e>4?t[4]+t[4]:"")),t=d(t.slice(1),16),9==e||5==e?(r.r=t>>24&255,r.g=t>>16&255,r.b=t>>8&255,r.a=p((255&t)/.255)/1e3):(r.r=t>>16,r.g=t>>8&255,r.b=255&t,r.a=-1)}return r}),h=e.length>9,h=y?o.length>9||"c"==o&&!h:h,l=r.pSBCr(e),s=t<0,f=o&&"c"!=o?r.pSBCr(o):s?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},s=1-(t=s?-1*t:t),l&&f?(a?(i=p(s*l.r+t*f.r),c=p(s*l.g+t*f.g),u=p(s*l.b+t*f.b)):(i=p(Math.pow(s*Math.pow(l.r,2)+t*Math.pow(f.r,2),.5)),c=p(Math.pow(s*Math.pow(l.g,2)+t*Math.pow(f.g,2),.5)),u=p(Math.pow(s*Math.pow(l.b,2)+t*Math.pow(f.b,2),.5))),y=l.a,f=f.a,y=(l=y>=0||f>=0)?y<0?f:f<0?y:y*s+f*t:0,h?"rgb"+(l?"a(":"(")+i+","+c+","+u+(l?","+p(1e3*y)/1e3:"")+")":"#"+(4294967296+16777216*i+65536*c+256*u+(l?p(255*y):0)).toString(16).slice(1,l?void 0:-2)):null)}},376:(t,e)=>{function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.Random=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.useA=!1;var r=function(t){var e=parseInt(t.substring(0,8),16),r=parseInt(t.substring(8,8),16),n=parseInt(t.substring(16,8),16),o=parseInt(t.substring(24,8),16);return function(){var t=((e|=0)+(r|=0)|0)+(o|=0)|0;return o=o+1|0,e=r^r>>>9,r=(n|=0)+(n<<3)|0,n=(n=n<<21|n>>>11)+t|0,(t>>>0)/4294967296}};this.prngA=new r(e.substring(2,32)),this.prngB=new r(e.substring(34,32));for(var n=0;n<1e6;n+=2)this.prngA(),this.prngB()}var e,n,o;return e=t,(n=[{key:"r_dec",value:function(){return this.useA=!this.useA,this.useA?this.prngA():this.prngB()}},{key:"r_num",value:function(t,e){return t+(e-t)*this.r_dec()}},{key:"r_int",value:function(t,e){return Math.floor(this.r_num(t,e+1))}},{key:"r_bool",value:function(){return 1===this.r_int(0,1)}},{key:"r_ar",value:function(t){return t[this.r_int(0,t.length-1)]}},{key:"wtRandom",value:function(t,e){for(var r=0,n=[],o=0,a=0;a<e.length;a++)r+=e[a],n.push(r);for(var i=this.r_int(0,n[n.length-1]),c=0;c<n.length;c++)if(n[c]>=i){o=c;break}return[t[o],o]}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},529:t=>{t.exports=function(){return[{name:"CryptoPunks",slug:"cryptopunks",address:"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"},{name:"Bored Ape Yacht Club",slug:"boredapeyachtclub",address:"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"},{name:"Azuki",slug:"azuki",address:"0xed5af388653567af2f388e6224dc7c4b3241c544"},{name:"Moonbirds",slug:"proof-moonbirds",address:"0x23581767a106ae21c074b2276d25e5c3e136a68b"},{name:"Cool Cats NFT",slug:"cool-cats-nft",address:"0x1a92f7381b9f03921564a437210bb9396471050c"},{name:"World of Women",slug:"world-of-women-nft",address:"0xe785e82358879f061bc3dcac6f0444462d4b5330"},{name:"CryptoKitties",slug:"cryptokitties",address:"0x06012c8cf97bead5deae237070f9587f8e7a266d"},{name:"BEANZ Official",slug:"beanzofficial",address:"0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949"},{name:"Pudgy Penguins",slug:"pudgypenguins",address:"0xbd3531da5cf5857e7cfaa92426877b022e612cf8"},{name:"HAPE PRIME",slug:"hapeprime",address:"0x4db1f25d3d98600140dfc18deb7515be5bd293af"},{name:"goblintown.wtf",slug:"goblintownwtf",address:"0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e"},{name:"0N1 Force",slug:"0n1-force",address:"0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d"},{name:"MekaVerse",slug:"mekaverse",address:"0x9a534628b4062e123ce7ee2222ec20b86e16ca8f"},{name:"PXN: Ghost Division",slug:"pxnghostdivision",address:"0x160c404b2b49cbc3240055ceaee026df1e8497a0"},{name:"mfers",slug:"mfers",address:"0x79fcdef22feed20eddacbb2587640e45491b757f"},{name:"FLUF World",slug:"fluf",address:"0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d"},{name:"PhantaBear",slug:"phantabear",address:"0x67d9417c9c3c250f61a83c7e8658dac487b56b09"},{name:"Creepz Genesis",slug:"genesis-creepz",address:"0xfe8c6d19365453d26af321d0e8c910428c23873f"},{name:"Deadfellaz",slug:"deadfellaz",address:"0x2acab3dea77832c09420663b0e1cb386031ba17b"},{name:"Prime Ape Planet PAP",slug:"primeapeplanetpap",address:"0x6632a9d63e142f17a668064d41a21193b49b41a0"},{name:"The Doge Pound",slug:"the-doge-pound",address:"0xf4ee95274741437636e748ddac70818b4ed7d043"},{name:"alien frens",slug:"alienfrensnft",address:"0x123b30e25973fecd8354dd5f41cc45a3065ef88c"},{name:"Axie Infinity",slug:"axie",address:"0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d"},{name:"CryptoSkulls",slug:"cryptoskulls",address:"0xc1caf0c19a8ac28c41fe59ba6c754e4b9bd54de9"},{name:"Killer GF",slug:"killergf",address:"0x6be69b2a9b153737887cfcdca7781ed1511c7e36"},{name:"Impostors Genesis Aliens",slug:"impostors-genesis-aliens",address:"0x3110ef5f612208724ca51f5761a69081809f03b7"},{name:"MURI by Haus",slug:"murixhaus",address:"0x4b61413d4392c806e6d0ff5ee91e6073c21d6430"}]}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h={};function d(){}function p(){}function y(){}var v={};s(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(E([])));m&&m!==n&&o.call(m,i)&&(v=m);var b=y.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,s(b,"constructor",y),s(y,"constructor",p),p.displayName=s(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,c,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new x(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),s(b,u,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}for(var a,i,c,u=r(865),s=r(376).Random,l=r(529),f=r(88),h=r(735),d=r(151),p=document.querySelector('meta[name="hash"]'),y=document.location.search.replaceAll("?","").split("&"),v={hash:null},g=0;g<y.length;g++)v[(i=y[g].split("="))[0]]=i[1];p&&66!==(p=p.content).length&&(p=v.hash||void 0),c=p,f.hash=c||function(){for(var t="0x",e=0;e<64;e++)t+=Math.floor(16*Math.random()).toString(16);return t}(),f.sketches=h,(a=f).debug&&(console.log("Hash:"),console.log(a.hash)),a.sketchId=9,a.randomFunc=new s(a.hash);var m=l(),b=a.randomFunc.r_int(0,Object.keys(m).length-1);function w(){return(w=o(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/data/"+a.collection.slug+".json",n="/data/"+a.collection.slug+"-transactions.json",t.next=4,fetch(r).then((function(t){return t.json()})).then((function(t){return a.collectionData=t}));case 4:if("Dynamic"!==a.sketches[a.sketchId].type){t.next=7;break}return t.next=7,fetch(n).then((function(t){return t.json()})).then((function(t){return a.transactions=t}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a.collection=m[b],function(){return w.apply(this,arguments)}().then((function(){new p5((function(t){return d(t,u(a))}),document.getElementById("shape"))}))})()})();