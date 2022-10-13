// #######  decl
let cl = console.log;
const showModalBtn = document.getElementById("showModalBtn");
const backDrop = document.getElementById("backDrop");
const myModal = document.getElementById("myModal");
const addMovieBtn = document.getElementById("addMovieBtn");
const cancelMovieBtn = document.getElementById("cancelMovieBtn");
const myClose = Array.from(document.querySelectorAll(".myClose"));
const title = document.getElementById("title");
const url = document.getElementById("url");
const rating = document.getElementById("rating");
const info = document.getElementById("info");
let moviesArray = [];
cl(myClose);

// ########  CALLBACKS ########
const modalToggleHandler = () => {
  backDrop.classList.toggle("show");
  myModal.classList.toggle("show");
};
const templating = (arr) => {
  let result = "";
  arr.forEach((movie) => {
    result += `
    <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h3 class="title">${movie.title}</h3>
        <figure>
         <img src="${movie.url}" alt="${movie.title}" title = "${movie.title}">
          <figcaption>
            <p>Rating : ${movie.rating}/5</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
    `;
  });
  info.innerHTML = result;
};
const addMovieHandler = () => {
  let obj = {
    title: title.value,
    url: url.value,
    rating: rating.value,
  };
  moviesArray.push(obj);
  if(moviesArray.length > 0){
    templating(moviesArray)
  }
  cl(moviesArray);
  title.value = "";
  url.value = "";
  rating.value = "";
  modalToggleHandler();
};

// #### event binding
myClose.forEach((dObj) => {
  dObj.addEventListener("click", modalToggleHandler);
});

showModalBtn.addEventListener("click", modalToggleHandler);
addMovieBtn.addEventListener("click", addMovieHandler);
// backDrop.addEventListener('click', modalToggleHandler)


// CRUD 

// create
// read 
// upadte
// delete

