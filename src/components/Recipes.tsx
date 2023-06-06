import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

interface Recipe {
    id: number;
    title: string;
    ingredients: string;
    instructions: string;
}

const Recipes: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('/api/recipes/v2');
                setRecipes(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>Recipes</h2>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default Recipes;
