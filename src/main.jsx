import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// for import reactRouter
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

import Page01 from "./components/1.2_pages/Page01.jsx";
import Page02 from "./components/1.2_pages/Page02.jsx";
import Page03 from "./components/1.2_pages/Page03.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Nav />,
		children: [
			{
				path: "",
				element: <App />,
			},
		],
	},

	{
		path: "/page01",
		element: <Nav />,
		children: [
			{
				path: "",
				element: <Page01 />,
			},
		],
	},
	{
		path: "/page02",
		element: <Nav />,
		children: [
			{
				path: "",
				element: <Page02 />,
			},
		],
	},
	{
		path: "/page03",
		element: <Nav />,
		children: [
			{
				path: "",
				element: <Page03 />,
			},
		],
	},
]);

//Default for creating app from this React Router
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* Using router function */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
