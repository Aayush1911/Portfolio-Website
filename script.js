var sidemenubar = document.getElementById('sidemenu')
function openmenu() {
    sidemenubar.style.right = "1px";
}
function closedmenu() {
    sidemenubar.style.right = "-500px"
    // sidemenubar.style.position='fixed',right='0'
}
var tablinks = document.getElementsByClassName('tab-links')
        var tabcontents = document.getElementsByClassName('tab-contents')

        function opentab(tabname) {
            for (let tablink of tablinks) {
                tablink.classList.remove("active-link")
            }
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add('active-tab')
        }
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXMFlvRbMMkp7yxPIXGOodwzEFriecwQCLjf6jarfg6l6IFU8GuiBoCifFA8rAimjK/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message Sent Successfully'
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
document.getElementById('load-more').addEventListener('click', function () {
    const hiddenProjects = document.querySelectorAll('.project.hidden');
    for (let i = 0; i < hiddenProjects.length; i++) {
        hiddenProjects[i].classList.remove('hidden');
    }
    this.style.display = 'none'; // Hide the button after all projects are loaded
});
