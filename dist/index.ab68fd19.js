var e,t={},r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,i={};((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(i,{getCharacter:()=>y,getCharacters:()=>l,getEndpoints:()=>j,getEpisode:()=>w,getEpisodes:()=>v,getLocation:()=>m,getLocations:()=>b}),e=i,t=((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of o(t))!a.call(e,u)&&u!==i&&r(e,u,{get:()=>t[u],enumerable:!(s=n(t,u))||s.enumerable});return e})(r({},"__esModule",{value:!0}),e);var s={required:"You are using an invalid argument. As an argument use an integer (Id) or an array of integers (Ids).",optional:"You are using an invalid argument. As an argument use a filter object or leave it blank."},u=e=>"number"==typeof e&&Number.isInteger(e),p=(e,t)=>{if(t&&u(e))return`/${e}`;if(t&&(e=>Array.isArray(e)&&e.every(u))(e)){let t=e;return`/${t.length?t:"[0]"}`}if(!t&&"object"==typeof e&&!Array.isArray(e))return`/?${new URLSearchParams(e).toString()}`;throw new Error(s[t?"required":"optional"])},d=async e=>{let t=await fetch(`https://rickandmortyapi.com/api/${e}`);return t.ok?{data:await t.json(),status:t.status,statusMessage:t.statusText}:{data:{},status:t.status,statusMessage:t.statusText}},c=async({endpoint:e,options:t,isIdRequired:r=!1})=>{let n=p(t,r);return d(`${e}/${n}`)},g="character",l=e=>c({endpoint:g,options:e??{}}),y=e=>c({endpoint:g,options:e,isIdRequired:!0}),f="location",b=e=>c({endpoint:f,options:e??{}}),m=e=>c({endpoint:f,options:e,isIdRequired:!0}),h="episode",v=e=>c({endpoint:h,options:e??{}}),w=e=>c({endpoint:h,options:e,isIdRequired:!0}),j=()=>c({endpoint:"",options:{}});document.querySelector("button").addEventListener("click",(function(){console.log("CLicked on button!!!")}));await(0,t.getCharacter)();
//# sourceMappingURL=index.ab68fd19.js.map