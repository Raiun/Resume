//Function to open or close additional content in details
function expand(type) {
    if (type === "d1") {
        const expandButton = document.getElementById("exd1").innerHTML; 
        document.getElementById("exd1").innerHTML = (expandButton === "Expand") ? "Collapse" : "Expand";     
    }
    if (type === "d2") {
        const expandButton = document.getElementById("exd2").innerHTML; 
        document.getElementById("exd2").innerHTML = (expandButton === "Expand") ? "Collapse" : "Expand"; 
    }
    
    const elements = document.getElementsByClassName(type);
    
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].hasAttribute("open")) {
            elements[i].removeAttribute("open");
        }
        else {
            elements[i].setAttribute("open", true);
        }
    }
}

function popup(card) {
    //(document.body.style.filter == "none") ? document.body.style.filter = "blur(4px)" : document.body.style.filter = "none";
    document.getElementById("content").classList.toggle("darken");
    let popup = document.getElementById(card);
    console.log(card)
    popup.classList.toggle("show");
    console.log(popup)
}

function exitPopup() {
    blurEffect = document.body.style.filter;
    console.log(blurEffect);
    if (blurEffect == "blur(4px)") {
        document.body.style.filter = "none";
    }
}