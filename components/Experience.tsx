import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { useStore } from "@/hooks/useStore";

const Experience = () => {
	const { setEditorTarget } = useStore((state) => state.actions);
	return (
		<Canvas onPointerMissed={() => setEditorTarget(null)}>
			<World />
		</Canvas>
	);
};

export default Experience;
