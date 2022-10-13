let cl = console.log;

//

function gettingDevs(stack) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stack.toLowerCase().includes("angular")) {
        resolve("Candidate is Shortlisted for Angular Profile");
      } else {
        reject("Candidate is not eligible for given Profile");
      }
    }, 1000);
  });
}

// gettingDevs("Angular 8");

function firstTectInterview() {
  // getting Angular Developer
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pass = Math.random() > 0.2 ? true : false;
      if (pass) {
        resolve(`Candidate is selected for next Round`); // data
      } else {
        reject(`Candidate is rejected`);
      }
    }, 800);
  });
}

function secondTecRound(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pass = Math.random() > 0.2 ? true : false;
      if (pass) {
        resolve(`We are getting ${msg}`);
      } else {
        reject(`We are not getting ${msg}`);
      }
    }, 400);
  });
}
function logger(msg) {
  cl(msg);
}

gettingDevs("Angular 14")
  .then((res) => {
    cl(res);
    return firstTectInterview();
  })
  .then((newRes) => {
    cl(newRes);
    return secondTecRound("Angular Developer");
  })
  .then((res) => cl(res))
  .catch(cl);
// .catch(err => cl(err))

// fetch(url)


// axios 