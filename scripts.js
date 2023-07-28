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

function popupDetails() {
    console.log("Called");
    //document.getElementsByTagName("body").style.filter = "blur(4px)";
}