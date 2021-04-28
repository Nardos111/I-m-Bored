
const imageRandom = document.getElementById("dog");
const para = document.getElementById("doginfo")

const button = document.getElementById("getdog")


function getRandomImage() {
    const randomImageApiUrl = "https://api.thedogapi.com/v1/images/search";
    fetch(randomImageApiUrl, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            var imageUrl = json[0].url;
            imageRandom.src = imageUrl;
            para.innerHTML = json[0].breeds[0].name

        })
        .catch(function (error) {
            console.log(error);

        });
}
button.onclick = function () {
    getRandomImage();
}


const options = {
    method: 'GET',
    headers: {
        "Accept": "application/json"
    }
};



