// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,sidebar0} from "../components/navbar.js";
import { append } from "./fetch.js";
document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#Sidebar").innerHTML = sidebar0();


// let url = "https://masai-mock-api.herokuapp.com/news?q={query}"


document.querySelector("#search_input").addEventListener("keydown",funInput);



   function funInput(el){
    var inp = document.querySelector("#search_input").value;
       if(el.key =="Enter"){

        window.location.href = "search.html" 
       }
   }



// ===========
let getData0 = async (con)=>{
   
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${con}`);
    let data =await res.json();
    console.log(data.articles);
    append0(data.articles)
}


let cont = document.querySelector("#results")
let append0 = (data) =>{
    cont.innerHTML = null;
    data.forEach(({title,urlToImage,description})=>{

    let div0 = document.createElement("div");
    div0.setAttribute("class","news")
  
    let img = document.createElement("img");
    img.src = urlToImage;
  
    let title0 = document.createElement("h3");
    title0.innerText = title;
  
    let description0 = document.createElement("p");
    description0.innerText = description;
  
    div0.append(img,title0,description0)
  // console.log(title,urlToImage,description);
    // contain.append(div0);
  cont.append(div0)
    // div0.addEventListener("click",function(){
    //   funkuch({title,urlToImage,description})
    // })
    })
  }
  getData0("in");

 document.querySelector("#in").addEventListener("click",funin);
 function funin(){
    getData0("in")
 }

 document.querySelector("#us").addEventListener("click",funus);
 function funus(){
    getData0("us")
 }

 document.querySelector("#ch").addEventListener("click",funch);
 function funch(){
    getData0("ch")
 }

 document.querySelector("#uk").addEventListener("click",funuk);
 function funuk(){
    getData0("uk")
 }

 document.querySelector("#nz").addEventListener("click",funnz);
 function funnz(){
    getData0("nz")
 }

