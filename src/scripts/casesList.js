// Импорты
import { activeCasesList, completedCasesList } from "./form.js";
import { addToLocalStorage } from "./localstorege.js";

// Функция завершения дел
export const completeCase = (event, item, itemId) => {
  if (event.target) {
    item.remove();

    const index = activeCasesList.findIndex((todo) => todo.id === itemId);
    if (index > -1) {
      const completedItem = activeCasesList.splice(index, 1)[0];
      completedCasesList.push(completedItem);

      addToCompletedList(completedItem);
    }

    addToLocalStorage();
  }
};

// Функция удаления дела
export const deleteCase = (event, item, itemId) => {
  if (event.target) {
    item.remove();

    const index = completedCasesList.findIndex((todo) => todo.id === itemId);
    if (index > -1) {
      completedCasesList.splice(index, 1);
      addToLocalStorage();
    }
  }
};

// Функция добавления выполненых дел в соответствующий список
export const addToCompletedList = (completedItem) => {
  const contentTemplate = document.querySelector("#completed-case-id");
  const completedCases = document.querySelector(".completed-cases");

  const newTodoItem = contentTemplate.content.cloneNode(true).firstElementChild;

  newTodoItem.querySelector(".case-title").textContent = completedItem.title;

  completedCases.appendChild(newTodoItem);

  // Сохранение данных в локальном хранилище после добавления
  addToLocalStorage();
};
