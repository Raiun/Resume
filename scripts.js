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
    let popup = document.getElementsByClassName("popup")[0];
    console.log(card)
    popup.classList.toggle("show");
    let overlay = document.getElementById("overlay"); 
    overlay.style.display = (overlay.style.display == "none") ? "block" : "none";

    switch(card) {
        case "w1":
            title = popup.querySelector("p");
            title.innerHTML = "Pullscription: Software Engineering Intern"
            break;
        case "w2":
            title = popup.querySelector("p");
            title.innerHTML = "UCLA IT Services: IT Student Consultant"
            break;
        case "w3":
            title = popup.querySelector("p");
            title.innerHTML = "UCLA Student Media: DevOps Intern"
            break;
        case "w4":
            title = popup.querySelector("p");
            title.innerHTML = "Albany's Landmark Twin: Floor Staff"
            break;
        case "p1":
            title = popup.querySelector("p");
            title.innerHTML = "Bruin-Study"
            break;
        case "p2":
            title = popup.querySelector("p");
            title.innerHTML = "Twitter Sentiment Tracker"
            break;
        case "p3":
            title = popup.querySelector("p");
            title.innerHTML = "Automotive Pilot State Recognition"
            break;
        case "p4":
            title = popup.querySelector("p");
            title.innerHTML = "UCLA Institute of Electrical Engineering: Micromouse Program"
            break;
        default:
            break;
    }
}