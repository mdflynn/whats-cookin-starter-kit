//const recipeData = require("../data/recipes");

// query selectors
const recipeSection = document.querySelector('.body__main__section');

// render recipes
const recipeInstantiation = createRecipes();



window.onload = displayHandler;

function displayHandler() {
  showRecipes();
  recipeInstantiation;
}


function createRecipes() {
  const recipeInstances = [];
  recipeData.forEach(recipe => {
    let newRecipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags);
    recipeInstances.push(newRecipe);
  })
  return recipeInstances;
}
function showRecipes() {
  let recipeHTML = '';
  recipeInstantiation.forEach(recipe => {
    let recipeDisplay = `<article class="body__main__section__article">
                          <img class="body__main__section__article__image" src="${recipe.image}">
                          <div class="body__main__section__article__text">${recipe.name}</div>
                          <button class="body__main__section__article__button" id="myBtn">Open Recipe</button>
                          <div class="body__main__section__article__modal" id="myModal">
                            <div class="body__main__section__article__modal__content">
                              <span class="close">&times;</span>
                              <div clas="body__main__section__article__modal__content__wrapper">
                                <img src="${recipe.image}">
                                <ul>
                                  <li>5 c - Potatoes</li>
                                  <li>6 lbs - Tomatoes</li>
                                  <li>7 oz -Chocolates</li>
                                  <li>3 lb - Cherries</li>
                                  <li>18 tbs - Paprike</li>
                                  <li>1 - Watermelon</li>
                                  <li>25 - Carrots</li>
                                  <li>1 pinch - Salt</li>
                                </ul>
                                <ol>
                                  <li>Preheat the oven to 325 degrees F.Coarsely chop the almonds and pecans.</li>
                                  <li>Combine the oats, almonds, pecans, and salt in a bowl. Toss to combine.In a medium-sized bowl, combine the coconut oil (measure exactly when it's melted and not in the hardened state), and 1/2 cup chocolate chips.Microwave in bursts of 15 seconds stirring in between each burst for 15 seconds until completely melted.Stir in the brown sugar (measured lightly packed), honey or maple syrup, and vanilla extract.</li>
                                  <li>Pour the chocolate wet mixture into the oat and nut mixture and stir until well combined.</li>
                                  <li>Spread the granola evenly onto a parchment lined baking sheet.</li>
                                  <li>Bake for 20-30 minutes (depending on the heat of your oven) making sure to flip and stir the granola around every 6-8 minutes.</li>
                                  <li>Remove and allow the granola to harden and set up. (It may be soft and not very \"granola-like\", but it hardens as it dries out so be careful to not over-cook it). Mine generally takes about 21 minutes to be fully baked.Allow the granola to sit at room temperature for a few hours to harden and set up.Once the granola is hardened, stir in the remaining 1/2 cup chocolate chips and the toasted flaked coconut.To make a yogurt bowl: fill a bowl with the coconut cream yogurt, add a swirl of nut butter, add some fruit such as a banana, add the granola, and finish with chia seeds. Enjoy immediately.</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </article>`;
    recipeHTML += recipeDisplay;      
  })
  recipeSection.innerHTML = recipeHTML;
}
