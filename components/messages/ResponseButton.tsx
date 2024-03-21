"use client";
import React from "react";
import { Button } from "../ui/button";
type ButtonHandler = (param) => Promise<string | Error>;

type Props = {
  buttonLabel: string;
  buttonHandler: ButtonHandler;
};

function ResponseButton({ buttonLabel, buttonHandler }: Props) {
  // const handleClick = () => {
  // 	buttonHandler();
  //   };
  // function findNextResponse() {
  // 	console.log("Hello")
  // }

  return (
    <>
      <div>
        <Button
          variant="ghost"
          className="border border-[#514af2] text-[#514af2] active:bg-[#7b83f9] active:text-white rounded-full"
          onClick={() => buttonHandler(buttonLabel)}
        >
          {buttonLabel}
        </Button>
      </div>
    </>
  );
}

export default ResponseButton;
