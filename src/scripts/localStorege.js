// Импорты
// imports
import { addToCompletedList } from "./casesList.js";
import { activeCasesList, completedCasesList } from "./form.js";
import { addToTodoList } from "./form.js";

// Функция создания локального хранилища для хранения списков
// Function for creating local storage for storing lists
export const addToLocalStorage = () => {
  localStorage.setItem("activeCasesList", JSON.stringify(activeCasesList));
  localStorage.setItem(
    "completedCasesList",
    JSON.stringify(completedCasesList)
  );
};

// Функция загрузки данных из локального хранилища
// Function for loading data from local storage
export const loadFromLocalStorage = () => {
  const savedActiveCases = localStorage.getItem("activeCasesList");
  const savedCompletedCases = localStorage.getItem("completedCasesList");

  if (savedActiveCases) {
    let activeCases = JSON.parse(savedActiveCases);
    activeCases = activeCases.filter(
      (todoObj, index, list) =>
        index === list.findIndex((el) => el.id === todoObj.id)
    );
    activeCasesList.push(...activeCases);

    activeCases.forEach((todoObj) => addToTodoList(todoObj));
  }

  if (savedCompletedCases) {
    let completedCases = JSON.parse(savedCompletedCases);
    completedCases = completedCases.filter(
      (todoObj, index, list) =>
        index === list.findIndex((el) => el.id === todoObj.id)
    );
    completedCasesList.push(...completedCases);

    completedCases.forEach((todoObj) => addToCompletedList(todoObj));
  }
};
