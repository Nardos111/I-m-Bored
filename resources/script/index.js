const API_URL = "https://api.adviceslip.com/advice";
function get(url) { return fetch(url).then(resp => resp.json()) }
const API = { get }
const jokepara = document.getElementById("joke");
const buttonClicked = document.getElementById("jokes");
const url = "https://icanhazdadjoke.com/"


function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

function addQuote(quote) {
    const para = document.getElementById("quote")
    para.innerText = quote;
}



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


