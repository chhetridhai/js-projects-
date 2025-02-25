// DOM elements
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const articlesGrid = document.querySelector('.articles-grid');

// Replace with your API key from newsapi.org
const API_KEY = 'f07c531dab07486b9a692d7d59343844';
//fetch function
const Fetch = ()=>{
    const searchtopic = searchInput.value;
    fetch(`https://newsapi.org/v2/everything?q=${searchtopic}&apiKey=${API_KEY}`)
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        displayNews(data.articles)
    }).catch((error)=>{
        articlesGrid.innerHTML = `<p>Error Loading news: ${error.message}</p>`
    })
}

// Add event listeners
searchButton.addEventListener('click', Fetch);  //show result when click search button
searchInput.addEventListener('keypress', (e) => { //also show result when click enter key in the searchbox
    if (e.key === 'Enter') Fetch();
});

function displayNews(articles) {
    articlesGrid.innerHTML = ''; // Clear previous results
    
    articles.forEach(article => {
        const articleHTML = `
            <article class="article-card">
                <img src="${article.urlToImage || '/api/placeholder/400/320'}" 
                     alt="${article.title}" 
                     class="article-image">
                <div class="article-content">
                    <div class="article-metadata">
                        <span class="source-tag">${article.source.name}</span>
                    </div>
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-description">${article.description || 'No description available'}</p>
                    <div class="article-footer">
                        <div class="author">${article.author || 'Unknown Author'}</div>
                        <a href="${article.url}" target="_blank" class="read-more">Read More</a>
                    </div>
                </div>
            </article>
        `;
        articlesGrid.innerHTML += articleHTML;
    });
}
// JavaScript


// Load default news on page load
window.addEventListener('load', () => {
    // Start with technology news by default
    searchInput.value = 'technology';
    //fetchNews();
    Fetch()
});