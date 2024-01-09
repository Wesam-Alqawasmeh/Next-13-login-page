import { Container, Headline } from '@/app/styles';
import Link from 'next/link';

export default function Home(): React.JSX.Element {
	return (
		<Container>
			<Headline>
				Hi! Checkout the Login page <Link href={'/login'}>here</Link>
			</Headline>
		</Container>
	);
}
