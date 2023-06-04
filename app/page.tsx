import CreateUser from "./components/CreateUser/CreateUser";
const getUser = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/users`, {});
	return res.json();
};

const getGreetings = async () => {
	const res = await fetch(`${process.env.BASE_URL}/api/hello`);
	return res.json();
};

export default async function Home() {
	const [user, greeting] = await Promise.all([getUser(), getGreetings()]);

	// console.log(user);
	// console.log(greeting);

	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<p>hello, {user.name}</p>
			<p>your email is: {user.email}</p>
			<p>{greeting.greetings}</p>
			<CreateUser />
		</main>
	);
}
