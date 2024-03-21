import Chatbot from "@/components/layout/Chatbot";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<div>
				<Chatbot />
			</div>
		</main>
	);
}
