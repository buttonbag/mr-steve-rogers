// variables
const name = document.querySelector(".id-name");
const profileText = document.querySelector(".profile-text");


fetch("http://www.omdbapi.com/?apikey=f2fbbbab&s=avengers")
.then(res => res.json())
.then(data => {
  // console.log(data.Search[0]["Title"]);
  const loadedData = data.Search;
  const currentFilms = loadedData.filter(newMovies => {
    return newMovies.Year >= 2012;
  }).map(identifier => {
    console.table(identifier.Title, identifier.imdbID);
  });
  
}).catch(err => {
  console.log("Whoops!", err);
});


/*****************************************************

NEXT: use imdbIDs to pull plot lines for each movie 
Display info in experience

*****************************************************/



// fetch("https://gateway.marvel.com:443/v1/public/characters/1009220/events?apikey=2510a609a0195f2f69057f425a7f9609")
//     .then(res => res.json())
//     .then(data => {
//       result = data.data.results;
//       name.innerText = result.name;
//       console.table(result);
//       result.map(x=>{
//         console.log(x.description);
//       })
//     } 
// );


// fetch('https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=08f6a97837c9230eca2f50206dad03231859bdcd&filter=name:captain%20america&format=json')
//   .then(res=> res.json())
//   .then(data => {        
//   }).catch(err => {
//     console.log(err);
//   });
  

