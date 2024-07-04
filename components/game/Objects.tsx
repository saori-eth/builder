import { Model3d } from "./Model3d";
import { Select } from "@react-three/drei";

const testObjects = ["streetlight.glb"];

export const Objects = () => {
	return (
		<Select>
			{testObjects.map((object) => (
				<Model3d key={object} src={`/testObjects/${object}`} />
			))}
		</Select>
	);
};
