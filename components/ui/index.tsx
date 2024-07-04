"use client";
import { useStore } from "@/hooks/useStore";
import { EditorPanel } from "./EditorPanel";

export const UI = () => {
	const { mode } = useStore();
	return (
		<div className="select-none">{mode === "editing" && <EditorPanel />}</div>
	);
};
