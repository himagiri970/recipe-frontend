
export default function IngredientsList(props) {
  return (
    <div className="ingredients-container">
      <div className="ai-message">
        <div className="ai-avatar">AI</div>
        <div className="message-bubble">
          <p>I see you have these ingredients:</p>
        </div>
      </div>
      
      <div className="ingredients-grid">
        {props.ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-chip">
            {ingredient}
            <button 
              onClick={() => props.removeIngredient(index)}
              className="remove-btn"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {props.ingredients.length > 3 && (
        <div className="ai-suggestion">
          <button onClick={props.getRecipe} className="ai-button">
            <span className="sparkle">✨</span>
            Generate Recipe
            <span className="sparkle">✨</span>
          </button>
          <p className="hint">AI Chef will create a custom recipe just for you</p>
        </div>
      )}
    </div>
  )
}