import { checkTypes } from "../../database";
import { SmallButton } from "../button/SmallButton";

export function WeakTo(props) {
	let type1 = props.type1;
	let type2 = props.type2;

	if (type1 !== "Type 1") {
		const effectiveness = checkTypes(type1, type2);

		return (
			<div className="stat-box weak">
				<h4>Weak to </h4>
				<p>(Use)</p>
				<h5>2.56x damage from</h5>
				<div className="very-weak-to-types types-box">
					{effectiveness.veryWeakTo &&
						effectiveness.veryWeakTo.map((type) => {
							return <SmallButton typeName={type} />;
						})}
				</div>
				<h5>1.60x damage from</h5>
				<div className="weak-to-types types-box">
					{effectiveness.weakTo &&
						effectiveness.weakTo.map((type) => {
							return <SmallButton typeName={type} />;
						})}
				</div>
			</div>
		);
	} else {
		return (
			<div className="stat-box weak">
				<h4>Weak to </h4>
				<p>(Use)</p>
				<h5>2.56x damage from</h5>
				<div className="very-weak-to-types types-box"></div>
				<h5>1.60x damage from</h5>
				<div className="weak-to-types types-box"></div>
			</div>
		);
	}
}
