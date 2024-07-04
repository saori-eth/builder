import { create } from "zustand";
import type { Object3D } from "three";
import type { MutableRefObject } from "react";

export type Store = {
	mode: "editing" | "playing";
	editorTarget: Object3D | MutableRefObject<Object3D> | null;

	actions: {
		setMode: (mode: "editing" | "playing") => void;
		setEditorTarget: (
			editorTarget: Object3D | MutableRefObject<Object3D> | null,
		) => void;
	};
};

export const useStore = create<Store>((set) => ({
	mode: "playing",
	editorTarget: null,
	actions: {
		setMode: (mode) => set({ mode }),
		setEditorTarget: (editorTarget) => set({ editorTarget }),
	},
}));
