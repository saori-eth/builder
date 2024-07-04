import { create } from "zustand";
import type { Object3D } from "three";
import type { MutableRefObject } from "react";

export type Store = {
	editorTarget: Object3D | MutableRefObject<Object3D> | null;

	actions: {
		setEditorTarget: (
			editorTarget: Object3D | MutableRefObject<Object3D> | null,
		) => void;
	};
};

export const useStore = create<Store>((set) => ({
	editorTarget: null,
	actions: {
		setEditorTarget: (editorTarget) => set({ editorTarget }),
	},
}));
