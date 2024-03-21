import React from "react";
import Starting from "../messages/Starting";
import Response from "../messages/Response";
import User from "../messages/User";
import ResponseButton from "../messages/ResponseButton";

type Props = {};

function findNextResponse() {}

function findNextUser() {}

function MainContainer({}: Props) {
	return (
		<div className="container grid grid-cols-4 bg-[#f2f2f2] border-black border-x h-[500px] py-2">
			<div className="col-span-2">
				<Response
					responseText={
						"Hey there! I am your OSM buddy. You are one step away from taking charge of your overall oral, sexual and mental health by taking this chance assessment."
					}
					// responseButtons={[
					// 	{ id: 1, name: "Yes", type: "YN" },
					// 	{ id: 2, name: "No", type: "YN" },
					// ]}
				/>
			</div>
			<div className="flex col-span-2 gap-4 place-self-end justify-self-center pb-8">
				<ResponseButton buttonLabel="Yes" />
				<ResponseButton buttonLabel="No" />
			</div>
			<div className="col-end-5 col-span-2 place-self-start justify-self-end">
				<User userText={"Yes"} />
			</div>
		</div>
	);
}

export default MainContainer;
