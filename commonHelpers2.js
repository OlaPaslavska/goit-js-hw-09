import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},a=document.querySelector(".feedback-form");a.addEventListener("input",e=>{const{name:o,value:s}=e.target;t.hasOwnProperty(o)&&(t[o]=s.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t)))});window.addEventListener("DOMContentLoaded",()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(a.email.value=e.email,a.message.value=e.message)});a.addEventListener("submit",e=>{e.preventDefault(),t.email&&t.message?(console.log(t),localStorage.removeItem("feedback-form-state"),a.reset()):alert("Fill please all fields")});
//# sourceMappingURL=commonHelpers2.js.map
