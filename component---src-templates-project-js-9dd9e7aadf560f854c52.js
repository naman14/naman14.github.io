(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.r(t);n(147);var a=n(0),r=n.n(a),i=n(150),l=n(143);t.default=function(e){var t=e.pageContext.project;return r.a.createElement(i.a,null,r.a.createElement("div",{style:{marginLeft:"20px",marginRight:"20px"}},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.description),null!=t.links?t.links.map(function(e,t){return r.a.createElement("a",{href:e},e,r.a.createElement("br",null),r.a.createElement("br",null))}):null,r.a.createElement("p",null,t.extra_desc),r.a.createElement("br",null),null!=t.images?t.images.map(function(e,t){return r.a.createElement("img",{style:{maxWidth:"250px",maxHeight:"320px",marginRight:"1rem",verticalAlign:"center"},src:"/"+e})}):null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l.Link,{to:"/"},"Back to all projects"),r.a.createElement("br",null),r.a.createElement("br",null)))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),c=n(142),o=n.n(c);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(145),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var s=n(32);n.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},147:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Naman Dwivedi"}}}}},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),c=n(51),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),l=n(4),c=n.n(l),o=n(143),u=n(146),m=function(e){e.siteTitle;return i.a.createElement("div",{style:{background:"white",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{padding:"1.45rem 1.0875rem"}},i.a.createElement(u.Grid,{fluid:!0},i.a.createElement(u.Row,null,i.a.createElement(u.Col,{lg:6,md:12},i.a.createElement("h1",{style:{margin:0,color:"#484848",textAlign:"center"}},i.a.createElement(o.Link,{to:"/",style:{color:"#484848",textDecoration:"none"}},"Naman Dwivedi"))),i.a.createElement(u.Col,{lg:6,md:12},i.a.createElement("ul",{style:{listStyle:"none",textAlign:"center"}},i.a.createElement(s,{to:"https://blog.namand.in"},"Blog"),i.a.createElement(s,{to:"mailto:namandwivedi14@gmail.com"},"Contact")))))))},s=function(e){return i.a.createElement("li",{style:{display:"inline-block",marginRight:"2rem"}},i.a.createElement("a",{style:{textDecoration:"none",color:"#484848",fontSize:"18px"},href:e.to},e.children))};m.propTypes={siteTitle:c.a.string};var d=m,p=n(153),f=n(144),g=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement(d,null),t,i.a.createElement("hr",null),i.a.createElement("div",{style:{float:"center",textAlign:"center",marginTop:"2rem"}},i.a.createElement(p.a,{icon:f.b,size:"2x",style:{cursor:"pointer"},onClick:function(){return window.open("https://github.com/naman14","_self")}}),i.a.createElement(p.a,{icon:f.d,size:"2x",onClick:function(){return window.open("https://twitter.com/naman1405","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}}),i.a.createElement(p.a,{icon:f.a,size:"2x",onClick:function(){return window.open("https://facebook.com/naman.dwivedi.10","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}}),i.a.createElement(p.a,{icon:f.c,size:"2x",onClick:function(){return window.open("https://in.linkedin.com/in/naman14","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}})),i.a.createElement("br",null),i.a.createElement("p",{style:{textAlign:"center"}},"Built with ",i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:"https://www.gatsbyjs.org/"},i.a.createElement("strong",null,"Gatsby"))),i.a.createElement("p",{style:{textAlign:"center"}},"View source on ",i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:"https://github.com/naman14/naman14.github.io"},i.a.createElement("strong",null,"Github")))))},data:a})};g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-templates-project-js-9dd9e7aadf560f854c52.js.map