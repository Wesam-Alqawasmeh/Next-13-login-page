'use client';
import { useForm } from 'react-hook-form';
import {
	Button,
	Wrapper,
	ErrorText,
	Form,
	Input,
	Label,
	Title,
} from '@/components/LoginForm/styles';
import { resolver } from '@/components/LoginForm/types';
import { FormDataType } from '@/lib/types';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm(): React.JSX.Element {
	// useForm will handle the inputs change instead of creating a state for each one
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataType>({ resolver });

	const [loginErrors, setLoginErrors] = useState('');

	const router = useRouter();

	const onSubmit = async ({ username, password }: FormDataType): Promise<any> => {
		try {
			const res = await signIn('credentials', { username, password, redirect: false });

			if (res?.error) {
				setLoginErrors('Invalid Credentials');
			}

			// route to the homepage when the user login
			if (res?.ok) {
				router.replace('/');
			}
		} catch (error) {
			console.log('Error:', error);
		}
	};

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit(onSubmit)} onClick={() => setLoginErrors('')}>
				<Title>Login</Title>
				<Label htmlFor="username">Username</Label>
				<Input
					type="text"
					id="username"
					placeholder="Enter your username"
					{...register('username', {
						required: 'Username is required',
					})}
				/>
				{errors?.username && <ErrorText>{errors.username.message}</ErrorText>}
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					id="password"
					placeholder="Enter your password"
					{...register('password', { required: 'Password is required' })}
				/>
				{errors?.password && <ErrorText>{errors.password.message}</ErrorText>}
				{loginErrors && <ErrorText>{loginErrors}</ErrorText>}
				<Button type="submit">Login</Button>
			</Form>
		</Wrapper>
	);
}
