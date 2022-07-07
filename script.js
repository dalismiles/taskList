const formEl = document.querySelector(".toDo-form");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputEl = formEl.querySelector("input");
  const newTask = inputEl.value;
  const current = new Date();
  const dateEl =
    current.getDate() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getFullYear();
  const timeEl = current.getHours() + ":" + current.getMinutes();

  console.log(dateEl);
  console.log(timeEl);
  console.log(newTask);

  inputEl.value = "";

  const newTaskHTML = `<li><input type="checkbox" /> <span class='checkbox'>${newTask}</span> (added on ${dateEl} at ${timeEl}) </li>`;
  console.log(newTaskHTML);
  const listEl = document.querySelector(".task-list");

  listEl.innerHTML += newTaskHTML;
});
