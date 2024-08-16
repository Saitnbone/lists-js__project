// Импорты
import { completeCase, deleteCase } from "./casesList.js";
import { addToLocalStorage } from "./localstorege.js";

// Массив с активным делами
export const activeCasesList = [];
export const completedCasesList = [];

// Функция переключения состояния кнопки в форме
export const toggleButtonState = (formTodoButton, inputValue) => {
  if (inputValue) {
    formTodoButton.disabled = false;
  } else {
    formTodoButton.disabled = true;
  }
};

// Функция работы с инпутом формы
export const checkInput = (event, formTodoButton) => {
  const inputValue = event.target.value;
  toggleButtonState(formTodoButton, inputValue);
};

// Функция добавления дела в список дел
export const addToTodoList = (todoObj) => {
  const templateContent = document.querySelector("#active-case-id").content;
  const activeCases = document.querySelector(".active-cases");

  // Проверка на дублирование
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
      console.log(todoObj.id);
    });

    deleteButton.addEventListener("click", (event) => {
      deleteCase(event, newTodoItem, todoObj.id);
      console.log(todoObj.id);
    });
  }
};

// Функция создания объекта дела
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
export const onSubmit = (event, formInput, formTodoButton) => {
  event.preventDefault();
  const inputValue = formInput.value.trim();

  if (inputValue) {
    createTodoObj(inputValue, formInput, formTodoButton);
    console.log(activeCasesList);
  }
};
