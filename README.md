Next-13-login-page is an app that shows the functionality as a full stack framework for a login functionality.

## Used Tech
- NextJS 13
- ReactJS 18
- Node
- Typescript
- MongoDB
- Styled components
- useForm
- NextAuth


## Prerequisite

- MongoDB installed locally
- npm

## Getting Started

To get the app started successfully with the intended behavior, please follow the following steps:

1- Clone the repo.

2- Create a database with a name of your choice.

3- Create `.env` file and fill it with data as the `.env.sample` file

4- `npm i` to install the project dependencies

5- Open two terminals in the project root, then:
- in the first terminal run `npm run dev` to start the server.
- in the second terminal run `npm run connect-seed` to connect and seed the database with default users.

6- Open [http://localhost:3000](http://localhost:3000) with your and notice the following functionalities:

- First when you the user is not logged in, will redirect to the login page `/login`
- In the login page, the form will show some validation on missing fields and invalid user login.
- You can use the default users to login into the website, which are the following

```
	{
		username: 'John',
		password: 'johnPass',
	},
	{
		username: 'Admin',
		password: 'adminPass',
	},
	{
		username: 'Visitor',
		password: 'visitorPass',
	}
```
- The user will be redirected to the home page when login
- The user will not be able to access the login page when logged in.
- When the user logout using the `logout` button in the home page, will be redirected to the login page again, and won't be able to access the home page util login again.

## Demo

[Screencast from 01-11-2024 01:05:43 AM.webm](https://github.com/Wesam-Alqawasmeh/Next-13-login-page/assets/86604172/9b8795f3-a1a7-445c-95f0-37d982c788cd)
