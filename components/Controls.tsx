import { OrbitControls, TransformControls } from "@react-three/drei";
import { useStore } from "@/hooks/useStore";

/*
	TODO:
	https://threejs.org/docs/#examples/en/controls/TransformControls
	Add better snap controls and make it so it doesn't scale to be huge when you zoom out
*/
export const Controls = () => {
	const { editorTarget } = useStore((state) => state);

	return (
		<>
			<OrbitControls makeDefault />
			{/* @ts-expect-error: confusing object prop type */}
			{editorTarget && <TransformControls object={editorTarget} />}
		</>
	);
};
