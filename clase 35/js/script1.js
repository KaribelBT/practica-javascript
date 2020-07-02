let inputSearch = document.getElementById("inputSearch")
let buttonSearch = document.querySelector("#buttonSearch");
let homeResults = document.querySelector("#homeResults");

async function getJoke(query){
    let response  = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    let data = await response.json()
    return data
}

buttonSearch.addEventListener("click", function(){
    let query = inputSearch.value
    if(query !== ""){ //valida que user escriba algo
        getJoke(query)
        .then(response=>{
            if (response.result.length !== 0){ //valida que api tenga resultados
                homeResults.innerHTML = ""
                for (let index = 0; index < response.result.length; index++) {
                    let element = response.result[index];
                    console.log(element)
                    homeResults.innerHTML += //igualar y sumar en numeros, si es string igualar y concatenar
                    `<div style="width: 30rem; "class="container border border-success rounded flex-wrap d-flex justify-content-center">
                        <a href=${element.url} target="_blank"><img src=${element.icon_url}></a>
                        <p class="text-center font-weight-bold">${element.value}</p>
                    </div>
                    <br>`
                }
            }
            else{
                homeResults.innerHTML = 
                `<div style="width: 30rem; "class="container border border-success rounded flex-wrap d-flex justify-content-center">
                <p class="text-center font-weight-bold">Por favor ingresa un criterio de búsqueda válido, por ejemplo: bitch</p>
                </div>`
            }
        })
    }
    else{
        homeResults.innerHTML = 
                `<div style="width: 30rem; "class="container border border-success rounded flex-wrap d-flex justify-content-center">
                <p class="text-center font-weight-bold">Por favor ingresa un criterio de búsqueda</p>
                </div>`
    }
})

/*COMO LO RESOLVIERON EN CLASE
    const buttonSearch = document.querySelector('#buttonSearch')
const inputSearch = document.querySelector('#inputSearch')


const homeResults = document.querySelector('#homeResults')

async function traerContenido (keyword) {
    let url = 'https://newsapi.org/v2/top-headlines?country=ar&apiKey=5a0ab2f0ffa04b108c38d61d7b1a378a&q=' + keyword;
    const resp = await fetch(url);
    const datos = await resp.json();
    return datos
}

const showHomeResults = articles => {
	if( articles.length < 1 ) {
  	homeResults.innerHTML = '<p>No se encontraron resultados</p>'
  }
	articles.forEach( article => {
  	const articleHTML = `
    <div class="card" style="width: 18rem;">
  		<img src="${article.urlToImage}" class="card-img-top" alt="...">
  		<div class="card-body">
    		<h5 class="card-title">${article.title}</h5>
    		<p class="card-text">${article.description}</p>
    		<a href="#" class="btn btn-primary">Ver nota completa</a>
  		</div>
		</div>
		`
		const articleElement = document.createElement('article')
    articleElement.innerHTML = articleHTML
    homeResults.append(articleElement)
  })
}


buttonSearch.addEventListener('click', ev => {
	const query = inputSearch.value
  homeResults.innerHTML = ""
  traerContenido(query).then( resp => {
  	showHomeResults(resp.articles)
  })
})


window.onload = () => {
	traerContenido("").then( resp => {
  	showHomeResults(resp.articles)
  })
}


*/