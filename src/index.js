// Импорты
// imports
import { onSubmit, checkInput } from "./scripts/form.js";
import { switchButton } from "./scripts/switchButtons.js";
import { loadFromLocalStorage } from "./scripts/localstorege.js";

//  DOM-узлы
// Dom-nodes
const switchButtons = document.querySelectorAll(".switch-block__element");
const formTodo = document.querySelector(".form-section");
const formInput = formTodo.querySelector(".form-todo__input");
const formTodoButton = formTodo.querySelector(".form-todo__button");

// Слушатели событий для формы
// Event listeners for the form
formInput.addEventListener("input", (event) =>
  checkInput(event, formTodoButton)
);

formTodo.addEventListener("submit", (event) =>
  onSubmit(event, formInput, formTodoButton)
);

// Слушатели событий для переключателей
// Event listeners for radio buttons
switchButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    switchButton(switchButtons, event)
  );
});

// Функция для вызова рендеринга всех элементов списков
// Function to call rendering of all list elements
document.addEventListener("DOMContentLoaded", () => {
  // Очистка текущих элементов в DOM
  // Clear current elements in DOM
  document.querySelector(".active-cases").innerHTML = "";
  document.querySelector(".completed-cases").innerHTML = "";

  // Загрузка данных из localStorage
  // Load data from localStorage
  loadFromLocalStorage();
});
