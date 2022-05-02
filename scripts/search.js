// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();


import { getData,append } from "./fetch.js";

document.querySelector("#search_input").addEventListener("keydown",funInput);

function funInput(){
  let query0 = document.querySelector("#search_input").value;
  console.log(query0);
  let container1 = document.querySelector("#results")

 getData(query0).then((res)=>{
  let finalDta = res.articles
  console.log(finalDta[0].title);
   append(finalDta,container1,funk);
  
 function  funk(finalDta){
    localStorage.setItem("news",JSON.stringify(finalDta))
     window.location.href="news.html";
     console.log(finalDta);
 }
 })
}
