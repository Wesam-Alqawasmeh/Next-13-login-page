import { NextResponse } from 'next/server';
import User from '@/app/api/auth/models/user';
import { connectMondoDB } from '@/app/api/lib/mongodb';
import bcrypt from 'bcryptjs';
import { FormDataType } from '@/lib/types';

interface MyUser {
	_id: string;
	username: string;
	password: string;
}

export async function POST(req: Request): Promise<NextResponse> {
	try {
		const { username, password }: FormDataType = await req.json();

		const hashedPassword = await bcrypt.hash(password, 10);

		await connectMondoDB();
		const newUser: MyUser = await User.create({
			username,
			password: hashedPassword,
		});

		return NextResponse.json({
			message: `${newUser?.username} has Registered successfully`,
			status: 201,
		});
	} catch (error) {
		return NextResponse.json({
			message: `Failed to register new user, Error: ${error}`,
			status: 500,
		});
	}
}
