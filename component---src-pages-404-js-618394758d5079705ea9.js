(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),o=n(154);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(142),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(145),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Naman Dwivedi"}}}}},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(143),s=n(146),u=function(e){e.siteTitle;return i.a.createElement("div",{style:{background:"white",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{padding:"1.45rem 1.0875rem"}},i.a.createElement(s.Grid,{fluid:!0},i.a.createElement(s.Row,null,i.a.createElement(s.Col,{lg:6,md:12},i.a.createElement("h1",{style:{margin:0,color:"#484848",textAlign:"center"}},i.a.createElement(l.Link,{to:"/",style:{color:"#484848",textDecoration:"none"}},"Naman Dwivedi"))),i.a.createElement(s.Col,{lg:6,md:12},i.a.createElement("ul",{style:{listStyle:"none",textAlign:"center"}},i.a.createElement(m,{to:"https://blog.namand.in"},"Blog"),i.a.createElement(m,{to:"mailto:namandwivedi14@gmail.com"},"Contact")))))))},m=function(e){return i.a.createElement("li",{style:{display:"inline-block",marginRight:"2rem"}},i.a.createElement("a",{style:{textDecoration:"none",color:"#484848",fontSize:"18px"},href:e.to},e.children))};u.propTypes={siteTitle:c.a.string};var d=u,p=n(153),f=n(144),g=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement(d,null),t,i.a.createElement("hr",null),i.a.createElement("div",{style:{float:"center",textAlign:"center",marginTop:"2rem"}},i.a.createElement(p.a,{icon:f.b,size:"2x",style:{cursor:"pointer"},onClick:function(){return window.open("https://github.com/naman14","_self")}}),i.a.createElement(p.a,{icon:f.d,size:"2x",onClick:function(){return window.open("https://twitter.com/naman1405","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}}),i.a.createElement(p.a,{icon:f.a,size:"2x",onClick:function(){return window.open("https://facebook.com/naman.dwivedi.10","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}}),i.a.createElement(p.a,{icon:f.c,size:"2x",onClick:function(){return window.open("https://in.linkedin.com/in/naman14","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}})),i.a.createElement("br",null),i.a.createElement("p",{style:{textAlign:"center"}},"Built with ",i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:"https://www.gatsbyjs.org/"},i.a.createElement("strong",null,"Gatsby"))),i.a.createElement("p",{style:{textAlign:"center"}},"View source on ",i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:"https://github.com/naman14/naman14.github.io"},i.a.createElement("strong",null,"Github")))))},data:a})};g.propTypes={children:c.a.node.isRequired};t.a=g},154:function(e,t,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(157),s=n.n(l),u=n(143);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Naman Dwivedi",description:"naman14",author:"@naman14"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-618394758d5079705ea9.js.map