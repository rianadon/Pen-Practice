var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function l(){return Object.create(null)}function i(e){e.forEach(n)}function o(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t,n,l){return e[1]&&l?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](l(t))):n.ctx}function s(e,t,n,l,i,o,c){const s=function(e,t,n,l){if(e[2]&&l){const i=e[2](l(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let l=0;l<n;l+=1)e[l]=t.dirty[l]|i[l];return e}return t.dirty|i}return t.dirty}(t,l,i,o);if(s){const i=a(t,n,l,c);e.p(i,s)}}const u="undefined"!=typeof window;let r=u?()=>window.performance.now():()=>Date.now(),f=u?e=>requestAnimationFrame(e):e;const d=new Set;function h(e){d.forEach(t=>{t.c(e)||(d.delete(t),t.f())}),0!==d.size&&f(h)}function p(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function m(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function x(){return $(" ")}function y(){return $("")}function b(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e){const t=[];for(let n=0;n<e.length;n+=1)e[n].checked&&t.push(e[n].__value);return t}function C(e){return""===e?void 0:+e}function O(e,t){t=""+t,e.data!==t&&(e.data=t)}function P(e,t){e.value=null==t?"":t}function E(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}function M(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function S(e,t,n){e.classList[n?"add":"remove"](t)}const L=new Set;let A,H=0;function N(e,t,n,l,i,o,c,a=0){const s=16.666/l;let u="{\n";for(let e=0;e<=1;e+=s){const l=t+(n-t)*o(e);u+=100*e+`%{${c(l,1-l)}}\n`}const r=u+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(r)}_${a}`,d=e.ownerDocument;L.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(_("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${r}`,h.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?g+", ":""}${f} ${l}ms linear ${i}ms 1 both`,H+=1,f}function V(e,t){const n=(e.style.animation||"").split(", "),l=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-l.length;i&&(e.style.animation=l.join(", "),H-=i,H||f(()=>{H||(L.forEach(e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}}),L.clear())}))}function T(e){A=e}function j(){if(!A)throw new Error("Function called outside component initialization");return A}const z=[],R=[],B=[],F=[],q=Promise.resolve();let I=!1;function U(e){B.push(e)}function D(e){F.push(e)}let Z=!1;const J=new Set;function W(){if(!Z){Z=!0;do{for(let e=0;e<z.length;e+=1){const t=z[e];T(t),X(t.$$)}for(z.length=0;R.length;)R.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];J.has(t)||(J.add(t),t())}B.length=0}while(z.length);for(;F.length;)F.pop()();I=!1,Z=!1,J.clear()}}function X(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}let Y;function G(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const K=new Set;let Q;function ee(){Q={r:0,c:[],p:Q}}function te(){Q.r||i(Q.c),Q=Q.p}function ne(e,t){e&&e.i&&(K.delete(e),e.i(t))}function le(e,t,n,l){if(e&&e.o){if(K.has(e))return;K.add(e),Q.c.push(()=>{K.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}const ie={duration:0};function oe(n,l,c,a){let s=l(n,c),u=a?0:1,p=null,g=null,v=null;function _(){v&&V(n,v)}function m(e,t){const n=e.b-u;return t*=Math.abs(n),{a:u,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function $(l){const{delay:o=0,duration:c=300,easing:a=t,tick:$=e,css:x}=s||ie,y={start:r()+o,b:l};l||(y.group=Q,Q.r+=1),p?g=y:(x&&(_(),v=N(n,u,l,c,o,a,x)),l&&$(0,1),p=m(y,c),U(()=>G(n,l,"start")),function(e){let t;0===d.size&&f(h),new Promise(n=>{d.add(t={c:e,f:n})})}(e=>{if(g&&e>g.start&&(p=m(g,c),g=null,G(n,p.b,"start"),x&&(_(),v=N(n,u,p.b,p.duration,0,a,s.css))),p)if(e>=p.end)$(u=p.b,1-u),G(n,p.b,"end"),g||(p.b?_():--p.group.r||i(p.group.c)),p=null;else if(e>=p.start){const t=e-p.start;u=p.a+p.d*a(t/p.duration),$(u,1-u)}return!(!p&&!g)}))}return{run(e){o(s)?(Y||(Y=Promise.resolve(),Y.then(()=>{Y=null})),Y).then(()=>{s=s(),$(e)}):$(e)},end(){_(),p=g=null}}}function ce(e,t){const n=t.token={};function l(e,l,i,o){if(t.token!==n)return;t.resolved=o;let c=t.ctx;void 0!==i&&(c=c.slice(),c[i]=o);const a=e&&(t.current=e)(c);let s=!1;t.block&&(t.blocks?t.blocks.forEach((e,n)=>{n!==l&&e&&(ee(),le(e,1,1,()=>{t.blocks[n]=null}),te())}):t.block.d(1),a.c(),ne(a,1),a.m(t.mount(),t.anchor),s=!0),t.block=a,t.blocks&&(t.blocks[l]=a),s&&W()}if((i=e)&&"object"==typeof i&&"function"==typeof i.then){const n=j();if(e.then(e=>{T(n),l(t.then,1,t.value,e),T(null)},e=>{T(n),l(t.catch,2,t.error,e),T(null)}),t.current!==t.pending)return l(t.pending,0),!0}else{if(t.current!==t.then)return l(t.then,1,t.value,e),!0;t.resolved=e}var i}function ae(e,t){e.d(1),t.delete(e.key)}function se(e,t,n,l,i,o,c,a,s,u,r,f){let d=e.length,h=o.length,p=d;const g={};for(;p--;)g[e[p].key]=p;const v=[],_=new Map,m=new Map;for(p=h;p--;){const e=f(i,o,p),a=n(e);let s=c.get(a);s?l&&s.p(e,t):(s=u(a,e),s.c()),_.set(a,v[p]=s),a in g&&m.set(a,Math.abs(p-g[a]))}const $=new Set,x=new Set;function y(e){ne(e,1),e.m(a,r),c.set(e.key,e),r=e.first,h--}for(;d&&h;){const t=v[h-1],n=e[d-1],l=t.key,i=n.key;t===n?(r=t.first,d--,h--):_.has(i)?!c.has(l)||$.has(l)?y(t):x.has(i)?d--:m.get(l)>m.get(i)?(x.add(l),y(t)):($.add(i),d--):(s(n,c),d--)}for(;d--;){const t=e[d];_.has(t.key)||s(t,c)}for(;h;)y(v[h-1]);return v}function ue(e,t,n){const l=e.$$.props[t];void 0!==l&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function re(e){e&&e.c()}function fe(e,t,l){const{fragment:c,on_mount:a,on_destroy:s,after_update:u}=e.$$;c&&c.m(t,l),U(()=>{const t=a.map(n).filter(o);s?s.push(...t):i(t),e.$$.on_mount=[]}),u.forEach(U)}function de(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function he(e,t){-1===e.$$.dirty[0]&&(z.push(e),I||(I=!0,q.then(W)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(t,n,o,c,a,s,u=[-1]){const r=A;T(t);const f=n.props||{},d=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:a,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:l(),dirty:u};let h=!1;if(d.ctx=o?o(t,f,(e,n,...l)=>{const i=l.length?l[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=i)&&(d.bound[e]&&d.bound[e](i),h&&he(t,e)),n}):[],d.update(),h=!0,i(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&ne(t.$$.fragment),fe(t,n.target,n.anchor),W()}T(r)}class ge{$destroy(){de(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function ve(e){const t=e-1;return t*t*t+1}function _e(e,{delay:n=0,duration:l=400,easing:i=t}){const o=+getComputedStyle(e).opacity;return{delay:n,duration:l,easing:i,css:e=>"opacity: "+e*o}}function me(e,{delay:t=0,duration:n=400,easing:l=ve,x:i=0,y:o=0,opacity:c=0}){const a=getComputedStyle(e),s=+a.opacity,u="none"===a.transform?"":a.transform,r=s*(1-c);return{delay:t,duration:n,easing:l,css:(e,t)=>`\n\t\t\ttransform: ${u} translate(${(1-e)*i}px, ${(1-e)*o}px);\n\t\t\topacity: ${s-r*t}`}}function $e(e,t,n){const l=e.variants.filter(e=>n.includes(e));return"fat"===t?l[l.length-1]:l[0]}function xe(e,t,n){return"https://fonts.googleapis.com/css?family="+encodeURIComponent(e.family)+":"+$e(e,t,n)}function ye(e,t,n){const l=$e(e,t,n);return[`font-family: "${e.family}"`,"font-weight: "+l].join(";")}function be(e){let t,n,l,i,o,c,u,r,f,d,h,y;const w=e[4].default,C=function(e,t,n,l){if(e){const i=a(e,t,n,l);return e[0](i)}}(w,e,e[3],null);return{c(){t=_("div"),n=_("button"),l=$(e[1]),i=x(),o=m("svg"),c=m("path"),u=x(),r=_("div"),f=_("div"),C&&C.c(),k(c,"d","M3.6 1H16.3944C18 1 18.9446 2.78029 18 4.1094L11.6641 13.7C10.8725 14.8885 9.12754 14.8885 8.3359 13.7L1.94145 4.1C1 2.78029 2 1 3.6 1Z"),k(c,"fill","url(#dark)"),k(c,"stroke","black"),k(c,"stroke-width","2"),k(o,"width","20"),k(o,"height","16"),k(o,"viewBox","0 0 20 16"),k(n,"class","flex no-disp-small"),k(f,"class","popup shadowed flex"),k(r,"class","center-popup"),S(r,"hide",e[0]!==e[2]),k(t,"class","popup-container")},m(a,s){g(a,t,s),p(t,n),p(n,l),p(n,i),p(n,o),p(o,c),p(t,u),p(t,r),p(r,f),C&&C.m(f,null),d=!0,h||(y=b(n,"click",e[5]),h=!0)},p(e,[t]){(!d||2&t)&&O(l,e[1]),C&&C.p&&8&t&&s(C,w,e,e[3],t,null,null),5&t&&S(r,"hide",e[0]!==e[2])},i(e){d||(ne(C,e),d=!0)},o(e){le(C,e),d=!1},d(e){e&&v(t),C&&C.d(e),h=!1,y()}}}function ke(e,t,n){let{name:l}=t,{visible:i}=t,{id:o}=t,{$$slots:c={},$$scope:a}=t;return e.$set=e=>{"name"in e&&n(1,l=e.name),"visible"in e&&n(0,i=e.visible),"id"in e&&n(2,o=e.id),"$$scope"in e&&n(3,a=e.$$scope)},[i,l,o,a,c,e=>n(0,i=i===o?-1:o)]}class we extends ge{constructor(e){super(),pe(this,e,ke,be,c,{name:1,visible:0,id:2})}}function Ce(t){let n,l,o,c,a,s,u,r,f,d,h,m,$,y,w,C,O,P,E,M,S,L,A,H;return{c(){n=_("fieldset"),l=_("legend"),l.textContent="Alphabet",o=x(),c=_("label"),a=_("input"),s=x(),u=_("span"),u.textContent="Uppercase",r=x(),f=_("label"),d=_("input"),h=x(),m=_("span"),m.textContent="Lowercase",$=x(),y=_("label"),w=_("input"),C=x(),O=_("span"),O.textContent="Numerals",P=x(),E=_("label"),M=_("input"),S=x(),L=_("span"),L.textContent="Custom",k(a,"type","checkbox"),a.__value=Pe,a.value=a.__value,t[4][0].push(a),k(d,"type","checkbox"),d.__value=Oe,d.value=d.__value,t[4][0].push(d),k(w,"type","checkbox"),w.__value=Ee,w.value=w.__value,t[4][0].push(w),k(M,"type","checkbox"),M.__value=t[1],M.value=M.__value,t[4][0].push(M)},m(e,i){g(e,n,i),p(n,l),p(n,o),p(n,c),p(c,a),a.checked=~t[0].indexOf(a.__value),p(c,s),p(c,u),p(n,r),p(n,f),p(f,d),d.checked=~t[0].indexOf(d.__value),p(f,h),p(f,m),p(n,$),p(n,y),p(y,w),w.checked=~t[0].indexOf(w.__value),p(y,C),p(y,O),p(n,P),p(n,E),p(E,M),M.checked=~t[0].indexOf(M.__value),p(E,S),p(E,L),A||(H=[b(a,"change",t[3]),b(d,"change",t[5]),b(w,"change",t[6]),b(M,"change",t[2]),b(M,"change",t[7])],A=!0)},p(e,[t]){1&t&&(a.checked=~e[0].indexOf(a.__value)),1&t&&(d.checked=~e[0].indexOf(d.__value)),1&t&&(w.checked=~e[0].indexOf(w.__value)),2&t&&(M.__value=e[1]),M.value=M.__value,1&t&&(M.checked=~e[0].indexOf(M.__value))},i:e,o:e,d(e){e&&v(n),t[4][0].splice(t[4][0].indexOf(a),1),t[4][0].splice(t[4][0].indexOf(d),1),t[4][0].splice(t[4][0].indexOf(w),1),t[4][0].splice(t[4][0].indexOf(M),1),A=!1,i(H)}}}const Oe="abcdefghijklmnopqrstuvwxyz",Pe=Oe.toUpperCase(),Ee="1234567890 1234567890",Me=[Pe,Oe],Se=[Oe,Pe,Ee];function Le(e){return e.some(e=>!Se.includes(e))?"Custom":e[0]==Ee&&1==e.length?"Numerals":e.includes(Ee)?"Alphanum":"Alphabet"}function Ae(e,t,n){let{alphabets:l}=t,i="custom woo";const o=[[]];return e.$set=e=>{"alphabets"in e&&n(0,l=e.alphabets)},[l,i,function(e){e.target.checked&&n(1,i=prompt("Enter custom text to use"))},function(){l=w(o[0]),n(0,l)},o,function(){l=w(o[0]),n(0,l)},function(){l=w(o[0]),n(0,l)},function(){l=w(o[0]),n(0,l)}]}class He extends ge{constructor(e){super(),pe(this,e,Ae,Ce,c,{alphabets:0})}}function Ne(t){let n,l,o,c,a,s,u,r,f,d,h,m,$,y,w,C,O,P,M,S,L,A,H,N,V,T,j,z,R,B,F,q,I,D,Z,J,W,X,Y,G,K,Q,ee,te,ne,le,ie,oe,ce,ae,se,ue,re,fe,de,he,pe,ge,ve,_e,me,$e,xe,ye,be,ke,we,Ce,Oe,Pe,Ee,Me,Se,Le,Ae,He,Ne,Ve,Te,je;return{c(){n=_("div"),l=_("fieldset"),o=_("legend"),o.textContent="Styles",c=x(),a=_("label"),s=_("input"),u=x(),r=_("span"),r.textContent="Serif",f=x(),d=_("label"),h=_("input"),m=x(),$=_("span"),$.textContent="Sans-Serif",y=x(),w=_("label"),C=_("input"),O=x(),P=_("span"),P.textContent="Display",M=x(),S=_("label"),L=_("input"),A=x(),H=_("span"),H.textContent="Handwriting",N=x(),V=_("label"),T=_("input"),j=x(),z=_("span"),z.textContent="Monospace",R=x(),B=_("div"),F=_("select"),q=_("option"),q.textContent="Alphabetical",I=_("option"),I.textContent="Recent First",D=_("option"),D.textContent="Popular first",Z=_("option"),Z.textContent="Trending first",J=x(),W=_("div"),X=x(),Y=_("div"),G=_("fieldset"),K=_("legend"),K.textContent="Weights",Q=x(),ee=_("label"),te=_("input"),le=x(),ie=_("span"),ie.textContent="Thin",oe=x(),ce=_("label"),ae=_("input"),ue=x(),re=_("span"),re.textContent="Extra Light",fe=x(),de=_("label"),he=_("input"),ge=x(),ve=_("span"),ve.textContent="Light",_e=x(),me=_("label"),$e=_("input"),ye=x(),be=_("span"),be.textContent="Regular",ke=x(),we=_("label"),Ce=_("input"),Pe=x(),Ee=_("span"),Ee.textContent="Medium",Me=x(),Se=_("div"),Le=_("select"),Ae=_("option"),Ae.textContent="Show thick",He=_("option"),He.textContent="Show thin",Ne=x(),Ve=_("div"),k(s,"type","checkbox"),s.__value="serif",s.value=s.__value,t[5][1].push(s),k(h,"type","checkbox"),h.__value="sans-serif",h.value=h.__value,t[5][1].push(h),k(C,"type","checkbox"),C.__value="display",C.value=C.__value,t[5][1].push(C),k(L,"type","checkbox"),L.__value="handwriting",L.value=L.__value,t[5][1].push(L),k(T,"type","checkbox"),T.__value="monospace",T.value=T.__value,t[5][1].push(T),q.__value="alpha",q.value=q.__value,I.__value="date",I.value=I.__value,D.__value="popularity",D.value=D.__value,Z.__value="trending",Z.value=Z.__value,void 0===t[2]&&U(()=>t[10].call(F)),k(W,"class","highlight"),k(B,"class","highlightable margintop"),k(te,"type","checkbox"),te.__value=ne=100,te.value=te.__value,t[5][0].push(te),k(ae,"type","checkbox"),ae.__value=se=200,ae.value=ae.__value,t[5][0].push(ae),k(he,"type","checkbox"),he.__value=pe=300,he.value=he.__value,t[5][0].push(he),k($e,"type","checkbox"),$e.__value=xe=400,$e.value=$e.__value,t[5][0].push($e),k(Ce,"type","checkbox"),Ce.__value=Oe=500,Ce.value=Ce.__value,t[5][0].push(Ce),Ae.__value="fat",Ae.value=Ae.__value,He.__value="thin",He.value=He.__value,void 0===t[3]&&U(()=>t[16].call(Le)),k(Ve,"class","highlight"),k(Se,"class","highlightable margintop")},m(e,i){g(e,n,i),p(n,l),p(l,o),p(l,c),p(l,a),p(a,s),s.checked=~t[0].indexOf(s.__value),p(a,u),p(a,r),p(l,f),p(l,d),p(d,h),h.checked=~t[0].indexOf(h.__value),p(d,m),p(d,$),p(l,y),p(l,w),p(w,C),C.checked=~t[0].indexOf(C.__value),p(w,O),p(w,P),p(l,M),p(l,S),p(S,L),L.checked=~t[0].indexOf(L.__value),p(S,A),p(S,H),p(l,N),p(l,V),p(V,T),T.checked=~t[0].indexOf(T.__value),p(V,j),p(V,z),p(n,R),p(n,B),p(B,F),p(F,q),p(F,I),p(F,D),p(F,Z),E(F,t[2]),p(B,J),p(B,W),g(e,X,i),g(e,Y,i),p(Y,G),p(G,K),p(G,Q),p(G,ee),p(ee,te),te.checked=~t[1].indexOf(te.__value),p(ee,le),p(ee,ie),p(G,oe),p(G,ce),p(ce,ae),ae.checked=~t[1].indexOf(ae.__value),p(ce,ue),p(ce,re),p(G,fe),p(G,de),p(de,he),he.checked=~t[1].indexOf(he.__value),p(de,ge),p(de,ve),p(G,_e),p(G,me),p(me,$e),$e.checked=~t[1].indexOf($e.__value),p(me,ye),p(me,be),p(G,ke),p(G,we),p(we,Ce),Ce.checked=~t[1].indexOf(Ce.__value),p(we,Pe),p(we,Ee),p(Y,Me),p(Y,Se),p(Se,Le),p(Le,Ae),p(Le,He),E(Le,t[3]),p(Se,Ne),p(Se,Ve),Te||(je=[b(s,"change",t[4]),b(h,"change",t[6]),b(C,"change",t[7]),b(L,"change",t[8]),b(T,"change",t[9]),b(F,"change",t[10]),b(te,"change",t[11]),b(ae,"change",t[12]),b(he,"change",t[13]),b($e,"change",t[14]),b(Ce,"change",t[15]),b(Le,"change",t[16])],Te=!0)},p(e,[t]){1&t&&(s.checked=~e[0].indexOf(s.__value)),1&t&&(h.checked=~e[0].indexOf(h.__value)),1&t&&(C.checked=~e[0].indexOf(C.__value)),1&t&&(L.checked=~e[0].indexOf(L.__value)),1&t&&(T.checked=~e[0].indexOf(T.__value)),4&t&&E(F,e[2]),2&t&&(te.checked=~e[1].indexOf(te.__value)),2&t&&(ae.checked=~e[1].indexOf(ae.__value)),2&t&&(he.checked=~e[1].indexOf(he.__value)),2&t&&($e.checked=~e[1].indexOf($e.__value)),2&t&&(Ce.checked=~e[1].indexOf(Ce.__value)),8&t&&E(Le,e[3])},i:e,o:e,d(e){e&&v(n),t[5][1].splice(t[5][1].indexOf(s),1),t[5][1].splice(t[5][1].indexOf(h),1),t[5][1].splice(t[5][1].indexOf(C),1),t[5][1].splice(t[5][1].indexOf(L),1),t[5][1].splice(t[5][1].indexOf(T),1),e&&v(X),e&&v(Y),t[5][0].splice(t[5][0].indexOf(te),1),t[5][0].splice(t[5][0].indexOf(ae),1),t[5][0].splice(t[5][0].indexOf(he),1),t[5][0].splice(t[5][0].indexOf($e),1),t[5][0].splice(t[5][0].indexOf(Ce),1),Te=!1,i(je)}}}const Ve=["serif","sans-serif"],Te=[100,200,300];function je(e,t,n){let{styles:l}=t,{weights:i}=t,{sort:o}=t,{preferVariant:c}=t;const a=[[],[]];return e.$set=e=>{"styles"in e&&n(0,l=e.styles),"weights"in e&&n(1,i=e.weights),"sort"in e&&n(2,o=e.sort),"preferVariant"in e&&n(3,c=e.preferVariant)},[l,i,o,c,function(){l=w(a[1]),n(0,l)},a,function(){l=w(a[1]),n(0,l)},function(){l=w(a[1]),n(0,l)},function(){l=w(a[1]),n(0,l)},function(){l=w(a[1]),n(0,l)},function(){o=M(this),n(2,o)},function(){i=w(a[0]),n(1,i)},function(){i=w(a[0]),n(1,i)},function(){i=w(a[0]),n(1,i)},function(){i=w(a[0]),n(1,i)},function(){i=w(a[0]),n(1,i)},function(){c=M(this),n(3,c)}]}class ze extends ge{constructor(e){super(),pe(this,e,je,Ne,c,{styles:0,weights:1,sort:2,preferVariant:3})}}function Re(t){let n,l,o,c,a,s,u,r,f,d,h,m,y,w,O,M,S,L,A,H,N,V,T,j,z,R,B,F,q,I,D,Z,J,W,X,Y,G,K,Q,ee,te,ne,le,ie,oe,ce,ae,se,ue,re,fe,de,he,pe,ge,ve,_e,me,$e,xe,ye,be,ke,we,Ce,Oe,Pe,Ee,Me,Se,Le,Ae,He,Ne,Ve,Te,je;return{c(){n=_("div"),l=_("fieldset"),o=_("legend"),o.textContent="Page Type",c=x(),a=_("label"),s=_("input"),r=x(),f=_("span"),f.textContent="A4",d=x(),h=_("label"),m=_("input"),w=x(),O=_("span"),O.textContent="A5",M=x(),S=_("label"),L=_("input"),H=x(),N=_("span"),N.textContent="A6",V=x(),T=_("label"),j=_("input"),R=x(),B=_("span"),B.textContent="Letter",F=x(),q=_("label"),I=_("input"),Z=x(),J=_("span"),J.textContent="Legal",W=x(),X=_("label"),Y=_("input"),G=x(),K=_("span"),K.textContent="Custom",Q=x(),ee=_("div"),te=_("label"),ne=$("Pages"),ie=x(),oe=_("div"),ce=_("input"),se=x(),ue=_("div"),re=x(),fe=_("label"),de=$("Columns"),pe=x(),ge=_("div"),ve=_("input"),me=x(),$e=_("div"),xe=x(),ye=_("label"),be=$("Margins"),we=x(),Ce=_("div"),Oe=_("select"),Pe=_("option"),Pe.textContent="1 in",Me=_("option"),Me.textContent=".5 in",Le=_("option"),Le.textContent="No",Ne=x(),Ve=_("div"),k(s,"type","radio"),s.__value=u=297,s.value=s.__value,t[8][0].push(s),k(m,"type","radio"),m.__value=y=210,m.value=m.__value,t[8][0].push(m),k(L,"type","radio"),L.__value=A=148,L.value=L.__value,t[8][0].push(L),k(j,"type","radio"),j.__value=z=279,j.value=j.__value,t[8][0].push(j),k(I,"type","radio"),I.__value=D=356,I.value=I.__value,t[8][0].push(I),k(Y,"type","radio"),Y.__value=t[4],Y.value=Y.__value,t[8][0].push(Y),k(te,"class","fieldset-label"),k(te,"for",le="page"+t[5]),k(ce,"type","number"),k(ce,"min","1"),k(ce,"id",ae="page"+t[5]),k(ue,"class","highlight"),k(oe,"class","highlightable margin-normal"),k(fe,"class","fieldset-label"),k(fe,"for",he="cols"+t[5]),k(ve,"type","number"),k(ve,"min","1"),k(ve,"id",_e="cols"+t[5]),k($e,"class","highlight"),k(ge,"class","highlightable margin-normal"),k(ye,"class","fieldset-label"),k(ye,"for",ke="margins"+t[5]),Pe.__value=Ee=50,Pe.value=Pe.__value,Me.__value=Se=25,Me.value=Me.__value,Le.__value=Ae=0,Le.value=Le.__value,k(Oe,"id",He="margins"+t[5]),void 0===t[3]&&U(()=>t[16].call(Oe)),k(Ve,"class","highlight"),k(Ce,"class","highlightable margin-normal")},m(e,i){g(e,n,i),p(n,l),p(l,o),p(l,c),p(l,a),p(a,s),s.checked=s.__value===t[0],p(a,r),p(a,f),p(l,d),p(l,h),p(h,m),m.checked=m.__value===t[0],p(h,w),p(h,O),p(l,M),p(l,S),p(S,L),L.checked=L.__value===t[0],p(S,H),p(S,N),p(l,V),p(l,T),p(T,j),j.checked=j.__value===t[0],p(T,R),p(T,B),p(l,F),p(l,q),p(q,I),I.checked=I.__value===t[0],p(q,Z),p(q,J),p(l,W),p(l,X),p(X,Y),Y.checked=Y.__value===t[0],p(X,G),p(X,K),g(e,Q,i),g(e,ee,i),p(ee,te),p(te,ne),p(ee,ie),p(ee,oe),p(oe,ce),P(ce,t[1]),p(oe,se),p(oe,ue),p(ee,re),p(ee,fe),p(fe,de),p(ee,pe),p(ee,ge),p(ge,ve),P(ve,t[2]),p(ge,me),p(ge,$e),p(ee,xe),p(ee,ye),p(ye,be),p(ee,we),p(ee,Ce),p(Ce,Oe),p(Oe,Pe),p(Oe,Me),p(Oe,Le),E(Oe,t[3]),p(Ce,Ne),p(Ce,Ve),Te||(je=[b(s,"change",t[7]),b(m,"change",t[9]),b(L,"change",t[10]),b(j,"change",t[11]),b(I,"change",t[12]),b(Y,"change",t[13]),b(Y,"change",t[6]),b(ce,"input",t[14]),b(ve,"input",t[15]),b(Oe,"change",t[16])],Te=!0)},p(e,[t]){1&t&&(s.checked=s.__value===e[0]),1&t&&(m.checked=m.__value===e[0]),1&t&&(L.checked=L.__value===e[0]),1&t&&(j.checked=j.__value===e[0]),1&t&&(I.checked=I.__value===e[0]),16&t&&(Y.__value=e[4]),Y.value=Y.__value,1&t&&(Y.checked=Y.__value===e[0]),2&t&&C(ce.value)!==e[1]&&P(ce,e[1]),4&t&&C(ve.value)!==e[2]&&P(ve,e[2]),8&t&&E(Oe,e[3])},i:e,o:e,d(e){e&&v(n),t[8][0].splice(t[8][0].indexOf(s),1),t[8][0].splice(t[8][0].indexOf(m),1),t[8][0].splice(t[8][0].indexOf(L),1),t[8][0].splice(t[8][0].indexOf(j),1),t[8][0].splice(t[8][0].indexOf(I),1),t[8][0].splice(t[8][0].indexOf(Y),1),e&&v(Q),e&&v(ee),Te=!1,i(je)}}}function Be(e,t,n){let{pageHeight:l}=t,{numPages:i}=t,{numCols:o}=t,{margin:c}=t;const a=Math.floor(1e4*Math.random());let s=278;return e.$set=e=>{"pageHeight"in e&&n(0,l=e.pageHeight),"numPages"in e&&n(1,i=e.numPages),"numCols"in e&&n(2,o=e.numCols),"margin"in e&&n(3,c=e.margin)},[l,i,o,c,s,a,function(e){if(e.target.checked){const e=parseFloat(prompt("Enter the height of your page in inches"));isNaN(e)||n(4,s=25.4*e)}},function(){l=this.__value,n(0,l)},[[]],function(){l=this.__value,n(0,l)},function(){l=this.__value,n(0,l)},function(){l=this.__value,n(0,l)},function(){l=this.__value,n(0,l)},function(){l=this.__value,n(0,l)},function(){i=C(this.value),n(1,i)},function(){o=C(this.value),n(2,o)},function(){c=M(this),n(3,c)}]}class Fe extends ge{constructor(e){super(),pe(this,e,Be,Re,c,{pageHeight:0,numPages:1,numCols:2,margin:3})}}function qe(e,t,n){const l=e.slice();return l[50]=t[n],l}function Ie(e,t,n){const l=e.slice();return l[47]=t[n],l}function Ue(e,t,n){const l=e.slice();return l[43]=t[n],l}function De(e){let t;return{c(){t=_("p"),t.innerHTML='<strong style="color: #d44">\n        Using more than two columns may cut off text or print in a smaller font size. Make sure to preview your print!\n    </strong>'},m(e,n){g(e,t,n)},d(e){e&&v(t)}}}function Ze(e){let t,n,l,i,o,c,a,s,u,r,f,d,h,m,$,y,w,C,O;function P(t){e[20].call(null,t)}let E={};void 0!==e[2]&&(E.alphabets=e[2]);const M=new He({props:E});function S(t){e[21].call(null,t)}function L(t){e[22].call(null,t)}function A(t){e[23].call(null,t)}function H(t){e[24].call(null,t)}R.push(()=>ue(M,"alphabets",P));let N={};void 0!==e[3]&&(N.styles=e[3]),void 0!==e[4]&&(N.weights=e[4]),void 0!==e[5]&&(N.sort=e[5]),void 0!==e[6]&&(N.preferVariant=e[6]);const V=new ze({props:N});function T(t){e[25].call(null,t)}function j(t){e[26].call(null,t)}function z(t){e[27].call(null,t)}function B(t){e[28].call(null,t)}R.push(()=>ue(V,"styles",S)),R.push(()=>ue(V,"weights",L)),R.push(()=>ue(V,"sort",A)),R.push(()=>ue(V,"preferVariant",H));let F={};void 0!==e[7]&&(F.pageHeight=e[7]),void 0!==e[8]&&(F.numPages=e[8]),void 0!==e[9]&&(F.numCols=e[9]),void 0!==e[10]&&(F.margin=e[10]);const q=new Fe({props:F});return R.push(()=>ue(q,"pageHeight",T)),R.push(()=>ue(q,"numPages",j)),R.push(()=>ue(q,"numCols",z)),R.push(()=>ue(q,"margin",B)),{c(){t=_("section"),l=x(),i=_("section"),re(M.$$.fragment),c=x(),re(V.$$.fragment),f=x(),re(q.$$.fragment),k(t,"class","sidebg"),k(i,"class","sidebar shadowed")},m(n,o){g(n,t,o),g(n,l,o),g(n,i,o),fe(M,i,null),p(i,c),fe(V,i,null),p(i,f),fe(q,i,null),w=!0,C||(O=b(t,"click",e[19]),C=!0)},p(e,t){const n={};!o&&4&t[0]&&(o=!0,n.alphabets=e[2],D(()=>o=!1)),M.$set(n);const l={};!a&&8&t[0]&&(a=!0,l.styles=e[3],D(()=>a=!1)),!s&&16&t[0]&&(s=!0,l.weights=e[4],D(()=>s=!1)),!u&&32&t[0]&&(u=!0,l.sort=e[5],D(()=>u=!1)),!r&&64&t[0]&&(r=!0,l.preferVariant=e[6],D(()=>r=!1)),V.$set(l);const i={};!d&&128&t[0]&&(d=!0,i.pageHeight=e[7],D(()=>d=!1)),!h&&256&t[0]&&(h=!0,i.numPages=e[8],D(()=>h=!1)),!m&&512&t[0]&&(m=!0,i.numCols=e[9],D(()=>m=!1)),!$&&1024&t[0]&&($=!0,i.margin=e[10],D(()=>$=!1)),q.$set(i)},i(e){w||(U(()=>{n||(n=oe(t,_e,{},!0)),n.run(1)}),ne(M.$$.fragment,e),ne(V.$$.fragment,e),ne(q.$$.fragment,e),U(()=>{y||(y=oe(i,me,{duration:300,x:-250,opacity:1},!0)),y.run(1)}),w=!0)},o(e){n||(n=oe(t,_e,{},!1)),n.run(0),le(M.$$.fragment,e),le(V.$$.fragment,e),le(q.$$.fragment,e),y||(y=oe(i,me,{duration:300,x:-250,opacity:1},!1)),y.run(0),w=!1},d(e){e&&v(t),e&&n&&n.end(),e&&v(l),e&&v(i),de(M),de(V),de(q),e&&y&&y.end(),C=!1,O()}}}function Je(e){let t,n;function l(t){e[30].call(null,t)}let i={};void 0!==e[2]&&(i.alphabets=e[2]);const o=new He({props:i});return R.push(()=>ue(o,"alphabets",l)),{c(){re(o.$$.fragment)},m(e,t){fe(o,e,t),n=!0},p(e,n){const l={};!t&&4&n[0]&&(t=!0,l.alphabets=e[2],D(()=>t=!1)),o.$set(l)},i(e){n||(ne(o.$$.fragment,e),n=!0)},o(e){le(o.$$.fragment,e),n=!1},d(e){de(o,e)}}}function We(e){let t,n,l,i,o;function c(t){e[32].call(null,t)}function a(t){e[33].call(null,t)}function s(t){e[34].call(null,t)}function u(t){e[35].call(null,t)}let r={};void 0!==e[3]&&(r.styles=e[3]),void 0!==e[4]&&(r.weights=e[4]),void 0!==e[5]&&(r.sort=e[5]),void 0!==e[6]&&(r.preferVariant=e[6]);const f=new ze({props:r});return R.push(()=>ue(f,"styles",c)),R.push(()=>ue(f,"weights",a)),R.push(()=>ue(f,"sort",s)),R.push(()=>ue(f,"preferVariant",u)),{c(){re(f.$$.fragment)},m(e,t){fe(f,e,t),o=!0},p(e,o){const c={};!t&&8&o[0]&&(t=!0,c.styles=e[3],D(()=>t=!1)),!n&&16&o[0]&&(n=!0,c.weights=e[4],D(()=>n=!1)),!l&&32&o[0]&&(l=!0,c.sort=e[5],D(()=>l=!1)),!i&&64&o[0]&&(i=!0,c.preferVariant=e[6],D(()=>i=!1)),f.$set(c)},i(e){o||(ne(f.$$.fragment,e),o=!0)},o(e){le(f.$$.fragment,e),o=!1},d(e){de(f,e)}}}function Xe(e){let t,n,l,i,o;function c(t){e[37].call(null,t)}function a(t){e[38].call(null,t)}function s(t){e[39].call(null,t)}function u(t){e[40].call(null,t)}let r={};void 0!==e[7]&&(r.pageHeight=e[7]),void 0!==e[8]&&(r.numPages=e[8]),void 0!==e[9]&&(r.numCols=e[9]),void 0!==e[10]&&(r.margin=e[10]);const f=new Fe({props:r});return R.push(()=>ue(f,"pageHeight",c)),R.push(()=>ue(f,"numPages",a)),R.push(()=>ue(f,"numCols",s)),R.push(()=>ue(f,"margin",u)),{c(){re(f.$$.fragment)},m(e,t){fe(f,e,t),o=!0},p(e,o){const c={};!t&&128&o[0]&&(t=!0,c.pageHeight=e[7],D(()=>t=!1)),!n&&256&o[0]&&(n=!0,c.numPages=e[8],D(()=>n=!1)),!l&&512&o[0]&&(l=!0,c.numCols=e[9],D(()=>l=!1)),!i&&1024&o[0]&&(i=!0,c.margin=e[10],D(()=>i=!1)),f.$set(c)},i(e){o||(ne(f.$$.fragment,e),o=!0)},o(e){le(f.$$.fragment,e),o=!1},d(e){de(f,e)}}}function Ye(e){let t,n,l=e[53].message+"";return{c(){var e,i,o;t=_("p"),n=$(l),e="color",i="red",t.style.setProperty(e,i,o?"important":"")},m(e,l){g(e,t,l),p(t,n)},p(e,t){4096&t[0]&&l!==(l=e[53].message+"")&&O(n,l)},d(e){e&&v(t)}}}function Ge(e){let t,n=[],l=new Map,i=e[15];const o=e=>e[47].family;for(let t=0;t<i.length;t+=1){let c=Ie(e,i,t),a=o(c);l.set(a,n[t]=Qe(a,c))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=y()},m(e,l){for(let t=0;t<n.length;t+=1)n[t].m(e,l);g(e,t,l)},p(e,i){if(35408&i[0]){const c=e[15];n=se(n,i,o,1,e,c,l,t.parentNode,ae,Qe,t,Ie)}},d(e){for(let t=0;t<n.length;t+=1)n[t].d(e);e&&v(t)}}}function Ke(e,t){let n,l,i,o,c,a,s,u=t[50]+"",r=t[50]+"";return{key:e,first:null,c(){n=_("div"),l=$(u),o=x(),c=_("div"),a=$(r),k(n,"class","fontline"),k(n,"style",i=ye(t[47],t[6],t[4])),k(c,"class","fontline blank"),k(c,"style",s=ye(t[47],t[6],t[4])),this.first=n},m(e,t){g(e,n,t),p(n,l),g(e,o,t),g(e,c,t),p(c,a)},p(e,t){2048&t[0]&&u!==(u=e[50]+"")&&O(l,u),32848&t[0]&&i!==(i=ye(e[47],e[6],e[4]))&&k(n,"style",i),2048&t[0]&&r!==(r=e[50]+"")&&O(a,r),32848&t[0]&&s!==(s=ye(e[47],e[6],e[4]))&&k(c,"style",s)},d(e){e&&v(n),e&&v(o),e&&v(c)}}}function Qe(e,t){let n,l,i,o,c,a,s,u,r,f,d,h,m=t[47].family+"",y=$e(t[47],t[6],t[4])+"",b=[],w=new Map,C=t[11];const P=e=>e[50];for(let e=0;e<C.length;e+=1){let n=qe(t,C,e),l=P(n);w.set(l,b[e]=Ke(l,n))}return{key:e,first:null,c(){n=_("div"),l=_("div"),i=$(m),o=x(),c=$(y),a=x();for(let e=0;e<b.length;e+=1)b[e].c();s=x(),u=_("link"),f=x(),k(u,"rel","stylesheet"),k(u,"href",r=xe(t[47],t[6],t[4])),k(n,"class","font"),k(n,"style",d=`width: ${100/t[9]}%`),k(n,"data-weight",h=$e(t[47],t[6],t[4])),this.first=n},m(e,t){g(e,n,t),p(n,l),p(l,i),p(l,o),p(l,c),p(n,a);for(let e=0;e<b.length;e+=1)b[e].m(n,null);p(n,s),p(n,u),p(n,f)},p(e,t){if(32768&t[0]&&m!==(m=e[47].family+"")&&O(i,m),32848&t[0]&&y!==(y=$e(e[47],e[6],e[4])+"")&&O(c,y),34896&t[0]){const l=e[11];b=se(b,t,P,1,e,l,w,n,ae,Ke,s,qe)}32848&t[0]&&r!==(r=xe(e[47],e[6],e[4]))&&k(u,"href",r),512&t[0]&&d!==(d=`width: ${100/e[9]}%`)&&k(n,"style",d),32848&t[0]&&h!==(h=$e(e[47],e[6],e[4]))&&k(n,"data-weight",h)},d(e){e&&v(n);for(let e=0;e<b.length;e+=1)b[e].d()}}}function et(e){let t,n=Array(e[14]),l=[];for(let t=0;t<n.length;t+=1)l[t]=tt(Ue(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=y()},m(e,n){for(let t=0;t<l.length;t+=1)l[t].m(e,n);g(e,t,n)},p(e,i){if(16384&i[0]){let o;for(n=Array(e[14]),o=0;o<n.length;o+=1){const c=Ue(e,n,o);l[o]?l[o].p(c,i):(l[o]=tt(),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(e){!function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(l,e),e&&v(t)}}}function tt(t){let n,l,i,o,c,a,s;return{c(){n=_("div"),l=_("div"),l.textContent="Loading 000",i=x(),o=_("div"),o.textContent=""+"░".repeat(20),c=x(),a=_("div"),a.textContent=""+"░".repeat(20),s=x(),k(o,"class","fontline"),k(a,"class","fontline blank"),k(n,"class","font")},m(e,t){g(e,n,t),p(n,l),p(n,i),p(n,o),p(n,c),p(n,a),p(n,s)},p:e,d(e){e&&v(n)}}}function nt(e){let t,n,l,o,c,a,s,u,r,f,d,h,m,$,y,w,C,O,P,E=e[9]>2&&De(),M=e[1]&&Ze(e);function S(t){e[31].call(null,t)}let L={name:Le(e[2]),id:"0",$$slots:{default:[Je]},$$scope:{ctx:e}};void 0!==e[0]&&(L.visible=e[0]);const A=new we({props:L});function H(t){e[36].call(null,t)}R.push(()=>ue(A,"visible",S));let N={name:e[13]+" Fonts",id:"1",$$slots:{default:[We]},$$scope:{ctx:e}};void 0!==e[0]&&(N.visible=e[0]);const V=new we({props:N});function T(t){e[41].call(null,t)}R.push(()=>ue(V,"visible",H));let j={name:e[8]+" Pages",id:"2",$$slots:{default:[Xe]},$$scope:{ctx:e}};void 0!==e[0]&&(j.visible=e[0]);const z=new we({props:j});R.push(()=>ue(z,"visible",T));let B={ctx:e,current:null,token:null,pending:et,then:Ge,catch:Ye,value:46,error:53};return ce(w=e[12],B),{c(){E&&E.c(),t=x(),M&&M.c(),n=x(),l=_("section"),o=_("div"),c=_("button"),c.innerHTML='\n            Options\n            <svg width="16" height="20" viewBox="0 0 16 20"><path d="M1 16.3944L1 3.6C1 2 2.78 1 4.1 2L13.7 8.336C14.8885 9.12754 14.8885 10.8725 13.7 11.6641L4.1094 18C2.78 19 1 18 1 16.3944Z" stroke="black" fill="url(#dark)" stroke-width="2"></path></svg>',a=x(),re(A.$$.fragment),u=x(),re(V.$$.fragment),f=x(),re(z.$$.fragment),h=x(),m=_("button"),m.innerHTML='\n            Print\n            <svg width="27" height="24" viewBox="-1.5 -1.5 31 28" fill="none"><rect x="6" y="0" width="17" height="11" stroke="black" stroke-width="3"></rect><rect x="5" y="14" width="17" height="11" stroke="black" stroke-width="3"></rect><rect x="0" y="8" width="28" height="11" rx="1.5" fill="url(#dark)" stroke="black" stroke-width="3"></rect></svg>',$=x(),y=_("section"),B.block.c(),k(c,"class","flex disp-small"),k(m,"class","flex light"),k(o,"class","flex buttons"),k(l,"class","margined"),k(y,"class","fonts margined")},m(i,s){E&&E.m(i,s),g(i,t,s),M&&M.m(i,s),g(i,n,s),g(i,l,s),p(l,o),p(o,c),p(o,a),fe(A,o,null),p(o,u),fe(V,o,null),p(o,f),fe(z,o,null),p(o,h),p(o,m),g(i,$,s),g(i,y,s),B.block.m(y,B.anchor=null),B.mount=()=>y,B.anchor=null,C=!0,O||(P=[b(c,"click",e[29]),b(m,"click",e[42])],O=!0)},p(l,i){(e=l)[9]>2?E||(E=De(),E.c(),E.m(t.parentNode,t)):E&&(E.d(1),E=null),e[1]?M?(M.p(e,i),2&i[0]&&ne(M,1)):(M=Ze(e),M.c(),ne(M,1),M.m(n.parentNode,n)):M&&(ee(),le(M,1,1,()=>{M=null}),te());const o={};4&i[0]&&(o.name=Le(e[2])),4&i[0]|8388608&i[1]&&(o.$$scope={dirty:i,ctx:e}),!s&&1&i[0]&&(s=!0,o.visible=e[0],D(()=>s=!1)),A.$set(o);const c={};8192&i[0]&&(c.name=e[13]+" Fonts"),120&i[0]|8388608&i[1]&&(c.$$scope={dirty:i,ctx:e}),!r&&1&i[0]&&(r=!0,c.visible=e[0],D(()=>r=!1)),V.$set(c);const a={};if(256&i[0]&&(a.name=e[8]+" Pages"),1920&i[0]|8388608&i[1]&&(a.$$scope={dirty:i,ctx:e}),!d&&1&i[0]&&(d=!0,a.visible=e[0],D(()=>d=!1)),z.$set(a),B.ctx=e,4096&i[0]&&w!==(w=e[12])&&ce(w,B));else{const t=e.slice();t[46]=B.resolved,B.block.p(t,i)}},i(e){C||(ne(M),ne(A.$$.fragment,e),ne(V.$$.fragment,e),ne(z.$$.fragment,e),C=!0)},o(e){le(M),le(A.$$.fragment,e),le(V.$$.fragment,e),le(z.$$.fragment,e),C=!1},d(e){E&&E.d(e),e&&v(t),M&&M.d(e),e&&v(n),e&&v(l),de(A),de(V),de(z),e&&v($),e&&v(y),B.block.d(),B.token=null,B=null,O=!1,i(P)}}}function lt(e,t,n){let l=-1,i=!1,o=Me,c=Ve,a=Te,s="popularity",u="thin",r=279,f=3,d=2,h=0,p=new Set,g=[];let v,_,m,$,x,y;return e.$$.update=()=>{if(2&e.$$.dirty[0]&&(document.body.style.overflow=i?"hidden":null),4&e.$$.dirty[0]&&n(11,v=o.length?o:Me),32&e.$$.dirty[0]&&n(12,_=fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBJybYSm5NLrsS7pzp1Pf0LrX62k2E8_Ns&sort="+s,{referrerPolicy:"no-referrer",mode:"cors",cache:p.has(s)?"force-cache":"default"}).then(e=>e.json()).then(e=>n(16,g=function(e){return e.map(e=>({...e,variants:e.variants.filter(e=>!e.includes("italic")).map(e=>"regular"==e?400:parseInt(e))}))}(e.items))).then(()=>"complete"===document.readyState?Promise.resolve():new Promise(e=>{const t=()=>{"complete"===document.readyState?setTimeout(e,1e3):setTimeout(t,500)};t()}))),65560&e.$$.dirty[0]&&n(17,m=g.filter(e=>(c.length?c:Ve).includes(e.category)&&e.variants.some(e=>a.includes(e)))),32&e.$$.dirty[0]&&p.add(s),131072&e.$$.dirty[0]&&n(13,$=m.length),1920&e.$$.dirty[0]&&n(14,x=function(e,t,n,l){return n=Math.max(n,1)||1,l=Math.max(l,1)||1,Math.floor((e-t)/40)*n*l}(r,h,d,f)),147456&e.$$.dirty[0]&&n(15,y=m.slice(0,x)),57856&e.$$.dirty[0]&&$<x)for(let e=0;e<(d-$%d)%d;e++)y.push({family:"Extra font #"+(e+1),variants:[100,200,300,400,500]})},[l,i,o,c,a,s,u,r,f,d,h,v,_,$,x,y,g,m,p,e=>n(1,i=!1),function(e){o=e,n(2,o)},function(e){c=e,n(3,c)},function(e){a=e,n(4,a)},function(e){s=e,n(5,s)},function(e){u=e,n(6,u)},function(e){r=e,n(7,r)},function(e){f=e,n(8,f)},function(e){d=e,n(9,d)},function(e){h=e,n(10,h)},e=>n(1,i=!i),function(e){o=e,n(2,o)},function(e){l=e,n(0,l)},function(e){c=e,n(3,c)},function(e){a=e,n(4,a)},function(e){s=e,n(5,s)},function(e){u=e,n(6,u)},function(e){l=e,n(0,l)},function(e){r=e,n(7,r)},function(e){f=e,n(8,f)},function(e){d=e,n(9,d)},function(e){h=e,n(10,h)},function(e){l=e,n(0,l)},e=>window.print()]}return new class extends ge{constructor(e){super(),pe(this,e,lt,nt,c,{},[-1,-1])}}({target:document.getElementById("app"),props:{}})}();
//# sourceMappingURL=bundle.js.map
