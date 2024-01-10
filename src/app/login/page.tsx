import { Container } from '@/app/styles';
import LoginForm from '@/components/LoginForm';
import { Session, getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Login(): Promise<React.JSX.Element> {
	const { user } = (await getServerSession()) || {};

	if (user) redirect('/');

	return (
		<Container>
			<LoginForm />
		</Container>
	);
}
