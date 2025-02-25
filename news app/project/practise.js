const image = document.querySelector("#image"); // image of article goes here
const source = document.querySelector("#source");
const Title = document.querySelector("#title");
const discription = document.querySelector("#discription");
const author = document.querySelector("#author");
const date = document.querySelector("#date");

url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2025-02-19&' +
          'sortBy=popularity&' +
          'apiKey=573348bc06df40e7a9ddd6a0ec29dd54';

const Fetch = fetch(url);
Fetch.then((response) => {
  return response.json();
}).then((data) => {
  const x = data.articles[0];
  image.src = x.urlToImage;
  Title.innerHTML = x.title;
  discription.innerHTML = x.description;
  author.innerHTML = x.author;
  date.innerHTML = x.publishedAt;
  source.innerHTML = x.source.name;
});
