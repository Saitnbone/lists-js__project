// Функции для работы с переключением списков
// Functions for working with list switching
export const switchButton = (switchButtons, event) => {
  const active = document.querySelector("#active");
  const completed = document.querySelector("#completed");
  const activeCasesList = document.querySelector(".active-cases");
  const completedCasesList = document.querySelector(".completed-cases");

  switchButtons.forEach((button) => {
    button.classList.remove("switch_active");
    event.currentTarget.classList.add("switch_active");
  });

  if (event.currentTarget.contains(active)) {
    renderLists(activeCasesList, completedCasesList);
  } else if (event.currentTarget.contains(completed)) {
    renderLists(completedCasesList, activeCasesList);
  }
};

// Функция для переключения рендеринга списков
// Function to toggle list rendering
export const renderLists = (displayList, hiddenList) => {
  displayList.classList.remove("cases-list_disabled");
  hiddenList.classList.add("cases-list_disabled");
};
