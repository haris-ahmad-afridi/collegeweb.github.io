let sideBar=document.querySelector(".links-list")
let menuButton=document.querySelector(".menu-button")
menuButton.addEventListener("click",function(){
    sideBar.style.display="initial"
    setTimeout(() => {
       
        sideBar.style.left="29.9%"
    },10 );
})
let sideBarClose=document.querySelector(".link-items-close")
sideBarClose.addEventListener("click",function(e){
    sideBar.style.left="100%"
    setTimeout(() => {
        sideBar.style.display="none"
    },1100 );
      
})
