const timeDisplay = document.getElementById("display-time"),
  profileCard = document.querySelector(".profile-card"),
  greetingMessage = document.querySelector(".greeting-wrapper");


setInterval(() => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  timeDisplay.textContent = formattedTime; 
}, 1000);



