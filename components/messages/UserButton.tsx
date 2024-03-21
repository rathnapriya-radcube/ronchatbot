import React from "react";
import { Button } from "../ui/button";

type Props = { buttonLabel: string };

function UserButton({ buttonLabel }: Props) {
	return (
		<>
			<div>
				<Button>{buttonLabel}</Button>
			</div>
		</>
	);
}

export default UserButton;
