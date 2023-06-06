import React from 'react';

interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
        </div>
    );
};

export default RecipeCard;
