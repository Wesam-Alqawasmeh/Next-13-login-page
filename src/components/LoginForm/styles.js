'use client';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Form = styled.form`
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	padding: 20px;
	width: 300px;
`;

export const Title = styled.h2`
	text-align: center;
	margin-bottom: 20px;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 15px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

export const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #3498db;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`;

export const ErrorText = styled.p`
	color: #e74c3c;
	margin-top: -10px;
	margin-bottom: 10px;
`;
