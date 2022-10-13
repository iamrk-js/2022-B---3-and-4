let cl = console.log;
let tokenValue = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM1MjRlZmU0ZTcwMDAwOTIxNzA1NCIsImZpcnN0TmFtZSI6IkphbWVzIiwibWlkZGxlTmFtZSI6bnVsbCwibGFzdE5hbWUiOiJCb25kIiwidXNlcm5hbWUiOiI2MmIzNTI0ZWZlNGU3MDAwMDkyMTcwNTQiLCJlbWFpbCI6ImphdmFzY3JpcHRpc2Nvb2xzdHVmZkBnbWFpbC5jb20iLCJwaG9uZSI6bnVsbCwiaXNFbWFpbFZlcmlmaWVkIjp0cnVlLCJpc1N1c3BlbmRlZCI6ZmFsc2UsInJvbGUiOlsiYyJdLCJpc0FyY2hpdmVkIjpmYWxzZSwibGFzdFNpZ25lZEluIjoxNjYyMTc4MDcxLCJpc05ldyI6ZmFsc2UsIm9yZ05hbWUiOm51bGwsIm9yZ0lkIjoiNjBjODZjNWU5MDBkYTM0OTEwNDQ0Mzk3IiwiYWdyZWVtZW50QWNjZXB0ZWQiOnRydWUsImFsbG93ZWRPcGVyYXRpb25zIjpudWxsLCJpYXQiOjE2NjI2NDg3MjksImV4cCI6MTY2MjczNTEyOX0.UaRBSjbkd1kP8x2BDKR0vpJjgrt-MRzvDi9jmWg3lKw`;
let baseUrl = `http://localhost:3000`;
localStorage.setItem("token", tokenValue); // login call >> we get Token
let getDataUrl = `${baseUrl}/posts`;
const postInfo = document.getElementById("postInfo");
const postForm = document.getElementById("postForm");
const title = document.getElementById("title");
const info = document.getElementById("info");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

let postArray = []

const onEditHandler = (post) => {
  cl(post);
  let getId = post.getAttribute("data-id");
  localStorage.setItem('updateId', getId);
  cl(getId);
  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
  let getSinglePostUrl = `${baseUrl}/posts/${getId}`;
  makeApiCall("GET", getSinglePostUrl)
    .then((res) => {
      cl(res);
      let data = JSON.parse(res);
      title.value = data.title;
      info.value = data.body;
    })
    .catch(cl);
};

const onDeleteHandler = (post) => {
  cl(post);
  let deleteId = post.dataset.id;
  let deleteUrl = `${baseUrl}/posts/${deleteId}`
  makeApiCall('DELETE', deleteUrl)
    .then(cl)
    .catch(cl)
};

const templating = (arr) => {
  let result = "";
  arr.forEach((post, i) => {
    result += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${post.userId}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td>
                        <button data-id="${post.id}" class="btn btn-info"
                         onclick = "onEditHandler(this)">Edit</button>
                    </td>
                    <td>
                        <button data-id="${post.id}"  class="btn btn-danger"
                        onclick = "onDeleteHandler(this)">Delete</button>
                    </td>
                </tr>
                `;
  });

  postInfo.innerHTML = result;
};

function makeApiCall(methodName, url, body) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(methodName, url);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.setRequestHeader("authorization", localStorage.getItem("token"));

    // xhr.setRequestHeader({
    //     'Content-type':'application/json; charset=UTF-888',
    //     'authorization' : localStorage.getItem('token')
    // })
    xhr.onload = function () {
      if ((xhr.status === 200 || xhr.status === 201) && xhr.readyState === 4) {
        resolve(xhr.response); // JSON >>
      } else {
        reject(`Something went wrong !!!`);
      }
    };
    xhr.send(body);
  });
}

let getUrl = `${baseUrl}/posts`;
makeApiCall("GET", getUrl)
  .then((res) => {
    postArray = JSON.parse(res)
    templating(postArray);
  })
  .catch(cl);

const onPostSubmit = (e) => {
  e.preventDefault();
  let obj = {
    title: title.value,
    body: info.value,
    userId: Math.floor(Math.random() * 10),
  };
  let postUrl = `${baseUrl}/posts`;
  e.target.reset();
  makeApiCall("POST", postUrl, JSON.stringify(obj)).then(cl).catch(cl);
};

const onPostUpdate = (e) => {
  e.preventDefault();
  let obj = {
    title : title.value,
    body : info.value
  }
  let updateId = localStorage.getItem('updateId');
  let updateUrl = `${baseUrl}/posts/${updateId}`;
  makeApiCall('PATCH', updateUrl, JSON.stringify(obj))
    .then(res => {
      templating(postArray);
    })
    .catch(cl)
}

postForm.addEventListener("submit", onPostSubmit);
updateBtn.addEventListener("click", onPostUpdate);
