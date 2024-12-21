import Recipe from '../models/recipe';

const resolvers = {
	Query: {
		async recipe(_: any, { ID }: any) {
			return await Recipe.findOne({ _id: ID });
		},
		async getRecipes(_: any, { amount }: any) {
			return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
		},
	},
	Mutation: {
		async createRecipe(_: any, { recipe }: any) {
			const { name, category, description, originated } = recipe;
			const createdRecipe = await Recipe.create({
				name,
				category,
				description,
				originated,
			});
			const response: any = await createdRecipe.save();
			response.ID = response._id;
			const newResponse = {
				...response._doc,
				ID: response._id,
			};
			console.log({
				...response._doc,
				ID: response._id,
			});
			return newResponse;
		},

		async deleteRecipe(_: any, { ID }: any) {
			const isDeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount;
			return isDeleted;
		},

		async updateRecipe(
			_: any,
			{ ID, recipe: { name, category, description, originated } }: any
		) {
			const isUpdated = (
				await Recipe.updateOne(
					{ _id: ID },
					{
						name,
						category,
						description,
						originated,
					}
				)
			).modifiedCount;

			if (isUpdated) {
				const updatedRecipe: any = await Recipe.findOne({ _id: ID });
				const newResponse = {
					...updatedRecipe._doc,
					ID: updatedRecipe._id,
				};
				return newResponse;
			}

			return isUpdated;
		},
	},
};

export default resolvers;
