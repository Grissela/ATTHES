(self.webpackChunkatthes=self.webpackChunkatthes||[]).push([[735],{2735:function(Tt){Tt.exports=function(){"use strict";function D(r){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function B(r,n){return(B=Object.setPrototypeOf||function(s,f){return s.__proto__=f,s})(r,n)}function K(r,n,o){return(K=function ht(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(f,O,M){var L=[null];L.push.apply(L,O);var Y=new(Function.bind.apply(f,L));return M&&B(Y,M.prototype),Y}).apply(null,arguments)}function g(r){return function vt(r){if(Array.isArray(r))return fe(r)}(r)||function _t(r){if(typeof Symbol<"u"&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function At(r,n){if(r){if("string"==typeof r)return fe(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if("Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o)return Array.from(r);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return fe(r,n)}}(r)||function Et(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(r,n){(null==n||n>r.length)&&(n=r.length);for(var o=0,s=new Array(n);o<n;o++)s[o]=r[o];return s}var yt=Object.hasOwnProperty,Ue=Object.setPrototypeOf,gt=Object.isFrozen,bt=Object.getPrototypeOf,St=Object.getOwnPropertyDescriptor,_=Object.freeze,b=Object.seal,Rt=Object.create,He=typeof Reflect<"u"&&Reflect,Z=He.apply,ce=He.construct;Z||(Z=function(n,o,s){return n.apply(o,s)}),_||(_=function(n){return n}),b||(b=function(n){return n}),ce||(ce=function(n,o){return K(n,g(o))});var Ot=y(Array.prototype.forEach),ze=y(Array.prototype.pop),$=y(Array.prototype.push),J=y(String.prototype.toLowerCase),pe=y(String.prototype.toString),Lt=y(String.prototype.match),S=y(String.prototype.replace),Nt=y(String.prototype.indexOf),Dt=y(String.prototype.trim),A=y(RegExp.prototype.test),me=function Mt(r){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return ce(r,o)}}(TypeError);function y(r){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),f=1;f<o;f++)s[f-1]=arguments[f];return Z(r,n,s)}}function l(r,n,o){o=o||J,Ue&&Ue(r,null);for(var s=n.length;s--;){var f=n[s];if("string"==typeof f){var O=o(f);O!==f&&(gt(n)||(n[s]=O),f=O)}r[f]=!0}return r}function x(r){var o,n=Rt(null);for(o in r)!0===Z(yt,r,[o])&&(n[o]=r[o]);return n}function Q(r,n){for(;null!==r;){var o=St(r,n);if(o){if(o.get)return y(o.get);if("function"==typeof o.value)return y(o.value)}r=bt(r)}return function s(f){return console.warn("fallback value for",f),null}}var Ge=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),de=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Te=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),wt=_(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),he=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Ct=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),We=_(["#text"]),Be=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ve=_(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$e=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),It=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),xt=b(/<%[\w\W]*|[\w\W]*%>/gm),kt=b(/\${[\w\W]*}/gm),Pt=b(/^data-[\-\w.\u00B7-\uFFFF]/),Ft=b(/^aria-[\-\w]+$/),Ut=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ht=b(/^(?:\w+script|data):/i),zt=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Gt=b(/^html$/i),Wt=function(){return typeof window>"u"?null:window},Bt=function(n,o){if("object"!==D(n)||"function"!=typeof n.createPolicy)return null;var s=null,f="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(f)&&(s=o.currentScript.getAttribute(f));var O="dompurify"+(s?"#"+s:"");try{return n.createPolicy(O,{createHTML:function(L){return L},createScriptURL:function(L){return L}})}catch{return console.warn("TrustedTypes policy "+O+" could not be created."),null}};return function je(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt(),n=function(e){return je(e)};if(n.version="2.4.5",n.removed=[],!r||!r.document||9!==r.document.nodeType)return n.isSupported=!1,n;var o=r.document,s=r.document,f=r.DocumentFragment,O=r.HTMLTemplateElement,M=r.Node,L=r.Element,j=r.NodeFilter,Y=r.NamedNodeMap,jt=void 0===Y?r.NamedNodeMap||r.MozNamedAttrMap:Y,Yt=r.HTMLFormElement,Vt=r.DOMParser,te=r.trustedTypes,re=L.prototype,Xt=Q(re,"cloneNode"),qt=Q(re,"nextSibling"),Kt=Q(re,"childNodes"),_e=Q(re,"parentNode");if("function"==typeof O){var Ae=s.createElement("template");Ae.content&&Ae.content.ownerDocument&&(s=Ae.content.ownerDocument)}var R=Bt(te,o),Ee=R?R.createHTML(""):"",ye=s.implementation,Zt=s.createNodeIterator,Jt=s.createDocumentFragment,Qt=s.getElementsByTagName,er=o.importNode,Ye={};try{Ye=x(s).documentMode?s.documentMode:{}}catch{}var N={};n.isSupported="function"==typeof _e&&ye&&typeof ye.createHTMLDocument<"u"&&9!==Ye;var P,d,ge=It,be=xt,Se=kt,tr=Pt,rr=Ft,ar=Ht,Ve=zt,Re=Ut,p=null,Xe=l({},[].concat(g(Ge),g(de),g(Te),g(he),g(We))),m=null,qe=l({},[].concat(g(Be),g(ve),g($e),g(ee))),c=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,Oe=null,Ke=!0,Le=!0,Ze=!1,Je=!0,F=!1,k=!1,Ne=!1,De=!1,U=!1,ne=!1,ie=!1,Qe=!0,et=!1,Me=!0,X=!1,H={},z=null,tt=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),rt=null,at=l({},["audio","video","img","source","image","track"]),we=null,nt=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),oe="http://www.w3.org/1998/Math/MathML",le="http://www.w3.org/2000/svg",w="http://www.w3.org/1999/xhtml",G=w,Ce=!1,Ie=null,ir=l({},[oe,le,w],pe),or=["application/xhtml+xml","text/html"],W=null,sr=s.createElement("form"),it=function(e){return e instanceof RegExp||e instanceof Function},xe=function(e){W&&W===e||((!e||"object"!==D(e))&&(e={}),e=x(e),P=P=-1===or.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,d="application/xhtml+xml"===P?pe:J,p="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,d):Xe,m="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,d):qe,Ie="ALLOWED_NAMESPACES"in e?l({},e.ALLOWED_NAMESPACES,pe):ir,we="ADD_URI_SAFE_ATTR"in e?l(x(nt),e.ADD_URI_SAFE_ATTR,d):nt,rt="ADD_DATA_URI_TAGS"in e?l(x(at),e.ADD_DATA_URI_TAGS,d):at,z="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,d):tt,V="FORBID_TAGS"in e?l({},e.FORBID_TAGS,d):{},Oe="FORBID_ATTR"in e?l({},e.FORBID_ATTR,d):{},H="USE_PROFILES"in e&&e.USE_PROFILES,Ke=!1!==e.ALLOW_ARIA_ATTR,Le=!1!==e.ALLOW_DATA_ATTR,Ze=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Je=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,F=e.SAFE_FOR_TEMPLATES||!1,k=e.WHOLE_DOCUMENT||!1,U=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,Qe=!1!==e.SANITIZE_DOM,et=e.SANITIZE_NAMED_PROPS||!1,Me=!1!==e.KEEP_CONTENT,X=e.IN_PLACE||!1,Re=e.ALLOWED_URI_REGEXP||Re,G=e.NAMESPACE||w,c=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&it(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&it(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(Le=!1),ne&&(U=!0),H&&(p=l({},g(We)),m=[],!0===H.html&&(l(p,Ge),l(m,Be)),!0===H.svg&&(l(p,de),l(m,ve),l(m,ee)),!0===H.svgFilters&&(l(p,Te),l(m,ve),l(m,ee)),!0===H.mathMl&&(l(p,he),l(m,$e),l(m,ee))),e.ADD_TAGS&&(p===Xe&&(p=x(p)),l(p,e.ADD_TAGS,d)),e.ADD_ATTR&&(m===qe&&(m=x(m)),l(m,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&l(we,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&(z===tt&&(z=x(z)),l(z,e.FORBID_CONTENTS,d)),Me&&(p["#text"]=!0),k&&l(p,["html","head","body"]),p.table&&(l(p,["tbody"]),delete V.tbody),_&&_(e),W=e)},ot=l({},["mi","mo","mn","ms","mtext"]),lt=l({},["foreignobject","desc","title","annotation-xml"]),ur=l({},["title","style","font","a","script"]),se=l({},de);l(se,Te),l(se,wt);var ke=l({},he);l(ke,Ct);var C=function(e){$(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Ee}catch{e.remove()}}},Pe=function(e,t){try{$(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{$(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!m[e])if(U||ne)try{C(t)}catch{}else try{t.setAttribute(e,"")}catch{}},st=function(e){var t,a;if(De)e="<remove></remove>"+e;else{var u=Lt(e,/^[\r\n\t ]+/);a=u&&u[0]}"application/xhtml+xml"===P&&G===w&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var E=R?R.createHTML(e):e;if(G===w)try{t=(new Vt).parseFromString(E,P)}catch{}if(!t||!t.documentElement){t=ye.createDocument(G,"template",null);try{t.documentElement.innerHTML=Ce?Ee:E}catch{}}var v=t.body||t.documentElement;return e&&a&&v.insertBefore(s.createTextNode(a),v.childNodes[0]||null),G===w?Qt.call(t,k?"html":"body")[0]:k?t.documentElement:v},ut=function(e){return Zt.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT,null,!1)},q=function(e){return"object"===D(M)?e instanceof M:e&&"object"===D(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},I=function(e,t,a){N[e]&&Ot(N[e],function(u){u.call(n,t,a,W)})},ft=function(e){var t;if(I("beforeSanitizeElements",e,null),function(e){return e instanceof Yt&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof jt)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)}(e)||A(/[\u0080-\uFFFF]/,e.nodeName))return C(e),!0;var a=d(e.nodeName);if(I("uponSanitizeElement",e,{tagName:a,allowedTags:p}),e.hasChildNodes()&&!q(e.firstElementChild)&&(!q(e.content)||!q(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||"select"===a&&A(/<template/i,e.innerHTML))return C(e),!0;if(!p[a]||V[a]){if(!V[a]&&pt(a)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a)))return!1;if(Me&&!z[a]){var u=_e(e)||e.parentNode,E=Kt(e)||e.childNodes;if(E&&u)for(var h=E.length-1;h>=0;--h)u.insertBefore(Xt(E[h],!0),qt(e))}return C(e),!0}return e instanceof L&&!function(e){var t=_e(e);(!t||!t.tagName)&&(t={namespaceURI:G,tagName:"template"});var a=J(e.tagName),u=J(t.tagName);return!!Ie[e.namespaceURI]&&(e.namespaceURI===le?t.namespaceURI===w?"svg"===a:t.namespaceURI===oe?"svg"===a&&("annotation-xml"===u||ot[u]):Boolean(se[a]):e.namespaceURI===oe?t.namespaceURI===w?"math"===a:t.namespaceURI===le?"math"===a&&lt[u]:Boolean(ke[a]):e.namespaceURI===w?!(t.namespaceURI===le&&!lt[u]||t.namespaceURI===oe&&!ot[u])&&!ke[a]&&(ur[a]||!se[a]):!("application/xhtml+xml"!==P||!Ie[e.namespaceURI]))}(e)||("noscript"===a||"noembed"===a)&&A(/<\/no(script|embed)/i,e.innerHTML)?(C(e),!0):(F&&3===e.nodeType&&(t=S(t=e.textContent,ge," "),t=S(t,be," "),t=S(t,Se," "),e.textContent!==t&&($(n.removed,{element:e.cloneNode()}),e.textContent=t)),I("afterSanitizeElements",e,null),!1)},ct=function(e,t,a){if(Qe&&("id"===t||"name"===t)&&(a in s||a in sr))return!1;if((!Le||Oe[t]||!A(tr,t))&&(!Ke||!A(rr,t)))if(!m[t]||Oe[t]){if(!(pt(e)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&A(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||"is"===t&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a))))return!1}else if(!we[t]&&!A(Re,S(a,Ve,""))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Nt(a,"data:")||!rt[e])&&(!Ze||A(ar,S(a,Ve,"")))&&a)return!1;return!0},pt=function(e){return e.indexOf("-")>0},mt=function(e){var t,a,u,E;I("beforeSanitizeAttributes",e,null);var v=e.attributes;if(v){var h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m};for(E=v.length;E--;){var T=(t=v[E]).name,Fe=t.namespaceURI;if(a="value"===T?t.value:Dt(t.value),u=d(T),h.attrName=u,h.attrValue=a,h.keepAttr=!0,h.forceKeepAttr=void 0,I("uponSanitizeAttribute",e,h),a=h.attrValue,!h.forceKeepAttr&&(Pe(T,e),h.keepAttr)){if(!Je&&A(/\/>/i,a)){Pe(T,e);continue}F&&(a=S(a,ge," "),a=S(a,be," "),a=S(a,Se," "));var dt=d(e.nodeName);if(ct(dt,u,a)){if(et&&("id"===u||"name"===u)&&(Pe(T,e),a="user-content-"+a),R&&"object"===D(te)&&"function"==typeof te.getAttributeType&&!Fe)switch(te.getAttributeType(dt,u)){case"TrustedHTML":a=R.createHTML(a);break;case"TrustedScriptURL":a=R.createScriptURL(a)}try{Fe?e.setAttributeNS(Fe,T,a):e.setAttribute(T,a),ze(n.removed)}catch{}}}}I("afterSanitizeAttributes",e,null)}},pr=function i(e){var t,a=ut(e);for(I("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)I("uponSanitizeShadowNode",t,null),!ft(t)&&(t.content instanceof f&&i(t.content),mt(t));I("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var t,a,u,E,v,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Ce=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!q(i)){if("function"!=typeof i.toString)throw me("toString is not a function");if("string"!=typeof(i=i.toString()))throw me("dirty is not a string, aborting")}if(!n.isSupported){if("object"===D(r.toStaticHTML)||"function"==typeof r.toStaticHTML){if("string"==typeof i)return r.toStaticHTML(i);if(q(i))return r.toStaticHTML(i.outerHTML)}return i}if(Ne||xe(e),n.removed=[],"string"==typeof i&&(X=!1),X){if(i.nodeName){var h=d(i.nodeName);if(!p[h]||V[h])throw me("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof M)1===(a=(t=st("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?t=a:t.appendChild(a);else{if(!U&&!F&&!k&&-1===i.indexOf("<"))return R&&ie?R.createHTML(i):i;if(!(t=st(i)))return U?null:ie?Ee:""}t&&De&&C(t.firstChild);for(var ue=ut(X?i:t);u=ue.nextNode();)3===u.nodeType&&u===E||ft(u)||(u.content instanceof f&&pr(u.content),mt(u),E=u);if(E=null,X)return i;if(U){if(ne)for(v=Jt.call(t.ownerDocument);t.firstChild;)v.appendChild(t.firstChild);else v=t;return(m.shadowroot||m.shadowrootmod)&&(v=er.call(o,v,!0)),v}var T=k?t.outerHTML:t.innerHTML;return k&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&A(Gt,t.ownerDocument.doctype.name)&&(T="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+T),F&&(T=S(T,ge," "),T=S(T,be," "),T=S(T,Se," ")),R&&ie?R.createHTML(T):T},n.setConfig=function(i){xe(i),Ne=!0},n.clearConfig=function(){W=null,Ne=!1},n.isValidAttribute=function(i,e,t){W||xe({});var a=d(i),u=d(e);return ct(a,u,t)},n.addHook=function(i,e){"function"==typeof e&&(N[i]=N[i]||[],$(N[i],e))},n.removeHook=function(i){if(N[i])return ze(N[i])},n.removeHooks=function(i){N[i]&&(N[i]=[])},n.removeAllHooks=function(){N={}},n}()}()}}]);