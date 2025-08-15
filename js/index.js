// GET THE REFERENCES
const container = document.getElementById('c-container');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent(urlFeed) {
    fetch(urlFeed)
        .then((response) => {
            if (!response.ok) throw new Error("Network error");
            return response.text();
        })
        .then((data) => {
            container.innerHTML = data;
        })
        .catch((error) => {
            container.innerHTML = "<p>Sorry, content could not be loaded.</p>";
            console.error(error);
        });
}

// CALL loadContent WITH THE CURRENT VALUE OF url
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL
function selectContent(event) {
    event.preventDefault();
    let newUrl = event.currentTarget.getAttribute("href");
    
    // Update active state
    links.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    loadContent(newUrl);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER
links.forEach((link) => {
    link.addEventListener("click", selectContent);
});
