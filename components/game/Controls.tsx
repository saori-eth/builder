import { OrbitControls, TransformControls } from "@react-three/drei";
import { useStore } from "@/hooks/useStore";
import { Mode } from "@/types";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

/*
	TODO:
	https://threejs.org/docs/#examples/en/controls/TransformControls
	Add better snap controls
*/

const v1 = new Vector3();
export const Controls = () => {
	const { editorTarget, mode } = useStore();

	useFrame(() => {
		if (!editorTarget) return;
		// editor target is a 3d object
		// so you can either read or write to it anywhere
	});

	return (
		<>
			<OrbitControls makeDefault />
			{editorTarget && mode === Mode.Editing && (
				<TransformControls object={editorTarget} />
			)}
		</>
	);
};
