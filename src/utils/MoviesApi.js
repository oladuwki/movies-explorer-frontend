import { URL_NOMOREPATIES } from "./constants";

const checkAnswerCorrectness = (response) => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(new Error(`Ошибка ${response.status}`));
};

export const getMovies = () =>
  fetch(`${URL_NOMOREPATIES}/beatfilm-movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => checkAnswerCorrectness(res));