'use client';
import { useForm } from 'react-hook-form';
import {
	Button,
	Container,
	ErrorText,
	Form,
	Input,
	Label,
	Title,
} from '@/components/LoginForm/styles';
import { DataType, resolver } from '@/components/LoginForm/types';

export default function LoginForm(): React.JSX.Element {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataType>({ resolver });

	const onSubmit = (data: DataType) => {
		// TODO: add logic to post the data to the api.
		console.log('Logging in:', data);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
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
				<Button type="submit">Login</Button>
			</Form>
		</Container>
	);
}
