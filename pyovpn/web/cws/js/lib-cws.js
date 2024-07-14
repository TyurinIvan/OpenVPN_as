/* Copyright (C) 2010-2023 OpenVPN, Inc. - http://openvpn.net/ */
(function(t){if("stdio"in t&&"object"!=typeof t.stdio)throw Error("Property 'stdio' already exists in namespace "+t);var p={XmlRpcProxy:function(a,d,k,n,l){function h(c,b){function e(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function q(f){if(f instanceof String||"string"==typeof f)return"<string>"+e(f)+"</string>";if(f instanceof Boolean||"boolean"==typeof f)return"<boolean>"+(f?"1":"0")+"</boolean>";if(f instanceof Date){var g=f.getFullYear().toString();var m=f.getMonth()+
1;10>m&&(g+="0");g+=m;day=f.getDate();10>day&&(g+="0");g+=day+"T"+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();return"<dateTime.iso8601>"+g+"</dateTime.iso8601>"}if(f instanceof Array){g="<array><data>";for(m=0;m<f.length;m++)g+=q(f[m]);return g+"</data></array>"}if(f instanceof Number||"number"==typeof f)return 0==f%1?"<int>"+f+"</int>":"<double>"+f+"</double>";if(null==f)return"<nil/>";g="<struct>";for(m in f)m instanceof Function||(g+="<member><name>"+e(m)+"</name><value>"+q(f[m])+"</value></member>");
return g+"</struct>"}for(var r='<?xml version="1.0"?><methodCall><methodName>'+c+"</methodName><params>",w=0;w<b.length;w++)r+="<param><value>"+q(b[w])+"</value></param>";return r+"</params></methodCall>"}function u(c){for(var b=c.firstChild;"#text"==b.nodeName;)b=b.nextSibling;switch(b.nodeName){case "string":c=String(x(b));break;case "i4":case "int":case "double":c=new Number(x(b));break;case "boolean":c=x(b);c="1"==c?!0:!1;break;case "dateTime.iso8601":c=getTextValueOfChild(b);c=/(\d\d\d\d)(\d\d)(\d\d)T(\d\d):(\d\d):(\d\d)/.exec(c);
b=new Number(c[2]);c=new Date(c[1],b-1,c[3],c[4],c[5],c[6]);break;case "array":c=b.getElementsByTagName("data")[0].childNodes;b=[];for(var e=0;e<c.length;e++)1==c[e].nodeType&&b.push(u(c[e]));c=b;break;case "struct":c=[];e=b.childNodes;for(b=0;b<e.length;b++)1==e[b].nodeType&&"member"==e[b].nodeName&&c.push(e[b]);e={};for(b=0;b<c.length;b++){var q=c[b].getElementsByTagName("name")[0].textContent?c[b].getElementsByTagName("name")[0].textContent:c[b].getElementsByTagName("name")[0].text;var r=u(c[b].getElementsByTagName("value")[0]);
e[q]=r}c=e;break;case "nil":c=null;break;case "base64":c="";b=b.childNodes;for(e=0;e<b.length;e++)3==b[e].nodeType&&(c+=b[e].nodeValue);break;default:throw"type not handled: "+b.nodeName;}return c}function x(c){c=c.childNodes;for(var b=0;b<c.length;b++)if(3==c[b].nodeType)var e=c[b].nodeValue;e||(e="");e=e.replace(/^\s+/,"");return e.replace(/\s+$/,"")}function z(c){A[c]=function(){for(var b,e=[],q=0;q<arguments.length;q++){if("function"==typeof arguments[q]){b=arguments[q];break}e.push(arguments[q])}var r=
new XMLHttpRequest;q=null;r.open("POST",this.url);q=h(c,e);r.setRequestHeader("Content-Type","text/xml");for(var w in l)r.setRequestHeader(w,l[w]);r.onreadystatechange=function(f){if(4==r.readyState)if(200==r.status){var g=r.responseXML;window.ActiveXObject&&(g=new ActiveXObject("Microsoft.XMLDOM"),g.loadXML(r.responseText));f=g.getElementsByTagName("fault");if(0==f.length){f=b;var m=[];g=g.getElementsByTagName("param");for(var v=0;v<g.length;v++){var y=g[v].getElementsByTagName("value")[0];1==y.nodeType&&
"value"==y.nodeName&&m.push(u(y))}f(m)}else{m=[];for(g=0;g<f.length;g++)v=f[g].getElementsByTagName("value")[0],1==v.nodeType&&"value"==v.nodeName&&m.push(u(v));"__fault__"in b&&"function"==typeof b.__fault__?b.__fault__(e,m):d(c,e,m)}}else"__error__"in b&&"function"==typeof b.__error__?b.__error__(e):k(c,e)};r.send(q)}}var A=this;this.url=a;d=d||function(c,b){window.alert("Error calling "+c+" with arguments:\n"+JSON.stringify(b))};k=k||function(c,b){window.alert("Error calling "+c+" with arguments:\n"+
JSON.stringify(b))};if(this.methods=n)for(a=0;a<n.length;a++)z(n[a]);else throw Error("Method discovery not yet implemented");return this},XD_IFRAME_URI:"/xd_proxy.html"};window.addEventListener&&window.postMessage?(p.recv=function(a){return window.addEventListener("message",a,!1)},p.send=function(a,d,k){return a.postMessage(d,k)}):(p.recv=function(a){window.$_HTML5_POSTMESSAGE_LISTENERS||(window.$_HTML5_POSTMESSAGE_LISTENERS=[]);window.$_HTML5_POSTMESSAGE_LISTENERS.push(a)},p.send=function(a,d,k){var n=
"";n=a!=top&&a?"client":"";a=k+p.XD_IFRAME_URI+"#"+ +new Date+"&origin="+encodeURIComponent(window.location.protocol+"//"+window.location.host)+"&frame="+encodeURIComponent(n)+"&data="+encodeURIComponent(d);var l=document.createElement("iframe");l.setAttribute("src",a);l.setAttribute("width",0);l.setAttribute("height",0);l.setAttribute("style","display: none");var h=function(){setTimeout(function(){l&&(l.parentNode.removeChild(l),l=void 0)},0)};l.onload=h;l.onreadystatechange=function(){"loaded"!=
this.readyState&&"complete"!=this.readyState||h()};document.body.appendChild(l)});return t.stdio=p})(window);
(function(t){if("stdui"in t&&"object"!=typeof t.stdui)throw Error("Property 'stdui' already exists in namespace "+t);var p={Application:function(a){this._load_config(a||{})}};p.Application.prototype={config:{},models:{},views:{},viewData:[],controllers:{},_controller:null,_load_config:function(a){for(var d in a)if(a.hasOwnProperty(d)){this.config[d]||(this.config[d]={});for(var k=a[d],n=0;n<k.length;n++)this.config[d][k[n]]=!0}},_fetch:function(a,d){if(d)$.ajax({url:a,method:"GET",success:function(n,
l,h){close(a,h.responseText)}});else{var k;$.ajax({url:a,method:"GET",success:function(n,l,h){k=h.responseText},async:!1});return k}},_eval:function(a){window.execScript?window.execScript(a):window.eval.call(window,a)},_loadview:function(a,d){this.viewData[a]=d},_lazyeval:function(a,d){_eval(d);0==this.controllers.length&&0==this.views.length&&0==this.models.length&&this._loaded()},_lazyhtml:function(a,d){_loadview(a,d)},_loaded:function(){this.isLoaded=!0},boot:function(a){if(this.isRunning)throw Error("Application is already running");
console.log("stdui-run()");this._load(!1);this.isRunning=!0;console.log("controllers = "+JSON.stringify(this.controllers));console.log("need to load controller: "+a);a=this.getController(a);a.run();return a},_load:function(a){var d=this.config.controllers,k=this.config.views,n=this.config.models;if(!a){for(var l in d)d[l]&&(this._eval(this._fetch(l)),d[l]=!1);for(var h in k)if(k[h]){d=h.indexOf("?");a=-1<d?h.substring(h.lastIndexOf(".")+1,d):h.substr(h.lastIndexOf(".")+1);switch(a){case "js":this._eval(this._fetch(h));
break;case "html":-1<d?(a=h.substr(0,d),this._loadview(a,this._fetch(h))):this._loadview(h,this._fetch(h))}k[h]=!1}for(var u in n)n[u]&&(this._eval(this._fetch(u)),n[u]=!1)}},lazyLoad:function(a){},add:function(a,d){"function"!=typeof a||d||(d=a,a=d.ID?d.ID:(new d).ID);var k=new d;k instanceof p.Application.prototype.Controller?(console.log("adding controller: "+a),this.controllers[a]=new d):k instanceof p.Application.prototype.View?(console.log("adding view: "+a),this.views[a]=d):(console.log("adding model: "+
a),this.models[a]=d)},getHTML:function(a){return this.viewData[a]},getController:function(a){a=this.controllers[a];a.__inited||(a.__inited=!0,a.init());return a},getView:function(a){return new this.views[a]},getModel:function(a){return new this.models[a]}};p.Application.prototype.Controller=function(){};p.Application.prototype.Controller.prototype={init:function(){alert("init() method must be implemented!")},run:function(){alert("run() must be implemented!")},dispatch:function(a){a.run()}};p.Application.prototype.View=
function(){};p.Application.prototype.View.prototype={init:function(){alert("init() method must be implemented!")},show:function(){},hide:function(){}};return t.stdui=t.$ui=p})(window);
