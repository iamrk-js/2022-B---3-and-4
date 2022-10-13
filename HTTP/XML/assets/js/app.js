//Before html5
// XMLHTTPRequest >> Ajax >> Async javascript XML/JSON
// Ajax >> API call >> Network call
// url >> API url

let cl = console.log;
const postInfo = document.getElementById("postInfo");
// www.myFrontEnd.com // localhost:4200
// www.myBackEnd.com
// www.myBackEnd.com/users
// www.myBackEnd.com/users/:id // params
// www.myBackEnd.com/products
// www.myBackEnd.com/users/5

// Methods
// GET >>  to get all objects from DATABASE
// POST >> to save new Object in DATABASE
// DELETE >> to remove object from DATABASE
// PATCH >> to update object completely or partialy in DATABASE
// PUT >>  to update object completely in DATABASE

std12 = {
  fname: "jhon",
  lname: "doe",
  email: "qa@gmail.com",
  contact: 1234567890,
  id: 12,
};

// PATCH  {email : 'newEmail@gmail.com'}
//PUT  == {
//     fname : 'jhon',
//     lname : 'doe',
//     email : 'newemail@gmail.com',
//     contact : 1234567890
// }

let baseUrl = `https://jsonplaceholder.typicode.com/posts`;
// XMLHttpRequest >> to get all users data
// https://jsonplaceholder.typicode.com/users/5 >> to get single user data
// https://jsonplaceholder.typicode.com/posts >> to get all posts data
// https://jsonplaceholder.typicode.com/posts/50 >> to get single post data

function makeNetworkCall(methodName, url) {
  let xhr = new XMLHttpRequest();

  xhr.open(methodName, url);

  xhr.onload = function () {
    if (xhr.status === 200 || xhr.status === 201) {
      cl(xhr.response);
      let data = JSON.parse(xhr.response);
      templating(data);
    } else {
      cl("Something went wrong");
    }
  };

  xhr.send();
}
makeNetworkCall("GET", baseUrl);
function templating(arr) {
  let result = "";
  arr.forEach((ele) => {
    result += `
            <tr>
                <td>${ele.id}</td>
                <td>${ele.userId}</td>
                <td>${ele.title}</td>
                <td>${ele.body}</td>
            </tr>
        `;
  });
  postInfo.innerHTML = result;
}

// status >> 200 or 201 >> Success
//    404 >> page/url not found
// 503 >> service not availble
// 403 >> Forbidden

// readyState
// 0 >> Unsend >> xhr object is created but open method is not called yet
// 1 >> The "OPEN" method is called
// 2 >> send Method is called
// 3 >> loading >> Server is loading your request
//4 >> Request has been proccessed and resopnce is ready
