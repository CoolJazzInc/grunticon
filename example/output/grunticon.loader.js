/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")||-1!==navigator.userAgent.indexOf("Series40")),r={},o=function(o){var a=t.document.createElement("link"),c=t.document.getElementsByTagName("script")[0];a.rel="stylesheet",a.href=e[o&&n?0:o?1:2],a.media="only x",n&&(a.onload=function(){r=i(),s(d),s(m)}),c.parentNode.insertBefore(a,c),setTimeout(function(){a.media="all"})},i=function(){for(var n,r=t.document.styleSheets,o=e[0],i=0;r.length>i;i++)if(r[i].href&&r[i].href.indexOf(o)>-1){n=r[i];break}if(n){var a={},d=n.cssRules?n.cssRules:n.rules;for(i=0;d.length>i;i++){var c=d[i].cssText,l=c.split("{")[0].split(",").pop(),u=l.replace(".","").trim(),m=c.split(");")[0].match(/US\-ASCII\,([^"']+)/);if(m&&m[1]){var s=decodeURIComponent(m[1]);a[u]=s}}return a}},a="data-grunticon-embed",d=function(){for(var e in r){var n=t.document.querySelectorAll("."+e+"["+a+"]");if(n.length)for(var o=0;n.length>o;o++)n[o].innerHTML=r[e],n[o].style.backgroundImage="none",n[o].removeAttribute(a)}},c="data-grunticon-use",l=t.document.createElement("svg"),u=t.document.createElement("defs"),m=function(){l.parentNode||(l.appendChild(u),t.document.body.insertBefore(l,t.document.body.firstChild));for(var e in r){var n=t.document.querySelectorAll("."+e+"["+c+"]");if(n.length){if(!t.document.getElementById(e)){var o=t.document.createElement("symbol");o.id=e;var i=r[e];o.innerHTML=i;var a=o.firstChild.getAttribute("viewBox");o.setAttribute("viewBox",a),o.viewBox=a,o.innerHTML=o.firstChild.innerHTML,u.appendChild(o)}var d=t.document.createElement("svg"),m=t.document.createElement("use");m.setAttribute("xlink:href","#"+e),d.appendChild(m);for(var s=0;n.length>s;s++)n[s].appendChild(d),n[s].style.backgroundImage="none",n[s].removeAttribute(c)}}},s=function(e){"loading"!==t.document.readyState?e():t.document.addEventListener&&t.document.addEventListener("DOMContentLoaded",e,!1)},f=new t.Image;f.onerror=function(){o(!1)},f.onload=function(){o(1===f.width&&1===f.height)},f.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};