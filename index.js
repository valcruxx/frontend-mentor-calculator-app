const theme1 = document.getElementById("pointer1");
const theme2 = document.getElementById("pointer2");
const theme3 = document.getElementById("pointer3");
const body = document.getElementsByTagName("body")[0];
const topSection = document.getElementById("top-section");
const toggle = document.getElementById("toggle");
var display = document.getElementById("display");
const buttonDiv = document.getElementById("button-div");
const button = Array.from(document.getElementsByClassName("button"));
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const del = document.getElementById("del");
var cal = document.getElementById("calculate");

theme1.addEventListener("click", ()=>{
    theme1.style.opacity = "1";
    theme2.style.opacity = "0";
    theme3.style.opacity = "0";
    body.style.background = "hsl(222, 26%, 31%)";
    topSection.style.color = "white"
    toggle.style.background = "hsl(223, 31%, 20%)";
    display.style.color ="white";
    display.style.background = "hsl(224, 36%, 15%)";
    buttonDiv.style.background = "hsl(223, 31%, 20%)";
    button.map(button=>button.style.background = "hsl(30, 25%, 89%)");
    button.map(button=>button.style.boxShadow = "0 3px hsl(28, 16%, 65%)");
    button.map(button=>button.style.color = "hsl(221, 14%, 31%)");
    reset.style.background = "hsl(225, 21%, 49%)";
    reset.style.boxShadow = "0 3px hsl(224, 28%, 35%)";
    reset.style.color = "white";
    del.style.background ="hsl(225, 21%, 49%)";
    del.style.boxShadow = " 0 3px hsl(224, 28%, 35%)";
    del.style.color = "white";
    equal.style.background ="hsl(6, 63%, 50%)";
    equal.style.boxShadow = "0 3px hsl(6, 70%, 34%)";
    equal.style.color = "white";

});

theme2.addEventListener("click", ()=>{
    theme1.style.opacity = "0";
    theme2.style.opacity = "1";
    theme3.style.opacity = "0";
    body.style.background = "hsl(0, 0%, 90%)";
    topSection.style.color = "black"
    toggle.style.background = "hsl(0, 5%, 81%)";
    display.style.color ="black";
    display.style.background = "hsl(0, 0%, 93%)";
    buttonDiv.style.background = "hsl(0, 5%, 81%)";
    button.map(button=>button.style.background = "hsl(45, 7%, 89%)");
    button.map(button=>button.style.boxShadow = "0 3px hsl(35, 11%, 61%)");
    button.map(button=>button.style.color = "black");
    reset.style.background = "hsl(25, 98%, 40%)";
    reset.style.boxShadow = "0 3px hsl(25, 99%, 27%)"
    reset.style.color = "white";
    del.style.background ="hsl(185, 42%, 37%)";
    del.style.boxShadow = " 0 3px hsl(185, 58%, 25%)";
    del.style.color = "white";
    equal.style.background ="hsl(185, 42%, 37%)";
    equal.style.boxShadow = "0 3px hsl(185, 58%, 25%)";
    equal.style.color = "white";
});

theme3.addEventListener("click", ()=>{
    theme1.style.opacity = "0";
    theme2.style.opacity = "0";
    theme3.style.opacity = "1";
    body.style.background = "hsl(268, 75%, 9%)";
    topSection.style.color = "hsl(52, 100%, 62%)"
    toggle.style.background = "hsl(268, 71%, 12%)";
    display.style.color ="hsl(52, 100%, 62%)";
    display.style.background = "hsl(268, 71%, 12%)";
    buttonDiv.style.background = "hsl(268, 71%, 12%)";
    button.map(button=>button.style.background = "hsl(268, 47%, 21%)");
    button.map(button=>button.style.boxShadow = "0 3px hsl(290, 70%, 36%)");
    button.map(button=>button.style.color = "hsl(52, 100%, 62%)");
    reset.style.background = "hsl(281, 89%, 26%)";
    reset.style.boxShadow = "0 3px hsl(285, 91%, 52%)"
    reset.style.color = "white";
    del.style.background ="hsl(281, 89%, 26%)";
    del.style.boxShadow = " 0 3px hsl(285, 91%, 52%)";
    del.style.color = "white";
    equal.style.background ="hsl(176, 100%, 44%)";
    equal.style.boxShadow = "0 3px hsl(177, 92%, 70%)";
    equal.style.color = "hsl(198, 20%, 13%)";
});

button.map(button => button.addEventListener("click", (e)=>{
    switch (e.target.innerText){
        case "DEL":
            if(display.innerText){
            display.innerText= display.innerText.slice(0,-1)};
            if(cal.innerText){
                cal.innerText= cal.innerText.slice(0,-1)};    
            break; 
        case "x":
            cal.innerText += "*"
            display.innerText += e.target.innerText
            break;    
        case "RESET":
                display.innerText = ""
                cal.innerText = ""
                break;
        case "=":
                    try {
                        cal.innerText =eval(cal.innerText)
                    } catch {
                        cal.innerText= "Syntax Error"
                    }
                    display.innerText = Number(cal.innerText).toLocaleString();
           break; 
        default:
            display.innerText += e.target.innerText;
            cal.innerText += e.target.innerText;
            break;
    }
}));
