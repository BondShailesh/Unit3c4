
let getData = async (url)=>{
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${url}`);
    let data = res.json();
    return data
}

// 
let append = (data1,contain,funkuch) =>{
  data1.forEach(({title,urlToImage,description})=>{
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
  contain.append(div0);

  div0.addEventListener("click",function(){
    funkuch({title,urlToImage,description})
  })
  })
}






export {getData,append}