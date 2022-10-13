let cl = console.log;
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
  return new Promise((resolve, reject) => {
    let error = Math.random() >= 0.5 ? false : true;
    if (blog.title && blog.content) {
      setTimeout(() => {
        if (!error) {
          MEANstackBlogs.push(blog);
          resolve(MEANstackBlogs);
        } else {
          reject("Something Went Wrong !!!");
        }
      }, 1000);
    }
  });
}

function readBlogs(arr) {
  setTimeout(() => {
    templating(arr);
  }, 500);
}

// createBlogs({
//   title: "Feature of Node.js",
//   content: "It is only lang which  can be understand by Browser",
// })
//   .then((res) => readBlogs(res))
//   .catch(cl);

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

async function init() {
  try {
    let getdata = await createBlogs({
      title: "Feature of Node.js",
      content: "It is only lang which  can be understand by Browser",
    });
    readBlogs(getdata)
  } catch (err) {
    cl(err);
  }
}

init()