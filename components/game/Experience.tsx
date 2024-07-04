import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { useStore } from "@/hooks/useStore";

const Experience = () => {
	const { setEditorTarget, setMode } = useStore((state) => state.actions);
	return (
		<Canvas
			onPointerMissed={() => setEditorTarget(null)}
			onKeyDown={(e) => {
				console.log(e);
			}}
		>
			<World />
		</Canvas>
	);
};

export default Experience;
