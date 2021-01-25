(()=>{"use strict";var t={426:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(645),r=i.n(n)()((function(t){return t[1]}));r.push([t.id,".hidden {\n  display: none !important;\n}\n\n.masterAlert {\n  text-align: center;\n  padding: 15px;\n  font-size: 25px;\n  color: red;\n  font-weight: bolder;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n}\n\n.defaultFormContainer {\n  text-align: center;\n  padding: 15px;\n}\n\n.defaultProjectName {\n  padding-bottom: 15px;\n}\n\n.defaultProjectDates {\n  padding-bottom: 15px;\n}\n\n.defaultProjectObjective {\n  padding-bottom: 15px;\n}\n\n.projectContainer {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  padding-top: 15px;\n  border: solid 1px blue;\n}\n\n.projectMainContainer {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 15px;\n}\n\n.projectAttrContainer {\n  width: 75%;\n}\n\n.projectButtons {\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n}\n\n.actInfoContainer {\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.actAttrContainer {\n  width: 75%;\n}\n\n.actButtons {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n}\n\n.projectBigTitle {\n  font-size: 30px;\n  color: red;\n  margin-bottom: 15px;\n}\n\n.activityBigTitle {\n  font-size: 25px;\n  color: red;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}",""]);const a=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var o=0;o<t.length;o++){var d=[].concat(t[o]);n&&r[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),e.push(d))}},e}},379:(t,e,i)=>{var n,r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),a=[];function c(t){for(var e=-1,i=0;i<a.length;i++)if(a[i].identifier===t){e=i;break}return e}function o(t,e){for(var i={},n=[],r=0;r<t.length;r++){var o=t[r],d=e.base?o[0]+e.base:o[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var s=c(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==s?(a[s].references++,a[s].updater(p)):a.push({identifier:u,updater:b(p,e),references:1}),n.push(u)}return n}function d(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var a=i.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var c=r(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function s(t,e,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var a=document.createTextNode(r),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(a,c[e]):t.appendChild(a)}}function p(t,e,i){var n=i.css,r=i.media,a=i.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,v=0;function b(t,e){var i,n,r;if(e.singleton){var a=v++;i=m||(m=d(e)),n=s.bind(null,i,a,!1),r=s.bind(null,i,a,!0)}else i=d(e),n=p.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=o(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var r=c(i[n]);a[r].references--}for(var d=o(t,e),l=0;l<i.length;l++){var u=c(i[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}i=d}}}}},e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=i(379),e=i.n(t),n=i(426);e()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;const r=(t="blank",e="delta",i="gamma",n=[],r=[],a="",c="")=>{const o=document.getElementById("main"),d=document.getElementById("projectFormContainer"+e),l=document.getElementById(`activityContainer${e}${i}`);switch(t){case"project":if(null==d){const t=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("button"),s=document.createElement("button"),p=document.createElement("button"),m=document.createElement("div"),v=document.createElement("div"),b=document.createElement("div"),A=document.createElement("div"),y=document.createElement("div"),h=document.createElement("div"),E=document.createElement("div"),g=document.createElement("div"),j=document.createElement("div"),C=document.createElement("div"),f=document.createElement("input"),D=document.createElement("input"),I=document.createElement("input"),F=document.createElement("input"),T=document.createElement("input"),B=document.createElement("button"),L=document.createElement("label"),P=document.createElement("label"),M=document.createElement("label"),H=document.createElement("label"),x=document.createElement("label"),$=document.createElement("label"),N=document.createElement("label"),w=document.createElement("label"),O=document.createElement("label"),S=document.createElement("div"),k=document.createElement("div"),q=document.createElement("div"),Y=document.createElement("div"),z=document.createElement("div"),Z=document.createElement("input"),R=document.createElement("input"),U=document.createElement("input"),_=document.createElement("input"),J=document.createElement("button");L.innerHTML="Project Name",P.innerHTML="Project Objective",M.innerHTML="Project Description",H.innerHTML="Start Date",x.innerHTML="End Date",$.innerHTML="Activity Title",N.innerHTML="Activity Description",w.innerHTML="Due Date",O.innerHTML="Priority",A.setAttribute("id","projectBigTitle"+e),A.setAttribute("class","projectBigTitle"),A.innerHTML="Project "+a.getName,v.setAttribute("id","projectAttrContainer"+e),v.setAttribute("class","projectAttrContainer"),b.setAttribute("id","projectMainContainer"+e),b.setAttribute("class","projectMainContainer"),J.setAttribute("id","activityEditAccept"+e),J.setAttribute("class","activityEditAccept"),J.addEventListener("click",n[6]),J.innerHTML="Create",S.setAttribute("id","activityFormContainer"+e),k.setAttribute("id","activityFormTitle"+e),q.setAttribute("id","activityFormDescription"+e),Y.setAttribute("id","activityFormDueDate"+e),z.setAttribute("id","activityFormPriority"+e),S.setAttribute("class","activityFormContainer hidden"),k.setAttribute("class","activityFormTitle"),q.setAttribute("class","activityFormDescription"),Y.setAttribute("class","activityFormDueDate"),z.setAttribute("class","activityFormPriority"),Z.setAttribute("id","activityFormTitleInput"+e),R.setAttribute("id","activityFormDescriptionInput"+e),U.setAttribute("id","activityFormDueDateInput"+e),_.setAttribute("id","activityFormPriorityInput"+e),Z.setAttribute("class","activityFormTitleInput"),R.setAttribute("class","activityFormDescriptionInput"),U.setAttribute("class","activityFormDueDateInput"),_.setAttribute("class","activityFormPriorityInput"),Z.setAttribute("type","text"),R.setAttribute("type","text"),U.setAttribute("type","date"),_.setAttribute("type","numeric"),y.setAttribute("id","projectFormContainer"+e),h.setAttribute("id","projectFormName"+e),E.setAttribute("id","projectFormObjective"+e),g.setAttribute("id","projectFormDescription"+e),j.setAttribute("id","projectFormStartDate"+e),C.setAttribute("id","projectFormCompletionDate"+e),B.setAttribute("id","projectFormAcceptEditButton"+e),y.setAttribute("class","projectFormContainer hidden"),h.setAttribute("class","projectFormName"),E.setAttribute("class","projectFormObjective"),g.setAttribute("class","projectFormDescription"),j.setAttribute("class","projectFormStartDate"),C.setAttribute("class","projectFormCompletionDate"),B.setAttribute("class","projectFormAcceptEditButton"),f.setAttribute("id","projectFormNameInput"+e),D.setAttribute("id","projectFormObjectiveInput"+e),I.setAttribute("id","projectFormDescriptionInput"+e),F.setAttribute("id","projectFormStartDateInput"+e),T.setAttribute("id","projectFormCompletionDateInput"+e),B.addEventListener("click",n[5]),B.innerHTML="Accept Edit",f.setAttribute("class","projectFormNameInput"),D.setAttribute("class","projectFormObjectiveInput"),I.setAttribute("class","projectFormDescriptionInput"),F.setAttribute("class","projectFormStartDateInput"),T.setAttribute("class","projectFormCompletionDateInput"),f.setAttribute("type","text"),D.setAttribute("type","text"),I.setAttribute("type","text"),F.setAttribute("type","date"),T.setAttribute("type","date"),t.setAttribute("id","projectContainer"+e),i.setAttribute("id","projectName"+e),r.setAttribute("id","projectDates"+e),c.setAttribute("id","projectObjective"+e),d.setAttribute("id","projectDescription"+e),l.setAttribute("id","projectActContainer"+e),u.setAttribute("id","newActButton"+e),s.setAttribute("id","editProject"+e),p.setAttribute("id","deleteProject"+e),m.setAttribute("id","projectButtons"+e),t.setAttribute("class","projectContainer"),i.setAttribute("class","projectName"),r.setAttribute("class","projectDates"),c.setAttribute("class","projectObjective"),d.setAttribute("class","projectDescription"),l.setAttribute("class","projectActContainer"),u.setAttribute("class","newActButton"),s.setAttribute("class","editProject"),p.setAttribute("class","deleteProject"),m.setAttribute("class","projectButtons"),u.innerHTML="New Activity",s.innerHTML="Edit project",p.innerHTML="Delete project",u.addEventListener("click",n[0]),s.addEventListener("click",n[1]),p.addEventListener("click",n[2]),h.appendChild(f),E.appendChild(D),g.appendChild(I),j.appendChild(F),C.appendChild(T),y.appendChild(L),y.appendChild(h),y.appendChild(P),y.appendChild(E),y.appendChild(M),y.appendChild(g),y.appendChild(H),y.appendChild(j),y.appendChild(x),y.appendChild(C),y.appendChild(B),m.appendChild(s),m.appendChild(p),k.appendChild(Z),q.appendChild(R),Y.appendChild(U),z.appendChild(_),S.appendChild($),S.appendChild(k),S.appendChild(N),S.appendChild(q),S.appendChild(w),S.appendChild(Y),S.appendChild(O),S.appendChild(z),S.appendChild(J),l.appendChild(S),l.appendChild(u),v.appendChild(i),v.appendChild(r),v.appendChild(c),v.appendChild(d),b.appendChild(v),b.appendChild(m),t.appendChild(A),t.appendChild(b),t.appendChild(y),t.appendChild(l),o.appendChild(t),i.innerHTML=a.getName,r.innerHTML=`${a.getStartDate}  /  ${a.getCompletionDate}`,c.innerHTML=a.getObjective,d.innerHTML=a.getDescription;break}break;case"activity":if(null==l){const t=document.getElementById("projectActContainer"+e),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),s=document.createElement("div"),p=document.createElement("button"),m=document.createElement("button"),v=document.createElement("div"),b=document.createElement("div"),A=document.createElement("div"),y=document.createElement("div"),h=document.createElement("div"),E=document.createElement("div"),g=document.createElement("div"),j=document.createElement("button"),C=document.createElement("input"),f=document.createElement("input"),D=document.createElement("input"),I=document.createElement("input");v.setAttribute("id","actAttrContainer"+e),v.setAttribute("class","actAttrContainer"),a.setAttribute("id","activityBigTitle"+i),a.setAttribute("class","activityBigTitle"),b.setAttribute("id","actInfoContainer"+e),b.setAttribute("class","actInfoContainer"),j.setAttribute("id",`activityEditAccept${e}${i}`),j.setAttribute("class","activityEditAccept"),j.addEventListener("click",r[2]),j.innerHTML="Accept edit",A.setAttribute("id",`activityFormContainer${e}${i}`),y.setAttribute("id",`activityFormTitle${e}${i}`),h.setAttribute("id",`activityFormDescription${e}${i}`),E.setAttribute("id",`activityFormDueDate${e}${i}`),g.setAttribute("id",`activityFormPriority${e}${i}`),A.setAttribute("class","activityFormContainer hidden"),y.setAttribute("class","activityFormTitle"),h.setAttribute("class","activityFormDescription"),E.setAttribute("class","activityFormDueDate"),g.setAttribute("class","activityFormPriority"),C.setAttribute("id",`activityFormTitleInput${e}${i}`),f.setAttribute("id",`activityFormDescriptionInput${e}${i}`),D.setAttribute("id",`activityFormDueDateInput${e}${i}`),I.setAttribute("id",`activityFormPriorityInput${e}${i}`),C.setAttribute("class","activityFormTitleInput"),f.setAttribute("class","activityFormDescriptionInput"),D.setAttribute("class","activityFormDueDateInput"),I.setAttribute("class","activityFormPriorityInput"),C.setAttribute("type","text"),f.setAttribute("type","text"),D.setAttribute("type","date"),I.setAttribute("type","numeric"),n.setAttribute("id",`activityContainer${e}${i}`),o.setAttribute("id",`activityTitle${e}${i}`),d.setAttribute("id",`activityDescription${e}${i}`),l.setAttribute("id",`activityDate${e}${i}`),u.setAttribute("id",`activityPriority${e}${i}`),p.setAttribute("id",`delActButton${e}${i}`),m.setAttribute("id",`editActButton${e}${i}`),s.setAttribute("id",`actButtons${e}${i}`),n.setAttribute("class","activityContainer"),o.setAttribute("class","activityTitle"),d.setAttribute("class","activityDescription"),l.setAttribute("class","activityDate"),u.setAttribute("class","activityPriority"),p.setAttribute("id",`delActButton${e}${i}`),m.setAttribute("id",`editActButton${e}${i}`),s.setAttribute("class","actButtons"),p.addEventListener("click",r[0]),m.addEventListener("click",r[1]),p.innerHTML="Delete Activity",m.innerHTML="Edit Activity",y.appendChild(C),h.appendChild(f),E.appendChild(D),g.appendChild(I),A.appendChild(y),A.appendChild(h),A.appendChild(E),A.appendChild(g),A.appendChild(j),s.appendChild(p),s.appendChild(m),v.appendChild(o),v.appendChild(d),v.appendChild(l),v.appendChild(u),b.appendChild(v),b.appendChild(s),n.appendChild(a),n.appendChild(b),n.appendChild(A),t.appendChild(n),o.innerHTML=c.getTitle,a.innerHTML="Activity "+c.getTitle,d.innerHTML=c.getDescription,l.innerHTML=c.getDueDate,u.innerHTML=c.getPriority}break;default:if("blank"===t){const t=document.createElement("div"),e=document.createElement("button"),i=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("label"),s=document.createElement("label"),p=document.createElement("label"),m=document.createElement("label"),v=document.createElement("label"),b=document.createElement("input"),A=document.createElement("input"),y=document.createElement("input"),h=document.createElement("input"),E=document.createElement("input"),g=document.createElement("button");t.setAttribute("id","masterAlert"),t.setAttribute("class","masterAlert"),g.setAttribute("id","acceptNewProject"),g.setAttribute("class","acceptNewProject"),g.addEventListener("click",n[4]),g.innerHTML="Create",u.innerHTML="Project Name:",s.innerHTML="Project Starting Date:",p.innerHTML="Project Finishing Date:",m.innerHTML="Project Objective:",v.innerHTML="Project Description:",i.setAttribute("id","defaultFormContainer"),r.setAttribute("id","defaultProjectName"),a.setAttribute("id","defaultStartDates"),c.setAttribute("id","defaultProjectDates"),d.setAttribute("id","defaultProjectObjective"),l.setAttribute("id","defaultProjectDescription"),i.setAttribute("class","defaultFormContainer hidden"),r.setAttribute("class","defaultProjectName"),a.setAttribute("class","defaultProjectDates"),c.setAttribute("class","defaultProjectDates"),d.setAttribute("class","defaultProjectObjective"),l.setAttribute("class","defaultProjectDescription"),b.setAttribute("id","defaultProjectNameInput"),A.setAttribute("id","defaultProjectStartInput"),y.setAttribute("id","defaultProjectDatesInput"),h.setAttribute("id","defaultProjectObjectiveInput"),E.setAttribute("id","defaultProjectDescriptionInput"),b.setAttribute("class","defaultProjectNameInput"),A.setAttribute("class","defaultProjectStartInput"),y.setAttribute("class","defaultProjectDatesInput"),h.setAttribute("class","defaultProjectObjectiveInput"),E.setAttribute("class","defaultProjectDescriptionInput"),b.setAttribute("type","text"),A.setAttribute("type","date"),y.setAttribute("type","date"),h.setAttribute("type","text"),E.setAttribute("type","text"),e.setAttribute("id","newProject"),e.setAttribute("class","newProject"),e.addEventListener("click",n[3]),e.innerHTML="New Project",r.appendChild(b),a.appendChild(A),c.appendChild(y),d.appendChild(h),l.appendChild(E),i.appendChild(u),i.appendChild(r),i.appendChild(s),i.appendChild(a),i.appendChild(p),i.appendChild(c),i.appendChild(m),i.appendChild(d),i.appendChild(v),i.appendChild(l),i.appendChild(g),o.appendChild(t),o.appendChild(i),o.appendChild(e)}}};class a{constructor(t,e){const i=new Date;this.name=t,this.objective=e,this.startDate=i.toISOString(),this.description="Lorem ipsus dolor sit amet",this.completionDate=0,this.activities=[]}get getName(){return this.name}get getObjective(){return this.objective}get getStartDate(){return this.startDate}get getDescription(){return this.description}get getCompletionDate(){return this.completionDate}get getActivities(){return this.activities}set setName(t){this.name=t}set setObjective(t){this.objective=t}set setStartDate(t){this.startDate=t}set setDescription(t){this.description=t}set setCompletionDate(t){this.completionDate=t}set setActivities(t){this.activities.push(t)}set eliminate(t){this.activities.splice(t,1)}}class c{constructor(t,e,i,n){this.title=t,this.description=e,this.dueDate=i,this.priority=n}get getTitle(){return this.title}get getDescription(){return this.description}get getDueDate(){return this.dueDate}get getPriority(){return this.priority}set setTitle(t){this.title=t}set setDescription(t){this.description=t}set setDueDate(t){this.dueDate=t}set setPriority(t){this.priority=t}}const o=[],d=t=>{const e=t.target.id.replace("editActButton",""),i=document.getElementById("activityFormContainer"+e),n=e.split(""),r=document.getElementById("activityFormTitleInput"+e),a=document.getElementById("activityFormDescriptionInput"+e),c=document.getElementById("activityFormDueDateInput"+e),d=document.getElementById("activityFormPriorityInput"+e),l=o[n[0]].getActivities;r.value=l[n[1]].getTitle,a.value=l[n[1]].getDescription,c.value=l[n[1]].getDueDate,d.value=l[n[1]].getPriority,console.log(n),i.classList.remove("hidden")},l=t=>{const e=t.target.id.replace("activityEditAccept",""),i=e.split(""),n=document.getElementById("activityFormContainer"+e),r=document.getElementById("activityFormTitleInput"+e),a=document.getElementById("activityFormDescriptionInput"+e),c=document.getElementById("activityFormDueDateInput"+e),d=document.getElementById("activityFormPriorityInput"+e),l=document.getElementById("masterAlert"),u=document.getElementById("activityBigTitle"+i[1]),s=document.getElementById("activityTitle"+e),p=document.getElementById("activityDescription"+e),m=document.getElementById("activityDate"+e),v=document.getElementById("activityPriority"+e),b=o[i[0]].getActivities;""!==r.value&&""!==a.value&&""!==c.value&&""!==d.value?(b[i[1]].setTitle=r.value,b[i[1]].setDescription=a.value,b[i[1]].setDueDate=c.value,b[i[1]].setPriority=d.value,s.innerHTML=r.value,p.innerHTML=a.value,m.innerHTML=c.value,v.innerHTML=d.value,u.innerHTML="Activity "+r.value,n.className+=" hidden",r.value="",a.value="",c.value="",d.value="",l.innerHTML=""):l.innerHTML="You must enter all the required fields"},u=t=>{const e=t.target.id.replace("delActButton","").split(""),[i,n]=e;let a=o[i].getActivities;for(let t=0;t<a.length;t+=1)document.getElementById(`activityContainer${i}${t}`).remove();o[i].eliminate=n,a=o[i].getActivities;for(let t=0;t<a.length;t+=1)r("activity",i,t,[],[u,d,l],0,a[t])},s=t=>{const e=t.target.id.replace("activityEditAccept",""),i=document.getElementById("activityFormContainer"+e),n=document.getElementById("activityFormTitleInput"+e),a=document.getElementById("activityFormDescriptionInput"+e),s=document.getElementById("activityFormDueDateInput"+e),p=document.getElementById("activityFormPriorityInput"+e),m=document.getElementById("masterAlert");if(""!==n.value&&""!==a.value&&""!==s.value&&""!==p.value){const t=new c(n.value,a.value,s.value,p.value);o[e].setActivities=t,i.className+=" hidden",n.value="",a.value="",s.value="",p.value="";const v=o[e].getActivities;m.innerHTML="";for(let t=0;t<v.length;t+=1)r("activity",e,t,[],[u,d,l],0,v[t])}else m.innerHTML="You must enter all the required fields"},p=t=>{const e=t.target.id.replace("newActButton","");document.getElementById("activityFormContainer"+e).classList.remove("hidden")},m=t=>{const e=t.target.id.replace("editProject",""),i=document.getElementById("projectFormNameInput"+e),n=document.getElementById("projectFormObjectiveInput"+e),r=document.getElementById("projectFormStartDateInput"+e),a=document.getElementById("projectFormCompletionDateInput"+e),c=document.getElementById("projectFormDescriptionInput"+e);document.getElementById("projectFormContainer"+e).classList.remove("hidden"),i.value=o[e].getName,n.value=o[e].getObjective,r.value=o[e].getStartDate,a.value=o[e].getCompletionDate,c.value=o[e].getDescription},v=t=>{const e=t.target.id.replace("projectFormAcceptEditButton",""),i=document.getElementById("projectFormContainer"+e),n=document.getElementById("projectFormNameInput"+e),r=document.getElementById("projectFormObjectiveInput"+e),a=document.getElementById("projectFormStartDateInput"+e),c=document.getElementById("projectFormCompletionDateInput"+e),d=document.getElementById("projectFormDescriptionInput"+e),l=document.getElementById("projectName"+e),u=document.getElementById("projectDates"+e),s=document.getElementById("projectObjective"+e),p=document.getElementById("projectDescription"+e),m=document.getElementById("projectBigTitle"+e),v=document.getElementById("masterAlert");""!==n.value&&""!==r.value&&""!==a.value&&""!==d.value&&""!==c.value?(o[e].setName=n.value,o[e].setObjective=r.value,o[e].setDescription=d.value,o[e].setStartDate=a.value,o[e].setCompletionDate=c.value,l.innerHTML=n.value,u.innerHTML=`${a.value}  /  ${c.value}`,s.innerHTML=r.value,p.innerHTML=d.value,m.innerHTML="Project "+n.value,i.className+=" hidden",n.value="",r.value="",a.value="",c.value="",d.value="",v.innerHTML=""):v.innerHTML="You must enter all the required fields"},b=t=>{const e=t.target.id.replace("deleteProject","");for(let t=0;t<o.length;t+=1)document.getElementById("projectContainer"+t).remove();o.splice(e,1);for(let t=0;t<o.length;t+=1){const e=o[t].getActivities;r("project",t,0,[p,m,b,0,0,v,s],[],o[t]);for(let i=0;i<e.length;i+=1)r("activity",t,i,[],[u,d,l],0,e[i])}},A=[p,m,b,()=>{document.getElementById("defaultFormContainer").classList.remove("hidden")},()=>{const t=document.getElementById("defaultFormContainer"),e=document.getElementById("defaultProjectNameInput"),i=document.getElementById("defaultProjectObjectiveInput"),n=document.getElementById("defaultProjectStartInput"),c=document.getElementById("defaultProjectDatesInput"),d=document.getElementById("defaultProjectDescriptionInput"),l=document.getElementById("masterAlert");if(""!==e.value&&""!==i.value&&""!==n.value&&""!==d.value&&""!==c.value&&n.value<c.value){const u=new a(e.value,i.value);u.setDescription=d.value,u.setStartDate=n.value,u.setCompletionDate=c.value,o.push(u);for(let t=0;t<o.length;t+=1)r("project",t,0,[p,m,b,0,0,v,s],[],o[t]);t.className+=" hidden",e.value="",i.value="",n.value="",d.value="",l.innerHTML=""}else n.value>=c.value?l.innerHTML="The end date must be posterior to the start date ":l.innerHTML="You must enter all the required fields"}];r("blank",1,1,A)})()})();