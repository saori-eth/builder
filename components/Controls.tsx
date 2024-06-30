import { OrbitControls } from "@react-three/drei";
import { useStore } from "@/hooks/useStore";

export const Controls = () => {
	const { controlMode } = useStore((state) => state);

	return (
		<>
			<OrbitControls enabled={controlMode === "orbit"} />
		</>
	);
};
