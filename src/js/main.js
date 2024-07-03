const today = new Date();

// Get the day of the week in UTC (0 = Sunday, 6 = Saturday)
const utcDay = today.getUTCDay();

// Convert the numerical day to a string representation
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = weekdays[utcDay];
console.log(currentDay, utcDay);

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateDate, 1000);
});

const updateDate = () => {
  const mydayElement = document.querySelector(".data-container > .day");
  const mytimeElement = document.querySelector(".data-container > .time");
  const today = new Date();
  const utcDay = today.getUTCDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = weekdays[utcDay];
  const formattedUTCTime = today.toISOString().slice(11, 19);
  const intervaltoday = new Date();

  mydayElement.textContent = currentDay;
  mytimeElement.textContent = formattedUTCTime;
};
