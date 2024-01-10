import { Container, Wrapper } from '@/app/styles';
import HomeHeader from '@/components/HomeHeader';
import Logout from '@/components/Logout';

export default function Home(): React.JSX.Element {
	return (
		<Container>
			<Wrapper>
				<HomeHeader />
				<Logout />
			</Wrapper>
		</Container>
	);
}
