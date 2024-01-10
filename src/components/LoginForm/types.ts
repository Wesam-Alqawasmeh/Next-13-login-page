import { Resolver } from 'react-hook-form';

export interface DataType {
	username: string;
	password: string;
}

export const resolver: Resolver<DataType> = async (values) => {
	return {
		values: values.username || values.password ? values : {},
		errors: (() => {
			if (!values.username && !values.password) {
				return {
					username: {
						type: 'required',
						message: 'Username is required.',
					},
					password: {
						type: 'required',
						message: 'Password is required.',
					},
				};
			}
			if (!values.username) {
				return {
					username: {
						type: 'required',
						message: 'Username is required.',
					},
				};
			}
			if (!values.password) {
				return {
					password: {
						type: 'required',
						message: 'Password is required.',
					},
				};
			}
			return {};
		})(),
	};
};