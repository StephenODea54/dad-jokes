"use strict";
var _a;
const value = document.getElementById("dad-joke");
const url = 'https://icanhazdadjoke.com/';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
};
(_a = document.getElementById("generate-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", e => {
    e.preventDefault();
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
        if (value) {
            value.innerHTML = data["joke"];
        }
    })
        .catch(err => console.error(err));
});
