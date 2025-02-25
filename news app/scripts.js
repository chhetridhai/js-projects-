const newsContainer = document.getElementById("news-container")



var url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=573348bc06df40e7a9ddd6a0ec29dd54`
var req = new Request(url);

const Fetch = fetch(url)
Fetch.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data.articles[0].title);
    newsContainer.innerHTML=`${data.articles[0].title}`
    
}).catch((error)=>{
    console.log(error);
    
})