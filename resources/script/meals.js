const get_meal_btn = document.getElementById('getmeal');
const meal_container = document.getElementById('meal');
const image = document.getElementById("image")
const category = document.getElementById("category")
const area = document.getElementById("area")
const tag = document.getElementById("tags")
const ingredientsList = document.getElementById("ingredients")
const food = document.getElementById("meal")
const instructions = document.getElementById("instructions")
const videos = document.getElementById("video")




get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createMeal(res.meals[0]);
		});
});

const createMeal = (meal) => {
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			break;
		}
	}

	image.setAttribute("src", meal.strMealThumb);
	category.innerHTML = meal.strCategory;
	area.innerHTML = meal.strArea;
	tag.innerHTML = meal.strTags;
	food.innerHTML = meal.strMeal;
	instructions.innerHTML = meal.strInstructions;
	const link = meal.strYoutube
	const link2 = link.replace("watch?v=", "embed/")
	link.replace("Microsoft", "W3Schools");
	videos.setAttribute("src", link2)
	while (ingredientsList.firstChild) {
		ingredientsList.removeChild(ingredientsList.firstChild);
	}
	for (i = 0; i < ingredients.length; i++) {
		let llist = document.createElement("li")
		llist.innerHTML = ingredients[i]
		ingredientsList.appendChild(llist)
	}



}
