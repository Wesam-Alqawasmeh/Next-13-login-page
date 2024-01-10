import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Body } from '@/app/styles';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next 13 full stack',
	description: 'Next 13 full stack app, with a login page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<StyledComponentsRegistry>
				<Body className={inter.className}>{children}</Body>
			</StyledComponentsRegistry>
		</html>
	);
}
