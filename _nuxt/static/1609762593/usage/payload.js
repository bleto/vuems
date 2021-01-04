__NUXT_JSONP__("/usage", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi){return {data:[{document:{slug:"usage",description:"VueMS usage",title:"Usage",position:_,category:"Guide",toc:[{id:aC,depth:ae,text:aD},{id:aE,depth:_,text:aF},{id:aG,depth:_,text:aH},{id:aI,depth:ae,text:"modules directory"},{id:aJ,depth:ae,text:aK},{id:aL,depth:ae,text:aM},{id:aN,depth:_,text:aO},{id:aP,depth:_,text:aQ}],body:{type:"root",children:[{type:b,tag:n,props:{},children:[{type:a,value:"Implementation of the "},{type:b,tag:D,props:{},children:[{type:a,value:"VueMS module"}]},{type:a,value:" itself does not lead to changes in the architecture."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"In order to use the new architecture you need to prepare a project for it and adapt to the rules of module creation."}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:"\n  You can, of course, use the old approach to building applications together with the new approach to architecture.\n"},{type:b,tag:n,props:{},children:[{type:a,value:"Mixing of these two approaches is "},{type:b,tag:G,props:{},children:[{type:a,value:"allowed"}]},{type:a,value:V}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:af,props:{id:aC},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#installation-of-required-libraries",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aD}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"The first step to the correct operation of "},{type:b,tag:D,props:{},children:[{type:a,value:ag}]},{type:a,value:" is to install appropriate libraries."}]},{type:a,value:g},{type:b,tag:ah,props:{id:aE},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#nuxt--vue",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aF}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:b,tag:D,props:{},children:[{type:a,value:ag}]},{type:a,value:" is a Nuxt module so it is obvious that the project should be based on "},{type:b,tag:D,props:{},children:[{type:a,value:"Vue + NuxtJS"}]},{type:a,value:" technology."}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:"\n  More about fast "},{type:b,tag:G,props:{},children:[{type:a,value:ai}]},{type:a,value:" installation can be found "},{type:b,tag:B,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002F2.x\u002Fget-started\u002Finstallation",target:av},children:[{type:a,value:W}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:ah,props:{id:aG},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#nuxtjsrouter",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aH}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"To connect the routing output from the modules you had to use a library that allows you to use your own routing configuration."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"You can use your own "},{type:b,tag:k,props:{},children:[{type:a,value:F}]},{type:a,value:" to handle your routes into your "},{type:b,tag:D,props:{},children:[{type:a,value:ai}]},{type:a,value:" application."}]},{type:a,value:g},{type:b,tag:A,props:{type:aR},children:[{type:a,value:"\n  This module disable the "},{type:b,tag:k,props:{},children:[{type:a,value:"pages\u002F"}]},{type:a,value:" directory into "},{type:b,tag:G,props:{},children:[{type:a,value:ai}]},{type:a,value:" and will use a "},{type:b,tag:k,props:{},children:[{type:a,value:F}]},{type:a,value:" file at your "},{type:b,tag:k,props:{},children:[{type:a,value:"srcDir"}]},{type:a,value:" directory.\n"}]},{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:N,props:{className:[O,"language-text"]},children:[{type:b,tag:k,props:{},children:[{type:a,value:"npm install --save-dev @nuxtjs\u002Frouter\n"}]}]}]},{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:aS}]},{type:b,tag:N,props:{className:[O,R]},children:[{type:b,tag:k,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aw}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n    buildModules"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aT}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'@nuxtjs\u002Frouter'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aU}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:ak},{type:b,tag:G,props:{},children:[{type:a,value:"Nuxt Router Module"}]},{type:a,value:al},{type:b,tag:B,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Frouter-module",target:av},children:[{type:a,value:W}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:af,props:{id:aI},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#modules-directory",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:b,tag:k,props:{},children:[{type:a,value:aV}]},{type:a,value:" directory"}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Create an "},{type:b,tag:k,props:{},children:[{type:a,value:aV}]},{type:a,value:" directory to keep the modules in it."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Directory should be located in the "},{type:b,tag:D,props:{},children:[{type:a,value:aW}]},{type:a,value:" of the project."}]},{type:a,value:g},{type:b,tag:A,props:{type:E,align:"center"},children:[{type:a,value:Y},{type:b,tag:"img",props:{src:"\u002Fexamples\u002Fnew_module_structure-desc.png",alt:"Module structure"},children:[]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:"\n  If you want change directory name, look "},{type:b,tag:ax,props:{to:"\u002Foptions#modulesdir"},children:[{type:a,value:W}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:af,props:{id:aJ},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#add-router",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aK}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Create "},{type:b,tag:k,props:{},children:[{type:a,value:F}]},{type:a,value:" file that need to export a "},{type:b,tag:k,props:{},children:[{type:a,value:aa}]},{type:a,value:" method."}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:"\n  The "},{type:b,tag:k,props:{},children:[{type:a,value:F}]},{type:a,value:" file should be located in the "},{type:b,tag:G,props:{},children:[{type:a,value:aW}]},{type:a,value:" of the project.\n"}]},{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:F}]},{type:b,tag:N,props:{className:[O,R]},children:[{type:b,tag:k,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,ab,q,ac]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,h,ap]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,as]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,"spread",s]},children:[{type:a,value:"..."}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\n\n"}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"The next step is to load the routing from all modules."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"This is done using the "},{type:b,tag:k,props:{},children:[{type:a,value:ad}]},{type:a,value:" method, which is generated by the "},{type:b,tag:D,props:{},children:[{type:a,value:ag}]},{type:a,value:" library."}]},{type:a,value:g},{type:b,tag:A,props:{type:aR},children:[{type:a,value:"\n  If you have non-modular routing, you can pass it as an array as a parameter of the "},{type:b,tag:k,props:{},children:[{type:a,value:ad}]},{type:a,value:" method.\n"}]},{type:a,value:g},{type:b,tag:"code-group",props:{},children:[{type:a,value:C},{type:b,tag:aX,props:{label:"Extend router",active:""},children:[{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:F}]},{type:b,tag:N,props:{className:[O,R]},children:[{type:b,tag:k,props:{},children:[{type:a,value:aY},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,ab,q,ac]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,h,ap]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,as]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:C}]},{type:a,value:aj},{type:b,tag:aX,props:{label:"With local router"},children:[{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:F}]},{type:b,tag:N,props:{className:[O,R]},children:[{type:b,tag:k,props:{},children:[{type:a,value:aY},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:au}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,ab,q,ac]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,h,ap]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,as]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:C}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:ak},{type:b,tag:G,props:{},children:[{type:a,value:"VueMS router API"}]},{type:a,value:al},{type:b,tag:ax,props:{to:"\u002Frouter"},children:[{type:a,value:W}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:af,props:{id:aL},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#add-middleware",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aM}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Middleware is a built-in "},{type:b,tag:D,props:{},children:[{type:a,value:ai}]},{type:a,value:" mechanism."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"By changes in the architecture you have to modify this mechanism."}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:ak},{type:b,tag:G,props:{},children:[{type:a,value:"NuxtJS middleware"}]},{type:a,value:al},{type:b,tag:B,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002F2.x\u002Fdirectory-structure\u002Fmiddleware",target:av},children:[{type:a,value:W}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:ah,props:{id:aN},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#global-middleware",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aO}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"This type of middleware will be called for every route change."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:"modulesMiddlewareLoader"}]},{type:a,value:" is an example file name, you can set up what you want."}]},{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:aS}]},{type:b,tag:N,props:{className:[O,R]},children:[{type:b,tag:k,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aw}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n    router"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n        middleware"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aT}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'modulesMiddlewareLoader'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"The main middleware must be located in the "},{type:b,tag:k,props:{},children:[{type:a,value:"middleware"}]},{type:a,value:" directory.\nIt imports a file created by "},{type:b,tag:D,props:{},children:[{type:a,value:ag}]},{type:a,value:" that runs the global middleware from the modules."}]},{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:"middleware\u002FmodulesMiddlewareLoader.js"}]},{type:b,tag:N,props:{className:[O,R]},children:[{type:b,tag:k,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:bc}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'~\u002F.nuxt\u002Fmiddleware.modules'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aw}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,bd]},children:[{type:a,value:be}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,bf,s]},children:[{type:a,value:bg}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:bc}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:be},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:ah,props:{id:aP},children:[{type:b,tag:B,props:{ariaHidden:H,href:"#local-middleware",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:aQ}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"This type of middleware will be run on specific routing."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"To a previously created "},{type:b,tag:k,props:{},children:[{type:a,value:F}]},{type:a,value:" file you need to add an entry allowing you to add appropriate middleware to the routing."}]},{type:a,value:g},{type:b,tag:n,props:{},children:[{type:a,value:"Use the helper method "},{type:b,tag:k,props:{},children:[{type:a,value:aB}]},{type:a,value:", which we use as in the example.\nThe context given to the "},{type:b,tag:k,props:{},children:[{type:a,value:aB}]},{type:a,value:" method will be available for all middlewares."}]},{type:a,value:g},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:c,props:{className:[Q]},children:[{type:a,value:F}]},{type:b,tag:N,props:{className:[O,R]},children:[{type:b,tag:k,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n      extendRoutes"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n      setLocalMiddlewares"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:au}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,ab,q,ac]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"const"}]},{type:a,value:" router "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,as]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n          mode"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n          base"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n          routes"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n\n      router"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,ab,q,ac]},children:[{type:a,value:"beforeEach"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,bd]},children:[{type:a,value:"to"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" next"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,bf,s]},children:[{type:a,value:bg}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n              to"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n              "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n              next"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n\n      "},{type:b,tag:c,props:{className:[d,h,ap]},children:[{type:a,value:aq}]},{type:a,value:" router"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{type:E},children:[{type:a,value:ak},{type:b,tag:G,props:{},children:[{type:a,value:"VueMS middleware API"}]},{type:a,value:al},{type:b,tag:ax,props:{to:"\u002Fmiddleware"},children:[{type:a,value:W}]},{type:a,value:X}]}]},dir:"\u002Fen",path:"\u002Fen\u002Fusage",extension:".md",createdAt:bi,updatedAt:bi,to:"\u002Fusage"},prev:{slug:"setup",title:"Setup",to:"\u002Fsetup"},next:{slug:"options",title:"Options",to:"\u002Foptions"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation"," ","\n","keyword","module",";","code",",","string","p","(",")","function","{","operator","}","maybe-class-name","from","import","imports",":","Router","alert","a","\n  ","strong","info","router.js","b","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","Vue","filename","language-javascript","export","\n\n  ","\n\n   ",".","here",".\n","\n      ","\n   ",3,"  ","createRouter","method","property-access","extendRoutes",2,"h2","VueMS","h3","NuxtJS","\n    ","\n  More about "," can be found ","'vue'","'vue-router'","use","control-flow","return","new","class-name","\n       ","localRouter","_blank","default","nuxt-link","'~\u002F.nuxt\u002FrouterHelper.modules'","'history'","'\u002F'","setLocalMiddlewares","installation-of-required-libraries","Installation of required libraries","nuxt--vue","nuxt + vue","nuxtjsrouter","@nuxtjs\u002Frouter","modules-directory","add-router","Add router","add-middleware","Add middleware","global-middleware","Global middleware","local-middleware","Local middleware","warning","nuxt.config.js","[","]","modules","root directory","code-block","   ","\n       extendRoutes","\n           mode","\n           base","\n           routes","'.\u002Frouter.local'","modulesMiddlewares","parameter","ctx","arrow","=\u003E","\n          ","2021-01-04T09:08:28.067Z")));