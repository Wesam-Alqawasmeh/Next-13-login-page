'use client';
import { Content, LogoutButton } from '@/components/Logout/styles';
import { signOut } from 'next-auth/react';

export default function Logout(): React.JSX.Element {
	return (
		<Content>
			<LogoutButton onClick={() => signOut()}>Logout</LogoutButton>
		</Content>
	);
}
