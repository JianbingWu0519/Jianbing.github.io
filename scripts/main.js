const myImage=document.querySelector("img");
myImage.onclick = () => {
    const mySrc=myImage.getAttribute("src");
    if (mySrc==="images/firefox-logo-png-transparent.png") {
        myImage.setAttribute("src","images/firefox-icon-png-transparent.png");
    } else {
        myImage.setAttribute("src","images/firefox-logo-png-transparent.png");
    }
};
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");
function setUserName() {
    const myName=prompt("Please enter your name.");
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent=`Mozilla is cool,${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`Mozilla is cool,${storedName}`;
}
myButton.onclick=function(){
    setUserName();
};