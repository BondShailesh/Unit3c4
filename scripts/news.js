// Ude Import export (MANDATORY)

import {navbar} from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

let data2 = JSON.parse(localStorage.getItem("news"));
// -----------------------------

let div0 = document.createElement("div");
div0.setAttribute("class","news")

let img = document.createElement("img");
img.src = data2.urlToImage;

let title0 = document.createElement("h3");
title0.innerText = data2.title;

let description0 = document.createElement("p");
description0.innerText = data2.description;

div0.append(img,title0,description0)

document.querySelector("#detailed_news").append(div0);

// =-----
// import {navbar} from "../components/navbar.js";
// document.querySelector("#navbar").innerHTML = navbar();


// import { getData,append } from "./fetch.js";

document.querySelector("#search_input").addEventListener("keydown",funInput);

// function  funInput (finalDta){

//     localStorage.setItem("news",JSON.stringify(finalDta))
//      window.location.href="search.html";
//      console.log(finalDta);
//  }

// function funInput(){
//   let query0 = document.querySelector("#search_input").value;
//   console.log(query0);
//   let container1 = document.querySelector("#results")

//  getData(query0).then((res)=>{
//   let finalDta = res.articles
//   console.log(finalDta[0].title);
//    append(finalDta,container1,funk);
  
//  function  funk(finalDta){

//     localStorage.setItem("news",JSON.stringify(finalDta))
//      window.location.href="news.html";
//      console.log(finalDta);
//  }
// //    finalDta.addEventListener("click",function(finalDta){
// //   console.log(finalDta);
// //    })
//  })
// }