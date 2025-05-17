const countDownDate = new Date("July 21, 2025 00:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownEl = document.getElementById("countdown");

  if (countdownEl) {
    if (distance < 0) {
      clearInterval(countdown);
      countdownEl.innerHTML = "🎉 The big day is here! 🎉";
    } else {
      countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }
}, 1000);