const value = document.getElementById("dad-joke")

const url = 'https://icanhazdadjoke.com/';
const options = {
	method: 'GET',
	headers: {
		'Accept': 'application/json',
	}
};

document.getElementById("generate-button")?.addEventListener("click", e => {
    e.preventDefault();

    fetch(
        url,
        options
      )
      .then(response => response.json())
      .then(data => {
        if (value) {
            value.innerHTML = data["joke"]
        }
      })
      .catch(err => console.error(err))
})
