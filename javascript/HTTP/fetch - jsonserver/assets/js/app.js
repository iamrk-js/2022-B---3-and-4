let cl = console.log;
let tokenValue = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM1MjRlZmU0ZTcwMDAwOTIxNzA1NCIsImZpcnN0TmFtZSI6IkphbWVzIiwibWlkZGxlTmFtZSI6bnVsbCwibGFzdE5hbWUiOiJCb25kIiwidXNlcm5hbWUiOiI2MmIzNTI0ZWZlNGU3MDAwMDkyMTcwNTQiLCJlbWFpbCI6ImphdmFzY3JpcHRpc2Nvb2xzdHVmZkBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbCwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc1N1c3BlbmRlZCI6ZmFsc2UsInJvbGUiOlsiYyJdLCJpc0FyY2hpdmVkIjpmYWxzZSwibGFzdFNpZ25lZEluIjoxNjYyMTc4MDcxLCJpc05ldyI6ZmFsc2UsIm9yZ05hbWUiOm51bGwsIm9yZ0lkIjoiNjBjODZjNWU5MDBkYTM0OTEwNDQ0Mzk3IiwiYWdyZWVtZW50QWNjZXB0ZWQiOnRydWUsImFsbG93ZWRPcGVyYXRpb25zIjpudWxsLCJpYXQiOjE2NjI2NDg3MjksImV4cCI6MTY2MjczNTEyOX0.UaRBSjbkd1kP8x2BDKR0vpJjgrt-MRzvDi9jmWg3lKw`;
let baseUrl = `http://localhost:3000`;
localStorage.setItem("token", tokenValue);

let getPostsUrl = `http://localhost:3000/posts`;

const postInfo = document.getElementById("postInfo");
const title = document.getElementById("title");
const info = document.getElementById("info");
const postForm = document.getElementById("postForm");
const updateBtn = document.getElementById("updateBtn");
const submitBtn = document.getElementById("submitBtn");
// CRUD >> creat, read, update and delete
// fetch(apiUrl)
// If we pass only one argument in fetch method
// Then bydefault method will be  >> "GET"

// fetch(apiUrl, {
// method : 'GET', 'POST', 'PATCH', 'DELETE'
// body : {data to be send to server/database}
// headers : {
// "Content-type" : "application/json; charset=UTF-8"
// autherazation : get value form localStorages
// }
// })

// fetch returns promise
// When we consume promise return by fetch, it gives us a object (call it res)
// that res object has one >> .json() >>
// after calling this json method it also retuns new promise
// when we consume promise by .json method  we get actual response from database
const OnPostEdit = (e) => {
  // cl(e);
  let editId = e.dataset.id;
  localStorage.setItem("editId", editId)
  // cl(editId);
  let getSingleObjurl = `${baseUrl}/posts/${editId}`;
  makeApiCall(getSingleObjurl, "GET")
    .then((data) => {
      title.value = data.title;
      info.value = data.info;
      updateBtn.classList.remove('d-none')
      submitBtn.classList.add('d-none')
    })
    .catch(cl);

};
const OnPostDelete = (e) => {
  cl(e);
  let deleteId = e.dataset.id;
  let deleteUrl = `${baseUrl}/posts/${deleteId}`;
  makeApiCall(deleteUrl, 'DELETE')
    .then(cl)
    .catch(cl)
};
const templating = (arr) => {
  let result = "";
  arr.forEach((post) => {
    result += `
        <div class="card mb-4">
          <div class="card-body">
              <h3>${post.title}</h3>
              <p>
                 ${post.info}
              </p>
              <p class="text-right">
                <button data-id="${post.id}" class="btn btn-info" onclick="OnPostEdit(this)">Edit</button>
                <button data-id="${post.id}" class="btn btn-danger" onclick="OnPostDelete(this)">Delete</button>
              </p>
          </div>
        </div>
    `;
  });
  postInfo.innerHTML = result;
};

const makeApiCall = (url, methodName, objBody) => {
  return fetch(url, {
    method: methodName,
    body: objBody,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "autherazation": localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};

makeApiCall(getPostsUrl, "GET")
  .then((data) => templating(data))
  .catch(cl);

const onPostCreat = (e) => {
  e.preventDefault();
  cl("Submitted");
  let post = {
    title: title.value,
    info: info.value,
    userId: Math.ceil(Math.random() * 10),
  };
  let postUrl = `${baseUrl}/posts`;
  makeApiCall(postUrl, "POST", JSON.stringify(post)).then(cl).catch(cl);
  e.target.reset();
};

const onPostUpdate = (e) => {
  let post = {
    title : title.value,
    info : info.value
  }
  cl(post);
  let updateId = localStorage.getItem('editId');
  let updateUrl = `${baseUrl}/posts/${updateId}`;
  makeApiCall(updateUrl, 'PATCH', JSON.stringify(post))
    .then(cl)
    .catch(cl)
  ;
}

postForm.addEventListener("submit", onPostCreat);
updateBtn.addEventListener("click", onPostUpdate);
