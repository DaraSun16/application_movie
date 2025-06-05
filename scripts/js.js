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

      if(data.Response === "True") {
        result.innerHTML = 
        `
        <div class="info">
          <div>
            <h2>${data.Title}</h2>
            <div class="rating">
              <img src="imgs/star-icon.svg" alt="star">
              <h4>${data.imdbRating}</h4>
            </div>
            <div class="details">
              <span>${data.Rated}</span>
              <span>${data.Year}</span>
              <span>${data.Runtime}</span>
            </div>
            <div class="genre">
              <div>${data.Genre.split(",").join("</div><div>")}</div>
            </div>
            <div class="content">
              <h3>Plot:</h3>
              <p>${data.Plot}</p>
              <h3>Casting</h3>
              <div>
                <p>${data.Actors.split(", ").join("</p><p")}</p>
              </div>
            </div>
          </div>
          <img src="${data.Poster}" alt="Image du film" class="poster">
       </div>
        `;
      } else {
        // si le film n'existe pas dans la base de données
        result.innerHTML = `<h3 class="msg">${data.error} (le film n'existe pas)</h3>`;
      }
  
     }).catch(() => {
       result.innerHTML = `<h3 class="msg">Il y a eu une erreur.</h3>`;
    })
  }
}

searchBtn.addEventListener('click', getMovie);