// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

console.log("------------PROJECT2------------");

//sabse pehle book naam ka constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
//Display constructor
function Display() {}
//Add a method to Display ProtoType
Display.prototype.add = function (book) {
  console.log("Adding to ui");
  let tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td>
</tr>`;
  tableBody.innerHTML = uiString;
};

//--------to clear----after add book
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
//implement validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

//implement show function
Display.prototype.show = function (type, showMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type}" role="alert">
      <strong>${showMessage}</strong> 
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 5000);
};

//Add "submit"event listener to the Form(jab bhi form submit hoga toh book naam ks function chalega)
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", librayFormSubmit);
function librayFormSubmit(e) {
  console.log("You have clicked a submit button");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  e.preventDefault();

  let book = new Book(name, author, type);
  //display methods//see code under Display prototype
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book added successfully");
  } else {
    display.show("error", "can not add the book");
  }

  console.log(book);
}
