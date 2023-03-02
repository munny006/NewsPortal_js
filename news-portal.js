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

    data.forEach(singleNews =>{
        console.log(singleNews);
    })
 }