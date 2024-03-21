import React from "react";
import ResponseButton from "./ResponseButton";

type Props = {
	responseText: string;
	// responseButtons: { id: number; name: string; type: string }[];
};

function Response({ responseText }: Props) {
	return (
		<>
			<div className="flex bg-white rounded-3xl w-fit max-w-[350px] h-fit py-4 my-6 px-4">
				<div>
					<p className="text-black">{responseText}</p>
				</div>
			</div>
			{/* <div className="flex">
				{responseButtons.map((button) => (
					<ResponseButton key={button.id} buttonLabel={button.name} />
				))}
			</div> */}
		</>
	);
}

export default Response;
