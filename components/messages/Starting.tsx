import React from "react";
import { Button } from "../ui/button";

type Props = {};

function Starting({}: Props) {
	return (
		<>
			<div className="flex container bg-slate-400 rounded-3xl">
				<p></p>
			</div>
			<div>
				<Button>Get your Chance Score now</Button>
			</div>
		</>
	);
}

export default Starting;
