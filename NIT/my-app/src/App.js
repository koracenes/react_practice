import "./App.css";
import { Card } from "./components/Card.js";
import { Button } from "./components/button.js";
import Dog from "./components/images/dog.jpg";
import Cat from "./components/images/cat.jpg";
import Panda from "./components/images/panda.jpg";
import { Pozdrav } from "./components/pozdrav.js";
import { MovieList } from "./movies/MoviesList.js";

//jsx: sve sto se nalazi u ovoj funkciji
function App() {
	let name = "Enes";
	let lastName = "Korac";
	let age = "30";
	let city = "Novi Pazar";

	return (
		<>
			<Pozdrav ime={name} prezime={lastName} godine={age} grad={city} />
			<Button text="LOG IN" slova="white" pozadina="blue" />
			<Button text="REGISTER" slova="red" pozadina="white" />

			<div className="kartice">
				<Card
					img={Panda}
					ime="Enes Korac"
					text="Aikdio majstor visokih razmera"
				/>
				<Card img={Cat} ime="Dado " text="imam el Sandzaky" />
				<Card img={Dog} ime="Dzejlan Nukovic" text="Busines busines" />
			</div>
			<Button bgColor={"blue"} txtColor={"white"} text={"klikci"} />
			<MovieList />
		</>
	);
}

export default App;
