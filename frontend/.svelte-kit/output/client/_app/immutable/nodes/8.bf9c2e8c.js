import{s as Ne,f as h,a as g,l as I,g as p,h as T,r as $,c as b,d as m,m as E,j as v,R as Oe,i as y,u as r,v as Z,n as X,w as se,x as st,e as je,o as Ct,Q as Ve}from"../chunks/scheduler.7c1da786.js";import{S as Pe,i as De,a as N,g as Te,t as M,c as we,b as _e,d as de,m as ve,e as ge}from"../chunks/index.7a22757c.js";import{g as Y}from"../chunks/navigation.8a75274b.js";import{M as Tt}from"../chunks/Modal.2266bf6a.js";import{c as Ie,s as kt,a as wt,o as Be}from"../chunks/ModalValues.a888a47e.js";import{b as yt,g as jt,t as lt,c as It,m as Et}from"../chunks/store.7f25bae6.js";import{E as Nt}from"../chunks/ErrorModal.8ee92fb9.js";import{G as Pt}from"../chunks/GoogleAuth.ff4d48a1.js";function Dt(n){let e,l,t="That is your Cookie Bro, Enjoy !!!",s,c,a,i,o,f,u,_,z,q,d,C,w,F,V,G,ie="Make a Choice Son !",ee,H,R="Garder",ne,L,D="C'est pas Top !",A,S;return{c(){e=h("div"),l=h("h3"),l.textContent=t,s=g(),c=h("div"),a=h("img"),o=g(),f=h("div"),u=h("p"),_=I("Login : "),z=I(n[1]),q=g(),d=h("p"),C=I("Name : "),w=I(n[2]),F=g(),V=h("div"),G=h("div"),G.textContent=ie,ee=g(),H=h("button"),H.textContent=R,ne=g(),L=h("button"),L.textContent=D,this.h()},l(B){e=p(B,"DIV",{class:!0});var O=T(e);l=p(O,"H3",{"data-svelte-h":!0}),$(l)!=="svelte-1km2ytl"&&(l.textContent=t),s=b(O),c=p(O,"DIV",{class:!0});var Q=T(c);a=p(Q,"IMG",{class:!0,src:!0,alt:!0}),Q.forEach(m),o=b(O),f=p(O,"DIV",{class:!0});var re=T(f);u=p(re,"P",{});var fe=T(u);_=E(fe,"Login : "),z=E(fe,n[1]),fe.forEach(m),q=b(re),d=p(re,"P",{});var pe=T(d);C=E(pe,"Name : "),w=E(pe,n[2]),pe.forEach(m),re.forEach(m),O.forEach(m),F=b(B),V=p(B,"DIV",{class:!0});var K=T(V);G=p(K,"DIV",{class:!0,"data-svelte-h":!0}),$(G)!=="svelte-1dyboml"&&(G.textContent=ie),ee=b(K),H=p(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(H)!=="svelte-1d3eaar"&&(H.textContent=R),ne=b(K),L=p(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(L)!=="svelte-1fva4b3"&&(L.textContent=D),K.forEach(m),this.h()},h(){v(a,"class","profile-pic svelte-n1ryty"),Oe(a.src,i=n[0])||v(a,"src",i),v(a,"alt",": 🤖 👨🏻‍🌾 Error  🍪 🤣 :"),v(c,"class","svelte-n1ryty"),v(f,"class","svelte-n1ryty"),v(e,"class","svelte-n1ryty"),v(G,"class","svelte-n1ryty"),v(H,"class","svelte-n1ryty"),v(L,"class","svelte-n1ryty"),v(V,"class","svelte-n1ryty")},m(B,O){y(B,e,O),r(e,l),r(e,s),r(e,c),r(c,a),r(e,o),r(e,f),r(f,u),r(u,_),r(u,z),r(f,q),r(f,d),r(d,C),r(d,w),y(B,F,O),y(B,V,O),r(V,G),r(V,ee),r(V,H),r(V,ne),r(V,L),A||(S=[Z(H,"click",n[3]),Z(L,"click",n[4])],A=!0)},p(B,[O]){O&1&&!Oe(a.src,i=B[0])&&v(a,"src",i),O&2&&X(z,B[1]),O&4&&X(w,B[2])},i:se,o:se,d(B){B&&(m(e),m(F),m(V)),A=!1,st(S)}}}function $t(n,e,l){let{image:t}=e,{login:s}=e,{username:c}=e;async function a(){const o=localStorage.getItem("jwt"),f={login:s,img:t};(await fetch("http://localhost:3000/auth/changeImage",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({data:f})})).ok&&console.log("-[ Change Image ]- New Image bien Set"),Ie(),Y("/")}async function i(){Ie(),Y("/")}return n.$$set=o=>{"image"in o&&l(0,t=o.image),"login"in o&&l(1,s=o.login),"username"in o&&l(2,c=o.username)},[t,s,c,a,i]}class At extends Pe{constructor(e){super(),De(this,e,$t,Dt,Ne,{image:0,login:1,username:2})}}function ht(n){let e,l="Enabling Google Authenticator",t,s,c="Authenticate Yourself to enable 2fa",a,i,o;return i=new Pt({props:{QrCode:n[2],login:n[0]}}),{c(){e=h("div"),e.textContent=l,t=g(),s=h("div"),s.textContent=c,a=g(),_e(i.$$.fragment)},l(f){e=p(f,"DIV",{"data-svelte-h":!0}),$(e)!=="svelte-rr24xi"&&(e.textContent=l),t=b(f),s=p(f,"DIV",{"data-svelte-h":!0}),$(s)!=="svelte-1ovwphr"&&(s.textContent=c),a=b(f),de(i.$$.fragment,f)},m(f,u){y(f,e,u),y(f,t,u),y(f,s,u),y(f,a,u),ve(i,f,u),o=!0},p(f,u){const _={};u&4&&(_.QrCode=f[2]),u&1&&(_.login=f[0]),i.$set(_)},i(f){o||(N(i.$$.fragment,f),o=!0)},o(f){M(i.$$.fragment,f),o=!1},d(f){f&&(m(e),m(t),m(s),m(a)),ge(i,f)}}}function St(n){let e,l,t=n[1]&&ht(n);return{c(){t&&t.c(),e=je()},l(s){t&&t.l(s),e=je()},m(s,c){t&&t.m(s,c),y(s,e,c),l=!0},p(s,[c]){s[1]?t?(t.p(s,c),c&2&&N(t,1)):(t=ht(s),t.c(),N(t,1),t.m(e.parentNode,e)):t&&(Te(),M(t,1,1,()=>{t=null}),we())},i(s){l||(N(t),l=!0)},o(s){M(t),l=!1},d(s){s&&m(e),t&&t.d(s)}}}function Mt(n,e,l){let t;kt.subscribe(i=>{l(1,t=i)});let{login:s}=e,c;yt.subscribe(i=>{});async function a(){const i=localStorage.getItem("jwt"),o=await fetch("http://localhost:3000/auth/enable_2fa",{method:"GET",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}});if(o.ok){console.log("-[ Enable 2fa ]- OK");let f=await o.json();l(2,c=f.url)}else Ie(),Y("/")}return Ct(()=>{a()}),n.$$set=i=>{"login"in i&&l(0,s=i.login)},[s,t,c]}class Vt extends Pe{constructor(e){super(),De(this,e,Mt,St,Ne,{login:0})}}function Bt(n){let e,l="Desabling Google Authentificator",t,s,c="Confirm your choice :",a,i,o,f="Confirm",u,_,z="No",q,d;return{c(){e=h("div"),e.textContent=l,t=g(),s=h("div"),s.textContent=c,a=g(),i=h("div"),o=h("button"),o.textContent=f,u=g(),_=h("button"),_.textContent=z,this.h()},l(C){e=p(C,"DIV",{"data-svelte-h":!0}),$(e)!=="svelte-jazmy6"&&(e.textContent=l),t=b(C),s=p(C,"DIV",{"data-svelte-h":!0}),$(s)!=="svelte-kg0bbi"&&(s.textContent=c),a=b(C),i=p(C,"DIV",{});var w=T(i);o=p(w,"BUTTON",{class:!0,"data-svelte-h":!0}),$(o)!=="svelte-86ed60"&&(o.textContent=f),u=b(w),_=p(w,"BUTTON",{class:!0,"data-svelte-h":!0}),$(_)!=="svelte-xy3i54"&&(_.textContent=z),w.forEach(m),this.h()},h(){v(o,"class","svelte-18uqrg"),v(_,"class","svelte-18uqrg")},m(C,w){y(C,e,w),y(C,t,w),y(C,s,w),y(C,a,w),y(C,i,w),r(i,o),r(i,u),r(i,_),q||(d=[Z(o,"click",n[0]),Z(_,"click",n[2])],q=!0)},p:se,i:se,o:se,d(C){C&&(m(e),m(t),m(s),m(a),m(i)),q=!1,st(d)}}}function Ot(n,e,l){let{login:t}=e;async function s(){const a=localStorage.getItem("jwt"),i={login:t};(await fetch("http://localhost:3000/auth/disable_2fa",{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({data:i})})).ok&&console.log("-[ Disable 2fa ]- OK "),yt.set(!1),jt.set(!1),lt.set(!1),Ie(),Y("/")}const c=()=>{Ie(),Y("/Profile")};return n.$$set=a=>{"login"in a&&l(1,t=a.login)},[s,t,c]}class Gt extends Pe{constructor(e){super(),De(this,e,Ot,Bt,Ne,{login:1})}}function Ut(n){let e,l,t,s,c,a,i,o="You will get a Cookie if you are a Good Boy",f,u,_,z,q,d,C,w,F,V,G,ie,ee,H,R,ne,L,D,A,S,B,O,Q,re,fe,pe,K,Ge,Ue,oe,xe,te,ze,ce,nt="Change",Le,$e,J,qe,le,He,ue,ot="Change",Je,me,at="Preview",Qe,Ye,be,it="You could try : images/defaultAvatar.jpg",Fe,Ce,rt="You could try : images/backgroundImg.jpg",Re,he,ke,ft="Google Authentificator :",Ke,We,ct,U=n[10]!==""&&pt(n),x=n[11]!==""&&_t(n);function ut(k,j){return k[2]===!0?Lt:zt}let Ae=ut(n),W=Ae(n);return{c(){e=h("div"),l=h("h1"),t=I("That is * "),s=I(n[13]),c=I(" * Profil Bro !"),a=g(),i=h("h3"),i.textContent=o,f=g(),u=h("div"),_=h("img"),q=g(),d=h("div"),C=h("p"),w=I("Login : "),F=I(n[3]),V=g(),G=h("p"),ie=I("Name : "),ee=I(n[13]),H=g(),R=h("p"),ne=I("Rank : "),L=I(n[5]),D=g(),A=h("p"),S=I("Title : "),B=I(n[6]),O=g(),Q=h("p"),re=I("Total Won: "),fe=I(n[7]),pe=I(" - "),K=I(n[8]),Ge=I(" :Lost"),Ue=g(),oe=h("p"),xe=I(`Change username
				`),te=h("input"),ze=g(),ce=h("button"),ce.textContent=nt,Le=g(),U&&U.c(),$e=g(),J=h("p"),qe=I(`Change Avatar (.ly !)
				`),le=h("input"),He=g(),ue=h("button"),ue.textContent=ot,Je=g(),me=h("button"),me.textContent=at,Qe=g(),x&&x.c(),Ye=g(),be=h("div"),be.textContent=it,Fe=g(),Ce=h("div"),Ce.textContent=rt,Re=g(),he=h("div"),ke=h("span"),ke.textContent=ft,Ke=g(),W.c(),this.h()},l(k){e=p(k,"DIV",{class:!0});var j=T(e);l=p(j,"H1",{class:!0});var Se=T(l);t=E(Se,"That is * "),s=E(Se,n[13]),c=E(Se," * Profil Bro !"),Se.forEach(m),a=b(j),i=p(j,"H3",{class:!0,"data-svelte-h":!0}),$(i)!=="svelte-khmq8q"&&(i.textContent=o),f=b(j),u=p(j,"DIV",{});var mt=T(u);_=p(mt,"IMG",{class:!0,src:!0,alt:!0}),mt.forEach(m),q=b(j),d=p(j,"DIV",{});var P=T(d);C=p(P,"P",{class:!0});var Xe=T(C);w=E(Xe,"Login : "),F=E(Xe,n[3]),Xe.forEach(m),V=b(P),G=p(P,"P",{class:!0});var Ze=T(G);ie=E(Ze,"Name : "),ee=E(Ze,n[13]),Ze.forEach(m),H=b(P),R=p(P,"P",{class:!0});var et=T(R);ne=E(et,"Rank : "),L=E(et,n[5]),et.forEach(m),D=b(P),A=p(P,"P",{class:!0});var tt=T(A);S=E(tt,"Title : "),B=E(tt,n[6]),tt.forEach(m),O=b(P),Q=p(P,"P",{class:!0});var ye=T(Q);re=E(ye,"Total Won: "),fe=E(ye,n[7]),pe=E(ye," - "),K=E(ye,n[8]),Ge=E(ye," :Lost"),ye.forEach(m),Ue=b(P),oe=p(P,"P",{class:!0});var Ee=T(oe);xe=E(Ee,`Change username
				`),te=p(Ee,"INPUT",{type:!0,placeholder:!0,class:!0}),ze=b(Ee),ce=p(Ee,"BUTTON",{class:!0,"data-svelte-h":!0}),$(ce)!=="svelte-ueto28"&&(ce.textContent=nt),Ee.forEach(m),Le=b(P),U&&U.l(P),$e=b(P),J=p(P,"P",{class:!0});var ae=T(J);qe=E(ae,`Change Avatar (.jpg only !)
				`),le=p(ae,"INPUT",{type:!0,placeholder:!0,class:!0}),He=b(ae),ue=p(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),$(ue)!=="svelte-4vx16m"&&(ue.textContent=ot),Je=b(ae),me=p(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),$(me)!=="svelte-f7q7q3"&&(me.textContent=at),Qe=b(ae),x&&x.l(ae),ae.forEach(m),Ye=b(P),be=p(P,"DIV",{"data-svelte-h":!0}),$(be)!=="svelte-14v492x"&&(be.textContent=it),Fe=b(P),Ce=p(P,"DIV",{"data-svelte-h":!0}),$(Ce)!=="svelte-b8tgm8"&&(Ce.textContent=rt),Re=b(P),he=p(P,"DIV",{});var Me=T(he);ke=p(Me,"SPAN",{"data-svelte-h":!0}),$(ke)!=="svelte-1mw4z0p"&&(ke.textContent=ft),Ke=b(Me),W.l(Me),Me.forEach(m),P.forEach(m),j.forEach(m),this.h()},h(){v(l,"class","svelte-ixosjt"),v(i,"class","svelte-ixosjt"),v(_,"class","profile-pic svelte-ixosjt"),Oe(_.src,z=n[4])||v(_,"src",z),v(_,"alt",": 🤖 👨🏻‍🌾 Error  🍪 🤣 :"),v(C,"class","svelte-ixosjt"),v(G,"class","svelte-ixosjt"),v(R,"class","svelte-ixosjt"),v(A,"class","svelte-ixosjt"),v(Q,"class","svelte-ixosjt"),v(te,"type","text"),v(te,"placeholder","new username"),v(te,"class","svelte-ixosjt"),v(ce,"class","svelte-ixosjt"),v(oe,"class","svelte-ixosjt"),v(le,"type","text"),v(le,"placeholder","avatar img link"),v(le,"class","svelte-ixosjt"),v(ue,"class","svelte-ixosjt"),v(me,"class","svelte-ixosjt"),v(J,"class","svelte-ixosjt"),v(e,"class","profile-Page svelte-ixosjt")},m(k,j){y(k,e,j),r(e,l),r(l,t),r(l,s),r(l,c),r(e,a),r(e,i),r(e,f),r(e,u),r(u,_),r(e,q),r(e,d),r(d,C),r(C,w),r(C,F),r(d,V),r(d,G),r(G,ie),r(G,ee),r(d,H),r(d,R),r(R,ne),r(R,L),r(d,D),r(d,A),r(A,S),r(A,B),r(d,O),r(d,Q),r(Q,re),r(Q,fe),r(Q,pe),r(Q,K),r(Q,Ge),r(d,Ue),r(d,oe),r(oe,xe),r(oe,te),Ve(te,n[9]),r(oe,ze),r(oe,ce),r(d,Le),U&&U.m(d,null),r(d,$e),r(d,J),r(J,qe),r(J,le),Ve(le,n[12]),r(J,He),r(J,ue),r(J,Je),r(J,me),r(J,Qe),x&&x.m(J,null),r(d,Ye),r(d,be),r(d,Fe),r(d,Ce),r(d,Re),r(d,he),r(he,ke),r(he,Ke),W.m(he,null),We||(ct=[Z(te,"input",n[16]),Z(ce,"click",n[17]),Z(le,"input",n[18]),Z(ue,"click",n[19]),Z(me,"click",n[20])],We=!0)},p(k,j){j&8192&&X(s,k[13]),j&16&&!Oe(_.src,z=k[4])&&v(_,"src",z),j&8&&X(F,k[3]),j&8192&&X(ee,k[13]),j&32&&X(L,k[5]),j&64&&X(B,k[6]),j&128&&X(fe,k[7]),j&256&&X(K,k[8]),j&512&&te.value!==k[9]&&Ve(te,k[9]),k[10]!==""?U?U.p(k,j):(U=pt(k),U.c(),U.m(d,$e)):U&&(U.d(1),U=null),j&4096&&le.value!==k[12]&&Ve(le,k[12]),k[11]!==""?x?x.p(k,j):(x=_t(k),x.c(),x.m(J,null)):x&&(x.d(1),x=null),Ae===(Ae=ut(k))&&W?W.p(k,j):(W.d(1),W=Ae(k),W&&(W.c(),W.m(he,null)))},i:se,o:se,d(k){k&&m(e),U&&U.d(),x&&x.d(),W.d(),We=!1,st(ct)}}}function xt(n){let e,l,t;return l=new Tt({props:{$$slots:{default:[qt]},$$scope:{ctx:n}}}),{c(){e=h("div"),_e(l.$$.fragment)},l(s){e=p(s,"DIV",{});var c=T(e);de(l.$$.fragment,c),c.forEach(m)},m(s,c){y(s,e,c),ve(l,e,null),t=!0},p(s,c){const a={};c&8401418&&(a.$$scope={dirty:c,ctx:s}),l.$set(a)},i(s){t||(N(l.$$.fragment,s),t=!0)},o(s){M(l.$$.fragment,s),t=!1},d(s){s&&m(e),ge(l)}}}function pt(n){let e,l;return{c(){e=h("div"),l=I(n[10]),this.h()},l(t){e=p(t,"DIV",{class:!0});var s=T(e);l=E(s,n[10]),s.forEach(m),this.h()},h(){v(e,"class","indication svelte-ixosjt")},m(t,s){y(t,e,s),r(e,l)},p(t,s){s&1024&&X(l,t[10])},d(t){t&&m(e)}}}function _t(n){let e,l;return{c(){e=h("div"),l=I(n[11]),this.h()},l(t){e=p(t,"DIV",{class:!0});var s=T(e);l=E(s,n[11]),s.forEach(m),this.h()},h(){v(e,"class","indication svelte-ixosjt")},m(t,s){y(t,e,s),r(e,l)},p(t,s){s&2048&&X(l,t[11])},d(t){t&&m(e)}}}function zt(n){let e,l,t="Enable",s,c;return{c(){e=h("span"),l=h("button"),l.textContent=t,this.h()},l(a){e=p(a,"SPAN",{});var i=T(e);l=p(i,"BUTTON",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-5gjy51"&&(l.textContent=t),i.forEach(m),this.h()},h(){v(l,"class","svelte-ixosjt")},m(a,i){y(a,e,i),r(e,l),s||(c=Z(l,"click",n[22]),s=!0)},p:se,d(a){a&&m(e),s=!1,c()}}}function Lt(n){let e,l,t="Disable",s,c;return{c(){e=h("span"),l=h("button"),l.textContent=t,this.h()},l(a){e=p(a,"SPAN",{});var i=T(e);l=p(i,"BUTTON",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-clvpb"&&(l.textContent=t),i.forEach(m),this.h()},h(){v(l,"class","svelte-ixosjt")},m(a,i){y(a,e,i),r(e,l),s||(c=Z(l,"click",n[21]),s=!0)},p:se,d(a){a&&m(e),s=!1,c()}}}function dt(n){let e,l;return e=new At({props:{image:n[12],login:n[3],username:n[13]}}),e.$on("closeModal",Ie),{c(){_e(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,s){ve(e,t,s),l=!0},p(t,s){const c={};s&4096&&(c.image=t[12]),s&8&&(c.login=t[3]),s&8192&&(c.username=t[13]),e.$set(c)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ge(e,t)}}}function vt(n){let e,l;return e=new Nt({props:{msg:"username [ "+n[9]+" ] is already used !"}}),{c(){_e(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,s){ve(e,t,s),l=!0},p(t,s){const c={};s&512&&(c.msg="username [ "+t[9]+" ] is already used !"),e.$set(c)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ge(e,t)}}}function gt(n){let e,l;return e=new Vt({props:{login:n[3]}}),{c(){_e(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,s){ve(e,t,s),l=!0},p(t,s){const c={};s&8&&(c.login=t[3]),e.$set(c)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ge(e,t)}}}function bt(n){let e,l;return e=new Gt({props:{login:n[3]}}),{c(){_e(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,s){ve(e,t,s),l=!0},p(t,s){const c={};s&8&&(c.login=t[3]),e.$set(c)},i(t){l||(N(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ge(e,t)}}}function qt(n){let e,l,t,s,c,a=n[1]==="Try Avatar"&&dt(n),i=n[1]==="errorMsg"&&vt(n),o=n[1]==="Try Enable 2fa"&&gt(n),f=n[1]==="Try Disable 2fa"&&bt(n);return{c(){a&&a.c(),e=g(),i&&i.c(),l=g(),o&&o.c(),t=g(),f&&f.c(),s=je()},l(u){a&&a.l(u),e=b(u),i&&i.l(u),l=b(u),o&&o.l(u),t=b(u),f&&f.l(u),s=je()},m(u,_){a&&a.m(u,_),y(u,e,_),i&&i.m(u,_),y(u,l,_),o&&o.m(u,_),y(u,t,_),f&&f.m(u,_),y(u,s,_),c=!0},p(u,_){u[1]==="Try Avatar"?a?(a.p(u,_),_&2&&N(a,1)):(a=dt(u),a.c(),N(a,1),a.m(e.parentNode,e)):a&&(Te(),M(a,1,1,()=>{a=null}),we()),u[1]==="errorMsg"?i?(i.p(u,_),_&2&&N(i,1)):(i=vt(u),i.c(),N(i,1),i.m(l.parentNode,l)):i&&(Te(),M(i,1,1,()=>{i=null}),we()),u[1]==="Try Enable 2fa"?o?(o.p(u,_),_&2&&N(o,1)):(o=gt(u),o.c(),N(o,1),o.m(t.parentNode,t)):o&&(Te(),M(o,1,1,()=>{o=null}),we()),u[1]==="Try Disable 2fa"?f?(f.p(u,_),_&2&&N(f,1)):(f=bt(u),f.c(),N(f,1),f.m(s.parentNode,s)):f&&(Te(),M(f,1,1,()=>{f=null}),we())},i(u){c||(N(a),N(i),N(o),N(f),c=!0)},o(u){M(a),M(i),M(o),M(f),c=!1},d(u){u&&(m(e),m(l),m(t),m(s)),a&&a.d(u),i&&i.d(u),o&&o.d(u),f&&f.d(u)}}}function Ht(n){let e,l,t,s;const c=[xt,Ut],a=[];function i(o,f){return o[0]?0:1}return e=i(n),l=a[e]=c[e](n),{c(){l.c(),t=je()},l(o){l.l(o),t=je()},m(o,f){a[e].m(o,f),y(o,t,f),s=!0},p(o,[f]){let u=e;e=i(o),e===u?a[e].p(o,f):(Te(),M(a[u],1,1,()=>{a[u]=null}),we(),l=a[e],l?l.p(o,f):(l=a[e]=c[e](o),l.c()),N(l,1),l.m(t.parentNode,t))},i(o){s||(N(l),s=!0)},o(o){M(l),s=!1},d(o){o&&m(t),a[e].d(o)}}}function Jt(n,e,l){let t,s,c;kt.subscribe(D=>{l(0,c=D)});let a;wt.subscribe(D=>{l(1,a=D)});let i=!1,o,f,u,_,z,q,d="",C="",w="";Ct(async()=>{try{const D=localStorage.getItem("jwt");if(!D)Y("/");else{const A=await fetch("http://localhost:3000/user/profile",{method:"GET",headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"}});if(console.log(" -[ Profile ]- response: ",A),A.ok){const S=await A.json();console.log(" -[ Profile ]- User: ",S),console.log("Salut du Profile"),l(3,o=S.login),l(4,f=S.avatar),l(13,s=S.userName),l(5,u=S.rank),l(6,_=S.title),l(7,z=S.wonGameNbr),l(8,q=S.lostGameNbr),lt.set(S.fa2),console.log("2fa Value from user: [ ",S.fa2," ]")}else localStorage.clear(),It.set(!1),Y("/")}}catch{}lt.subscribe(D=>{l(2,i=D)})});async function F(){console.log("login ",o,"    newUserame: ",d);const D=localStorage.getItem("jwt"),A={login:o,newUsername:d};(await fetch("http://localhost:3000/auth/changeName",{method:"POST",headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"},body:JSON.stringify({data:A})})).ok?(console.log("response.ok"),l(13,s=d),Et.set(d),Y("/")):(Be("errorMsg"),Y("/Profile"))}async function V(){const D=localStorage.getItem("jwt"),A={login:o,img:t};(await fetch("http://localhost:3000/auth/changeImage",{method:"POST",headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"},body:JSON.stringify({data:A})})).ok&&console.log("-[ Change Image ]- New Image bien Set"),Y("/")}function G(){d=this.value,l(9,d)}const ie=async()=>{d.length?d.length>20?l(10,C="20 char Max"):F():l(10,C="Cannot be empty")};function ee(){t=this.value,l(12,t)}const H=async()=>{t.length?t.length>200?l(11,w="200 char Max"):V():l(11,w="Cannot be empty")},R=async()=>{t.length?t.length>200?l(11,w="200 char Max"):(Be("Try Avatar"),Y("/Profile")):l(11,w="Cannot be empty")},ne=()=>{Be("Try Disable 2fa"),Y("/Profile")},L=()=>{Be("Try Enable 2fa"),Y("/Profile")};return l(12,t=""),l(13,s=""),[c,a,i,o,f,u,_,z,q,d,C,w,t,s,F,V,G,ie,ee,H,R,ne,L]}class Qt extends Pe{constructor(e){super(),De(this,e,Jt,Ht,Ne,{})}}function Yt(n){let e,l="",t,s,c,a,i;return a=new Qt({}),{c(){e=h("div"),e.innerHTML=l,t=g(),s=h("main"),c=h("div"),_e(a.$$.fragment),this.h()},l(o){e=p(o,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-164wv47"&&(e.innerHTML=l),t=b(o),s=p(o,"MAIN",{});var f=T(s);c=p(f,"DIV",{class:!0});var u=T(c);de(a.$$.fragment,u),u.forEach(m),f.forEach(m),this.h()},h(){v(e,"class","background svelte-1ha7zbc"),v(c,"class","box svelte-1ha7zbc")},m(o,f){y(o,e,f),y(o,t,f),y(o,s,f),r(s,c),ve(a,c,null),i=!0},p:se,i(o){i||(N(a.$$.fragment,o),i=!0)},o(o){M(a.$$.fragment,o),i=!1},d(o){o&&(m(e),m(t),m(s)),ge(a)}}}class ll extends Pe{constructor(e){super(),De(this,e,null,Yt,Ne,{})}}export{ll as component};
