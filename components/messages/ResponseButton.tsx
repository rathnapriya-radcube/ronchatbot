import React from "react";
import { Button } from "../ui/button";

type Props = { buttonLabel: string };

function ResponseButton({ buttonLabel }: Props) {
	return (
		<>
			<div>
				<Button
					variant="ghost"
					className="border border-[#514af2] text-[#514af2] active:bg-[#7b83f9] active:text-white rounded-full"
				>
					{buttonLabel}
				</Button>
			</div>
		</>
	);
}

export default ResponseButton;
