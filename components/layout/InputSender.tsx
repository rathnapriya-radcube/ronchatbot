import React from "react";
import { Trash2, Send, Languages } from "lucide-react";
import { Button } from "../ui/button";
import versaLogo from "@/public/versa-logo.png";
import Image from "next/image";
import { Input } from "../ui/input";

type Props = {};

function InputSender({}: Props) {
	return (
		<>
			<div className="flex container border-x border-black justify-center bg-[#e1e3f2]">
				<Image alt="versaLogo" src={versaLogo} />
			</div>
			<div className="container grid grid-cols-8 border-x border-b border-black py-2 px-8 h-20 bg-[#f2f2f2] rounded-b-3xl items-center">
				<div className="col-span-2 place-self-center">
					<Button className=" bg-red-500 rounded-full h-12 w-12" size="icon">
						<Trash2 className="w-6 h-6" />
					</Button>
				</div>
				<div className="col-span-4 bg-white rounded-3xl">
					<div className="grid grid-cols-3">
						<div className="col-span-2 self-center pl-8">
							<Input
								className="justify-end"
								type="text"
								placeholder="Ask anything to OSM"
							></Input>
						</div>
						<div className="flex col-span-1 justify-center">
							<Button
								className="rounded-full h-12 w-12 bg-gray-300"
								size="icon"
							>
								<Send className="w-6 h-6" color="black" />
							</Button>
						</div>
					</div>
				</div>
				<div className="col-span-2 place-self-center">
					<Button className="bg-trans h-12 w-12" size="icon">
						<Languages className="w-6 h-6" color="black" />
					</Button>
				</div>
			</div>
		</>
	);
}

export default InputSender;
