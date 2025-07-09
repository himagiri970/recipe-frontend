export async function getRecipeFromServer(ingredients) {
  const response = await fetch('https://recipe-backend-trnp.onrender.com/api/recipe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients })
  });

  const data = await response.json();
  return data.recipe;
}
