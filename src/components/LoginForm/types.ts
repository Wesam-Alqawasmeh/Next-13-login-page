import { Resolver } from 'react-hook-form';
import { FormDataType } from '@/lib/types';

export const resolver: Resolver<FormDataType> = async (values) => {
	return {
		values: values.username || values.password ? values : {},
		// define all possible values for the errors
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
