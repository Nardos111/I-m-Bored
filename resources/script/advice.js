
const API_URL = "https://api.adviceslip.com/advice";
function get(url) { return fetch(url).then(resp => resp.json()) }
const API = { get }
const para = document.getElementById("quote")
const loadAdvice = document.getElementById("reload")


const options = {
    method: 'GET',
    headers: {
        "Accept": "application/json"
    }
};

loadAdvice.onclick = function () {
    fetch(API_URL, options)
        .then(function (res) {
            return res.json();
        }).then(function (data) {
            advice = data['slip']['advice'];
            para.innerText = advice;
        })
        .catch(function (error) {
            console.log(error);

        });
};
