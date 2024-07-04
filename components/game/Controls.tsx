import { OrbitControls, TransformControls } from "@react-three/drei";
import { useStore } from "@/hooks/useStore";
import { Mode } from "@/types";

/*
	TODO:
	https://threejs.org/docs/#examples/en/controls/TransformControls
	Add better snap controls
*/

export const Controls = () => {
	const { editorTarget, mode } = useStore();

	return (
		<>
			<OrbitControls makeDefault />
			{editorTarget && mode === Mode.Editing && (
				<TransformControls object={editorTarget} />
			)}
		</>
	);
};
