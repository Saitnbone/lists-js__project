// Импорты
// imports
import { activeCasesList, completedCasesList } from "./form.js";
import { addToLocalStorage } from "./localstorege.js";

// Функция для указания, что дело выполнено
// Function to indicate that the job is done
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
// Function for deleting a case
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
// Function of adding completed tasks to the corresponding list
export const addToCompletedList = (completedItem) => {
  const contentTemplate = document.querySelector("#completed-case-id");
  const completedCases = document.querySelector(".completed-cases");

  const newTodoItem = contentTemplate.content.cloneNode(true).firstElementChild;
  const deleteButton = newTodoItem.querySelector(".delete-button");
  newTodoItem.querySelector(".case-title").textContent = completedItem.title;

  deleteButton.addEventListener("click", (event) => {
    deleteCase(event, newTodoItem, completedItem.id);
  });

  completedCases.appendChild(newTodoItem);

  // Сохранение данных в локальном хранилище после добавления
  //Save data to local storage after adding
  addToLocalStorage();
};
