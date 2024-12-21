const typeDefs = `#graphql
    type Recipe {
        ID: String!
        name: String
        category: String
        description: String
        originated: String
        createdAt: String
        updatedAt: String
    }

    input RecipeInput {
        name: String
        category: String
        description: String
        originated: String
    }

    type Query {
        recipe(ID: ID!): Recipe!
        getRecipes(amount: Int): [Recipe]
    }

    type Mutation {
        createRecipe(recipe: RecipeInput): Recipe!
        deleteRecipe(ID: String!): Boolean
        updateRecipe(ID: String!, recipe: RecipeInput): Recipe!
    }

`;

export default typeDefs;
