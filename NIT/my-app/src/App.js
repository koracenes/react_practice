import "./App.css";

//jsx: sve sto se nalazi u ovoj funkciji
function App() {
	const click = () => {
		console.log("kliknuo si");
	};

	const txt = "neki teks";

	let kvadrat = 4;

	return (
		<div className="App">
			<h1 id="myH1">{txt}</h1>
			<div className="navBar">
				<a href="1">home </a>
				<a href="2">about</a>
				<a href="3">products</a>
				<a href="4">contact</a>
			</div>
			<button onClick={click}>PRESS BUTTON</button>
			<p>{kvadrat}</p>
		</div>
	);
}

export default App;
