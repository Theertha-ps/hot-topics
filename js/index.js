// GET THE REFERENCES
        const container = document.getElementById('c-container');
        const links = document.querySelectorAll('.nav-link');
        let url = './partials/home.html'; // Default URL

        // CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
        const loadContent = (urlFeed) => {
            // Show loading state
            container.innerHTML = `
                <div class="loading">
                    <i class="fas fa-spinner"></i>
                    Loading content...
                </div>
            `;

            // Simulate content for demonstration
            setTimeout(() => {
                if (urlFeed.includes('home.html')) {
                    container.innerHTML = `
                        <article class="article">
    <figure>
        <img src="../img/money.jpg" alt="Financial concepts visualization" />
        <figcaption>The complex relationship between money and societal value</figcaption>
    </figure>
    <div class="article-content">
        <h2>The Value of Money</h2>
        <p>Money serves as more than just a medium of exchange—it represents trust, labor, and societal agreements about value. In our modern economy, the concept of money has evolved from physical commodities like gold and silver to digital representations of value that exist primarily as numbers in computer systems.</p>
        
        <p>The intrinsic value of money lies not in its physical form but in the collective belief in its purchasing power. This creates a fascinating paradox where something with minimal inherent value—a piece of paper or a digital entry—can command significant resources and influence behavior on a global scale. Central banks and governments play crucial roles in maintaining this trust through monetary policy and regulation.</p>
        
        <p>As we move toward digital currencies, cryptocurrencies, and alternative economic models like Universal Basic Income, understanding the fundamental principles of monetary value becomes increasingly important for navigating our financial future. The COVID-19 pandemic has further highlighted how quickly monetary systems can adapt and how government intervention can reshape economic landscapes overnight.</p>
    </div>
</article>

<article class="article">
    <figure>
        <img src="../img/science-agri.jpg" alt="GMO food science illustration" />
        <figcaption>Genetic modification in modern agriculture</figcaption>
    </figure>
    <div class="article-content">
        <h2>GMO Food: Science Meets Agriculture</h2>
        <p>Genetically Modified Organisms (GMOs) represent one of the most significant advances in agricultural science, yet they remain one of the most debated topics in food production. The ability to enhance crops with specific traits—such as resistance to pests, tolerance to herbicides, or improved nutritional content—has revolutionized farming practices worldwide.</p>
        
        <p>The benefits of GMO technology are substantial and measurable. Golden Rice, enriched with Vitamin A, has the potential to prevent blindness in millions of children in developing countries. Drought-resistant crops help farmers maintain yields despite climate change. Bt corn reduces the need for chemical pesticides, benefiting both the environment and farmer health. These improvements have helped address food security challenges in many regions, potentially feeding millions more people than traditional farming methods alone.</p>
        
        <p>However, legitimate concerns about long-term environmental effects, biodiversity impact, and corporate control over seed supply continue to fuel public debate. Critics worry about the creation of "superweeds," the potential for genetic contamination of wild plants, and the socioeconomic implications for small farmers. Balancing innovation with precaution, while ensuring rigorous safety testing and transparent labeling, remains crucial as we navigate the future of food production in an era of climate change and growing global population.</p>
    </div>
</article>

<article class="article">
    <figure>
        <img src="../img/future-world.jpg" alt="Future world visualization" />
        <figcaption>Envisioning our world 75 years from now</figcaption>
    </figure>
    <div class="article-content">
        <h2>The World in 2100: A Vision Forward</h2>
        <p>Predicting the world of 2100 requires examining current trends in technology, climate, demographics, and social evolution. By 2100, we may witness unprecedented changes in how humans interact with their environment and each other. Current projections suggest a global population of around 10-11 billion people, with significant demographic shifts toward aging populations in developed countries and continued growth in Africa and parts of Asia.</p>
        
        <p>Climate adaptation will likely reshape entire civilizations, with coastal cities either protected by massive engineering projects or relocated inland. New agricultural zones may emerge in previously uninhabitable regions like northern Canada and Siberia, while traditional farming areas become too hot or arid. Advanced technology may offer solutions we can barely imagine today—from fusion energy providing clean, abundant power to space elevators making off-world colonization economically viable. Artificial intelligence may have evolved to become true partners in solving complex global challenges.</p>
        
        <p>Social structures may evolve toward greater global cooperation out of necessity, as challenges like climate change, resource management, and space exploration require coordinated international responses. The concept of nation-states might be supplemented by city-states, corporate entities, and transnational organizations. Work itself may be redefined through automation and AI, potentially leading to new economic models that ensure human dignity and purpose in a world where traditional employment is transformed. The decisions we make today about technology governance, environmental protection, and social equity will fundamentally shape this future world.</p>
    </div>
</article>
                    `;
                } else if (urlFeed.includes('portfolio.html')) {
                    container.innerHTML = `
                       <div class="portfolio-header">
    <h2>Portfolio</h2>
    <p>Highlighting our key projects and initiatives that are building a better future.</p>
</div>

<div class="portfolio-grid">
    <div class="portfolio-card">
        <figure>
            <img src="../img/digital-innovation.jpg" alt="Digital Innovation Project showcasing AI and machine learning applications" />
            <figcaption>Advancing technology for tomorrow's solutions</figcaption>
        </figure>
        <h3>Digital innovation</h3>
    </div>
    
    <div class="portfolio-card">
        <figure>
            <img src="../img/recycle.jpg" alt="Recycling and waste reduction project featuring sustainable practices" />
            <figcaption>Creating circular economy solutions</figcaption>
        </figure>
        <h3>Recycling and waste reduction</h3>
    </div>
    
    <div class="portfolio-card">
        <figure>
            <img src="../img/urban-farming.jpg" alt="Urban farming project featuring vertical gardens and sustainable agriculture" />
            <figcaption>Growing food in urban environments</figcaption>
        </figure>
        <h3>Urban farming</h3>
    </div>
    
    <div class="portfolio-card">
        <figure>
            <img src="../img/smart-city.jpg" alt="Smart Cities Project showing urban planning and IoT integration" />
            <figcaption>Building intelligent urban infrastructure</figcaption>
        </figure>
        <h3>Smart Cities Initiative</h3>
    </div>
    
    <div class="portfolio-card">
        <figure>
            <img src="../img/ocean.jpg" alt="Ocean Conservation Project featuring marine protection efforts" />
            <figcaption>Protecting marine ecosystems worldwide</figcaption>
        </figure>
        <h3>Ocean Conservation</h3>
    </div>
    
    <div class="portfolio-card">
        <figure>
            <img src="../img/space.jpg" alt="Space Research Project showing satellite technology and exploration" />
            <figcaption>Exploring the final frontier</figcaption>
        </figure>
        <h3>Space Research Program</h3>
    </div>
</div>
                    `;
                }
            }, 500);
        };

        // CALL loadContent WITH THE CURRENT VALUE OF url
        loadContent(url);

        // CREATE THE FUNCTION THAT WILL SELECT A PARTIAL
        const selectContent = (event) => {
            // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
            event.preventDefault();
            
            // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
            const href = event.currentTarget.getAttribute('href');
            
            // Update active state
            links.forEach(link => link.classList.remove('active'));
            event.currentTarget.classList.add('active');
            
            // CALL THE FUNCTION loadContent PROVIDING THE href
            loadContent(href);
        };

        // REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER
        links.forEach(link => {
            link.addEventListener('click', selectContent);
        });