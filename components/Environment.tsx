import { Box, PerspectiveCamera } from "@react-three/drei";

export const Environment = () => {
	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 2.5, 10]} />
			<ambientLight intensity={1} />
			<Ground />
		</>
	);
};

export const Ground = () => {
	return (
		<Box args={[50, 0.1, 50]} position={[0, -0.05, 0]}>
			<gridHelper args={[50, 25]} />
			<meshPhongMaterial
				attach="material"
				color="#474747"
				opacity={0.5}
				transparent
			/>
		</Box>
	);
};
