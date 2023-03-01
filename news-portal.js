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
        linkContainer.innerHTML =  `<a class = "nav-link" href="#">${singleCategory.category_name}</a>`;
        categoorieesContainer.appendChild(linkContainer)
       

    })
}