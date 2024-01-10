import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/app/api/auth/models/user';
import bcrypt from 'bcryptjs';
import { connectMondoDB } from '@/app/api/lib/mongodb';
import { config } from 'dotenv';

// load .env content
config();

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {},
			async authorize(credentials) {
				const { username, password } = credentials;

				await connectMondoDB();
				const res = await User.findOne({ username });

				const isMatchedPasswords = await bcrypt.compare(password, res.password);

				if (res.error || !isMatchedPasswords) {
					return null;
				}

				return { name: res.username };
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
