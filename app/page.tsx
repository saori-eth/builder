"use client";
import dynamic from "next/dynamic";
const Experience = dynamic(() => import("../components/game/Experience"));
import { UI } from "@/components/ui";
import { KeyboardProvider } from "@/context/KeyboardProvider";

export default function Home() {
	return (
		<KeyboardProvider>
			<UI />
			<Experience />
		</KeyboardProvider>
	);
}
