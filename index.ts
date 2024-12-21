import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const MONGODB = process.env.MONGO_URI as string;

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(MONGODB as string);

		console.log(`🚀 Connected to MongoDB: ${connection.connection.host}`);
	} catch (err: any) {
		console.log('error connecting to mongodb');
		console.log(err.message);
	}
};

connectDB();

const PORT = process.env.PORT || 5000;

const { url } = await startStandaloneServer(server, {
	listen: {
		port: PORT as number,
	},
});

console.log(`🚀 Server running: ${url}`);
