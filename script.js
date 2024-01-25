const btn = document.getElementById("btn");
const innerText = document.getElementById("text");

btn.addEventListener("click", clickHandle);

function clickHandle() {
  const xhr = new XMLHttpRequest();
  const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
  const apiKey = "rgLlWZmtcgA+wzzETPlauw==w1FgSEHYQpKzhVYG"; // Replace this with your actual API key

  xhr.open("GET", apiUrl, true);
  // Set the API key as a custom header
  xhr.setRequestHeader("X-API-Key", apiKey);

  innerText.innerHTML = "fetching a joke...."

  xhr.onload = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const responseData = JSON.parse(xhr.responseText);
        // console.log("API Response:", responseData[0].joke);
        innerText.innerHTML = responseData[0].joke;
      } else {
        console.error("API Request failed with status:", xhr.status);
      }
    }
  };

  xhr.send();
}
