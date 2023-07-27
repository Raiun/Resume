//Function to open or close additional content in details
function expand() {
    document.body.querySelectorAll('details')
    .forEach((e) => {(e.hasAttribute('open')) ? e.removeAttribute('open') : e.setAttribute('open', true);})
}