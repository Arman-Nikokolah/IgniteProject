const base_url = "https://api.rawg.io/api/";

// getting time

const CurrentMonth = () => {
  const Month = new Date().getMonth();
  console.log(Month);
  if (Month < 10) {
    return `0${Month}`;
  } else {
    return Month;
  }
};

const CurrentDay = () => {
  const day = new Date().getDay();
  console.log(day);

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// deploy other functions

const Currentyears = new Date().getFullYear();
const CurrentDays = CurrentDay();
const CurrentTimes = CurrentMonth();
const ResultCurrent = `Result timer functions ${Currentyears} : ${CurrentDays} : ${CurrentTimes}`;
console.log(ResultCurrent);
const LastYear = `${Currentyears + 1} : ${CurrentDays} :${CurrentTimes}`;
const NextYear = `${Currentyears - 1} : ${CurrentDays} :${CurrentTimes}`;

const Populer_games = `games?date=${LastYear}${NextYear}&ordring=-rating&page_size=10`;
const Populer_GamesUrl = () => `${base_url}${Populer_games}`;
console.log(Populer_GamesUrl());
