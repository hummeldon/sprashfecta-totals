export function timeToHHMMSS(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const formattedTime = `${hours}:${padZeros(minutes)}:${padZeros(seconds)}`;
  return formattedTime;
}

function padZeros(value) {
  return String(value).padStart(2, "0");
}

export function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

export function getNumberOfDaysFromCurrent(date) {
  const differenceInTime = new Date().getTime() - new Date(date).getTime();
  return Math.floor(differenceInTime / (1000 * 3600 * 24));
}

export function getPreviousSprashfectaDate(buttons, date) {
  let previousSprashfecta = buttons[0];

  for (let i = 1; i < buttons.length; i++) {
    if (new Date(buttons[i].date) >= new Date(date)) {
      break;
    }
    previousSprashfecta = buttons[i];
  }

  return previousSprashfecta.date;
}
