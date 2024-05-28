// Exercise:
// 1. Create a React class component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

class Page03 extends Component {
	constructor(props) {
		super(props);
		// You can initialize state or bind methods here if needed
	}

	render() {
		return (
			<div>
				<h1>This is Page03!</h1>
				<p>
					The React component is made by a class expression, we call it a
					function component. 😀
				</p>
			</div>
		);
	}
}