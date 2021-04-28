const jokepara = document.getElementById("joke");
const buttonClicked = document.getElementById("jokes");
const url = "https://icanhazdadjoke.com/"
const options = {
    method: 'GET',
    headers: {
        "Accept": "application/json"
    }
};

buttonClicked.onclick = function () {
    fetch("https://icanhazdadjoke.com/", options)
        .then((res) => {
            return res.json();
        }).then((data) => {
            jokepara.innerText = data.joke;
        });
};

