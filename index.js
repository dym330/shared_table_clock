const hoursClock = () => {
  const now = new Date();
  const hours = now.getHours();
  document.getElementById("hours").innerHTML = hours
}

const minutesClock = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  document.getElementById("minutes").innerHTML = minutes
}

hoursClock();
minutesClock();

setInterval(hoursClock, 1000);
setInterval(minutesClock, 1000);

