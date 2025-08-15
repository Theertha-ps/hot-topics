const container = document.getElementById('main-content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';


contentLoad(url);

function contentLoad(urlFeed) {
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
    let nUrl = this.getAttribute("href");
    loadContent(nUrl);
}

// REGISTER links
links.forEach((link) => {
    link.addEventListener("click", selectContent);
});

