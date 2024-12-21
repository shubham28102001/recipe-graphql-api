import { model, Schema } from 'mongoose';

const recipeSchema = new Schema(
	{
		name: String,
		category: String,
		description: String,
		originated: String,
	},
	{
		timestamps: true,
	}
);

const Recipe = model('Recipe', recipeSchema);
export default Recipe;
