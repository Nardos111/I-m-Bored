
const imageRandom = document.getElementById("dog");





function getRandomImage() {
    const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random";
    fetch(randomImageApiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            var imageUrl = json.message;
            imageRandom.src = imageUrl;

        })
        .catch(function (error) {
            console.log(error);

        });
}

getRandomImage();

