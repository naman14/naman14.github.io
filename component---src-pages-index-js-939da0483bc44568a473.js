(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),o=t("Bl7J"),r=t("vrFN"),s=(t("f3/d"),t("pIFo"),t("lhkX")),l=t("Wbzz"),c=function(e){var a=e.project;return i.a.createElement(s.Col,{lg:4,md:12,style:{marginBottom:"40px",verticalAlign:"top"}},i.a.createElement("span",{style:{verticalAlign:"top"}},i.a.createElement("img",{style:{width:"30px",height:"30px"},src:a.icon}),i.a.createElement(l.a,{style:{textDecoration:"none"},to:"/project/"+a.name.replace(/\s/g,"")+"/"},i.a.createElement("strong",{style:{color:"#484848",verticalAlign:"top",marginLeft:"0.7rem"}},a.name))),i.a.createElement("p",{style:{marginRight:"1.5rem"}},a.description))},m=function(e){var a=e.project;return i.a.createElement(s.Col,{lg:6,md:12,style:{marginBottom:"50px"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"start"}},i.a.createElement("div",null,i.a.createElement("img",{style:{width:"90px",height:"90px"},src:a.icon})),i.a.createElement("div",{style:{marginLeft:"1.5rem",marginRight:"0.7rem"}},i.a.createElement("h3",null,i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:a.links[0]},a.name)),i.a.createElement("p",null,a.description),i.a.createElement("p",null,a.extra_desc))))},d=function(e){var a=e.project;return i.a.createElement(s.Col,{lg:3,md:6,style:{marginBottom:"15px"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"start"}},i.a.createElement("div",{style:{marginLeft:"0rem",marginRight:"2rem"}},null!=a.links?i.a.createElement("h3",null,i.a.createElement("a",{style:{color:"#000000",textDecoration:"none"},href:a.links[0]},a.name)):i.a.createElement("h3",null,a.name," "),i.a.createElement("p",null,a.description))))},p=function(e){var a=e.project;return i.a.createElement(s.Col,{lg:3,md:12,style:{marginBottom:"50px"}},a.images.slice(0,2).map((function(e,a){return i.a.createElement("img",{style:{maxWidth:"150px",maxHeight:"220px",marginRight:"1rem",verticalAlign:"center"},src:e})})),i.a.createElement(l.a,{style:{textDecoration:"none",color:"#000000"},to:"/project/"+a.name.replace(/\s/g,"")+"/"},i.a.createElement("h3",{style:{lineHeight:1}},a.name)),i.a.createElement("p",{style:{paddingRight:"10px"}},a.extra_desc))},g=t("oFIC");a.default=function(){return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"Naman Dwivedi",keywords:["Naman","Android","Timber"]}),i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("p",{style:{fontSize:"20px"}},"Hi! I am ",i.a.createElement("strong",null,"Naman Dwivedi")," (",i.a.createElement("strong",null,"naman14"),"). I am a software engineer working with Android and web3. Currently, I am working at ",i.a.createElement("strong",null,"Glip"),". Previously, I worked at ",i.a.createElement("strong",null,"BharatPe"),", ",i.a.createElement("strong",null,"Doubtnut")," and ",i.a.createElement("strong",null,"Grofers"),". I graduated in 2018 from Delhi Techonological University. I am an open source enthusiast and most of my work can be found on my ",i.a.createElement("strong",null,i.a.createElement("a",{style:{textDecoration:"none",color:"#000000"},href:"https://github.com/naman14"},"Github")),".")),i.a.createElement("br",null),i.a.createElement("h1",null,"Featured work"),i.a.createElement("br",null),i.a.createElement(s.Grid,{fluid:!0},i.a.createElement(s.Row,null,g.getProjects("work").map((function(e,a){return i.a.createElement(m,{project:e})})))),i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("h1",null,"Featured projects"),i.a.createElement("br",null),i.a.createElement(s.Grid,{fluid:!0},i.a.createElement(s.Row,null,g.getProjects("featured").map((function(e,a){return i.a.createElement(p,{project:e})})))),i.a.createElement("h1",null,"Open source projects"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(s.Grid,{fluid:!0},i.a.createElement(s.Row,null,g.getProjects("oss").map((function(e,a){return i.a.createElement(c,{project:e})}))))),i.a.createElement("h1",null,"Talks and workshops"),i.a.createElement("br",null),i.a.createElement(s.Grid,{fluid:!0},i.a.createElement(s.Row,null,g.getProjects("talk").map((function(e,a){return i.a.createElement(d,{project:e})})))),i.a.createElement("h1",null,"Hackathons"),i.a.createElement("br",null),i.a.createElement(s.Grid,{fluid:!0},i.a.createElement(s.Row,null,g.getProjects("hackathon").map((function(e,a){return i.a.createElement(d,{project:e})})))),i.a.createElement("h1",null,"News and media"),i.a.createElement("br",null),i.a.createElement(s.Grid,{fluid:!0},i.a.createElement(s.Row,null,g.getProjects("news").map((function(e,a){return i.a.createElement(d,{project:e})})))),i.a.createElement("br",null))}},oFIC:function(e,a,t){t("Z2Ku"),t("L9s1");var n=t("qtb/");a.getProjects=function(e){return n.filter((function(a){return a.tags.includes(e)}))}},"qtb/":function(e){e.exports=JSON.parse('[{"name":"Glip (ggtv)","description":"Android/Web3","extra_desc":"Building tools for creators and web3 community. Built on chain puzzle game punksVSapes, Glip Android gaming recorder and live streaming tool.","tags":["work","android","web3","java","all"],"icon":"images/glip_icon.jpeg","images":[],"links":["https://glip.gg","https://punksvsapes.com","https://ggtv.co"]},{"name":"Prime Minister\'s Office","description":"Official app of the Indian Prime Minister\'s office","extra_desc":"Built the official app of the Indian Prime Minister\'s office after winning a large contest in collaboration with Google and Government of India. This app gives citizens access to critical information about flagship programmes. In addition, the app provides an overview of the Prime Minister’s major initiatives, news and social media updates, all in 10 indian languages.","tags":["work","featured","android","java","all"],"icon":"images/pmo_icon.png","images":["images/pmo_screen1.png","images/pmo_screen2.png","images/pmo_screen3.png","images/pmo_pic.jpg","images/pmo_pic2.png","images/pmo_pic3.jpg"],"links":["https://googleindia.blogspot.in/2016/08/with-new-app-prime-minister-is-just-tap.html?m=1","https://play.google.com/store/apps/details?id=com.sanskrit.pmo&hl=en"]},{"name":"EPOD Harvard University","description":"Evidence for Policy design at Harvard University","extra_desc":"Consulting on Paydash, a monitoring tool for block officials overseeing MGNREGA, India\'s employment guarantee programme for rural households. Helping EPoD with all their tech requirements - Android, Backend (Python, Node.js), ETL scripts, Analytics etc.","tags":["work","android","java"],"icon":"images/epod.png","links":["https://github.com/hks-epod"]},{"name":"BharatPe","description":"Merchant payment platform","extra_desc":"","tags":["professional-work","android","java"],"icon":"images/bharatpe.png","links":["https://bharatpe.com"]},{"name":"Doubtnut","description":"Interactive online tutoring and doubt solving","extra_desc":"","tags":["professional-work","android","java"],"icon":"images/doubtnut.jpeg","links":["https://doubtnut.com"]},{"name":"Grofers","description":"Online grocery delivery","extra_desc":"","tags":["professional-work","android","java"],"icon":"images/grofers_icon.jpg","links":["https://grofers.com"]},{"name":"Google Summer of Code","description":"Mifos Initiative","extra_desc":"Created a mobile wallet framework based on top of Apache Fineract using clean architecture and supporting merchant payments, store of value, transfers and payments. Currently serving as a GSOC mentor for the project.","tags":["work","android","java"],"icon":"images/gsoc.png","links":["https://summerofcode.withgoogle.com/archive/2017/projects/5863386004848640/","https://github.com/openMF/mobile-wallet"]},{"name":"Accord","description":"Accord is an Android library for automating performance measurements that easily integrates with existing CI infrastructure.","extra_desc":"","tags":["android","kotlin","oss","all"],"icon":"images/github.png","links":["https://github.com/naman14/Accord"]},{"name":"TimberX","description":"Material theme music player that works across all form factors (phones, wear, auto, cast, assistant) and uses latest tools (Kotlin, Architecture components, Room, Databinding) ","extra_desc":"","tags":["android","kotlin","java","oss","all"],"icon":"images/timberx_icon.png","images":["images/timberx_screen1.png","images/timberx_screen2.png","images/timberx_screen3.png"],"links":["https://github.com/naman14/TimberX","https://play.google.com/store/apps/details?id=com.naman14.timberx"]},{"name":"Timber","description":"Material design music player for Android with support for Chromecast, Android wear and Android Auto. Timber focuses on customisability and also supports lyrics and LastFM scrobbling.","extra_desc":"","tags":["android","java","oss","all"],"icon":"images/timber_icon.png","images":["images/timber_screen1.png","images/timber_screen2.png","images/timber_screen3.png"],"links":["https://github.com/naman14/Timber","https://play.google.com/store/apps/details?id=naman14.timber"]},{"name":"Mobile Wallet Framework","description":"A reference implementation of Mifos platform wallet and payment capabilities using Apache Fineract. Mobile Wallet was my Google summer of code project for 2017.","tags":["android","java","oss","all"],"icon":"images/gsoc.png","links":["https://github.com/openMF/mobile-wallet"]},{"name":"Player Known Battle Grounds","description":"The game is now released on Google Play. Built at Hack In Out 2018, PKBG is a game inspired by a crossover of Fornite and PUBG with 1:1 games being played in AR world built with Sceneform and cloud anchors and using machine learning to detect potential bullet hits to the players ","extra_desc":"PKBG brings the familiar PUBG / CS:GO like shooting dynamics, combined with Fortnite\'s building mechanics that allow us to build walls around us in an AR world and then engage in a shootout with real people who can hide behind virtual walls.","tags":["featured","android","java","oss","all"],"icon":"images/github.png","images":["images/pkbg_screen1.jpg","images/pkbg_screen2.jpg","images/pkbg_screen3.png","images/pkbg_screen4.png"],"links":["https://play.google.com/store/apps/details?id=com.tosc.argo","https://devfolio.co/submissions/player-known-battle-grounds","https://github.com/teamOSC/PKBG_AR"]},{"name":"Algorithm Visualizer","description":"Visualize algorithms and data structures using animations. All visualizations are completely done using native canvas APIs for Android. Sorting, Binary Search, BST, BFS and DFS traversal, Dijkstara and bellman ford search visualizations are currently present.","extra_desc":"Visualize algorithms and data structures using animations. All visualizations are completely done using native canvas APIs for Android. Sorting, Binary Search, BST, BFS and DFS traversal, Dijkstara and bellman ford search visualizations are currently present.","tags":["featured","android","java","oss","all"],"icon":"images/algorithm_visualizer_icon.png","images":["images/algovisualizer_screen1.png","images/algovisualizer_screen2.png","images/algovisualizer_screen3.png"],"links":["https://github.com/naman14/AlgorithmVisualizer-Android","https://play.google.com/store/apps/details?id=com.naman14.algovisualizer"]},{"name":"MaterialPowerMenu","description":"Material design focused Power Menu for Android. Originally built after coming across a design concept on Dribble, Material power menu was turned into actual app after utilising a set of new animation APIs that were introduced in Lollipop.","tags":["android","java","oss","all"],"icon":"images/material_power_menu_icon.png","links":["https://github.com/naman14/MaterialPowerMenu","https://play.google.com/store/apps/details?id=com.naman14.powermenu"]},{"name":"Arcade","description":"Neural style in Android. Arcade lets you stylize your photos with famous artworks. Arcade is like Prisma but works completely on the Android side. Arcade was built after porting Torch-7 implementation of neural style algorithm to Android and writing a small bridge between Lua -> C -> Java","extra_desc":"Neural style in Android. Arcade lets you stylize your photos with famous artworks. Arcade is like Prisma but works completely on the Android side. Arcade was built after porting Torch-7 implementation of neural style algorithm to Android and writing a small bridge between Lua -> C -> Java","tags":["featured","android","java","oss","all"],"icon":"images/arcade_icon.png","images":["images/arcade_screen1.png","images/arcade_screen2.png"],"links":["https://github.com/naman14/Arcade","https://play.google.com/store/apps/details?id=com.naman14.arcade"]},{"name":"Spider","description":"Spider is an Android library to monitor and modify network requests including modifying response body. Spider currently only works with Retrofit.","tags":["android","java","oss","all"],"icon":"images/github.png","links":["https://github.com/naman14/Spider"]},{"name":"TAndroidLame","description":"Android/Java wrapper around Lame mp3 encoder. Lame is a powerful mp3 encoder that supports a number of operations. TAndroidLame was built as a wrapper library around Lame.","tags":["android","java","oss","all"],"icon":"images/github.png","links":["https://github.com/naman14/TAndroidLame"]},{"name":"Muzei macOS","description":"Muzei is a menu bar app for macOS that lets you use daily updated famous works of art as the wallpaper. Muzei also supports using top scoring images from Reddit and Unsplash as the wallpaper. Customisation options like blurring, dimming and specifying the subreddit are present. ","tags":["macos","swift","oss","all"],"icon":"images/muzei_icon.png","links":["https://github.com/naman14/Muzei-macOS","https://itunes.apple.com/us/app/muzei/id1203123639"]},{"name":"gnome-android-tool","description":"Gnome shell extension for adb tools with support for taking screenshots, recording screen, connecting over TCP and capturing bug report.","tags":["linux","javascript","oss","all"],"icon":"images/github.png","links":["https://github.com/naman14/gnome-android-tool"]},{"name":"Terminal Screen Saver","description":"macOS screensaver simulating a terminal. TerminalScreensaver makes your computer look like a terminal. This is perfect for going out for a cup of coffee and pretending to your boss that some terminal process is going on.","tags":["macos","swift","oss","all"],"icon":"images/github.png","links":["https://github.com/naman14/TerminalScreensaver"]},{"name":"CS:GO Live","description":"CS:GO real time scorebot using Valve\'s Game State Integration. CS:GO Live uses Valve\'s Game State Integration to collect game state changes and broadcast them in them real time.","extra_desc":"CS:GO Live lets you broadcast games to everyone when you are playing, save your game scores, view your past games and watch live games that other users are broadcasting.","tags":["desktop","javascript","oss","all"],"icon":"images/csgo_icon.png","links":["https://github.com/naman14/csgolive"]},{"name":"S Tools+","description":"S Tools+ is an Android app to keep track of CPU and Sensors alongwith useful features like color picker, compass and device information","tags":["android","java","oss","all"],"icon":"images/stools_icon.png","links":["https://github.com/naman14/S-Tools"]},{"name":"Hacktoberfest Android","description":"Android app to check Hacktoberfest status and explore projects and issues to get started with the open source community.","tags":["android","java","oss","all"],"icon":"images/hacktoberfest_icon.png","links":["https://github.com/naman14/Hacktoberfest-Android","https://play.google.com/store/apps/details?id=com.naman14.hacktoberfest"]},{"name":"PlayAnimations","description":"A demo of various animation in Google Play Games app using the Transition framework of Android introduced in Lollipop.","tags":["android","java","oss","all"],"icon":"images/github.png","links":["https://blog.namand.in/transition-framework-android","https://github.com/naman14/PlayAnimations","https://play.google.com/store/apps/details?id=com.naman14.playanimations"]},{"name":"Winner - ETH Denver 2023","description":"DecentAI: Decentralised AI nodes network and zkbnbandroid: Android implementation for zkbnb APIs","tags":["desktop","javascript","hackathon","all"],"images":["images/hackinout.jpg"],"links":["https://devfolio.co/submissions/player-known-battle-grounds","https://github.com/teamOSC/PKBG_AR"]},{"name":"Winner - ETH New York 2022","description":"Switch: Instant replay clip NFT drops and bidding for live viewers and pay per minute billing for live streams","tags":["desktop","javascript","hackathon","all"],"images":["images/hackinout.jpg"],"links":["https://devfolio.co/submissions/player-known-battle-grounds","https://github.com/teamOSC/PKBG_AR"]},{"name":"Winner - Hack InOut 2018","description":"Player Known Battle Grounds. PKBG brings the familiar PUBG / CS:GO like shooting dynamics, combined with Fortnite\'s building mechanics that allow us to build walls around us in an AR world and then engage in a shootout with real people who can hide behind virtual walls.","tags":["desktop","javascript","hackathon","all"],"images":["images/hackinout.jpg"],"links":["https://devfolio.co/submissions/player-known-battle-grounds","https://github.com/teamOSC/PKBG_AR"]},{"name":"Winner - Hack InOut 2019","description":"Alfred: Alfred helps in detecting onset of medical conditions like Parkinson\'s disease.","tags":["desktop","javascript","hackathon","all"],"images":["images/hackinout.jpg"],"links":["https://devfolio.co/submissions/player-known-battle-grounds","https://github.com/teamOSC/PKBG_AR"]},{"name":"Winner - AngelHack Delhi 2015","description":"Winner of the Delhi edition of AngelHack Global hackathon. Developed Chestream, a social network around video streaming.","tags":["desktop","javascript","hackathon"]},{"name":"Winner - Paytm Build for India Hackathon","description":"We made an offline to offline payment solution using near ultrasonic waves for data transfer. ","tags":["desktop","javascript","hackathon","all"],"images":["images/paytm_build_india.jpeg"],"links":["https://blog.paytm.com/paytm-build-for-india-hackathon-the-judgement-day-fc859459b0ed"]},{"name":"Winner - India UK Tech Summit Finclusion Hackathon","description":"We made an Android app to track real time return on different investments and create awareness for different financial schemes of the government","tags":["desktop","javascript","hackathon","all"],"images":["images/indiaukfintech.jpg"]},{"name":"Winner - PolicyHack","description":"We made an Android app that provides extensive data on Education in India and helps chooses users best schools near them","tags":["desktop","javascript","hackathon"],"links":["https://epod.cid.harvard.edu/article/policyhack-2015"]},{"name":"DroidCon India 2015","description":"Enhancing UI/UX using Java animations","tags":["android","java","talk"],"icon":"images/muzei_icon.png","links":["https://goo.gl/w716r2"]},{"name":"DroidCon India 2016","description":"Android NDK - Porting native softwares to Android","tags":["android","java","talk"],"icon":"images/muzei_icon.png","links":["https://goo.gl/113BTI"]},{"name":"With the new app, the Prime Minister\'s Office is just a tap away","description":"Google India Blog","tags":["android","java","news"],"links":["https://india.googleblog.com/2016/08/with-new-app-prime-minister-is-just-tap.html?m=1"]},{"name":"Meet the six students behind Narendra Modi’s PMO app","description":"Indian Express","tags":["android","java","news"],"links":["http://indianexpress.com/article/education/meet-the-six-students-behind-narendra-modis-pmo-app/"]},{"name":"Star Contributor of the Month – Naman Dwivedi","description":"Mifos Blog","tags":["android","java","news"],"links":["https://mifos.org/blog/star-contributor-naman-dwivedi/"]},{"name":"TimberX is a Material Theme music player app that supports Wear OS, Android Auto, Google Assistant, and more","description":"XDA Developers","tags":["android","music","news"],"links":["https://www.xda-developers.com/timberx-material-theme-music-player-android/"]},{"name":"Material Power Menu Replaces Lollipop\'s Standard Power Menu With A Prettier And More Useful Alternative","description":"Android Police","tags":["android","java","news"],"links":["https://www.androidpolice.com/2015/03/21/material-power-menu-replaces-lollipops-standard-power-menu-with-a-prettier-and-more-useful-alternative/"]},{"name":"Keep Track of Your CPU, Device Sensors, and Colors with S Tools+","description":"XDA Developers","tags":["android","java","news"],"links":["http://www.xda-developers.com/android/keep-track-of-your-cpu-device-sensors-and-colors-with-s-tools/"]}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-939da0483bc44568a473.js.map