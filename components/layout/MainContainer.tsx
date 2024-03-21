"use client";
import React, { useState } from "react";
import Starting from "../messages/Starting";
import Response from "../messages/Response";
import User from "../messages/User";
import ResponseButton from "../messages/ResponseButton";
type Props = {};

// interface Question {
// 	// Define the properties of a question
// 	id: number;
// 	text: string;
// 	// Add more properties if needed
//   }

//   // Define the type for qnList as an array of Question objects
//   let qnList: Question[] = [];

function findNextUser() {}

function MainContainer({}: Props) {
  let qnList = [];
  let currentQn = 1;
  async function findNextResponse(user_option) {
    try {
      const response = await fetch("../../data/questions.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log("jsonData", jsonData, "user_option", user_option);
      let currentQnDetails = jsonData.filter(
        (x) => x?.QuestionNum === currentQn
      );
      console.log("currentQn", currentQn, "currentQnDetails", currentQnDetails);

      let nextQn = currentQnDetails[0]!.Branching[user_option];
      let nextQnDetails = jsonData.filter((x) => x?.QuestionNum === nextQn);
      console.log("nextQn", nextQn);
      console.log("nextQnDetails", nextQnDetails);
      qnList = [...qnList, ...nextQnDetails];
      currentQn = nextQn;
      console.log("qnList", qnList, "new currentQn", currentQn);
      return jsonData;
    } catch (error) {
      throw new Error(error.message);
    }
  }

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

          // 		{/* <div className="flex">
          // 	{responseButtons.map((button) => (
          // 		<ResponseButton key={button.id} buttonLabel={button.name} />
          // 	))}
          // </div> */}
        />
      </div>
      <div className="flex col-span-2 gap-4 place-self-end justify-self-center pb-8">
        <ResponseButton buttonLabel="Yes" buttonHandler={findNextResponse} />
        <ResponseButton buttonLabel="No" buttonHandler={findNextResponse} />
      </div>
      <div className="col-end-5 col-span-2 place-self-start justify-self-end">
        <User userText={"Yes"} />
      </div>
      {qnList.map((x) => {
        return (
          <>
            <div className="col-span-2">
              <Response
                responseText={x?.Question}
                // responseButtons={[
                // 	{ id: 1, name: "Yes", type: "YN" },
                // 	{ id: 2, name: "No", type: "YN" },
                // ]}

                // 		{/* <div className="flex">
                // 	{responseButtons.map((button) => (
                // 		<ResponseButton key={button.id} buttonLabel={button.name} />
                // 	))}
                // </div> */}
              />
            </div>
            <div className="flex col-span-2 gap-4 place-self-end justify-self-center pb-8">
              <ResponseButton
                buttonLabel={x.Option[0]}
                buttonHandler={findNextResponse}
              />
              <ResponseButton
                buttonLabel={x.Option[1]}
                buttonHandler={findNextResponse}
              />
            </div>
            <div className="col-end-5 col-span-2 place-self-start justify-self-end">
              <User userText={"Yes"} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default MainContainer;
