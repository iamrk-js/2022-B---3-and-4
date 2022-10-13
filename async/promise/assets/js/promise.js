let cl = console.log;

// Promise >>  It is js Object, which gives some value in fature.

// it used to handle asyc oprations in JS

// pending >> wating for result
// fullfilled/Resolve >> Action related to promise is success
// reject >> ction related to promise is failed
// settled  >> Promise either fullfiled or rejected

// Benifits of Promise
// 1 Improves readability of code
// 2 Better handling of asyc operations
// 3 better error handling
// 4 Better flow of control defination

let promise1 = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve("successfully Login");
  } else {
    reject("Invalid username or Password");
  }
});

promise1.then((res) => cl(res)).catch((err) => cl(err));

let MEANstackBlogs = [
  {
    title: "Upadates in Angular 14",
    content: "Angualar 14 does not support IE",
  },
  {
    title: "Feature of JS",
    content: "It is only lang which  can be understand by Browser",
  },
];

function createBlogs(blog) {
  let promise = new Promise((resolve, reject) => {
    if (blog.title && blog.content) {
      setTimeout(() => {
        MEANstackBlogs.push(blog); // api call
        let error = false;
        if (!error) {
          resolve(MEANstackBlogs);
        } else {
          reject("Something went wrong !!!");
        }
      }, 4000);
    }
  });
  return promise;
}

createBlogs({
  title: "Feature of JS",
  content: "It is only lang which  can be understand by Browser",
})
  .then((res) => {
    fetchBlogs(res);
  })
  .catch((err) => cl(err));

function fetchBlogs(dataArray) {
  setTimeout(() => {
    cl("Data is fetched");
    templating(dataArray);
  }, 2000);
}

function templating(arr) {
  let result = "";
  arr.forEach((ele) => {
    result += `
              <div class="card">
                  <div class="card-body">
                      <h3>${ele.title}</h3>
                      <p>
                          ${ele.content}
                      </p>
                  </div>
              </div>
              `;
  });
  blogs.innerHTML = result;
}
