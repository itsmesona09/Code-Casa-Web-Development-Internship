const aclock_hour = document.querySelector(".aclock_hour");
const aclock_min = document.querySelector(".aclock_min");
const aclock_sec = document.querySelector(".aclock_sec");
const aclock = document.querySelector("aclock");

setInterval(() => {
  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  let hrrotation = 30 * hour + 0.5 * minutes;
  let minrotation = 6 * minutes;
  let secrotation = 6 * seconds;

  aclock_hour.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
  aclock_min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
  aclock_sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
});
