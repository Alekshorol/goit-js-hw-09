const t=document.querySelector("body");let e;t.addEventListener("click",(function(a){a.target.hasAttribute("data-start")&&(e=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.querySelector("[data-start]").disabled=!0,t.querySelector("[data-stop]").disabled=!1);a.target.hasAttribute("data-stop")&&(clearInterval(e),t.querySelector("[data-start]").disabled=!1,t.querySelector("[data-stop]").disabled=!0)}));
//# sourceMappingURL=01-color-switcher.a36de9f6.js.map