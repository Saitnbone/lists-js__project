// Импорты
// imports
import { completeCase, deleteCase } from "./casesList.js";
import { addToLocalStorage } from "./localstorege.js";

// Массивы с активным делами
// Arrays with active cases
export const activeCasesList = [];
export const completedCasesList = [];

// Функция переключения состояния кнопки в форме
// Function for switching the state of a button in the form
export const toggleButtonState = (formTodoButton, inputValue) => {
  if (inputValue) {
    formTodoButton.disabled = false;
  } else {
    formTodoButton.disabled = true;
  }
};

// Функция работы с инпутом формы
// Function for working with form input
export const checkInput = (event, formTodoButton) => {
  const inputValue = event.target.value;
  toggleButtonState(formTodoButton, inputValue);
};

// Функция добавления дела в список дел
// Function of adding a todo to the todo list
export const addToTodoList = (todoObj) => {
  const templateContent = document.querySelector("#active-case-id").content;
  const activeCases = document.querySelector(".active-cases");

  // Проверка на дублирование
  // Check for duplication
  if (!activeCasesList.find((item) => item.id === todoObj.id)) {
    activeCasesList.push(todoObj);
    const newTodoItem = templateContent.cloneNode(true).firstElementChild;

    const completeButton = newTodoItem.querySelector(".complete-button");
    const deleteButton = newTodoItem.querySelector(".delete-button");

    newTodoItem.querySelector(".case-title").textContent = todoObj.title;
    activeCases.appendChild(newTodoItem);
    addToLocalStorage();

    completeButton.addEventListener("click", (event) => {
      completeCase(event, newTodoItem, todoObj.id);
    });

    deleteButton.addEventListener("click", (event) => {
      deleteCase(event, newTodoItem, todoObj.id);
    });
  }
};

// Функция создания объекта дела
// Function for creating a case object
export const createTodoObj = (text, formInput, formTodoButton) => {
  const todoObj = {
    id: Date.now(),
    title: text,
  };

  toggleButtonState(formTodoButton, "");
  formInput.value = "";
  addToTodoList(todoObj);
};

// Функция добавления значения в список активных дел
// Function for adding a value to the active to-do list
export const onSubmit = (event, formInput, formTodoButton) => {
  event.preventDefault();
  const inputValue = formInput.value.trim();

  if (inputValue) {
    createTodoObj(inputValue, formInput, formTodoButton);
    console.log(activeCasesList);
  }
};
