const fetchCategories = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res =>res.json())
    .then(data=>{
        showCategoriees(data.data);
    })
}
// fetchCategories();
const showCategoriees = data =>{
    const categoorieesContainer = document.getElementById('categories-container');
    data.news_category.forEach(singleCategory =>{
        
       const linkContainer = document.createElement('p');
        linkContainer.innerHTML =  `<a class = "nav-link" href="#" onclick = "fetchAllNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>`;
        categoorieesContainer.appendChild(linkContainer);
       

    })
}
 const fetchAllNews = (category_id,category_name )=>{
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url).then(res => res.json())
    .then(data =>showAllNews(data.data,category_name))
 }

 const showAllNews = (data,category_name) => {
    console.log(data,category_name);
    document.getElementById('news-count').innerText = data.length
    document.getElementById('category_name').innerText = category_name;

        const newsContainer = document.getElementById('all-news');
        newsContainer.innerHTML = ""
    data.forEach(singleNews =>{
        console.log(singleNews)
        // console.log(singleNews);
        // newsContainer.innerHTML += ``
        const card = document.createElement('div');
        card.classList.add('card','mb-3');
        card.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
              <h5 class="card-title">${singleNews.title}</h5>
              <p class="card-text">${singleNews.details.slice(0,230)}...</p>
             
            </div>
            <div class="card-footer border-0 bg-body d-flex justify-content-between">
            <div class="d-flex gap-2">
            <img src="${singleNews.author.img}" class="img-fluid  rounded-circle" alt="..." height="40" width="40">
            <div>
            <p class="m-0 p-0">${singleNews.author.name}</p>
            <p class="m-0 p-0">${singleNews.author.published_date}</p>
            </div>
            </div>
            <div class = "d-flex align-items-center">
            <i class="fa fa-eye" aria-hidden="true"></i>
            <p class="m-0 p-0">${singleNews.total_view}</p>
            
            </div>
            <div>
            <i class="fa fa-star-o" aria-hidden="true" style="margin-top: 15px;"></i>
            <i class="fa fa-star-o" aria-hidden="true" style="margin-top: 15px;"></i>
            <i class="fa fa-star-o" aria-hidden="true" style="margin-top: 15px;"></i>
            <i class="fa fa-star-o" aria-hidden="true" style="margin-top: 15px;"></i>
            </div>
            <div> 
            <i class="fa fa-arrow-circle-o-right" aria-hidden="true" style="font-size: 22px;margin-top: 11px;
            color: blue;" onclick="fetchNewsDetails('${singleNews.news_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </div>
            </div>
          </div>
        
      </div>`;
      newsContainer.appendChild(card)

    })
 }
 const fetchNewsDetails = news_id=>{
  let url = `https://openapi.programming-hero.com/api/news/${news_id}`
 fetch(url).then(res=>res.json())
 .then(data=>showNewsDetail(data.data[0]))

 }
 const showNewsDetail = newsDetail =>{

 }