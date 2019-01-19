/* 
You need to check if a recipe contains only vegan ingredients.

*/

var notVegan = ["eggs", "butter", "milk", "cream", "fish", "bacon", "sausages"];

var recipe1 = ["aubergine", "courgette", "butter", "rice", "eggs", "olives"];

var recipe2 = ["lentils", "creamed coconut", "oil", "onion", "curry powder", "mushrooms"];

var recipe3 = ["eggs", "bacon", "sausages", "beans"];

var allRecipes = [recipe1, recipe2, recipe3];

function checkOneRecipe(ingredients){  
  var isOnlyVegan; //TODO: Complete this line.

  if(isOnlyVegan){
    console.log("Only vegan ingredients found: " + ingredients);
  } else {
    console.log("The ingredients are NOT all vegan: "  + ingredients);
  }  
}

allRecipes.forEach(checkOneRecipe);

/* Expected results: 

The ingredients are NOT all vegan: aubergine,courgette,butter,rice,eggs,olives
Only vegan ingredients found: lentils,creamed coconut,oil,onion,curry powder,mushrooms
The ingredients are NOT all vegan: eggs,bacon,sausages,beans

*/

/* Hint: "hfr .fbzr() be .rirel(), nybat jvgu .vapyhqrf()" 
(You can decode this at https://rot13.com/)
*/
