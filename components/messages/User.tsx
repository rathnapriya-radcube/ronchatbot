import React from "react";
import UserButton from "./UserButton";

type Props = {
	userText: string;
	// userButtons: { id: number; name: string; type: string }[];
};

function User({ userText }: Props) {
	return (
		<>
			<div className="flex bg-[#514af2] rounded-full w-fit max-w-[350px] h-fit py-4 my-6 px-4">
				<div>
					<p className="text-white px-8">{userText}</p>
				</div>
			</div>
			{/* <div className="flex">
				{userButtons.map((button) => (
					<UserButton key={button.id} buttonLabel={button.name} />
				))}
			</div> */}
		</>
	);
}

export default User;
