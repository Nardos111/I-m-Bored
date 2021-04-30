
const imageRandom = document.getElementById("dog");
const para = document.getElementById("doginfo")
const bredfor = document.getElementById("bredfor")
const breedgroup = document.getElementById("breedgroup")
const lifespan = document.getElementById("lifespan")
const temperament = document.getElementById("temperament")
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
            bredfor.innerHTML = json[0].breeds[0].bred_for
            breedgroup.innerHTML = json[0].breeds[0].breed_group
            lifespan.innerHTML = json[0].breeds[0].life_span
            temperament.innerHTML = json[0].breeds[0].temperament

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



