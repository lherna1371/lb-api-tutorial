var e,t={},r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,i={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(i,{getCharacter:()=>y,getCharacters:()=>g,getEndpoints:()=>w,getEpisode:()=>v,getEpisodes:()=>q,getLocation:()=>b,getLocations:()=>f}),e=i,t=((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of a(t))!o.call(e,u)&&u!==i&&r(e,u,{get:()=>t[u],enumerable:!(s=n(t,u))||s.enumerable});return e})(r({},"__esModule",{value:!0}),e);var s={required:"You are using an invalid argument. As an argument use an integer (Id) or an array of integers (Ids).",optional:"You are using an invalid argument. As an argument use a filter object or leave it blank."},u=e=>"number"==typeof e&&Number.isInteger(e),c=(e,t)=>{if(t&&u(e))return`/${e}`;if(t&&(e=>Array.isArray(e)&&e.every(u))(e)){let t=e;return`/${t.length?t:"[0]"}`}if(!t&&"object"==typeof e&&!Array.isArray(e))return`/?${new URLSearchParams(e).toString()}`;throw new Error(s[t?"required":"optional"])},d=async e=>{let t=await fetch(`https://rickandmortyapi.com/api/${e}`);return t.ok?{data:await t.json(),status:t.status,statusMessage:t.statusText}:{data:{},status:t.status,statusMessage:t.statusText}},p=async({endpoint:e,options:t,isIdRequired:r=!1})=>{let n=c(t,r);return d(`${e}/${n}`)},l="character",g=e=>p({endpoint:l,options:e??{}}),y=e=>p({endpoint:l,options:e,isIdRequired:!0}),m="location",f=e=>p({endpoint:m,options:e??{}}),b=e=>p({endpoint:m,options:e,isIdRequired:!0}),h="episode",q=e=>p({endpoint:h,options:e??{}}),v=e=>p({endpoint:h,options:e,isIdRequired:!0}),w=()=>p({endpoint:"",options:{}});document.querySelector("button").addEventListener("click",(function(){!async function(){let e=Math.ceil(826*Math.random()),r=await(0,t.getCharacter)(e);console.log(r);let n=r.data.name,a=r.data.image;document.querySelector("img").src=a,document.querySelector(".character-status").textContent=n}()}));
//# sourceMappingURL=index.ccacd256.js.map
