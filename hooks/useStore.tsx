import { create } from "zustand";

type controlModeOptions = "orbit" | "pivot";

export type Store = {
	controlMode: controlModeOptions;

	actions: {
		setControlMode: (controlMode: controlModeOptions) => void;
	};
};

export const useStore = create<Store>((set) => ({
	controlMode: "orbit",
	actions: {
		setControlMode: (controlMode) => set({ controlMode }),
	},
}));
