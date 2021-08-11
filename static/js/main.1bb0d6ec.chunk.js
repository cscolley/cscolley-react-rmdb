(this["webpackJsonpcscolley-react-rmdb"]=this["webpackJsonpcscolley-react-rmdb"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,u,d,p,b,h,l,m,f,x,j=t(0),g=t.n(j),v=t(15),O=t.n(v),w=t.p+"static/media/react-movie-logo.42955eb6.svg",y=t.p+"static/media/tmdb_logo.f15b6632.svg",k=t(2),S=t(3),_=S.b.div(r||(r=Object(k.a)(["\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),T=S.b.div(a||(a=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n"]))),z=S.b.img(c||(c=Object(k.a)(["\n    width: 200px;\n\n    @media screen and (max-width: 500px) {\n        width: 150px;\n    }\n"]))),M=S.b.img(i||(i=Object(k.a)(["\n    width: 100px;\n\n    @media screen and (max-width: 500px) {\n        width: 80px;\n    }\n"]))),G=t(1),B=function(){return Object(G.jsx)(_,{children:Object(G.jsxs)(T,{children:[Object(G.jsx)(z,{src:w,alt:"rmdb-logo"}),Object(G.jsx)(M,{src:y,alt:"tmdb-logo"})]})})},I="https://api.themoviedb.org/3/",q="1ea4c57633be8180be67bf7e1f0d8819",J="".concat(I,"search/movie?api_key=").concat(q,"&language=en-US&query="),W="".concat(I,"movie/popular?api_key=").concat(q,"&language=en-US"),C="".concat(I,"authentication/token/new?api_key=").concat(q),E="".concat(I,"authentication/token/validate_with_login?api_key=").concat(q),N="".concat(I,"authentication/session/new?api_key=").concat(q),L="http://image.tmdb.org/t/p/",R=S.b.div(o||(o=Object(k.a)(["\n    background: linear-gradient(\n            to bottom,\n            rgba(0, 0, 0, 0) 41%,\n            rgba(0, 0, 0, 0.65) 100%\n        ),\n        url(","), var(--darkGrey);\n    background-size: 100%, cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animateHeroImage 1s;\n\n    @keyframes animateHeroImage {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n    \n"])),(function(n){return n.image})),A=S.b.div(s||(s=Object(k.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n"]))),H=S.b.div(u||(u=Object(k.a)(["\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    color: var(--white);\n\n    h1 {\n        font-size: var(--fontSuperBig);\n\n        @media screen and (max-width: 720px) {\n            font-size: var(--fontBig);\n        }\n    }\n\n    p {\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px) {\n            font-size: var(--fontSmall);\n        }\n    }\n\n    @media screen and (max-width: 720px) {\n        max-width: 100%;\n    }\n"]))),P=function(n){var e=n.image,t=n.title,r=n.text;return Object(G.jsx)(R,{image:e,children:Object(G.jsx)(A,{children:Object(G.jsxs)(H,{children:[Object(G.jsx)("h1",{children:t}),Object(G.jsx)("p",{children:r})]})})})},U=S.b.div(d||(d=Object(k.a)(["\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    padding: 0 20px;\n\n    h1 {\n        color: var(--medGrey);\n\n        @media screen and (max-width: 768px) {\n            font-size: var(--fontBig);\n        }\n    }\n"]))),F=S.b.div(p||(p=Object(k.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 2rem;\n"]))),D=function(n){var e=n.header,t=n.children;return Object(G.jsxs)(U,{children:[Object(G.jsx)("h1",{children:e}),Object(G.jsx)(F,{children:t})]})},K=S.b.img(b||(b=Object(k.a)(["\n    width: 100%;\n    max-width: 720px;\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n    animation: animateThumb 0.5s;\n\n    :hover {\n        opacity: 0.8;\n    }\n\n    @keyframes animateThumb {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n"]))),Q=function(n){var e=n.image;n.movieId,n.clickable;return Object(G.jsx)("div",{children:Object(G.jsx)(K,{src:e,alt:"movie-thumb"})})},V=S.b.div(h||(h=Object(k.a)(["\n    border: 5px solid var(--lightGrey);\n    border-top: 5px solid var(--medGrey);\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin 0.8s linear infinite;\n    margin: 20px auto;\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"]))),X=t(7),Y=t.p+"static/media/search-icon.cd820f5a.svg",Z=S.b.div(l||(l=Object(k.a)(["\n    display: flex;\n    align-items: center;\n    height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),$=S.b.div(m||(m=Object(k.a)(["\n    position: relative;\n    max-width: var(--maxWidth);\n    width: 100%;\n    height: 55px;\n    background: var(--medGrey);\n    margin: 0 auto;\n    border-radius: 40px;\n    color: var(--white);\n\n    img {\n        position: absolute;\n        left: 15px;\n        top: 14px;\n        width: 30px;\n    }\n\n    input {\n        font-size: var(--fontBig);\n        position: absolute;\n        left: 0;\n        margin: 8px 0;\n        padding: 0 0 0 60px;\n        border: 0;\n        width: 95%;\n        background: transparent;\n        height: 40px;\n        color: var(--white);\n\n        :focus {\n            outline: none;\n        }\n    }\n"]))),nn=function(n){var e=n.setSearchTerm,t=Object(j.useState)(""),r=Object(X.a)(t,2),a=r[0],c=r[1],i=Object(j.useRef)(!0);return Object(j.useEffect)((function(){if(!i.current){var n=setTimeout((function(){e(a)}),500);return function(){return clearTimeout(n)}}i.current=!1}),[e,a]),Object(G.jsx)(Z,{children:Object(G.jsxs)($,{children:[Object(G.jsx)("img",{src:Y,alt:"search-icon"}),Object(G.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:function(n){return c(n.currentTarget.value)},value:a})]})})},en=S.b.button(f||(f=Object(k.a)(["\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width: 200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover {\n        opacity: 0.8;\n    }\n"]))),tn=function(n){var e=n.text,t=n.calllback;return Object(G.jsx)(en,{type:"button",onClick:t,children:e})},rn=t(4),an=t.n(rn),cn=t(11),on=t(5),sn=t(6),un={method:"POST",headers:{"Content-Type":"application/json"}},dn={fetchMovies:function(){var n=Object(sn.a)(an.a.mark((function n(e,t){var r;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"".concat(J).concat(e,"&page=").concat(t):"".concat(W,"&page=").concat(t),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(sn.a)(an.a.mark((function n(e){var t;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(I,"movie/").concat(e,"?api_key=").concat(q),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(sn.a)(an.a.mark((function n(e){var t;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(I,"movie/").concat(e,"/credits?api_key=").concat(q),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(sn.a)(an.a.mark((function n(){var e;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(C);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(sn.a)(an.a.mark((function n(e,t,r){var a,c;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={username:t,password:r,request_token:e},n.next=3,fetch(E,Object(on.a)(Object(on.a)({},un),{},{body:JSON.stringify(a)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(N,Object(on.a)(Object(on.a)({},un),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(sn.a)(an.a.mark((function n(e,t,r){var a,c;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat(I,"movie/").concat(t,"/rating?api_key=").concat(q,"&session_id=").concat(e),n.next=3,fetch(a,Object(on.a)(Object(on.a)({},un),{},{body:JSON.stringify({value:r})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},pn={page:0,results:[],total_pages:0,total_results:0},bn=t.p+"static/media/no_image.22d2aa4d.jpg",hn=function(){var n=function(){var n=Object(j.useState)(""),e=Object(X.a)(n,2),t=e[0],r=e[1],a=Object(j.useState)(pn),c=Object(X.a)(a,2),i=c[0],o=c[1],s=Object(j.useState)(!1),u=Object(X.a)(s,2),d=u[0],p=u[1],b=Object(j.useState)(!1),h=Object(X.a)(b,2),l=h[0],m=h[1],f=Object(j.useState)(!1),x=Object(X.a)(f,2),g=x[0],v=x[1];console.log(t);var O=function(){var n=Object(sn.a)(an.a.mark((function n(e){var t,r,a=arguments;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",n.prev=1,m(!1),p(!0),n.next=6,dn.fetchMovies(t,e);case 6:r=n.sent,o((function(n){return Object(on.a)(Object(on.a)({},r),{},{results:e>1?[].concat(Object(cn.a)(n.results),Object(cn.a)(r.results)):Object(cn.a)(r.results)})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),m(!0);case 13:p(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(j.useEffect)((function(){o(pn),O(1,t)}),[t]),Object(j.useEffect)((function(){g&&(O(i.page+1,t),v(!1))}),[g,t,i.page]),{state:i,loading:d,error:l,searchTerm:t,setSearchTerm:r,setIsLoadingMore:v}}(),e=n.state,t=n.loading,r=n.error,a=n.searchTerm,c=n.setSearchTerm,i=n.setIsLoadingMore;return console.log(e),r?Object(G.jsx)("div",{children:"Something went wrong..."}):Object(G.jsxs)(G.Fragment,{children:[!a&&e.results[0]?Object(G.jsx)(P,{image:"".concat(L).concat("w1280").concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,Object(G.jsx)(nn,{setSearchTerm:c}),Object(G.jsx)(D,{header:a?"Search Result":"Popular Movies",children:e.results.map((function(n){return Object(G.jsx)(Q,{clickable:!0,image:n.poster_path?L+"w780"+n.poster_path:bn,movieId:n.id},n.id)}))}),t&&Object(G.jsx)(V,{}),e.page<e.total_pages&&!t&&Object(G.jsx)(tn,{text:"Load More",calllback:function(){return i(!0)}})]})},ln=Object(S.a)(x||(x=Object(k.a)(['\n    :root {\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: "Abel", sans-serif;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n\n        h1 {\n            font-size: 2rem;\n            font-weight: 600;\n            color: var(--white);\n        }\n\n        h3 {\n            font-size: 1.1.rem;\n            font-weight: 600;\n        }\n\n        p {\n            font-size: 1rem;\n            color: var(--white);\n        }\n    }\n\n\n'])));var mn=function(){return Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)(B,{}),Object(G.jsx)(hn,{}),Object(G.jsx)(ln,{})]})};O.a.render(Object(G.jsx)(g.a.StrictMode,{children:Object(G.jsx)(mn,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.1bb0d6ec.chunk.js.map