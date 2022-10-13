let cl = console.log;
// C 1>> create >> Done
// R >> Read >> Done
// U >> Update >>
// D >> Delete >>
const studentForm = document.getElementById("studentForm");
const stdInfo = document.getElementById("stdInfo");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const updateBtn = document.getElementById("updateBtn");
const submitBtn = document.getElementById("submitBtn");

let stdArray = [];
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const getLocalData = () => {
  return JSON.parse(localStorage.getItem("stdArray"));
};
const OnEditHandler = (ele) => {
  cl("Edit is Working", ele);
  // let getEditId = ele.dataset.id;
  let getEditId = ele.getAttribute("data-id");
  localStorage.setItem("setEditId", getEditId);
  let arr = getLocalData();

  let getObj = arr.find((ele) => ele.id === getEditId);
  cl(getObj);
  fName.value = getObj.firstName;
  lName.value = getObj.lastName;
  email.value = getObj.email;
  contact.value = getObj.contact;
  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
};

const OnDeleteHandler = (ele) => {
  cl("Delete is Working", ele);
  let getDeleteId = ele.dataset.id;
  cl(getDeleteId);
  let getData = getLocalData();
  stdArray = getData.filter(ele => ele.id != getDeleteId);
  templating(stdArray);
  localStorage.setItem('stdArray', JSON.stringify(stdArray))
};
const templating = (arr) => {
  let result = "";
  arr.forEach((ele, i) => {
    result += `
        <tr>
          <td>${i + 1} </td>
          <td>${ele.firstName}</td>
          <td>${ele.lastName}</td>
          <td>${ele.email}</td>
          <td>${ele.contact}</td>
          <td> <button class="btn btn-success" data-id="${
            ele.id
          }" onclick = 'OnEditHandler(this)'>Edit</button></td>
          <td><button class="btn btn-danger"  data-id="${
            ele.id
          }" onclick = 'OnDeleteHandler(this)'>Delete</button></td>
        </tr>
        `;
  });
  stdInfo.innerHTML = result;
};

const onStdInfoSubmit = (e) => {
  e.preventDefault();
  cl(e);
  let obj = {
    firstName: fName.value,
    lastName: lName.value,
    email: email.value,
    contact: contact.value,
    id: uuidv4(),
  };
  stdArray.push(obj);
  localStorage.setItem("stdArray", JSON.stringify(stdArray));
  cl(stdArray);
  templating(stdArray);
  e.target.reset();
};

const onStdInfoUpdate = () => {
 
  let arr = getLocalData();
  let getUpdateId = localStorage.getItem("setEditId");
  arr.forEach((ele) => {
    if (ele.id === getUpdateId) {
      ele.firstName = fName.value;
      ele.lastName = lName.value;
      ele.email = email.value;
      ele.contact = contact.value;
    }
  });
  templating(arr);
  localStorage.setItem("stdArray", JSON.stringify(arr));
  studentForm.reset();
  submitBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");
};

if (localStorage.getItem("stdArray")) {
  stdArray = getLocalData(); // getting data from localstorge
  templating(stdArray);
}

// let editBtns = document.querySelectorAll('.btnEdit');
// cl(editBtns)
studentForm.addEventListener("submit", onStdInfoSubmit);
updateBtn.addEventListener("click", onStdInfoUpdate);


// Angular >> it is data binding framework