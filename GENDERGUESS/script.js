const nameInput = document.getElementById("nameInput");
const guessButton = document.getElementById("guessButton");
const personName = document.getElementById("name");
const genderResult = document.getElementById("genderResult");
const probability = document.getElementById("probability");
const guessGender = async () => {
  const API_URL = `https://api.genderize.io/?name=${nameInput.value}`;
  const response = await fetch(API_URL);
  const data = await response.json();
  try {
    if (nameInput.value !== "") {
      personName.innerText = `Name: ${data.name}`;
      probability.innerText = `probability: ${data.probability}`;
      genderResult.innerText = `You are ${data.gender}`;

      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
guessButton.addEventListener("click", guessGender);
