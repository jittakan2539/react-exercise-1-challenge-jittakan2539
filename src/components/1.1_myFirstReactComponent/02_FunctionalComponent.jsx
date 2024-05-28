// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

const Hello = (name) => {
    return (
		<div>
			<h2>Hello, {name}!</h2>;
			<p>
				The React component is made by a function declaration, we call it a
				function component
			</p>
		</div>
	);
}