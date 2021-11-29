(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a,r,i,c,s,o,l,d,j,m,u=n(0),b=n.n(u),g=n(25),h=n.n(g),f=(n(83),n(5)),v=n(35),p=n(46),O=n.n(p),x=n(59),w=n(13),_=n(62),y=n.n(_),S=n(137),C=n(144),k=n(20),z=n(21),F=z.a.div(a||(a=Object(k.a)(["\n  display: flex;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  @media (max-width: 991px) {\n    flex-direction: column;\n  }\n"]))),L=z.a.div(r||(r=Object(k.a)(["\n  flex: 1 0 0%;\n  padding: 2.5rem;\n  @media (max-width: 991px) {\n    padding: 1rem 1.5rem 2rem;\n  }\n"]))),D=z.a.h1(i||(i=Object(k.a)(["\n  color: #000;\n  font-size: 3rem;\n  margin-bottom: 2rem;\n  line-height: 1;\n  @media (max-width: 480px) {\n    font-size: 1.75rem;\n  }\n"]))),E=z.a.div(c||(c=Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: -0.5rem;\n"]))),I=z.a.div(s||(s=Object(k.a)(["\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n  width: 22rem;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n  }\n"]))),B=z.a.h2(o||(o=Object(k.a)(["\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  text-align: center;\n"]))),J=z.a.img(l||(l=Object(k.a)(["\n  height: 12rem;\n  width: 20rem;\n  margin-bottom: 1rem;\n"]))),P=z.a.p(d||(d=Object(k.a)(["\n  font-size: 0.875rem;\n  text-align: center;\n  margin-bottom: 1rem;\n"]))),T=z.a.div(j||(j=Object(k.a)(["\n  display: flex;\n  margin-bottom: 2rem;\n"]))),M=z.a.div(m||(m=Object(k.a)(["\n  margin-left: 2rem;\n"]))),R=n(2);function U(e){var t=e.children;return Object(R.jsxs)(u.Fragment,{children:[Object(R.jsx)(S.a,{}),Object(R.jsx)(C.a,{maxWidth:"lg",children:Object(R.jsx)(F,{children:Object(R.jsxs)(L,{children:[Object(R.jsx)(D,{children:"Comedy Films"}),t]})})})]})}var W=n(143),q=n(141),A="https://api.themoviedb.org/3/discover/movie?api_key=".concat("30681930d9f8a4d49ec75249be9647a1","&language=en-US&include_rating=true&include_adult=true&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=35");var G=function(){var e,t=Object(u.useState)([]),n=Object(w.a)(t,2),a=n[0],r=n[1],i=Object(u.useState)([]),c=Object(w.a)(i,2),s=c[0],o=c[1],l=Object(u.useState)({title:"",ratings:0}),d=Object(w.a)(l,2),j=d[0],m=d[1];return Object(u.useEffect)((function(){var e=!0;return function(){var t=Object(x.a)(O.a.mark((function t(){var n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(A);case 2:n=t.sent,a=n.data,e&&r(a.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]),Object(u.useEffect)((function(){o(a)}),[a]),Object(R.jsxs)(U,{"data-testid":"resolved",children:[Object(R.jsxs)(T,{children:[Object(R.jsxs)("div",{children:[Object(R.jsx)(W.a,{variant:"h6",children:"Search by movie title"}),Object(R.jsx)(q.a,{size:"small",placeholder:"Search",variant:"outlined",name:"title",onChange:(e="title",function(t){m(Object(v.a)(Object(v.a)({},j),{},Object(f.a)({},e,t.target.value)));var n=t.target.value;if(""!==n){var r=a.filter((function(e){return Object.values(e).join(" ").toLowerCase().includes(n.toLowerCase())}));o(r)}else o(a)}),value:j.title})]}),Object(R.jsxs)(M,{children:[Object(R.jsx)(W.a,{variant:"h6",children:"Search by average vote"}),Object(R.jsx)(q.a,{size:"small",type:"number",placeholder:"Rating",variant:"outlined",name:"rating",onChange:function(e){return function(t){m(Object(v.a)(Object(v.a)({},j),{},Object(f.a)({},e,t.target.value)));var n=t.target.value;if(0!==n){var r=a.filter((function(e){return e.vote_average>=n}));o(r)}else o(a)}}("ratings"),value:j.ratings})]})]}),Object(R.jsxs)(E,{"data-testid":"filmDiv",children:[0===s.length&&Object(R.jsx)("div",{children:"loading movies...."}),s.map((function(e,t){return Object(R.jsxs)(I,{"data-testid":"filmDataItem-".concat(t),children:[Object(R.jsx)(J,{src:"".concat("https://image.tmdb.org/t/p/original").concat(e.backdrop_path?e.backdrop_path:e.poster_path),alt:e.title}),Object(R.jsx)(B,{children:e.title}),Object(R.jsx)(P,{children:e.vote_average})]},t)}))]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};h.a.render(Object(R.jsx)(b.a.StrictMode,{children:Object(R.jsx)(G,{})}),document.getElementById("root")),H()},83:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.2dde916c.chunk.js.map