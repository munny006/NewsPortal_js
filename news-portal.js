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
        
        let linkContainer = document.createElement('p');
        linkContainer.innerHTML =  `<a class = "nav-link" href="#" onclick = "fetchAllNewses('${singleCategory.category_id}')">${singleCategory.category_name}</a>`;
        categoorieesContainer.appendChild(linkContainer)
       

    })
}
 const fetchAllNewses = category_id =>{
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url).then(res => res.json())
    .then(data =>console.log(data))
 }