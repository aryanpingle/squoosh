
var Module = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(Module) {
  Module = Module || {};


var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa,ba;e.ready=new Promise(function(a,b){aa=a;ba=b});var u={},v;for(v in e)e.hasOwnProperty(v)&&(u[v]=e[v]);var w="",da;w=self.location.href;_scriptDir&&(w=_scriptDir);0!==w.indexOf("blob:")?w=w.substr(0,w.lastIndexOf("/")+1):w="";da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)};var ea=e.print||console.log.bind(console),x=e.printErr||console.warn.bind(console);
for(v in u)u.hasOwnProperty(v)&&(e[v]=u[v]);u=null;var fa=0,y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&z("no native wasm support detected");var ha,ia=!1,ja=new TextDecoder("utf8");
function ka(a,b,c){var d=B;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var la=new TextDecoder("utf-16le");
function ma(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&C[c];)++c;return la.decode(B.subarray(a,c<<1))}function na(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)D[b>>1]=a.charCodeAt(f),b+=2;D[b>>1]=0;return b-d}function oa(a){return 2*a.length}function pa(a,b){for(var c=0,d="";!(c>=b/4);){var f=E[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}
function qa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}E[b>>2]=g;b+=4;if(b+4>c)break}E[b>>2]=0;return b-d}function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var sa,ta,B,D,C,E,F,ua,va;
function wa(){var a=ha.buffer;sa=a;e.HEAP8=ta=new Int8Array(a);e.HEAP16=D=new Int16Array(a);e.HEAP32=E=new Int32Array(a);e.HEAPU8=B=new Uint8Array(a);e.HEAPU16=C=new Uint16Array(a);e.HEAPU32=F=new Uint32Array(a);e.HEAPF32=ua=new Float32Array(a);e.HEAPF64=va=new Float64Array(a)}var G,xa=[],ya=[],za=[];function Aa(){var a=e.preRun.shift();xa.unshift(a)}var H=0,Ba=null,J=null;e.preloadedImages={};e.preloadedAudios={};
function z(a){if(e.onAbort)e.onAbort(a);x(a);ia=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}var K=(new URL("avif_enc.wasm",import.meta.url)).toString();function Ca(){try{if(K==K&&y)return new Uint8Array(y);if(da)return da(K);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Da(){return y||"function"!==typeof fetch?Promise.resolve().then(function(){return Ca()}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ca()})}function Ea(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.va;"number"===typeof c?void 0===b.ga?G.get(c)():G.get(c)(b.ga):c(void 0===b.ga?null:b.ga)}}}var Fa=[null,[],[]],Ga={},L={};
function Ha(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function M(a){return this.fromWireType(F[a>>2])}var N={},O={},P={};function Ia(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ja(a,b){a=Ia(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ka(a){var b=Error,c=Ja(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var La=void 0;
function Ma(a,b,c){function d(h){h=c(h);if(h.length!==a.length)throw new La("Mismatched type converter count");for(var n=0;n<a.length;++n)Q(a[n],h[n])}a.forEach(function(h){P[h]=b});var f=Array(b.length),g=[],k=0;b.forEach(function(h,n){O.hasOwnProperty(h)?f[n]=O[h]:(g.push(h),N.hasOwnProperty(h)||(N[h]=[]),N[h].push(function(){f[n]=O[h];++k;k===g.length&&d(f)}))});0===g.length&&d(f)}
function Na(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Oa=void 0;function R(a){for(var b="";B[a];)b+=Oa[B[a++]];return b}var Pa=void 0;function S(a){throw new Pa(a);}
function Q(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||S('type "'+d+'" must have a positive integer typeid pointer');if(O.hasOwnProperty(a)){if(c.oa)return;S("Cannot register type '"+d+"' twice")}O[a]=b;delete P[a];N.hasOwnProperty(a)&&(b=N[a],delete N[a],b.forEach(function(f){f()}))}var Qa=[],T=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ra(a){4<a&&0===--T[a].ha&&(T[a]=void 0,Qa.push(a))}function Sa(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Qa.length?Qa.pop():T.length;T[b]={ha:1,value:a};return b}}function Ta(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Ua(a,b){switch(b){case 2:return function(c){return this.fromWireType(ua[c>>2])};case 3:return function(c){return this.fromWireType(va[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Va(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ja(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Wa(a,b){var c=e;if(void 0===c[a].ea){var d=c[a];c[a]=function(){c[a].ea.hasOwnProperty(arguments.length)||S("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].ea+")!");return c[a].ea[arguments.length].apply(this,arguments)};c[a].ea=[];c[a].ea[d.ja]=d}}
function Xa(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].ea&&void 0!==e[a].ea[c])&&S("Cannot register public name '"+a+"' twice"),Wa(a,a),e.hasOwnProperty(c)&&S("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].ea[c]=b):(e[a]=b,void 0!==c&&(e[a].ya=c))}function Ya(a,b){for(var c=[],d=0;d<a;d++)c.push(E[(b>>2)+d]);return c}
function Za(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=e["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=G.get(b).apply(null,c);return d}}function V(a,b){a=R(a);var c=a.includes("j")?Za(a,b):G.get(b);"function"!==typeof c&&S("unknown function pointer with signature "+a+": "+b);return c}var $a=void 0;function ab(a){a=bb(a);var b=R(a);W(a);return b}
function cb(a,b){function c(g){f[g]||O[g]||(P[g]?P[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new $a(a+": "+d.map(ab).join([", "]));}function db(a,b,c){switch(b){case 0:return c?function(d){return ta[d]}:function(d){return B[d]};case 1:return c?function(d){return D[d>>1]}:function(d){return C[d>>1]};case 2:return c?function(d){return E[d>>2]}:function(d){return F[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var eb={};
function fb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function gb(a,b){var c=O[a];void 0===c&&S(b+" has unknown type "+ab(a));return c}var hb={};La=e.InternalError=Ka("InternalError");for(var ib=Array(256),jb=0;256>jb;++jb)ib[jb]=String.fromCharCode(jb);Oa=ib;Pa=e.BindingError=Ka("BindingError");e.count_emval_handles=function(){for(var a=0,b=5;b<T.length;++b)void 0!==T[b]&&++a;return a};
e.get_first_emval=function(){for(var a=5;a<T.length;++a)if(void 0!==T[a])return T[a];return null};$a=e.UnboundTypeError=Ka("UnboundTypeError");
var ub={O:function(){},s:function(){return 0},G:function(){return 0},H:function(){},x:function(a){var b=L[a];delete L[a];var c=b.pa,d=b.qa,f=b.ia,g=f.map(function(k){return k.na}).concat(f.map(function(k){return k.sa}));Ma([a],g,function(k){var h={};f.forEach(function(n,l){var m=k[l],p=n.la,r=n.ma,t=k[l+f.length],q=n.ra,ca=n.ta;h[n.ka]={read:function(A){return m.fromWireType(p(r,A))},write:function(A,I){var U=[];q(ca,A,t.toWireType(U,I));Ha(U)}}});return[{name:b.name,fromWireType:function(n){var l=
{},m;for(m in h)l[m]=h[m].read(n);d(n);return l},toWireType:function(n,l){for(var m in h)if(!(m in l))throw new TypeError('Missing field:  "'+m+'"');var p=c();for(m in h)h[m].write(p,l[m]);null!==n&&n.push(d,p);return p},argPackAdvance:8,readValueFromPointer:M,fa:d}]})},B:function(){},K:function(a,b,c,d,f){var g=Na(c);b=R(b);Q(a,{name:b,fromWireType:function(k){return!!k},toWireType:function(k,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(k){if(1===c)var h=ta;else if(2===c)h=D;else if(4===
c)h=E;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[k>>g])},fa:null})},J:function(a,b){b=R(b);Q(a,{name:b,fromWireType:function(c){var d=T[c].value;Ra(c);return d},toWireType:function(c,d){return Sa(d)},argPackAdvance:8,readValueFromPointer:M,fa:null})},t:function(a,b,c){c=Na(c);b=R(b);Q(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Ta(f)+'" to '+this.name);
return f},argPackAdvance:8,readValueFromPointer:Ua(b,c),fa:null})},w:function(a,b,c,d,f,g){var k=Ya(b,c);a=R(a);f=V(d,f);Xa(a,function(){cb("Cannot call "+a+" due to unbound types",k)},b-1);Ma([],k,function(h){var n=a,l=a;h=[h[0],null].concat(h.slice(1));var m=f,p=h.length;2>p&&S("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var r=null!==h[1]&&!1,t=!1,q=1;q<h.length;++q)if(null!==h[q]&&void 0===h[q].fa){t=!0;break}var ca="void"!==h[0].name,A="",I="";for(q=0;q<
p-2;++q)A+=(0!==q?", ":"")+"arg"+q,I+=(0!==q?", ":"")+"arg"+q+"Wired";l="return function "+Ia(l)+"("+A+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+l+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";t&&(l+="var destructors = [];\n");var U=t?"destructors":"null";A="throwBindingError invoker fn runDestructors retType classParam".split(" ");m=[S,m,g,Ha,h[0],h[1]];r&&(l+="var thisWired = classParam.toWireType("+U+", this);\n");for(q=0;q<
p-2;++q)l+="var arg"+q+"Wired = argType"+q+".toWireType("+U+", arg"+q+"); // "+h[q+2].name+"\n",A.push("argType"+q),m.push(h[q+2]);r&&(I="thisWired"+(0<I.length?", ":"")+I);l+=(ca?"var rv = ":"")+"invoker(fn"+(0<I.length?", ":"")+I+");\n";if(t)l+="runDestructors(destructors);\n";else for(q=r?1:2;q<h.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==h[q].fa&&(l+=p+"_dtor("+p+"); // "+h[q].name+"\n",A.push(p+"_dtor"),m.push(h[q].fa));ca&&(l+="var ret = retType.fromWireType(rv);\nreturn ret;\n");
A.push(l+"}\n");h=Va(A).apply(null,m);q=b-1;if(!e.hasOwnProperty(n))throw new La("Replacing nonexistant public symbol");void 0!==e[n].ea&&void 0!==q?e[n].ea[q]=h:(e[n]=h,e[n].ja=q);return[]})},i:function(a,b,c,d,f){function g(l){return l}b=R(b);-1===f&&(f=4294967295);var k=Na(c);if(0===d){var h=32-8*c;g=function(l){return l<<h>>>h}}var n=b.includes("unsigned");Q(a,{name:b,fromWireType:g,toWireType:function(l,m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+Ta(m)+
'" to '+this.name);if(m<d||m>f)throw new TypeError('Passing a number "'+Ta(m)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return n?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:db(b,k,0!==d),fa:null})},e:function(a,b,c){function d(g){g>>=2;var k=F;return new f(sa,k[g+1],k[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=R(c);Q(a,{name:c,fromWireType:d,argPackAdvance:8,
readValueFromPointer:d},{oa:!0})},u:function(a,b){b=R(b);var c="std::string"===b;Q(a,{name:b,fromWireType:function(d){var f=F[d>>2];if(c)for(var g=d+4,k=0;k<=f;++k){var h=d+4+k;if(k==f||0==B[h]){if(g){for(var n=g+(h-g),l=g;!(l>=n)&&B[l];)++l;g=ja.decode(B.subarray(g,l))}else g="";if(void 0===m)var m=g;else m+=String.fromCharCode(0),m+=g;g=h+1}}else{m=Array(f);for(k=0;k<f;++k)m[k]=String.fromCharCode(B[d+4+k]);m=m.join("")}W(d);return m},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));
var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||S("Cannot pass non-string to std::string");var k=(c&&g?function(){for(var l=0,m=0;m<f.length;++m){var p=f.charCodeAt(m);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++m)&1023);127>=p?++l:l=2047>=p?l+2:65535>=p?l+3:l+4}return l}:function(){return f.length})(),h=kb(4+k+1);F[h>>2]=k;if(c&&g)ka(f,h+4,k+1);else if(g)for(g=0;g<k;++g){var n=f.charCodeAt(g);255<n&&(W(h),S("String has UTF-16 code units that do not fit in 8 bits"));
B[h+4+g]=n}else for(g=0;g<k;++g)B[h+4+g]=f[g];null!==d&&d.push(W,h);return h},argPackAdvance:8,readValueFromPointer:M,fa:function(d){W(d)}})},o:function(a,b,c){c=R(c);if(2===b){var d=ma;var f=na;var g=oa;var k=function(){return C};var h=1}else 4===b&&(d=pa,f=qa,g=ra,k=function(){return F},h=2);Q(a,{name:c,fromWireType:function(n){for(var l=F[n>>2],m=k(),p,r=n+4,t=0;t<=l;++t){var q=n+4+t*b;if(t==l||0==m[q>>h])r=d(r,q-r),void 0===p?p=r:(p+=String.fromCharCode(0),p+=r),r=q+b}W(n);return p},toWireType:function(n,
l){"string"!==typeof l&&S("Cannot pass non-string to C++ string type "+c);var m=g(l),p=kb(4+m+b);F[p>>2]=m>>h;f(l,p+4,m+b);null!==n&&n.push(W,p);return p},argPackAdvance:8,readValueFromPointer:M,fa:function(n){W(n)}})},z:function(a,b,c,d,f,g){L[a]={name:R(b),pa:V(c,d),qa:V(f,g),ia:[]}},g:function(a,b,c,d,f,g,k,h,n,l){L[a].ia.push({ka:R(b),na:c,la:V(d,f),ma:g,sa:k,ra:V(h,n),ta:l})},L:function(a,b){b=R(b);Q(a,{xa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},j:Ra,N:function(a){if(0===
a)return Sa(fb());var b=eb[a];a=void 0===b?R(a):b;return Sa(fb()[a])},v:function(a){4<a&&(T[a].ha+=1)},D:function(a,b,c,d){a||S("Cannot use deleted val. handle = "+a);a=T[a].value;var f=hb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var k="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)k+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+
g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",k+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(gb,e,Sa);hb[b]=f}return f(a,c,d)},f:function(){z()},d:function(a,b){X(a,b||1);throw"longjmp";},E:function(a,b,c){B.copyWithin(a,b,b+c)},n:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ha.grow(Math.min(2147483648,
d)-sa.byteLength+65535>>>16);wa();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},r:function(){return 0},F:function(a,b,c,d){a=Ga.wa(a);b=Ga.ua(a,b,c);E[d>>2]=b;return 0},A:function(){},I:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var k=E[b+8*g>>2],h=E[b+(8*g+4)>>2],n=0;n<h;n++){var l=B[k+n],m=Fa[a];if(0===l||10===l){for(l=0;m[l]&&!(NaN<=l);)++l;l=ja.decode(m.subarray?m.subarray(0,l):new Uint8Array(m.slice(0,l)));(1===a?ea:x)(l);m.length=0}else m.push(l)}f+=h}E[d>>2]=f;return 0},b:function(){return fa},
l:lb,p:mb,q:nb,C:ob,y:pb,m:qb,h:rb,c:sb,k:tb,a:function(a){fa=a},M:function(a){var b=Date.now()/1E3|0;a&&(E[a>>2]=b);return b}};
(function(){function a(f){e.asm=f.exports;ha=e.asm.P;wa();G=e.asm.Y;ya.unshift(e.asm.Q);H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Ba&&(clearInterval(Ba),Ba=null),J&&(f=J,J=null,f()))}function b(f){a(f.instance)}function c(f){return Da().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){x("failed to asynchronously prepare wasm: "+g);z(g)})}var d={a:ub};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||K.startsWith("data:application/octet-stream;base64,")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){x("wasm streaming compile failed: "+g);x("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.Q).apply(null,arguments)};var kb=e._malloc=function(){return(kb=e._malloc=e.asm.R).apply(null,arguments)},W=e._free=function(){return(W=e._free=e.asm.S).apply(null,arguments)},bb=e.___getTypeName=function(){return(bb=e.___getTypeName=e.asm.T).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.U).apply(null,arguments)};
var Y=e.stackSave=function(){return(Y=e.stackSave=e.asm.V).apply(null,arguments)},Z=e.stackRestore=function(){return(Z=e.stackRestore=e.asm.W).apply(null,arguments)},X=e._setThrew=function(){return(X=e._setThrew=e.asm.X).apply(null,arguments)};e.dynCall_jiiiiiiiii=function(){return(e.dynCall_jiiiiiiiii=e.asm.Z).apply(null,arguments)};var vb=e.dynCall_ijiii=function(){return(vb=e.dynCall_ijiii=e.asm._).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.$).apply(null,arguments)};
e.dynCall_jiiiiiiii=function(){return(e.dynCall_jiiiiiiii=e.asm.aa).apply(null,arguments)};e.dynCall_jiiiiii=function(){return(e.dynCall_jiiiiii=e.asm.ba).apply(null,arguments)};e.dynCall_jiiiii=function(){return(e.dynCall_jiiiii=e.asm.ca).apply(null,arguments)};e.dynCall_iiijii=function(){return(e.dynCall_iiijii=e.asm.da).apply(null,arguments)};function qb(a,b){var c=Y();try{G.get(a)(b)}catch(d){Z(c);if(d!==d+0&&"longjmp"!==d)throw d;X(1,0)}}
function sb(a,b,c,d,f){var g=Y();try{G.get(a)(b,c,d,f)}catch(k){Z(g);if(k!==k+0&&"longjmp"!==k)throw k;X(1,0)}}function rb(a,b,c){var d=Y();try{G.get(a)(b,c)}catch(f){Z(d);if(f!==f+0&&"longjmp"!==f)throw f;X(1,0)}}function nb(a,b,c,d,f,g,k,h,n,l){var m=Y();try{return G.get(a)(b,c,d,f,g,k,h,n,l)}catch(p){Z(m);if(p!==p+0&&"longjmp"!==p)throw p;X(1,0)}}function ob(a,b,c,d,f,g,k,h,n,l,m,p){var r=Y();try{return G.get(a)(b,c,d,f,g,k,h,n,l,m,p)}catch(t){Z(r);if(t!==t+0&&"longjmp"!==t)throw t;X(1,0)}}
function lb(a,b,c,d,f){var g=Y();try{return G.get(a)(b,c,d,f)}catch(k){Z(g);if(k!==k+0&&"longjmp"!==k)throw k;X(1,0)}}function tb(a,b,c,d,f,g,k,h,n,l,m){var p=Y();try{G.get(a)(b,c,d,f,g,k,h,n,l,m)}catch(r){Z(p);if(r!==r+0&&"longjmp"!==r)throw r;X(1,0)}}function mb(a,b,c,d,f,g,k,h,n){var l=Y();try{return G.get(a)(b,c,d,f,g,k,h,n)}catch(m){Z(l);if(m!==m+0&&"longjmp"!==m)throw m;X(1,0)}}
function pb(a,b,c,d,f,g){var k=Y();try{return vb(a,b,c,d,f,g)}catch(h){Z(k);if(h!==h+0&&"longjmp"!==h)throw h;X(1,0)}}var wb;J=function xb(){wb||yb();wb||(J=xb)};
function yb(){function a(){if(!wb&&(wb=!0,e.calledRun=!0,!ia)){Ea(ya);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();za.unshift(b)}Ea(za)}}if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Aa();Ea(xa);0<H||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=yb;
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();yb();


  return Module.ready
}
);
})();
export default Module;