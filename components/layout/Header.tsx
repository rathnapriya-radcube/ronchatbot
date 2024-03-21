import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CircleHelp } from "lucide-react";
import smileyPic from "@/public/smiley-pic.png";

type Props = { assessment: string; assessmentVisibility: boolean };

function Header({ assessment, assessmentVisibility }: Props) {
	return (
		<>
			<div className="grid grid-cols-6 gap-4 container h-[140px] bg-[#514af2] border-x border-black rounded-t-3xl">
				<div className="col-start-2 col-span-4 text-center text-white font-bold py-4">
					<p>OSM Buddy</p>
					{assessmentVisibility ? (
						<p className="font-normal text-sm">{assessment} Assessment</p>
					) : (
						<p className="font-normal text-sm hidden">
							{assessment} Assessment
						</p>
					)}
				</div>
				<div className="flex self-center">
					<Button className="bg-[#514af2]">
						<CircleHelp />
					</Button>
				</div>
				<div className="col-span-6 flex justify-center">
					<Image
						height={100}
						width={100}
						alt="smileyPic"
						src={smileyPic}
					></Image>
				</div>
			</div>
		</>
	);
}

export default Header;
