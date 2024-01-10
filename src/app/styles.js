'use client';
import styled from 'styled-components';

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

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
`;
