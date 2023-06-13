import React, { useEffect, useState } from "react";
import { TypeList } from "./typeList/TypeList";
import { TypeIndicator } from "./typeIndicators/TypeIndicators";
import { pokemonTypes, keys } from "../database";
import { ResistantTo } from "./resistantTo/ResistantTo";
import { WeakTo } from "./weakTo/WeakTo";

export function Homepage() {
	const [type1, setType1] = useState(undefined);
	const [type2, setType2] = useState(undefined);

	const handleAdd = (type) => {
		if (!type1) {
			setType1(type);
		} else {
			if (type1 !== type) {
				setType2(type);
			}
		}
	};

	const clearButtons = () => {
		setType1(undefined);
		setType2(undefined);
	};

	useEffect(() => {
		document.addEventListener("keyup", (event) => {
			if (event.code === "Space" || event.code === "KeyV") {
				clearButtons();
			}
		});
	}); // use [] because you only want to add the listener once at the beginning

	const handleAllKeysArray = (event) => {
		if (keys.includes(event.code)) {
			// checks if code is in array
			let index = keys.findIndex((key) => key === event.code); // returns index in keys array
			console.log(index);
			handleAdd(pokemonTypes[index - 1]); // uses index to add type to state
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleAllKeysArray);
		return () => {
			document.removeEventListener("keydown", handleAllKeysArray);
		};
	});

	return (
		<div>
			<div className="opponent-Stats">
				<ResistantTo type1={type1} type2={type2} />
				<div className="two-types">
					<TypeIndicator type={type1} placeholder={"Type 1"} />
					<TypeIndicator type={type2} placeholder={"Type 2"} />
					<button className="reset-button" onClick={clearButtons}>
						RESET
					</button>
				</div>
				<WeakTo type1={type1} type2={type2} />
			</div>
			<div className="list-Of-Buttons">
				<TypeList onAdd={handleAdd} />
			</div>
		</div>
	);
}
