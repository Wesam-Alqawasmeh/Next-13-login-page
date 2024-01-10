'use client';
import { styled } from 'styled-components';

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	@media (max-width: 768px) {
		padding: 10px;
	}
`;

export const Body = styled.body`
	background-color: var(--main-background);
`;

export const Headline = styled.h1`
	margin-top: 100px;
	text-align: center;
`;
