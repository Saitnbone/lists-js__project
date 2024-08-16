// Импорты
import { addToCompletedList } from "./casesList.js";
import { activeCasesList, completedCasesList } from "./form.js";
import { addToTodoList } from "./form.js";

// Функция создания локального хранилища для хранения списков
export const addToLocalStorage = () => {
  localStorage.setItem("activeCasesList", JSON.stringify(activeCasesList));
  // console.log(activeCasesList);
  localStorage.setItem(
    "completedCasesList",
    JSON.stringify(completedCasesList)
  );
  // console.log(completedCasesList);
};

// Функция загрузки данных из локального хранилища
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

  // const savedActiveCases = localStorage.getItem("activeCasesList");
  // const savedCompletedCases = localStorage.getItem("completedCasesList");

  // if (savedActiveCases) {
  //   const loadedActiveCases = JSON.parse(savedActiveCases);

  //   const uniqueActiveCases = loadedActiveCases.filter(
  //     (todoObj, index, list) => {
  //       return index === list.findIndex((el) => el.id === todoObj.id);
  //     }
  //   );

  //   activeCasesList.length = 0; // Очищаем глобальный массив
  //   activeCasesList.push(...uniqueActiveCases);

  //   localStorage.setItem("activeCasesList", JSON.stringify(activeCasesList));

  //   activeCasesList.forEach((todoObj) => {
  //     addToTodoList(todoObj);
  //   });
  // }

  // if (savedCompletedCases) {
  //   const loadedCompletedCases = JSON.parse(savedCompletedCases);

  //   const uniqueCompletedCases = loadedCompletedCases.filter(
  //     (todoObj, index, list) => {
  //       return index === list.findIndex((el) => el.id === todoObj.id);
  //     }
  //   );

  //   completedCasesList.length = 0; // Очищаем глобальный массив
  //   completedCasesList.push(...uniqueCompletedCases);

  //   localStorage.setItem(
  //     "completedCasesList",
  //     JSON.stringify(completedCasesList)
  //   );

  //   completedCasesList.forEach((todoObj) => {
  //     addToCompletedList(todoObj);
  //   });
  // }
};
