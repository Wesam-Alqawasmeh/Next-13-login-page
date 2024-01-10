import { connectMondoDB } from './mongodb';
import { config } from 'dotenv';
import User from '../auth/models/user';
import { FormDataType } from '@/lib/types';

// list of the default users that can be used to test the functionality
const DEFAULT_USERS: FormDataType[] = [
	{
		username: 'John',
		password: 'johnPass',
	},
	{
		username: 'Admin',
		password: 'adminPass',
	},
	{
		username: 'Visitor',
		password: 'visitorPass',
	},
];

// loads .env file contents
config();

// seed the default users to the database once the connection is successfully open
const seed = async (): Promise<void> => {
	await connectMondoDB();
	const existingUsers = await User.find();

	// avoid trying to create the default users if db has records
	if (existingUsers?.length > 0) {
		return console.log('>>>> Default users are already created >>>>');
	}

	for (const user of DEFAULT_USERS) {
		try {
			const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/register`, {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(user),
			});

			const resData = await res.json();

			if (resData) {
				console.log(`🚀 ${resData.message}`);
			}
		} catch (error) {
			console.log(error);
		}
	}
};

(async () => await seed())();
