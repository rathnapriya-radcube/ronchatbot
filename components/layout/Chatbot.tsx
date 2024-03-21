import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import InputSender from "./InputSender";

type Props = {};

function Chatbot({}: Props) {
	return (
		<div>
			<Header assessment={"Starting"} assessmentVisibility={false} />
			<MainContainer />
			<InputSender />
		</div>
	);
}

export default Chatbot;
