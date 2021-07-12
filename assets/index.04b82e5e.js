import{a as e,r as t,o as a,c as l,b as s,t as n,d as o,e as i,F as c,f as r,g as m,h as d}from"./vendor.14f9c792.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),s(c)},onload(){a(self[t].moduleMap[o]),s(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");var g=e.create({baseURL:"https://api.airtable.com/v0/appgkB4vuL7mE7q4S",headers:{Authorization:"Bearer key1XrFuYhG1GKHvu"}});const u=t({error:"",loading:!1,data:[]});const p={props:{meeting:{type:Object,required:!0}},setup:()=>({}),computed:{meetingDate(){return new Date(this.meeting.StartTime).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}}},h={class:"card my-3"},f={class:"card-header d-flex justify-content-between align-items-center"},b={class:"card-title h4 fw-light"},w={class:"card-body"},y={class:"row"},v=s("dt",{class:"col-sm-4 col-lg-3"},"Date/time",-1),k={class:"col-sm-8 col-lg-9"},L={class:"mark"},M=s("dt",{class:"col-sm-4 col-lg-3"},"Meeting type",-1),x={class:"col-sm-8 col-lg-9"},N=s("dt",{class:"col-sm-4 col-lg-3"},"Location",-1),U={class:"col-sm-8 col-lg-9"},V={key:0,class:"fw-bold"},j=s("dt",{class:"col-sm-4 col-lg-3"},"Method",-1),P={class:"col-sm-8 col-lg-9"},R=s("dt",{class:"col-sm-4 col-lg-3"},"Purpose",-1),C={class:"col-sm-8 col-lg-9"},D=s("dt",{class:"col-sm-4 col-lg-3"},"Contact",-1),O={class:"col-sm-8 col-lg-9"},$=o(" For more information, including any questions before or after the public meeting, contact "),_=o(" at "),z=o(" or by email at "),A=s("a",{href:"mailto:procurement@hcflgov.net"},"procurement@hcflgov.net",-1),B=o(". "),F=s("dt",{class:"col-sm-4 col-lg-3"},"Meeting Notice",-1),E={class:"col-sm-8 col-lg-9"},S={class:"d-grid gap-2 d-sm-block"},q=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-file-earmark",viewBox:"0 0 16 16"},[s("path",{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"})],-1),H={key:0,class:"d-grid gap-2 d-xs-block"},T=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-link-45deg",viewBox:"0 0 16 16"},[s("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),s("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})],-1),G=o(" View Meeting ");p.render=function(e,t,m,d,g,u){return a(),l("section",h,[s("div",f,[s("p",b,n(m.meeting.MeetingName),1)]),s("div",w,[s("dl",y,[v,s("dd",k,[s("strong",L,n(u.meetingDate)+" to "+n(m.meeting.EndTime),1)]),M,s("dd",x,n(m.meeting.MeetingType),1),N,s("dd",U,[o(n(m.meeting.Location)+" ",1),m.meeting.PhysicalLocation?(a(),l("small",V," (for committee members only, no general public admitted) ")):i("",!0)]),j,s("dd",P,n(m.meeting.Method),1),R,s("dd",C,n(m.meeting.Purpose),1),D,s("dd",O,[$,s("strong",null,n(m.meeting.ContactName),1),_,s("strong",null,n(m.meeting.ContactPhone),1),z,A,B]),m.meeting.OptionalMeetingNotice?(a(),l(c,{key:0},[F,s("dd",E,[s("div",S,[(a(!0),l(c,null,r(m.meeting.OptionalMeetingNotice,(e=>(a(),l("a",{key:e.id,href:e.url,class:"btn btn-sm btn-outline-dark",target:"_blank"},[q,o(n(e.filename),1)],8,["href"])))),128))])])],64)):i("",!0)]),m.meeting.PublicLink?(a(),l("footer",H,[s("a",{href:m.meeting.PublicLink,target:"_blank",class:"btn btn-outline-primary",title:`View meeting - ${u.meetingDate}`,"aria-label":`View meeting - ${u.meetingDate}`},[T,G],8,["href","title","aria-label"])])):i("",!0)])])};const K={components:{MeetingNotice:p},setup:()=>(async function(){u.loading=!0;try{const{data:e}=await g.get("/meetings",{params:{view:"AppView"}});u.data=e.records}catch(e){u.error=e.message}finally{u.loading=!1}}(),{meetings:u})},X={class:"container-fluid"},Y={key:0,class:"text-center my-5"},I=s("div",{class:"spinner-border",role:"status"},[s("span",{class:"visually-hidden"},"Loading...")],-1),J={key:1,class:"list-group"},Q={key:2,class:"alert alert-warning",role:"alert"};K.render=function(e,t,s,n,o,i){const d=m("MeetingNotice");return a(),l("main",X,[n.meetings.loading?(a(),l("div",Y,[I])):n.meetings.data.length?(a(),l("div",J,[(a(!0),l(c,null,r(n.meetings.data,(({id:e,fields:t})=>(a(),l(d,{key:e,meeting:t},null,8,["meeting"])))),128))])):(a(),l("div",Q," No meetings to show at this time. "))])},d(K).mount("#app");
