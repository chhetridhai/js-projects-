//selecting button
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
const articlesGrid = document.querySelector(".articles-grid");
const articleCard = document.querySelector(".article-card");
const countItems = document.querySelector(".results-count")



let count=0
const API_KEY = "f07c531dab07486b9a692d7d59343844";
//user click event input
searchBtn.addEventListener("click",()=>{
    Fetch()
});
//filter button experiment
document.querySelectorAll(".filter-button").forEach((buttons)=>{
    buttons.addEventListener("click",(event)=>{
        // Remove "active" class from all buttons
        document.querySelectorAll(".filter-button").forEach(btn => {
            btn.classList.remove("active");
        });
        // Add "active" class to the clicked button
        event.target.classList.add("active");
        searchInput.value=event.target.textContent
        Fetch()
    })
})

const Fetch = () => {
  const searchtopic = searchInput.value.trim();
  //const url =`https://newsapi.org/v2/everything?q=${searchtopic}&apiKey=${API_KEY}`
  const url = `https://newsapi.org/v2/everything?q=${searchtopic}&apiKey=${API_KEY}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      articlesGrid.innerHTML = ""
      data.articles.forEach((element) => {
        countItems.innerHTML = `Showing ${count} results for "${searchtopic}"`
        display(element);
        count++
      });
    }).catch((error)=>{
        articlesGrid.innerHTML=`${error}`
    })
};
function display(news) {
  articlesGrid.innerHTML += `
    <article class="article-card">
          <img
            src="${news.urlToImage}"
            alt="News Article"
            class="article-image"
          />
          <div class="article-content">
            <div class="article-metadata">
              <span class="source-tag">${news.source.name}</span>
              <span class="publish-date">2 hours ago</span>
            </div>
            <h2 class="article-title">
              ${news.title}
            <p class="article-description">
              ${news.description}
            </p>
            <div class="article-footer">
              <div class="author">
                <i class="fas fa-user"></i>
                ${news.author}
              </div>
              <a href="${news.url}" class="read-more">Read More →</a>
            </div>
          </div>
        </article>

    `;
}

window.addEventListener("load", () => {
    searchInput.value="elon musk"
    Fetch()
  });
  