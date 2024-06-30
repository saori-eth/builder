import { Environment } from "./Environment";
import { Controls } from "./Controls";
import { Objects } from "./Objects";

export const World = () => {
	return (
		<>
			<ambientLight intensity={1} />
			<Controls />
			<Objects />
			<Environment />
		</>
	);
};
