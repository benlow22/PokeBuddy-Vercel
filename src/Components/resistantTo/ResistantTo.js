import { checkTypes } from "../../database";
import { SmallButton } from "../button/SmallButton";

export function ResistantTo(props) {
	let type1 = props.type1;
	let type2 = props.type2;

	if (type1) {
		const effectiveness = checkTypes(type1, type2);
		return (
			<div className="stat-box resistant">
				<h4>Resistant to </h4>
				<p>(dont be)</p>
				<h5>0.244x damage from</h5>
				<div className="extra-resistant-types types-box">
					{effectiveness.extraResistant &&
						effectiveness.extraResistant.map((type) => {
							return <SmallButton typeName={type} />;
						})}
				</div>
				<h5>0.391x damage from</h5>
				<div className="very-resistant-types types-box">
					{effectiveness.veryResistant &&
						effectiveness.veryResistant.map((type) => {
							return <SmallButton typeName={type} />;
						})}
				</div>
				<h5>0.625x damage from</h5>
				<div className="resistant-types types-box">
					{effectiveness.resistant &&
						effectiveness.resistant.map((type) => {
							return <SmallButton typeName={type} />;
						})}
				</div>
			</div>
		);
	} else {
		return (
			<div className="stat-box resistant">
				<h4>Resistant to </h4>
				<p>(dont be)</p>
				<h5>0.244x damage from</h5>
				<div className="extra-resistant-types types-box"></div>
				<h5>0.391x damage from</h5>
				<div className="very-resistant-types types-box"></div>
				<h5>0.625x damage from</h5>
				<div className="resistant-types types-box"></div>
			</div>
		);
	}
}
