//Function to open or close additional content in details
function expand(type) {
    document.body.querySelectorAll('details')
    .forEach((e) => {(e.hasAttribute('open')) ? e.removeAttribute('open') : e.setAttribute('open', true);})
    /*const elements = document.getElementsByClassName(type)
    for (let i = 0; i < document.length; i++) {
        (elements[i].hasAttribute("open")) ? element.removeAttribute("open") : element.hasAttribute("open", true);
    }*/
}