let cl = console.log;

// // It is a single threaded lang

// function printTen(){
//     cl(10)
// }

// function print20(){
//   setTimeout(function(){
//     cl(20)
//   }, 3000)
// }

// function print30(){
//     cl(30)
// }

// printTen(); // 10
// print20(); // 20
// print30(); // 30

// function fetchdata(){
//  setTimeout(() => {
//     cl('data is fetched !!!');
//     templating('data');
//  }, 3000)
// }

// function templating (data){
//   setTimeout(() => {
//     cl(`templating done on ${data}`)
//   }, 100);
// }

// fetchdata();
// templating('data');
// const btn = document.getElementById('btn')

// btn.addEventListener('click' , () => {
//     cl('Btn was clicked')
// })

// callback
// a function which get exicuted after something happens
// a function which is passed as parameter/argument in another function
// a function which is called/return in another function
const blogs = document.getElementById("blogs");
const loader = document.getElementById("loader");

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
  // blog === {title : '', content : ''}
  loader.classList.remove('d-none')
  if (blog.title && blog.content) {
    setTimeout(() => {
        cl('create blog')
      MEANstackBlogs.push(blog);
      fetchBlogs();
    
    }, 4000);
  }
}

function fetchBlogs() {
  setTimeout(() => {
    cl("Data is fetched");
    templating(MEANstackBlogs);
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
  loader.classList.add('d-none')
}


createBlogs({title : 'Node JS', content : 'Backend Lang'});
// fetchBlogs();


// promise
// async await
// hell

// nested callback functions stacked below one anoter one
// forming a pyramid structure this is called as callback hell
//