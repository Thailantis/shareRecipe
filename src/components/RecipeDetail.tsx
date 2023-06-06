import React from 'react';

interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string;
    instructions: string;
}

interface RecipeDetailProps {
    recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
    return(
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;
