export default function timeToHHMMSS(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const formattedTime = `${hours}:${padZeros(minutes)}:${padZeros(seconds)}`;
  return formattedTime;
}

function padZeros(value) {
  return String(value).padStart(2, "0");
}
