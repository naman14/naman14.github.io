(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(144),o=a(150),s=(a(167),a(168),a(152)),l=(a(151),a(34),a(4)),c=a.n(l),d=a(147),m=function(e){var t=e.project;return i.a.createElement(d.Col,{lg:4,md:12,style:{marginBottom:"40px",verticalAlign:"top"}},i.a.createElement("span",{style:{verticalAlign:"top"}},i.a.createElement("img",{style:{width:"30px",height:"30px"},src:t.icon}),i.a.createElement(r.Link,{style:{textDecoration:"none"},to:"/project/"+t.name.replace(/\s/g,"")+"/"},i.a.createElement("strong",{style:{color:"#484848",verticalAlign:"top",marginLeft:"0.7rem"}},t.name))),i.a.createElement("p",{style:{marginRight:"1.5rem"}},t.description))};m.propTypes={project:c.a.object};var p=m,u=function(e){var t=e.project;return i.a.createElement(d.Col,{lg:6,md:12,style:{marginBottom:"50px"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"start"}},i.a.createElement("div",null,i.a.createElement("img",{style:{width:"90px",height:"90px"},src:t.icon})),i.a.createElement("div",{style:{marginLeft:"2rem",marginRight:"2.5rem"}},i.a.createElement("h3",null,i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:t.links[0]},t.name)),i.a.createElement("p",null,t.description),i.a.createElement("p",null,t.extra_desc))))},g=function(e){var t=e.project;return i.a.createElement(d.Col,{lg:6,md:12,style:{marginBottom:"50px"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"start"}},i.a.createElement("div",{style:{marginLeft:"0rem",marginRight:"2rem"}},null!=t.links?i.a.createElement("h3",null,i.a.createElement("a",{style:{color:"#000000",textDecoration:"none"},href:t.links[0]},t.name)):i.a.createElement("h3",null,t.name," "),i.a.createElement("p",null,t.description),i.a.createElement("p",null,t.extra_desc))))},f=function(e){var t=e.project;return i.a.createElement(d.Col,{lg:6,md:12,style:{marginBottom:"50px"}},t.images.slice(0,2).map(function(e,t){return i.a.createElement("img",{style:{maxWidth:"150px",maxHeight:"220px",marginRight:"1rem",verticalAlign:"center"},src:e})}),i.a.createElement(r.Link,{style:{textDecoration:"none",color:"#000000"},to:"/project/"+t.name.replace(/\s/g,"")+"/"},i.a.createElement("h3",{style:{lineHeight:1}},t.name)),i.a.createElement("p",{style:{paddingRight:"50px"}},t.description),i.a.createElement("p",{style:{paddingRight:"50px"}},t.extra_desc))},h=a(176);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(s.a,{title:"Naman Dwivedi",keywords:["Naman","Android","Timber"]}),i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("p",{style:{fontSize:"20px"}},"Hi! I am ",i.a.createElement("strong",null,"Naman Dwivedi")," (",i.a.createElement("strong",null,"naman14"),"). I am a software enginner primarily working on Android. Currently, I am working over at ",i.a.createElement("strong",null,"Grofers"),".I graduated in 2018 from ",i.a.createElement("strong",null,"Delhi Techonological University"),". I am a open source enthusiast and most of my work can be found on my Github. I also work as a freelancer and if you have a project that you would like me to work on, drop me a ",i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:"mailto:namandwivedi14@gmail.com"},i.a.createElement("strong",null,"mail.")))),i.a.createElement("br",null),i.a.createElement("h1",null,"Featured work"),i.a.createElement("br",null),i.a.createElement(d.Grid,{fluid:!0},i.a.createElement(d.Row,null,h.getProjects("work").map(function(e,t){return i.a.createElement(u,{project:e})}))),i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("h1",null,"Featured projects"),i.a.createElement("br",null),i.a.createElement(d.Grid,{fluid:!0},i.a.createElement(d.Row,null,h.getProjects("featured").map(function(e,t){return i.a.createElement(f,{project:e})}))),i.a.createElement("h1",null,"Open source projects"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(d.Grid,{fluid:!0},i.a.createElement(d.Row,null,h.getProjects("oss").map(function(e,t){return i.a.createElement(p,{project:e})})))),i.a.createElement("h1",null,"Talks and workshops"),i.a.createElement("br",null),i.a.createElement(d.Grid,{fluid:!0},i.a.createElement(d.Row,null,h.getProjects("talk").map(function(e,t){return i.a.createElement(g,{project:e})}))),i.a.createElement("h1",null,"Hackathons"),i.a.createElement("br",null),i.a.createElement(d.Grid,{fluid:!0},i.a.createElement(d.Row,null,h.getProjects("hackathon").map(function(e,t){return i.a.createElement(g,{project:e})}))),i.a.createElement("h1",null,"News and media"),i.a.createElement("br",null),i.a.createElement(d.Grid,{fluid:!0},i.a.createElement(d.Row,null,h.getProjects("news").map(function(e,t){return i.a.createElement(g,{project:e})}))),i.a.createElement("br",null))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return u});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(143),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(146),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(51),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Naman Dwivedi"}}}}},150:function(e,t,a){"use strict";var n=a(149),i=a(0),r=a.n(i),o=a(4),s=a.n(o),l=a(144),c=a(147),d=function(e){e.siteTitle;return r.a.createElement("div",{style:{background:"white",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{padding:"1.45rem 1.0875rem"}},r.a.createElement(c.Grid,{fluid:!0},r.a.createElement(c.Row,null,r.a.createElement(c.Col,{lg:6,md:12},r.a.createElement("h1",{style:{margin:0,color:"#484848",textAlign:"center"}},r.a.createElement(l.Link,{to:"/",style:{color:"#484848",textDecoration:"none"}},"Naman Dwivedi"))),r.a.createElement(c.Col,{lg:6,md:12},r.a.createElement("ul",{style:{listStyle:"none",textAlign:"center"}},r.a.createElement(m,{to:"https://blog.namand.in"},"Blog"),r.a.createElement(m,{to:"mailto:namandwivedi14@gmail.com"},"Contact")))))))},m=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"2rem"}},r.a.createElement("a",{style:{textDecoration:"none",color:"#484848",fontSize:"18px"},href:e.to},e.children))};d.propTypes={siteTitle:s.a.string};var p=d,u=a(154),g=a(145),f=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement(p,null),t,r.a.createElement("hr",null),r.a.createElement("div",{style:{float:"center",textAlign:"center",marginTop:"2rem"}},r.a.createElement(u.a,{icon:g.b,size:"2x",style:{cursor:"pointer"},onClick:function(){return window.open("https://github.com/naman14","_self")}}),r.a.createElement(u.a,{icon:g.d,size:"2x",onClick:function(){return window.open("https://twitter.com/naman1405","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}}),r.a.createElement(u.a,{icon:g.a,size:"2x",onClick:function(){return window.open("https://facebook.com/naman.dwivedi.10","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}}),r.a.createElement(u.a,{icon:g.c,size:"2x",onClick:function(){return window.open("https://in.linkedin.com/in/naman14","_self")},style:{marginLeft:"2.5rem",cursor:"pointer"}}))))},data:n})};f.propTypes={children:s.a.node.isRequired};t.a=f},151:function(e,t,a){var n=a(24).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||a(16)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},152:function(e,t,a){"use strict";var n=a(153),i=a(0),r=a.n(i),o=a(4),s=a.n(o),l=a(157),c=a.n(l),d=a(144);function m(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,s=e.title;return r.a.createElement(d.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var p="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Naman Dwivedi",description:"Naman Dwivedi",author:"@naman14"}}}}},167:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEeUlEQVQ4y2NgQALMzMwMbuFpYLZneAqDbUAis75HLCNMXs46lNHYPZLZ1i8GzLf2T2BQ0TdnwAp4+AUZXCMywGygoUBDzOByGfml7Mm5pZzI6i28oplAtLlPPAMnDz+mgXb+cWDaJTQF7iKHwMRwa7/4HRbesY/MvGKemnlGHzL3jMpKzchgAcmbekaBDTVxj0I1TFZVB2JYSBLYsKCoZHb7wMS1DqEZ/638E/8buoR8MnAKfmfkHvXfzDfxv5Fb+EkrrwgpsKEekWBDDex9UQ119I1gMPHPABtoG5Cw2Cki+7+JW+g1FQPrUB4BYTkOLh5pWQ1jNy0bnwPGXvH/DZzDTnh7e0Nc6hqC6WUbv3iwTTa+MU52wan/Td3D7/AJicljCW5OTRuffcaecUBDgzPBrnMNZza0dECo4BMSZzDxjmcGsY3dI2ZaBqT817X1TgaHY1gWm4iMMqOwlAKjvlMIK0hMSd/WVscp7L+Grf8hEF/QLo1BzdwVYSC/sBhDVsNksAsdAhK2O4ck/1fQt1EH8fXtfZkgtsozKBnYQiKMS5zfwivysaV39D1QagNbYmCDMFBZ25Dh969fYIljx09UX7p0+TRMrry4iKFh4jwIR0id4f///2BDz549t+zM2bPLQWygGFNweDREjZqRHZg+eOQ42Du/fnzL+frl82EQe+7q7Wz/22XA8rWn/4PpjbsOsoPoL58/zf3+7cssEHvXvsNgvXLaFhBDDe194Glv0Yp1E3fsP3Kr+9D7g9PO/njXc+CFHUyuY+dDxSmnvt3rPvb1/LrdR8+s2bBlM0xOz9YLYoaGiT2YBlrLomfvv1TfOey/oVvU3859L/7Pu/3/f9uuxwEwTY2b7+hMPPXj/+Szf/5bBGb8U7P2/a9l63dYVlFdCByOelaMDLJaZuBAl1TRc1Qzd/+v4xjyz9At8m/rzse/Z14GGrjzsQ+SgVpAA7/3Hvv8zzww/a+atc9vVQuv/+JKeuDkI6lmzMwgpW4MNlBUXtNJ2cT5v7ZD0D9914h/rTse/5155f9/oMHwLNCw+Y72hFM/fvQd+/IfaOA/NSufP8pm7v9FFLTBhYC4iiHQQDWIgWLyWs5Kxs7/Ne0D/+q5hP9tARo4A83AepCBJyEGmgWk/1W19PkNNTATbqCEij7YQCEZFVsloAu17IP/6zlH/G/e8ejvdKCXW5AN3HRbq//k9x+9R8EG/le18vmnbO75X0hOIwXsKGV9ZgZuQXGYeiZ5fduJapZev7Qdgj+27HzyZ+ZVoAt3PUF4ectdoJd//uw78e2/qV/qJ0VTt18KRo7rQMkeJM8rIg3NeuJyMD0s3EISGlp2fmYd+14/nnzu//+GLfc8YZJVa69pdB/++KPr8Ief3jlt3qBkLCytyAOSA3obkmxE5DTAtKCUEkoJEFg6zSC4YqatY1wlL0zM1C+NLahsujkIA3MHXK2oog7YMFElXYiApLoRA8TJUgyyOpZMcqD0hASS+7YyeOf1YRQ7isbOTLxismC2gpETmAYAy4WTXMfj178AAAAASUVORK5CYII=",aspectRatio:1,src:"/static/600174428ed76003f065ceb5e57a04a3/98edf/naman.png",srcSet:"/static/600174428ed76003f065ceb5e57a04a3/1e42c/naman.png 75w,\n/static/600174428ed76003f065ceb5e57a04a3/c2124/naman.png 150w,\n/static/600174428ed76003f065ceb5e57a04a3/98edf/naman.png 192w",sizes:"(max-width: 192px) 100vw, 192px"}}}}}},168:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var i,r=n(a(7)),o=n(a(52)),s=n(a(158)),l=n(a(159)),c=n(a(0)),d=n(a(4)),m=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},u=function(e){var t=m(e),a=t.fluid?t.fluid.src:t.fixed.src;return p[a]||!1},g=[];var f=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),g.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},r,{onLoad:n,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var w=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!1,r=t.fadeIn,s=u(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:i,fadeIn:r,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:u(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&f(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:u(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),a=t.fluid?t.fluid.src:t.fixed.src,p[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,p=void 0===d?{}:d,u=e.placeholderClassName,g=e.fluid,f=e.fixed,w=e.backgroundColor,b=e.Tag,v="boolean"==typeof w?"lightgray":w,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,p),k=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),A={title:t,alt:this.state.isVisible?"":a,style:E,className:u};if(g){var S=g;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&c.default.createElement(y,(0,l.default)({src:S.base64},A)),S.tracedSVG&&c.default.createElement(y,(0,l.default)({src:S.tracedSVG},A)),v&&c.default.createElement(b,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),c.default.createElement(y,{alt:a,title:t,src:S.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},S))}}))}if(f){var j=f,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete x.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&c.default.createElement(y,(0,l.default)({src:j.base64},A)),j.tracedSVG&&c.default.createElement(y,(0,l.default)({src:j.tracedSVG},A)),v&&c.default.createElement(b,{title:t,style:{backgroundColor:v,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(c.default.Component);w.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});w.propTypes={resolutions:b,sizes:v,fixed:b,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var E=w;t.default=E},176:function(e,t,a){a(74),a(75);var n=a(177);t.getProjects=function(e){return n.filter(function(t){return t.tags.includes(e)})}},177:function(e){e.exports=[{name:"Grofers",description:"Online grocery delivery platform",extra_desc:"Working on the consumer Android app of Grofers. Was previously an intern at Grofers when developed an image loading library for Android with specific features required for the Grofers consumer app like Priority TTL LRU disk cache and custom animator support for displaying images.",tags:["work","android","java"],icon:"images/grofers_icon.jpg",links:["https://grofers.com"]},{name:"Google Summer of Code",description:"Mifos Initiative",extra_desc:"Created a mobile wallet framework based on top of Apache Fineract using clean architecture and supporting merchant payments, store of value, transfers and payments. Currently serving as a GSOC mentor for the project.",tags:["work","android","java"],icon:"images/gsoc.png",links:["https://summerofcode.withgoogle.com/archive/2017/projects/5863386004848640/","https://github.com/openMF/mobile-wallet"]},{name:"Prime Minister's Office",description:"Official app of the Indian Prime Minister's office",extra_desc:"Built the official app of the Indian Prime Minister's office after winning a large contest in collaboration with Google and Government of India. This app gives citizens access to critical information about flagship programmes. In addition, the app provides an overview of the Prime Minister’s major initiatives, news and social media updates, audio recordings and videos of 'Mann Ki Baat' with the PM , all this and more in 10 Indian languages.",tags:["work","featured","android","java","all"],icon:"images/pmo_icon.png",images:["images/pmo_screen1.png","images/pmo_screen2.png","images/pmo_screen3.png","images/pmo_pic.jpg","images/pmo_pic2.png","images/pmo_pic3.jpg"],links:["https://googleindia.blogspot.in/2016/08/with-new-app-prime-minister-is-just-tap.html?m=1","https://play.google.com/store/apps/details?id=com.sanskrit.pmo&hl=en"]},{name:"Player Known Battle Grounds",description:"Built at Hack In Out 2018, PKBG is a game inspired by a crossover of Fornite and PUBG with 1:1 games being played in AR world built with Sceneform and cloud anchors and using machine learning to detect potential bullet hits to the players ",extra_desc:"PKBG brings the familiar PUBG / CS:GO like shooting dynamics, combined with Fortnite's building mechanics that allow us to build walls around us in an AR world and then engage in a shootout with real people who can hide behind virtual walls.",tags:["featured","android","java","oss","all"],icon:"images/github.png",images:["images/pkbg_screen1.jpg","images/pkbg_screen2.jpg"],links:["https://devfolio.co/submissions/player-known-battle-grounds","https://github.com/teamOSC/PKBG_AR"]},{name:"Mifos Mobile Wallet",description:"A reference implementation of Mifos platform wallet and payment capabilities using Apache Fineract. Mobile Wallet was my Google summer of code project for 2017.",tags:["android","java","oss","all"],icon:"images/gsoc.png",links:["https://github.com/openMF/mobile-wallet"]},{name:"EPOD Harvard University",description:"Evidence for Policy design at Harvard University",extra_desc:"Working on a financial statistics project for EPOD with the primary aim being to improve the delay in payments in MNREGA.",tags:["work","android","java"],icon:"images/epod.png",links:["https://github.com/hks-epod"]},{name:"Timber",description:"Material design music player for Android with support for Chromecast, Android wear and Android Auto. It is one of the finest designed music players for Android with focus on customisability. Timber also supports lyrics and LastFM scrobbling.",extra_desc:"",tags:["android","java","oss","all"],icon:"images/timber_icon.png",images:["images/timber_screen1.png","images/timber_screen2.png","images/timber_screen3.png"],links:["https://github.com/naman14/Timber","https://play.google.com/store/apps/details?id=naman14.timber"]},{name:"Algorithm Visualizer",description:"Visualize algorithms and data structures using animations. All visualizations are completely done using native canvas APIs for Android. Sorting, Binary Search, BST, BFS and DFS traversal, Dijkstara and bellman ford search visualizations are currently present.",extra_desc:"",tags:["featured","android","java","oss","all"],icon:"images/algorithm_visualizer_icon.png",images:["images/algovisualizer_screen1.png","images/algovisualizer_screen2.png","images/algovisualizer_screen3.png"],links:["https://github.com/naman14/AlgorithmVisualizer-Android","https://play.google.com/store/apps/details?id=com.naman14.algovisualizer"]},{name:"MaterialPowerMenu",description:"Material design focused Power Menu for Android. Originally built after coming across a design concept on Dribble, Material power menu was turned into actual app after utilising a set of new animation APIs that were introduced in Lollipop.",tags:["android","java","oss","all"],icon:"images/material_power_menu_icon.png",links:["https://github.com/naman14/MaterialPowerMenu","https://play.google.com/store/apps/details?id=com.naman14.powermenu"]},{name:"Arcade",description:"Neural style in Android. Arcade lets you stylize your photos with famous artworks. Arcade is like Prisma but works completely on the Android side. Arcade was built after porting Torch-7 implementation of neural style algorithm to Android and writing a small bridge between Lua -> C -> Java",tags:["featured","android","java","oss","all"],icon:"images/arcade_icon.png",images:["images/arcade_screen1.png","images/arcade_screen2.png"],links:["https://github.com/naman14/Arcade","https://play.google.com/store/apps/details?id=com.naman14.arcade"]},{name:"Spider",description:"Spider is an Android library to monitor and modify network requests including modifying response body. Spider currently only works with Retrofit.",tags:["android","java","oss","all"],icon:"images/github.png",links:["https://github.com/naman14/Spider"]},{name:"TAndroidLame",description:"Android/Java wrapper around Lame mp3 encoder. Lame is a powerful mp3 encoder that supports a number of operations. TAndroidLame was built as a wrapper library around Lame.",tags:["android","java","oss","all"],icon:"images/github.png",links:["https://github.com/naman14/TAndroidLame"]},{name:"Muzei macOS",description:"Muzei is a menu bar app for macOS that lets you use daily updated famous works of art as the wallpaper. Muzei also supports using top scoring images from Reddit and Unsplash as the wallpaper. Customisation options like blurring, dimming and specifying the subreddit are present. ",tags:["macos","swift","oss","all"],icon:"images/muzei_icon.png",links:["https://github.com/naman14/Muzei-macOS","https://itunes.apple.com/us/app/muzei/id1203123639"]},{name:"gnome-android-tool",description:"Gnome shell extension for adb tools with support for taking screenshots, recording screen, connecting over TCP and capturing bug report.",tags:["linux","javascript","oss","all"],icon:"images/github.png",links:["https://github.com/naman14/gnome-android-tool"]},{name:"Terminal Screen Saver",description:"macOS screensaver simulating a terminal. TerminalScreensaver makes your computer look like a terminal. This is perfect for going out for a cup of coffee and pretending to your boss that some terminal process is going on.",tags:["macos","swift","oss","all"],icon:"images/github.png",links:["https://github.com/naman14/TerminalScreensaver"]},{name:"CS:GO Live",description:"CS:GO real time scorebot using Valve's Game State Integration. CS:GO Live uses Valve's Game State Integration to collect game state changes and broadcast them in them real time.",extra_desc:"CS:GO Live lets you broadcast games to everyone when you are playing, save your game scores, view your past games and watch live games that other users are broadcasting.",tags:["desktop","javascript","oss","all"],icon:"images/csgo_icon.png",links:["https://github.com/naman14/csgolive"]},{name:"S Tools+",description:"S Tools+ is an Android app to keep track of CPU and Sensors alongwith useful features like color picker, compass and device information",tags:["android","java","oss","all"],icon:"images/stools_icon.png",links:["https://github.com/naman14/S-Tools"]},{name:"Hacktoberfest Android",description:"Android app to check Hacktoberfest status and explore projects and issues to get started with the open source community.",tags:["android","java","oss","all"],icon:"images/hacktoberfest_icon.png",links:["https://github.com/naman14/Hacktoberfest-Android","https://play.google.com/store/apps/details?id=com.naman14.hacktoberfest"]},{name:"PlayAnimations",description:"A demo of various animation in Google Play Games app using the Transition framework of Android introduced in Lollipop.",tags:["android","java","oss","all"],icon:"images/github.png",links:["https://blog.namand.in/transition-framework-android","https://github.com/naman14/PlayAnimations","https://play.google.com/store/apps/details?id=com.naman14.playanimations"]},{name:"Winner - Hack InOut 2018",description:"Player Known Battle Grounds. PKBG brings the familiar PUBG / CS:GO like shooting dynamics, combined with Fortnite's building mechanics that allow us to build walls around us in an AR world and then engage in a shootout with real people who can hide behind virtual walls.",tags:["desktop","javascript","hackathon","all"],images:["images/hackinout.jpg"],links:["https://devfolio.co/submissions/player-known-battle-grounds","https://github.com/teamOSC/PKBG_AR"]},{name:"Winner - AngelHack Delhi 2015",description:"Won the biggest Global Hackathon Series. Developed Chestream : a new social network around video streaming.",tags:["desktop","javascript","hackathon"]},{name:"Winner - Paytm Build for India Hackathon",description:"We made an offline to offline payment solution using near ultrasonic waves for data transfer. ",tags:["desktop","javascript","hackathon","all"],images:["images/paytm_build_india.jpeg"],links:["https://blog.paytm.com/paytm-build-for-india-hackathon-the-judgement-day-fc859459b0ed"]},{name:"Winner - India UK Tech Summit Finclusion Hackathon",description:"We made an Android app to track real time return on different investments and create awareness for different financial schemes of the government",tags:["desktop","javascript","hackathon","all"],images:["images/indiaukfintech.jpg"]},{name:"Winner - PolicyHack",description:"We made an Android app that provides extensive data on Education in India and helps chooses users best schools near them",tags:["desktop","javascript","hackathon"],links:["https://epod.cid.harvard.edu/article/policyhack-2015"]},{name:"DroidCon India 2015",description:"Enhancing UI/UX using Java animations",tags:["android","java","talk"],icon:"images/muzei_icon.png",links:["https://goo.gl/w716r2"]},{name:"DroidCon India 2016",description:"Android NDK - Porting native softwares to Android",tags:["android","java","talk"],icon:"images/muzei_icon.png",links:["https://goo.gl/113BTI"]},{name:"With the new app, the Prime Minister's Office is just a tap away",description:"Google India Blog",tags:["android","java","news"],links:["https://googleindia.blogspot.in/2016/08/with-new-app-prime-minister-is-just-tap.html?m=1"]},{name:"Meet the six students behind Narendra Modi’s PMO app",description:"Indian Express",tags:["android","java","news"],links:["http://indianexpress.com/article/education/meet-the-six-students-behind-narendra-modis-pmo-app/"]},{name:"Star Contributor of the Month – Naman Dwivedi",description:"Mifos Blog",tags:["android","java","news"],links:["https://mifos.org/blog/star-contributor-naman-dwivedi/"]},{name:"Material Power Menu Replaces Lollipop's Standard Power Menu With A Prettier And More Useful Alternative",description:"Android Police",tags:["android","java","news"],links:["https://www.androidpolice.com/2015/03/21/material-power-menu-replaces-lollipops-standard-power-menu-with-a-prettier-and-more-useful-alternative/"]},{name:"Keep Track of Your CPU, Device Sensors, and Colors with S Tools+",description:"XDA Developers",tags:["android","java","news"],links:["http://www.xda-developers.com/android/keep-track-of-your-cpu-device-sensors-and-colors-with-s-tools/"]}]}}]);
//# sourceMappingURL=component---src-pages-index-js-0c040ffe2accc22248d9.js.map