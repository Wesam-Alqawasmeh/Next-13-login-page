import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Body } from '@/app/styles';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import { AuthProvider } from '@/app/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next 13 full stack',
	description: 'Next 13 full stack app, with a login page',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html lang="en">
			<StyledComponentsRegistry>
				<AuthProvider>
					<Body className={inter.className}>{children}</Body>
				</AuthProvider>
			</StyledComponentsRegistry>
		</html>
	);
}
