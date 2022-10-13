let cl = console.log;
// let url = `https://jsonplaceholder.typicode.com/posts`;

// fetch(url) // returns a Promise
//   .then((res) => res.json()) // .json() also returns a new Promise
//   .then(cl)
//   .catch(cl);



let urls = [
    `https://jsonplaceholder.typicode.com/posts/1`,
    `https://jsonplaceholder.typicode.com/photos/1`,
    `https://jsonplaceholder.typicode.com/users/2` 
]

const getdata = async function(){
    try {
        const [posts, photos, users ] = await Promise.all(urls.map( async (url) => {
            const resp = await fetch(url); // return new Promise
            return resp.json()
        }));
        cl("posts", posts)
        cl("photos", photos)
        cl("users", users)
    }catch(err) {
        cl(err)
    }
}

// const getdata = async function(){
//   const arrayOfPromises = urls.map(url => fetch(url));
//   cl(arrayOfPromises)
// }

getdata();



Promise.resolve([10,20,30])
        .catch(cl)
        .then(arr => arr.map(num => num * 100))
        .then(res => cl(res))


// Rxjs  >> 