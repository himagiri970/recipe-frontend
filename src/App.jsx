import "./App.css";
import Header from "./Components/Header";
import Recipe from "./Components/recipe";
import IngredientsList from "./Components/IngridientsList"; 
import InputForm from "./Components/InputForm";
import { getRecipeFromServer } from "./HF";
import React from "react";


export default function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function getRecipe() {
    setIsLoading(true);
    try {
      const RecipeMarkdown = await getRecipeFromServer(ingredients);
      setRecipe(RecipeMarkdown);
    } catch (error) {
      console.error("AI error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function addIngredient(ingredient) {
    setIngredients(prev => [...prev, ingredient]);
  }

  function removeIngredient(index) {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  }

  function reset() {
    setIngredients([]);
    setRecipe('');
  }

  return (
    <div className="ai-app">
      <Header />
      
      <main className="ai-container">
        {!recipe ? (
          <>
            <InputForm onSubmit={addIngredient} />
            {ingredients.length > 0 && (
              <IngredientsList 
                ingredients={ingredients} 
                getRecipe={getRecipe}
                removeIngredient={removeIngredient}
              />
            )}
          </>
        ) : (
          <Recipe recipe={recipe} reset={reset} />
        )}
        
        {isLoading && (
          <div className="ai-loading">
            <div className="loading-spinner"></div>
            <p>AI Chef is cooking up your recipe...</p>
          </div>
        )}
      </main>
    </div>
  )
}