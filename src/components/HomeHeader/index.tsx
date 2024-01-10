'use client';
import { Header, Title } from '@/components/HomeHeader/styles';
import { useSession } from 'next-auth/react';

export default function HomeHeader() {
	const { data } = useSession();

	return (
		<Header>
			<Title>Hi {data?.user?.name}! you can see this because you are logged in.</Title>
		</Header>
	);
}
