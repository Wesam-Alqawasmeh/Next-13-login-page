import mongoose from 'mongoose';
import { config } from 'dotenv';
import User from '../auth/models/user';

// loads .env file contents
config();

export const connectMondoDB = async (): Promise<any> => {
	try {
		mongoose.connect(process.env.DATABASE_URL!);
		const db = mongoose.connection;
		db.on('error', () => {
			console.log('Failed connecting to the Database!');
		});
		db.once('open', async () => {
			console.log('Connected to mongo db Successfully!');
		});

		return db;
	} catch (error) {
		console.log('Failed connecting to the Database!');
	}
};
