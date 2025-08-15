const container = document.getElementById('c-content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';


loadContent(url);

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
            container.innerHTML = "<p>Content could not be loaded. Please try again!</p>";
            console.error(error);
        });
}


function selectContent(event) {
    event.preventDefault();
    let newUrl = this.getAttribute("href");
    loadContent(newUrl);
}

// REGISTER links
links.forEach((link) => {
    link.addEventListener("click", selectContent);
});


