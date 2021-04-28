
const API_URL = "https://api.adviceslip.com/advice";
function get(url) { return fetch(url).then(resp => resp.json()) }
const API = { get }

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

function addQuote(quote) {
    const para = document.getElementById("quote")
    para.innerText = quote;
}
