import { GET_MEALS, ADD_MEAL, DELETE_MEAL } from '../actions/types'

const initialState = {
    meals: [
        {
            _id: "53031",
            name: "Egyptian Fatteh",
            drinkAlternate: null,
            category: "Beef",
            area: "Egyptian",
            instructions: "To prepare bread for bottom of dish: Take pita bread and rip into bite size pieces. In a frying pan, add about a 1/4 stick of butter, add bread pieces and fry until golden brown and crisp. Put these pieces in a glass baking dish, preferably a square sized dish. Set aside.\r\nThen add to same pan, a little more butter, salt, approximately 2 cloves of crushed fresh garlic, and a teaspoon or so of cumin stir around a bit until you can smell aroma, then add fried bread pieces to this mixture, stir to coat bread and put back into glass baking dish. Set aside.\r\nTo prepare meat: put some butter in a pot, stir fry meat until brown, add 1 onion quartered, salt & pepper, 1 cube of chicken bouillon and water to cover meat. Bring to a boil, turn down to simmer, cover and cook until tender, approximately 2 hours. After meat has cooled, take out chunks of meat and put in a bowl, set aside. Reserve soup from the meat separately.\r\nTo prepare the rice: Put some butter into a pot, add shareya (fideo noodles) like a handful or so, keep stirring until golden brown, not too dark, but very golden. Then add two cups of rice, stir a little bit until some of the rice turns an opaque white. Add 2-1/4 cups of water and salt to taste. Bring to a boil, cover and turn down to simmer, cook until tender. Test the rice tenderness after about 35 minutes.\r\nNow take some of the soup from meat and add to the top of the bread pieces in baking dish to saturate.Add cooked rice on top of bread pieces. Slowly spoon remainder of soup onto rice, looking at glass dish sides to see level of soup, should reach just to top of rice, don’t worry, this doesn’t have to be exact. Now you’re ready to make the sauce and fry the meat to put on top.\r\nTo prepare red sauce: In a pan, add a little oil or butter, crushed tomato, a half teaspoon of tomato paste, salt & pepper, 2 cloves of fresh crushed garlic and cumin. Add also approximately 3 tablespoons of vinegar, stir this until you smell aroma and it is a bit smooth. It should be a bit thick, not watery, but if too thick you can add a bit of water. Spread with a wooden spoon atop the rice to cover.\r\nTo fry meat: In a pan add a bit of butter or oil, the meat, just a touch of tomato paste, about a tablespoon of fresh crushed garlic, salt & pepper, a teaspoon of cumin. Cook until meat is golden fried.\r\nSpoon this atop the rice and serve. Enjoy!",
            imageUrl: "https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg",
            tags: null,
            youtubeUrl: "https://www.youtube.com/watch?v=WLuOHkDE4A4",
            ingredients: [
                { ingredient: "Beef", measure: "1lb" },
                { ingredient: "Onion", measure: "1" },
                { ingredient: "Chicken Stock Cube", measure: "1" },
                { ingredient: "Tomatoes", measure: "2" },
                { ingredient: "Garlic Clove", measure: "4" },
                { ingredient: "Tomato Puree", measure: "1 tbs" },
                { ingredient: "Rice", measure: "2 cups" },
                { ingredient: "Noodles", measure: "1/4 cup" },
                { ingredient: "Butter", measure: "1/4 cup" },
                { ingredient: "Olive Oil", measure: "2 cups" },
                { ingredient: "Pita Bread", measure: "1" },
                { ingredient: "Cumin", measure: "1 tbs" },
                { ingredient: "White Wine Vinegar", measure: "3 tbs" },
                { ingredient: "Salt", measure: "To taste" },
                { ingredient: "Pepper", measure: "To taste" }
            ],
            sourceUrl: "https://www.food.com/recipe/egyptian-faatah-rice-meat-with-crispy-bread-on-bottom-194764",
            dateModified: null
        },
        {
            _id: "53030",
            name: "Feteer Meshaltet",
            drinkAlternate: null,
            category: "Side",
            area: "Egyptian",
            instructions: "Mix the flour and salt then pour one cup of water and start kneading.\r\nIf you feel the dough is still not coming together or too dry, gradually add the remaining water until you get a dough that is very elastic so that when you pull it and it won’t be torn.\r\nLet the dough rest for just 10 minutes then divide the dough into 6-8 balls depending on the size you want for your feteer.\r\nWarm up the butter/ghee or oil you are using and pour into a deep bowl.\r\nImmerse the dough balls into the warm butter. Let it rest for 15 to 20 minutes.\r\nPreheat oven to 550F.\r\nStretch the first ball with your hands on a clean countertop. Stretch it as thin as you can, the goal here is to see your countertop through the dough.\r\nFold the dough over itself to form a square brushing in between folds with the butter mixture.\r\nSet aside and start making the next ball.\r\nStretch the second one thin as we have done for the first ball.\r\nPlace the previous one on the middle seam side down. Fold the outer one over brushing with more butter mixture as you fold. Set aside.\r\nKeep doing this for the third and fourth balls. Now we have one ready, place on a 10 inch baking/pie dish seam side down and brush the top with more butter.\r\nRepeat for the remaining 4 balls to make a second one. With your hands lightly press the folded feteer to spread it on the baking dish.\r\nPlace in preheated oven for 10 minutes when the feteer starts puffing turn on the broiler to brown the top.\r\nWhen it is done add little butter on top and cover so it won’t get dry.",
            imageUrl: "https://www.themealdb.com/images/media/meals/9f4z6v1598734293.jpg",
            tags: null,
            youtubeUrl: "https://www.youtube.com/watch?v=-mW1unsVhFU",
            ingredients: [
                { ingredient: "Flour", measure: "4 cups" },
                { ingredient: "Water", measure: "1 1/2 cups " },
                { ingredient: "Salt", measure: "1/4 tsp" },
                { ingredient: "Unsalted Butter", measure: "1 cup " },
                { ingredient: "Olive Oil", measure: "1/4 cup" }
            ],
            sourceUrl: "https://amiraspantry.com/egyptian-feteer-meshaltet/",
            dateModified: null
        },
        {
            _id: "53029",
            name: "Mulukhiyah",
            drinkAlternate: null,
            category: "Beef",
            area: "Egyptian",
            instructions: "Saute the onions in the 3-4 tablespoons olive oil\r\nAdd the beef cubes or the chicken cutlets, sear for 3-4 min on each side\r\nAdd 1 liter of water or just enough to cover the meat\r\nCook over medium heat until the meat is done (I usually do this in the pressure cooker and press them for 5 min)\r\n\r\nAdd the frozen mulukhyia and stir until it thaws completely and then comes to a boil\r\n\r\nIn another pan add the 1/4 to 1/2 cup of olive oil and the cloves of garlic and cook over medium low heat until you can smell the garlic (don’t brown it, it will become bitter)\r\n\r\nAdd the oil and garlic to the mulukhyia and lower the heat and simmer for 5-10 minutes\r\nAdd salt to taste\r\n\r\nServe with a generous amount of lemon juice.\r\n\r\nYou can serve it with some short grain rice or some pita bread",
            imageUrl: "https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg",
            tags: null,
            youtubeUrl: "https://www.youtube.com/watch?v=vWc5JzgAkIQ",
            ingredients: [
                { ingredient: "Mulukhiyah", measure: "800g" },
                { ingredient: "Onion", measure: "1 chopped" },
                { ingredient: "Beef", measure: "300g" },
                { ingredient: "Salt", measure: "1 tsp " },
                { ingredient: "Water", measure: "1 Litre" },
                { ingredient: "Garlic Clove", measure: "1" },
                { ingredient: "Olive Oil", measure: "1/2 cup " }
            ],
            sourceUrl: "https://chefindisguise.com/2017/05/15/mulukhiyah-a-stew-fit-for-royals/",
            dateModified: null
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEALS:
            return {
                ...state
            }
        default:
            return state
    }
}