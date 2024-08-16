// Импорты
import { onSubmit, checkInput } from "./scripts/form.js";
import { switchButton } from "./scripts/switchButtons.js";
// import { loadFromLocalStorage } from "./scripts/localstorege.js";
import { addToTodoList } from "./scripts/form.js";
import { addToCompletedList } from "./scripts/casesList.js";
import { loadFromLocalStorage } from "./scripts/localstorege.js";

// Определите все узлы
const switchButtons = document.querySelectorAll(".switch-block__element");
const formTodo = document.querySelector(".form-section");
const formInput = formTodo.querySelector(".form-todo__input");
const formTodoButton = formTodo.querySelector(".form-todo__button");

// Слушатели событий для формы
formInput.addEventListener("input", (event) =>
  checkInput(event, formTodoButton)
);

formTodo.addEventListener("submit", (event) =>
  onSubmit(event, formInput, formTodoButton)
);

// Слушатели событий для переключателей
switchButtons.forEach((button) => {
  button.addEventListener("click", (event) =>
    switchButton(switchButtons, event)
  );
});

// localStorage.removeItem("activeCasesList");
// localStorage.removeItem("completedCasesList");

// Функция для вызова рендеринга всех элементов списков
document.addEventListener("DOMContentLoaded", () => {
  // Очистка текущих элементов в DOM
  document.querySelector(".active-cases").innerHTML = "";
  document.querySelector(".completed-cases").innerHTML = "";

  // Загрузка данных из localStorage
  loadFromLocalStorage();

  // const savedActiveCases = localStorage.getItem("activeCasesList");
  // const savedCompletedCases = localStorage.getItem("completedCasesList");

  // console.log(savedCompletedCases);

  // // Очистка текущих элементов в DOM
  // document.querySelector(".active-cases").innerHTML = "";
  // document.querySelector(".completed-cases").innerHTML = "";

  // if (savedActiveCases) {
  //   let activeCasesList = JSON.parse(savedActiveCases);

  //   // Удаление дубликатов из списка активных дел
  //   activeCasesList = activeCasesList.filter((todoObj, index, list) => {
  //     return index === list.findIndex((el) => el.id === todoObj.id);
  //   });

  //   localStorage.setItem("activeCasesList", JSON.stringify(activeCasesList));

  //   // Отображение активных дел
  //   activeCasesList.forEach((todoObj) => {
  //     addToTodoList(todoObj);
  //   });
  // }

  // if (savedCompletedCases) {
  //   let completedCasesList = JSON.parse(savedCompletedCases);

  //   // Удаление дубликатов из списка выполненных дел
  //   completedCasesList = completedCasesList.filter((todoObj, index, list) => {
  //     return index === list.findIndex((el) => el.id === todoObj.id);
  //   });

  //   localStorage.setItem(
  //     "completedCasesList",
  //     JSON.stringify(completedCasesList)
  //   );

  //   // Отображение выполненных дел
  //   completedCasesList.forEach((todoObj) => {
  //     addToCompletedList(todoObj);
  //   });
  // }
});
