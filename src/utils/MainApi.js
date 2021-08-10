import { BASE_URL, URL_NOMOREPATIES } from "./constants";

const checkAnswerCorrectness = (response) => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(new Error(`Ошибка ${response.status}`));
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((response) => checkAnswerCorrectness(response));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => checkAnswerCorrectness(response));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => checkAnswerCorrectness(response));
};

export const getSaveMovies = () =>
  fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => checkAnswerCorrectness(response));

export const saveMovie = (data) => {
  const urlImg = `${URL_NOMOREPATIES}` + data.image?.url;
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    credentials: "include",
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: urlImg,
      trailer: data.trailerLink,
      thumbnail: urlImg,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then((response) => checkAnswerCorrectness(response));
};

export const deleteSaveMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json",
    },
  }).then((response) => checkAnswerCorrectness(response));
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => checkAnswerCorrectness(response));
};

export const editUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((response) => checkAnswerCorrectness(response));
};