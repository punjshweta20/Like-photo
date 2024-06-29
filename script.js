let abc=document.querySelector("#container");
let xyz= document.querySelector("i");

abc.addEventListener("dblclick", function(){
    xyz.style.transform= "translate(-50% , -50%) scale(1)";
    xyz.style.opacity=0.8;

    setTimeout(function(){
        xyz.style.opacity=0;
    } , 1000);

    setTimeout(function(){
        xyz.style.transform="translate(-50%,-50%) scale(0)";
    }, 2000);
});