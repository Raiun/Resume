// Function to toggle popup from cards
function popup(card) {
    let popup = document.getElementsByClassName("popup")[0];
    let info = document.getElementById("popupInfo");
    console.log(card)
    popup.classList.toggle("show");
    let overlay = document.getElementById("overlay"); 
    overlay.style.display = (overlay.style.display == "none") ? "block" : "none";

    switch(card) {
        case "w1":
            infoList = ["Helped lead development for system admin panel"
            ,"Refactored backend scripts"
            ,"Added new features for csv data processing into database"
            ,"Created testing script"]

            title = popup.querySelector("p");
            title.innerHTML = "Pullscription: Software Engineering Intern"
            
            for (let i in infoList) {
                console.log(i)
                const listNode = document.createElement("li");
                listNode.innerHTML = infoList[i];
                info.appendChild(listNode);
            }

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