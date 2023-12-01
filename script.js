const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const msg = document.getElementById("msg");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const tasks = document.getElementById("tasks");
const add = document.getElementById("add");

//! submit logic
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
  
});

//!form-validation function
const formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = "Input Field cannot be empty";
    //console.log("data not found");
  } else {
    msg.innerHTML = "";
    //console.log("data found");
    getData();
    add.setAttribute("data-bs-dismiss","modal")
    add.click();
    (()=>{
        add.setAttribute("data-bs-dismiss","")
    })()
  }
};

//!get details from form input and store it in data
const data = {};

const getData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["task"] = textarea.value;
  //console.log(data);
  createTodo();
};

//!create todo function

const createTodo = () => {
  tasks.innerHTML += `<div>
    <span class="fw-bolder">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.task}</p>
    <span class="options">
      <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-regular fa-trash-can"></i>
    </span>
  </div>`;
  resetForm();
};

//!reset form to clear the data

const resetForm = () => {
    textInput.value="" ;
    dateInput.value="";
    textarea.value = "";
}

//!delete the details from  data 
