let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  if(movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Merci d'entrer un nom de film</h3>`;
  } else {
    fetch(url).then((response) => response.json()).then((data) => {
      console.log(data);
     }).catch(() => {
       result.innerHTML = `<h3 class="msg">Il y a eu une erreur.</h3>`;
    })
  }
}

searchBtn.addEventListener('click', getMovie);