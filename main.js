(()=>{function e(e,t,n,r,o,a,u){try{var i=e[a](u),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var u=t.apply(n,r);function i(t){e(u,o,a,i,c,"next",t)}function c(t){e(u,o,a,i,c,"throw",t)}i(void 0)}))}}var n=document.querySelector("#save-text"),r=document.querySelector("#text"),o=document.querySelector("#file-upload-form"),a=document.querySelector("#edit-form");function u(){return(u=t(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Response(t).text();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.addEventListener("click",(function(e){e.preventDefault();var t=r.value,n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download","text.txt"),n.click()})),o.addEventListener("submit",(function(e){e.preventDefault(),function(e){return u.apply(this,arguments)}(e.target.file.files[0]).then((function(e){r.value=e}))})),r.addEventListener("change",(function(e){var t=e.target.value;localStorage.setItem("notepad-text",t)})),a.addEventListener("submit",(function(e){e.preventDefault();var t=e.target["font-size"].value;r.style.fontSize=t+"px",localStorage.setItem("notepad-font-size",t)})),r.value=localStorage.getItem("notepad-text"),r.style.fontSize=(localStorage.getItem("notepad-font-size")||"16")+"px"})();