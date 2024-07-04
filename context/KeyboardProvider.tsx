"use client";

import { KeyboardControls } from "@react-three/drei";
import type { KeyboardControlsEntry } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import { KeyControls, Mode } from "@/types";
import { useStore } from "@/hooks/useStore";

export const KeyboardProvider = ({ children }: { children: ReactNode }) => {
	const { mode, actions } = useStore();
	const { setMode, setEditorTarget } = actions;
	const tabPressed = useRef<boolean>(false);

	const map = useMemo<KeyboardControlsEntry<KeyControls>[]>(
		() => [
			{ name: KeyControls.forward, keys: ["ArrowUp", "KeyW"] },
			{ name: KeyControls.back, keys: ["ArrowDown", "KeyS"] },
			{ name: KeyControls.left, keys: ["ArrowLeft", "KeyA"] },
			{ name: KeyControls.right, keys: ["ArrowRight", "KeyD"] },
		],
		[],
	);

	// separate key listener for keys which need to update store
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Tab") {
				e.preventDefault();
				tabPressed.current = true;
			}
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === "Tab") {
				e.preventDefault();
				if (tabPressed.current) {
					// setMode(mode === Mode.Editing ? Mode.Playing : Mode.Editing);
					if (mode === Mode.Editing) {
						setMode(Mode.Playing);
						setEditorTarget(null);
					} else if (mode === Mode.Playing) {
						setMode(Mode.Editing);
					}
				}
				tabPressed.current = false;
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [mode, setMode, setEditorTarget]);

	return <KeyboardControls map={map}>{children}</KeyboardControls>;
};
