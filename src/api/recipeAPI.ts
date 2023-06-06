import axios from 'axios';

const API_BASE_URL = 'https://developer.edamam.com/edamam-recipe-api'

interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string;
}

export const fetchRecipes = async (): Promise<Recipe[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recipes`);
        return response.data as Recipe[];
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};

export const fetchRecipeById = async (recipeId: number): Promise<Recipe | null> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recipes/${recipeId}`);
        return response.data as Recipe;
    } catch (error) {
        console.error(`Error fetching recipe with ID ${recipeId}:`, error);
        return null;
    }
};

export const createRecipe = async (recipe: Recipe): Promise<Recipe |  null> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/recipes`, recipe);
        return response.data as Recipe;
    } catch (error) {
        console.error('Error creating recipe', error);
        return null;
    }
};

export const updateRecipe = async (recipe: Recipe): Promise<Recipe | null> => {
    try {
        const response = await axios.put(`${API_BASE_URL}/recipes/${recipe.id}`, recipe)
        return response.data as Recipe;
    } catch (error) {
        console.error(`Error updating recipe with ID ${recipe.id}`, error);
        return null;
    }
};

export const deleteRecipe = async (recipeId: number): Promise<boolean> => {
    try {
        await axios.delete(`${API_BASE_URL}/recipes/${recipeId}`);
        return true;
    } catch (error) {
        console.error(`Error deleting recipe with ID ${recipeId}:`, error);
        return false;
    }
}; 
