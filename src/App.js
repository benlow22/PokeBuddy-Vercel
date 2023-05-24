import logo from "./pokemonLogo.jpeg";
import "./App.css";
import { Homepage } from "./components/Homepage";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="pokemon_Logo" alt="pokemon Logo" />
				<p>Welcome to PokeBuddy</p>
				<Homepage />
			</header>
		</div>
	);
}

export default App;
 