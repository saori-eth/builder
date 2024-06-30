import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { Suspense, forwardRef, useEffect, useRef, useState } from "react";
import { PivotControls, useSelect } from "@react-three/drei";
import { Mesh, type Object3D } from "three";
import { useStore } from "@/hooks/useStore";

interface Model3dProps {
	src: string;
}

export const Model3d = <T,>(props: Model3dProps & T) => {
	const gltf = useLoader(GLTFLoader, props.src);
	const modelRef = useRef<Object3D>(null);
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const [meshUuids, setMeshUuids] = useState<string[]>([]);
	const selected = useSelect();
	const { setControlMode } = useStore((state) => state.actions);

	useEffect(() => {
		gltf.scene.traverse((child) => {
			if (child instanceof Mesh) {
				setMeshUuids((prev) => [...prev, child.uuid]);
			}
		});
	}, [gltf]);

	useEffect(() => {
		if (!modelRef.current || selected.length === 0) {
			if (isSelected) setIsSelected(false);
			return;
		}
		setIsSelected(meshUuids.includes(selected[0].uuid));
	}, [selected, meshUuids, isSelected]);

	return (
		<Suspense fallback={null}>
			<PivotControls
				visible={isSelected}
				onDragStart={() => setControlMode("pivot")}
				onDragEnd={() => setControlMode("orbit")}
				offset={[0.1, 0, 0]}
				disableSliders
			>
				<primitive ref={modelRef} object={gltf.scene} {...props} />
			</PivotControls>
		</Suspense>
	);
};
