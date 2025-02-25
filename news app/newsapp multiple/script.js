// Get DOM elements
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const articlesGrid = document.querySelector('.articles-grid');
const resultsCount = document.querySelector('.results-count');
const filterButtons = document.querySelectorAll('.filter-button');
const sortSelect = document.querySelector('.sort-select');

// Your News API key - replace with your actual API key
const API_KEY = '573348bc06df40e7a9ddd6a0ec29dd54';
const BASE_URL = 'https://newsapi.org/v2';

// Default search parameters
let currentSearch = {
    query: '',
    category: 'all',
    sortBy: 'publishedAt'
};

// Add event listeners
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});
filterButtons.forEach(button => {
    button.addEventListener('click', () => handleFilterChange(button));
});
sortSelect.addEventListener('change', handleSortChange);

// Main search function
async function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        currentSearch.query = query;
        await fetchNews();
    }
}

// Filter change handler
function handleFilterChange(button) {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update category and fetch news
    currentSearch.category = button.textContent.toLowerCase();
    fetchNews();
}

// Sort change handler
function handleSortChange(e) {
    currentSearch.sortBy = e.target.value;
    fetchNews();
}

// Fetch news from API
async function fetchNews() {
    try {
        // Show loading state
        articlesGrid.innerHTML = '<div class="loading">Loading...</div>';
        
        // Construct API URL based on current search parameters
        let url;
        if (currentSearch.category === 'top headlines') {
            url = `${BASE_URL}/top-headlines?country=us&q=${currentSearch.query}`;
        } else {
            url = `${BASE_URL}/everything?q=${currentSearch.query}`;
        }
        
        // Add sort parameter if not top headlines
        if (currentSearch.category !== 'top headlines') {
            url += `&sortBy=${currentSearch.sortBy}`;
        }
        
        // Add API key
        url += `&apiKey=${API_KEY}`;
        
        // Fetch data
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'ok') {
            displayNews(data.articles);
            updateResultsCount(data.totalResults);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        displayError(error.message);
    }
}

// Display news articles
function displayNews(articles) {
    articlesGrid.innerHTML = '';
    
    articles.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
}

// Create article card element
function createArticleCard(article) {
    // Format date
    const publishedDate = new Date(article.publishedAt);
    const timeAgo = getTimeAgo(publishedDate);
    
    const card = document.createElement('article');
    card.className = 'article-card';
    
    card.innerHTML = `
        <img src="${article.urlToImage || '/api/placeholder/400/320'}" 
             alt="${article.title}" 
             class="article-image"
             onerror="this.src='/api/placeholder/400/320'">
        <div class="article-content">
            <div class="article-metadata">
                <span class="source-tag">${article.source.name}</span>
                <span class="publish-date">${timeAgo}</span>
            </div>
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description || 'No description available'}</p>
            <div class="article-footer">
                <div class="author">
                    <i class="fas fa-user"></i>
                    ${article.author || 'Unknown Author'}
                </div>
                <a href="${article.url}" target="_blank" class="read-more">Read More →</a>
            </div>
        </div>
    `;
    
    return card;
}

// Update results count
function updateResultsCount(total) {
    resultsCount.textContent = `Showing ${Math.min(total, 100)} results for "${currentSearch.query}"`;
}

// Display error message
function displayError(message) {
    articlesGrid.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <p>Error: ${message}</p>
        </div>
    `;
}

// Helper function to format time ago
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    
    return Math.floor(seconds) + ' seconds ago';
}

// Initial load with top headlines
window.addEventListener('load', () => {
    currentSearch.category = 'top headlines';
    fetchNews();
});