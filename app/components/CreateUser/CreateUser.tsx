"use client";

const CreateUser = () => {
	const createNewUser = async () => {
		const newUser = await fetch(`/api/users`, {
			method: "POST",
			body: JSON.stringify({
				name: "John",
				email: "john@email.com",
			}),
		});
		const newU = await newUser.json();
		console.log(newU);
		return newU;
	};
	return <button onClick={createNewUser}>CreateUser</button>;
};

export default CreateUser;
