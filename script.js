const btnEl = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const APIKey = "qf/coP3ZXBMPEqmTemxVAw==zpIcPnGYcA4ZXoQN";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": APIKey,
  },
};
const APIURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    jokeElement.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(APIURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeElement.innerText = data[0].joke;
  } catch (error) {
    jokeElement.innerText = "An error happened try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeElement.innerText = data[0].joke;
  }
}
btnEl.addEventListener("click", getJoke);
