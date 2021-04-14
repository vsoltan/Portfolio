(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{17:function(e,t,a){},46:function(e,t,a){},60:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n,r,i,o,l,s,c=a(0),m=a.n(c),d=a(10),p=a.n(d),h=(a(60),a(13)),u=a(14),g=a(20),f=a(19),w=a(6),b=a(76),y=a(12),v=a(47),E=a(7),k=a(29),x=E.a.div(n||(n=Object(w.a)(["\n   .contactForm {\n        margin-top: 5px; \n        margin-bottom: 5px; \n        display: grid; \n        grid-template-columns: 100px 1fr 75px;\n        grid-gap: 5px;\n   }\n   label {\n        grid-column: 1 / 2;\n        font-family: Metropolis-Regular;\n   }\n   input, textarea {\n        grid-column: 2 / 4;\n        border-style: solid;\n        border-color: rgb(235, 235, 235); \n        border-width: 1px; \n   }\n   button {\n        grid-column: 3 / 4;\n        background-color: var(--highlight-color);\n        border-radius: 5px; \n        border-style: solid; \n        border-color: var(--highlight-color);\n        color: white; \n        margin: 15px 0 15px 0;\n   }\n   .alert {\n        grid-column: 2 / 3; \n        text-align: left; \n        padding: 0px;\n        margin-top: 1.2rem; \n        color: rgb(201, 87, 79);\n   }\n   .success {\n        grid-column: 3 / 4;\n        margin-top: 1.2rem; \n        color: rgb(19, 186, 4);\n   }\n"]))),j=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).submitForm=n.submitForm.bind(Object(k.a)(n)),n.state={status:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.status,t=m.a.createElement("p",null),a=m.a.createElement("button",null,"Submit");return"SUCCESS"===e?(t=m.a.createElement("p",{className:"success",style:{"margin-bottom":"15px"}},"Thanks!"),a=m.a.createElement("button",{style:{display:"none"}},"Submit")):"ERROR"===e&&"ERROR"===e&&(t=m.a.createElement("p",{className:"alert"},"Ooops! There was an error.")),m.a.createElement(x,null,m.a.createElement("form",{className:"contactForm",onSubmit:this.submitForm,action:"https://formspree.io/f/xvovwpae",method:"POST"},m.a.createElement("label",null,"Email:"),m.a.createElement("input",{type:"email",name:"email"}),m.a.createElement("label",null,"Message:"),m.a.createElement("textarea",{name:"message",cols:"40",rows:"5"}),t,a,m.a.createElement("div",null)))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)}}]),a}(m.a.Component),N=a.p+"static/media/soltan-swe.b135723b.pdf",S=(a(17),a(46),a(74),E.a.div(r||(r=Object(w.a)(["\n    .navbar {\n      background-color: white;\n      padding: 1rem 1rem;\n      border-bottom-style: solid;\n      border-width: 1px;\n      border-color: black;\n    }\n    .navbar-nav .nav-link {\n      color: black;\n      font-size: 17px;\n    //   font-family: Metropolis-Bold;\n\t  font-family: Cereal-Bold;\n      padding: 0 1.5em 0 1.5em;\n      cursor: pointer;\n    }\n    .nav-link.last {\n      padding-right: 0em;\n    }\n    .navbar-brand {\n      color: black;\n      font-size: 20px;\n    //   font-family: Metropolis-Bold;\n\t  font-family: Cereal-Bold;\n      cursor: pointer;\n\t}\n    .nav-item { // to get collapse bar to the right\n      text-align: right;\n    }\n    @media screen and (min-width: 0px) and (max-width: 991px) {\n      .nav-link.last { \n        padding-right: 1.5rem;\n      }\n    }\n"])))),I=function(){v.animateScroll.scrollToTop()},O=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).showContactForm=function(){return n.setState({contactFormVisible:!0})},n.hideContactForm=function(){return n.setState({contactFormVisible:!1})},n.showAboutPage=function(){return n.setState({aboutPageVisible:!0})},n.hideAboutPage=function(){return n.setState({aboutPageVisible:!1})},n.toggleOverlayPopup=function(){return n.setState({copiedOverlayVisible:!n.state.copiedOverlayVisible})},n.state={contactFormVisible:!1,copiedOverlayVisible:!0,aboutPageVisible:!1},n.emailButton=m.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){return m.a.createElement(S,null,m.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top"},m.a.createElement(b.a,null,m.a.createElement("a",{className:"navbar-brand",onClick:I},"valeriy soltan"),m.a.createElement("button",{className:"navbar-toggler navbar-light",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},m.a.createElement("span",{className:"navbar-toggler-icon"})),m.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},m.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},m.a.createElement("li",{className:"nav-item active"},m.a.createElement("a",{className:"nav-link",href:N,download:"soltan-swe.pdf"},"Resume")),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{className:"nav-link last",onClick:this.showContactForm},"Contact")))),m.a.createElement(y.a,{size:"lg",scrollable:!0,show:this.state.contactFormVisible,onHide:this.hideContactForm},m.a.createElement(y.a.Header,{closeButton:!0},m.a.createElement(y.a.Title,null,m.a.createElement("h1",null,"Contact"))),m.a.createElement(y.a.Body,null,m.a.createElement(j,null))))))}}]),a}(m.a.Component),C=a.p+"static/media/profPic.314ce50c.jpeg",A=a(77),F=a(22),M=a(23),T=E.a.div(i||(i=Object(w.a)(["\n    .social-tab {\n        padding-left: 0; \n        margin-top: 1.2rem;\n        margin-bottom: 1.2rem;\n    }\n    .social-item {\n        padding-right: 15px;\n    }\n    .twitter {\n        color: #49a1eb;\n    }\n    .github {\n        color: #000000; \n    }\n    .linkedin {\n        color: #0a66c2\n    }\n"]))),B=function(){return m.a.createElement(T,null,m.a.createElement("div",{className:"social-tab"},m.a.createElement("a",{href:"https://github.com/vsoltan",className:"social-item github",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(F.a,{icon:M.a,size:"2x"})),m.a.createElement("a",{href:"https://www.linkedin.com/in/valeriy-soltan/",className:"social-item linkedin",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(F.a,{icon:M.b,size:"2x"})),m.a.createElement("a",{href:"https://twitter.com/vsoltann",className:"social-item twitter",target:"_blank",rel:"noopener noreferrer"},m.a.createElement(F.a,{icon:M.c,size:"2x"}))))},D=E.a.div(o||(o=Object(w.a)(["\n    .container {\n        margin-top: 5%;\n    }\n    p {\n        margin-bottom: 1.2rem;\n    }\n    .portrait {\n        object-fit: cover;\n        width: 100%;\n        box-sizing: border-box;\n        max-height: 450px;\n        border-radius: 5px;\n    }\n    #wrap-around {\n        display: none;\n    }\n    .header {\n        margin-bottom: 1.2rem;\n    }\n    @media screen and (min-width: 0px) and (max-width: 767px) {\n        #wrap-display { display: block; }\n        #sm-display-hide { display: block; }\n        #sm-display-reveal { display: none; }\n        .col-images { display: none; }  /* hide images on small screens */\n        \n    }\n    @media screen and (min-width: 768px) and (max-width: 991px) {\n        #wrap-display { \n            display: none; \n        }\n        #sm-display-hide {\n            display: none; \n        }\n        #sm-display-reveal {\n            display: block; \n        }\n        #wrap-around { \n            display: block;\n            padding-top: 1.5em; \n        }\n    }\n    @media screen and (min-width: 992px) {\n        #sm-display-hide {\n            display: block; \n        }\n        #sm-display-reveal {\n            display: none; \n        }\n    }\n    .custom-col {\n        display: flex; \n    }\n    .custom-row-1 {\n        margin-right: 15px; \n        position: relative; \n        flex: 1;\n    }\n    .custom-row-2 {\n        flex: 1;\n    }\n"]))),P=["Passionate about systems programming, clever algorithms, and distributed systems.","Enjoy playing beach volleyball, cooking, and gaming."],R=function(){return m.a.createElement(D,null,m.a.createElement("div",{id:"page-top"},m.a.createElement(b.a,{className:"container"},m.a.createElement("div",{className:"custom-col"},m.a.createElement("div",{className:"custom-row-1"},m.a.createElement("div",{className:"header"},m.a.createElement("h1",null,"Hey, I'm Valeriy, an ","incoming Software Intern"," at ",m.a.createElement("a",{className:"link",href:"https://www.ea.com/",target:"_blank",rel:"noopener noreferrer"},"Electronic Arts","."))),m.a.createElement(B,null),m.a.createElement("div",{className:"about"},m.a.createElement("p",null,"Currently working towards a B.S in Computer Science and a minor in Mathematics at the University of Massachusetts\u2014Amherst."),m.a.createElement("p",{id:"sm-display-hide"}," Interested in deconstructing the way things work. Passionate about systems programming, clever algorithms, and distributed systems."),m.a.createElement("p",{id:"sm-display-reveal"},"Interested in deconstructing the way things work. ")),m.a.createElement("div",{id:"wrap-display"},m.a.createElement("p",null,P[1]))),m.a.createElement("div",{className:"custom-row-2 col-images"},m.a.createElement(A.a,{src:C,className:"portrait"}),m.a.createElement("div",{id:"wrap-around"},m.a.createElement("p",null,P[0]),m.a.createElement("p",null,P[1])))))))},W=a(39),z=E.a.div(l||(l=Object(w.a)(["\n    .project-card {\n        position: relative;\n        background-color: var(--card-background);\n        border-radius: 5px;\n        color: transparent;\n        cursor: pointer;\n        width: 100%;\n    }\n    .project-card:hover {\n        color: white;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    }\n    .project-card:hover .overlay {\n        opacity: 1;\n    }\n    .card-container {\n        height: 425px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .card-img {\n        height: auto;\n        max-height: 100%;\n    }\n    .overlay {\n        background-color: var(--highlight-reduced-opacity);\n        opacity: 0;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        border-radius: 5px;\n    }\n    .text-container {\n        position: absolute;\n        top: 0;\n    }\n    #project-title {\n        font-family: Metropolis-Bold;\n        font-size: 22px;\n        margin: 20px 0px 0px 20px;\n    }\n    #project-sub-title {\n        font-family: Metropolis-Regular;\n        font-size: 18px;\n        margin: 0px 0px 0px 20px;\n    }\n    @media screen and (min-width: 991px) {\n        .card-container {\n            height: 425px;\n        }\n    }\n    @media screen and (min-width: 700px) and (max-width: 990px) {\n        .card-container {\n            height: 350px;\n        }\n    }\n"]))),V=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).showOverlay=function(){return n.setState({overlayVisible:!0})},n.hideOverlay=function(){return n.setState({overlayVisible:!1})},n.redirect=function(){return window.open(n.overlayData[1],"_blank")},n.redirectDemo=function(){return window.open(n.demoLink,"_blank")},n.img=e.img,n.title=e.title,n.scale=e.scale,n.demoLink=e.demoLink,n.state={overlayVisible:!1},n.overlayData=e.overlayData,n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.title[0],t=this.title[1],a=this.title[2],n=this.overlayData[0];return m.a.createElement(z,null,m.a.createElement("div",{className:"project-card",onClick:this.showOverlay},m.a.createElement("div",{className:"card-container"},m.a.createElement("img",{className:"card-img",src:this.img,alt:a,style:{width:this.scale+"%"}}),m.a.createElement("span",{className:"overlay"})),m.a.createElement("div",{className:"text-container"},m.a.createElement("p",{id:"project-title"},e),m.a.createElement("p",{id:"project-sub-title"},t))),m.a.createElement(y.a,{size:"lg",scrollable:!0,show:this.state.overlayVisible,onHide:this.hideOverlay},m.a.createElement(y.a.Header,{closeButton:!0},m.a.createElement(y.a.Title,null,m.a.createElement("h1",null,e),m.a.createElement("h2",null,t))),m.a.createElement(y.a.Body,null,n,m.a.createElement(W.a,{variant:"primary",className:"float-right src",onClick:this.redirect},m.a.createElement("div",{className:"btn-content"},m.a.createElement(F.a,{icon:M.a,className:"github-icon"}),m.a.createElement("a",{className:"src-link"},"src"))),m.a.createElement(W.a,{variant:"primary",className:"float-right demo",onClick:this.redirectDemo,style:{display:this.demoLink?"block":"none"}},m.a.createElement("a",null,"Demo")))))}}]),a}(m.a.Component),H=a.p+"static/media/user.e40da206.png",L=a.p+"static/media/ops-tile.3ed45853.png",q=a.p+"static/media/rtx-tile.81062f84.png",U=a.p+"static/media/slide-tile.8902e736.png",G=a.p+"static/media/ultsoft.eb750c3b.png",_=a.p+"static/media/appView.a355e91b.png",J=a.p+"static/media/postman.b52ab563.png",Y=a.p+"static/media/pong.e48826ad.png",K=a.p+"static/media/game.6c141541.png",Q=a.p+"static/media/side.2a19e1e5.png",X=a.p+"static/media/top.9245e139.png",$=a.p+"static/media/server.0a8f8f3c.png",Z=a.p+"static/media/iter1.1a133f47.png",ee=a.p+"static/media/board.9fbba66c.png",te=a.p+"static/media/watch-app.7a36e0a3.png",ae=a.p+"static/media/watch-music.72447696.png",ne=a.p+"static/media/watch-timer.8421d8d1.png",re=a.p+"static/media/watch-wear.31825a3b.png",ie=a.p+"static/media/ball-shadow.a7c14ece.png",oe=a.p+"static/media/cow-acceled.13ad809c.png",le=a.p+"static/media/teapot.5c69d4e2.png",se=a.p+"static/media/ball-array.736a375b.png",ce=E.a.div(s||(s=Object(w.a)(["\n    .container {\n        margin-top: 5%;\n        margin-bottom: 5%;\n    }\n    #title {\n        margin-bottom: 1.5rem;\n    }\n    .project-feature {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n        grid-gap: 20px;\n    }\n    @media screen and (min-width: 320px) and (max-width: 449px) {\n        .project-feature {\n            grid-template-columns: 1fr;\n        }\n    }\n    @media screen and (min-width: 1200px) {\n        .project-feature {\n            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\n        }\n    }\n"])));var me,de,pe=function(){return m.a.createElement(ce,null,m.a.createElement(b.a,null,m.a.createElement("h1",{id:"title"},"My Work."),m.a.createElement("div",{className:"project-feature"},function(){var e=[m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"project-gallery top-gallery"},m.a.createElement(A.a,{src:J,className:"img-fluid gallery-item"})),m.a.createElement("div",{className:"project-gallery"},m.a.createElement(A.a,{src:_,className:"img-fluid gallery-item"})),m.a.createElement("div",{className:"project-description"},m.a.createElement("p",null,"For the Fall 2020 semester, UMass partnered with Ultimate Software (now UGK), allowing students to participate in the specification, design, creation, and testing of a product on behalf of the company sponsor. As part of this cooperative/integrative experience, we were tasked with building a microservice that would fit into the broader ecosystem or suite of human resource software developed by UKG. More specifically, we were responsible for designing an interface that provides employees with a view of their company's structure and allows managers to make changes to it. Some features that we implemented include; adding, editing, transferring, and removing employees; uploading profile pictures for each employee; and searching the organization by a number of supported keywords."),m.a.createElement("p",null,"Prior to this project, I had absolutely zero experience working with databases and backend technologies and when it came time to split into teams, I decided to take advantage of this learning opportunity and joined the backend team. As such, I worked on setting up a collection of endpoints to service the front end's requests to the database. I also wrote middleware to facilitate authentication using JSON Web Tokens (JWT), authorization to give different users appropriate levels of access, and data validation to make sure that frontend requests were being properly formatted. Looking back, the first couple of weeks it seemed like I was drinking from a firehose, learning about Node, MongoDB, Web Tokens; among other things. As a direct result of this; however, I came away having a completely different understanding of the way that the internet works and a glimpse into how complex, data-driven applications are built. Furthermore, since I was a part of a 10 person team, this experience reinforced the importance of clear communication, comprehensive documentation, and extensive testing."),m.a.createElement("p",null,"For challenges, there were the usual but ever-present inaccuracies in time estimation and lapses in communication but also the fact that every member of the backend team was working with many of the technologies for the first time. A more technically rooted challenge was regarding the way we opted to store our data, which was in documents since we decided to use MongoDB. However, the design specification for our API was such that the frontend would receive the employee data already pre-constructed as a tree. But, since an addition, removal, or transfer of an employee could change the entire structure of the tree, the team had to find a way to minimize the number of flat list to tree conversions that we otherwise had to perform every time the frontend requested tree data. We tried storing the tree as a separate collection for each company but eventually realized that MongoDB is fairly limited when it comes to search queries on hierarchical structures. What we eventually decided on is to maintain a cache that is updated whenever the employee list is mutated. So any time the frontend requests employee data, we already have the most up-to-date flat and constructed lists that we can send over."),m.a.createElement("p",null,"There are a lot of other design decisions that I left out here for the sake of brevity, but I would like to conclude by saying that so far, this project is unique in the sheer number of moving parts that were involved and the communication that was required to make a cohesive, functional product. Although there are features we could have added or refinements that could have been made, I like to think that this is a taste of what's to come in the world of software engineering and I absolutely look forward to it."))),"https://github.com/Hierarchy-Heroes/hhchart-backend"];return m.a.createElement(V,{title:["Co-Op Project","Full Stack Application","Ultimate Software Logo"],img:G,scale:50,overlayData:e})}(),function(){var e=[m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"project-gallery"},m.a.createElement(A.a,{src:$,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:X,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:Q,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:K,className:"img-fluid gallery-item"})),m.a.createElement("div",{className:"project-description"},m.a.createElement("p",null,"Capstone project for UMASS course COMPSCI 335: Computer Architecture. My partner",m.a.createElement("a",{className:"link",href:"https://github.com/DenizGuler",target:"_blank",rel:"noopener noreferrer"}," Deniz Guler "),"and I opted to create a networked, multiplayer pong game; the only restriction being that we could only use the supplied mbed LPC1768 microcontroller. The idea was simple: our microcontrollers represented the clients and would take input from an array of buttons. Meanwhile, a Node.js server would connect the clients, update gamestate parameters, and distribute the updated gamestate every tick for the duration of the game."),m.a.createElement("p",null,"Since the chip lacked support for wireless connectivity, we had to use ethernet and as neither of us had displays or ethernet adapters lying around, we needed to order the parts. But, we also did not have any relevant experience in networking and Node so we knew that we had to put in the work to figure out the fundamentals. While the parts were being delivered, we managed to set up a very basic Node.js server locally and mock the networking elements of the firmware by writing C code outside of the mbed environment. Before the parts even came in, we had a working prototype of gamestate sharing between the client and server. We could serialize a JavaScript object, write it to a socket, and read a response from a server. Awesome."),m.a.createElement("p",null,"The rest of the project was smooth sailing from there as we were just layering additional components on top of the foundation that we had already built. Upon adding the ethernet module, we hosted our server to test that multiple clients could connect and resolved a number of networking-related issues. When the display arrived, the backend was completely fleshed out and all that remained was to add graphical assets."),m.a.createElement("p",null,"Although this all sounds peachy, this project was not without its fair share of issues and learnings. We had a lot of trouble getting UDP sockets to work when we initially tried hosting on Heroku (as it only supports WebSockets) and had to switch to AWS EC2 instances. When we were adding support for replayability and playing several games back to back, we did not flush the socket and had a lot of unintended behavior that resulted from reading residual game states. Also, the mbed interface was at times difficult to work with as we came across issues with the editor, deprecated libraries, and a half-baked version control system."),m.a.createElement("p",null,"All in all, however, this project was a boatload of fun and I learned a lot about socket programming, networking, and Node. As a part of a computer architecture course, our reliance on libraries and other abstractions definitely made me appreciate the inner workings of low level machinery that much more."))),"https://github.com/Mbed-Pong"];return m.a.createElement(V,{title:["mbed-Pong","Semester Project","pong game"],img:Y,scale:50,overlayData:e,demoLink:"https://www.youtube.com/watch?v=hOHv9d9GC_Y&feature=youtu.be"})}(),function(){var e=[m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"project-gallery"},m.a.createElement(A.a,{src:re,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:ae,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:ne,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:te,className:"img-fluid gallery-item"})),m.a.createElement("div",{className:"project-description"},m.a.createElement("p",null,"Capstone project for UMASS course CICS 290M: Physical Computing (now CS 256). My partner,",m.a.createElement("a",{className:"link",href:"https://github.com/DenizGuler",target:"_blank",rel:"noopener noreferrer"}," Deniz Guler "),"and I decided to create an affordable and most importantly, capable wearable time-keeping device. Built on the Espressif esp32 platform and costing less than $15 in parts, we opted to create a device that not only tells the time, but provides some connectivity with our personal devices."),m.a.createElement("p",null,"I worked on the firmware that would power the watch, building out the wireless infrastructure, applets (media controls, stopwatch, and weather), and navigation system. In collaboration with our professor, we designed a custom PCB that allowed us to place the battery header on the bottom of the board and solder the display, reducing the thickness of the design. The 3D-printed enclosure has a cutout for the rotary encoder that drives the navigation system, cycling through the applets and their respective options, made available through the home screen."),m.a.createElement("p",null,"This was truly a one of a kind experience in the scope of my undergraduate education. Although we had to make some compromises given our target price point, we had complete control over every element of our project and we built it entirely from the ground up. Looking back, the only issue that we weren't able to resolve was related to Bluetooth throughput on our SOC. Occasionally, OpenWeatherMap API would send more data than usual, and the device wouldn't be able to read the entire JSON string, resulting in incomplete data. Otherwise, the end product surpassed all expectations: media controls have very low latency, the battery life is enough to get you through the day, and the navigation is pretty intuitive. Check it out in action:"))),"https://github.com/vsoltan/SimpleOS"];return m.a.createElement(V,{title:["Simple Watch","Semester Project","Project Schematic"],img:ee,scale:40,overlayData:e,demoLink:"https://www.youtube.com/watch?v=erve9Y-6WI4&feature=youtu.be"})}(),function(){var e=[m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"project-gallery"},m.a.createElement(A.a,{src:oe,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:ie,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:le,className:"img-fluid gallery-item"}),m.a.createElement(A.a,{src:se,className:"img-fluid gallery-item"})),m.a.createElement("div",{className:"project-description"},m.a.createElement("p",null,"As part of my Introduction to Graphics course (CS 373), we were asked to implement a rudimentary ray tracer using THREE.js and webGL. In computer graphics, ray tracing is an alternative to rasterization for rendering, where lighting dynamics are simulated in real-time. While the lighting of the image is more accurate, this is a very computationally intensive task, limited by the number of (light) ray-shape intersections that the renderer has to compute."),m.a.createElement("p",null,"We can use an acceleration structure to drastically reduce the computational requirements for rendering a scene, enabling more complex lighting arrangements as well as super-sampled and higher fidelity images. An example of an acceleration structure, and the one used in my implementation, is a bounding volume hierarchy (BVH) tree. Before the raytracer runs, we can construct a tree which, at every level, uses a bounding box to specify which geometry is contained in a particular area of the scene. Therefore, if a ray doesn't intersect a bounding box at some level in the tree, we can forego calculating intersections with the geometry contained within that bounding box."),m.a.createElement("p",null,"The optimization gains were incredible. The cow model from the first image (above), took 9 minutes to render at 400x400 resolution with acceleration turned off. With acceleration enabled, it completed in 15 seconds. The rest of the images in the gallery are scenes from the original assignment but super-sampled, with additional lighting sources included, and rendered at higher resolutions: these configurations would take hours without acceleration turned on."))),"https://github.com/vsoltan/CS-373/tree/master/CS373HW7"];return m.a.createElement(V,{title:["Raytracing Accelerator","Coursework Extension","Ball Array Render"],img:q,scale:75,overlayData:e,demoLink:"https://www.youtube.com/watch?v=pj4oyJgUgVc&feature=youtu.be"})}(),function(){var e=[m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"project-gallery"},m.a.createElement(A.a,{src:Z,className:"img-fluid gallery-item"})),m.a.createElement("div",{className:"project-description"},m.a.createElement("p",null,"I've always wanted to get experience with web development; it seemed like the ultimate creative outlet, an immediate extension of your personality and ideas. But every time I sat down and tried to make something, the end result was frustration. Any deviation from online tutorials resulted in total disaster, with CSS doing things that I didn't want or not doing anything at all. More recently, I reckoned it was time that I built a proper showcase for the projects that I've been working on over the years, with the intent of giving viewers a comprehensive rundown of each experience, the lessons learned, and the hitches experienced along the way."),m.a.createElement("p",null,'So, I buckled down and started working, drafting layouts and experimenting with Flexbox and CSS grid. The first iteration, I was committed to keeping the project "pure", hoping to write it entirely in React.js with no libraries. I also opted for a multi-page design, dedicating each project its own page and custom content. Pretty soon, I scrapped that idea in favor of a single-page design, with a gallery of reusable project templates and a static navigation bar. At that point, I was struggling with responsiveness and decided to migrate the project to Bootstrap and, swallowing my pride, started using libraries.'),m.a.createElement("p",null,"However, what kept it interesting the whole time was that, throughout every iteration of the project, I was learning something new. The first time around, I was getting comfortable with React components and basic CSS. The next attempt, I shifted my focus to modular design, sass style sheets, and media queries. Finally, upon implementing Bootstrap, I shifted to styled components and started familiarizing myself with the component lifecycle and conditional rendering. I'm looking forward to all the things I'll learn while maintaining this site in the future!"))),"https://github.com/vsoltan/portfolio"];return m.a.createElement(V,{title:["Personal Website","React App","Description"],img:H,scale:25,overlayData:e})}(),function(){var e=[m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"project-gallery"},m.a.createElement(A.a,{src:L,className:"img-fluid gallery-item"})),m.a.createElement("div",{className:"project-description"},m.a.createElement("p",null,"OpenSprinkler is an open source, web-based smart sprinkler controller for lawn and plant watering. As a firmware intern, I am working on implementing user-requested features while maintaining and improving the functionality of the OpenSprinkler platform. So far, my work has included adding MQTT integration, expanding time-keeping and job-queue restructuring capabilities, and improving home automation hub compatibility."))),"https://github.com/OpenSprinkler/OpenSprinkler-Firmware"];return m.a.createElement(V,{title:["OpenSprinkler","Internship 2020","OpenSprinkler Dashboard"],img:L,scale:75,overlayData:e,demoLink:"http://demo.opensprinkler.com"})}(),function(){var e=[m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"project-gallery"}),m.a.createElement("div",{className:"project-description"},m.a.createElement("p",null,"After my first year in university, a group of my friends and I decided to spend the summer creating a mobile application with the goal of simplifying the process of sharing social media and personal information. We envisioned an application that would seamlessly encode your emails, social media profiles, even resumes into one easy-to-share code."),m.a.createElement("p",null,"Since this was our first time developing for mobile, we had to clear a large learning curve before we could translate the nuances of our idea to the actual project. Starting with storyboards and YouTube tutorials we created the fundamental components of the application: a QR scanner, segues between views, and the general layout of a login page. As we became more comfortable, we started building out the back end using Firebase, adding alternative forms of authentication through Google and Facebook, and fleshing out the general functionality of the app: JSON encoding/decoding, data retrieval, and contact creation upon scanning a code. At this point, I decided to refactor the entire project to follow the Model-View-Controller (MVC) design pattern and while rewriting a large chunk of the project code, opted to ditch storyboards in favor of a programmatic approach."),m.a.createElement("p",null,"Although the end result fell short of our initial expectations, I learned a lot about version control, asynchronous programming, and design methodology. In fact, we recently decided to give the app another shot using flutter, with a more cohesive direction, multi-platform support, and a lot more experience under our belts."))),"https://github.com/vsoltan/Slide"];return m.a.createElement(V,{title:["Slide Business Card","Personal Project","App Landing Page"],img:U,scale:30,overlayData:e})}())))},he=E.a.div(me||(me=Object(w.a)(["\n    .container {\n        margin-top: 5%;\n        margin-bottom: 5%;\n    }\n    #title {\n        margin-bottom: 1.5rem;\n    }\n"]))),ue=function(){return m.a.createElement(he,null,m.a.createElement(b.a,null,m.a.createElement("h1",{id:"title"},"Thank You!"),m.a.createElement("p",null,"I hope you enjoyed reading about some of the cool things I've been working on over the years! Please reach out regarding my projects, future opportunities, or just to say hello. A special thank you to Evgeni Belin for his passion for learning, mentorship, and lectures on all sorts of interesting things.")))},ge=E.a.div(de||(de=Object(w.a)(["\n    p {\n        font-family: Metropolis-Thin;\n        margin-bottom: 1.5rem;\n    }\n"]))),fe=function(){return m.a.createElement(ge,null,m.a.createElement(b.a,null,m.a.createElement("p",null,"Made with React, Bootstrap, and CSS.")))};var we=function(){return m.a.createElement("div",{className:"App"},m.a.createElement(O,null),m.a.createElement(R,null),m.a.createElement(pe,null),m.a.createElement(ue,null),m.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.0f07963b.chunk.js.map