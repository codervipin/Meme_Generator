
fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then((data)=>{
    // console.log(data.data.memes);
    
    displayData(data);
}).catch(err => console.log(err));



let meme = document.querySelector(".meme");
let img = document.querySelector("#image");

function displayData(data){
    let ran = Math.floor(Math.random()*100);
    img.setAttribute("src",data.data.memes[ran].url);
    
}

let next = document.querySelector("#btn").addEventListener("click",handleClick);

function handleClick(){
    fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then((myData)=>{
        let ran = Math.floor(Math.random()*100);
        // console.log(ran)
        // console.log(myData.data.memes[ran].url)

        img.setAttribute("src",myData.data.memes[ran].url);
    })
    
}