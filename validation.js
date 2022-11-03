const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.getElementById("form");


form.addEventListener("submit", (e) => {
  if (first.value === "") {
    e.preventDefault();
    first.classList.add("err");
    let text = document.createElement("p")
    text.innerText = "First Name cannot be empty"
    text.classList.add("error")
    first.parentNode.insertBefore(text, first.nextSibling)
  }
  if (last.value === "") {
    e.preventDefault();
    last.classList.add("err");
    let text = document.createElement("p")
    text.innerText = "Last Name cannot be empty"
    text.classList.add("error")
    last.parentNode.insertBefore(text, last.nextSibling)
  }
  if (email.value === "" || !email.value.includes("@") || !email.value.includes(".com")) {
    e.preventDefault();
    email.classList.add("err");
    let text = document.createElement("p")
    text.innerText = "Looks like this in not an email"
    text.classList.add("error")
    email.parentNode.insertBefore(text, email.nextSibling)
  }
  if (pass.value === "") {
    e.preventDefault();
    pass.classList.add("err");
    let text = document.createElement("p")
    text.innerText = "Password cannot be empty"
    text.classList.add("error")
    pass.parentNode.insertBefore(text, pass.nextSibling)
  }
});

form.addEventListener("click", () => {
  first.value === "" ? null : first.classList.remove("err");
  last.value === "" ? null : last.classList.remove("err");
  email.value === "" ? null : email.classList.remove("err");
  pass.value === "" ? null : pass.classList.remove("err");
});
