const jokeBox = document.getElementById("joke");
const jokeBtn = document.getElementById("new-joke");

async function fetchJoke() {
  jokeBox.textContent = "Loading...";

  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    jokeBox.textContent = data.value;
  } catch (error) {
    jokeBox.textContent =
      "Chuck is busy roundhouse kicking the internet. Try again!";
    console.error("Error:", error);
  }
}

window.addEventListener("DOMContentLoaded", fetchJoke);
jokeBtn.addEventListener("click", fetchJoke);
