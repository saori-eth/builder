import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Object3D } from "three";
import { useStore } from "@/hooks/useStore";
import { Mode } from "@/types";

interface Model3dProps {
	src: string;
}

export const Model3d = <T,>(props: Model3dProps & T) => {
	const { mode } = useStore();
	const gltf = useLoader(GLTFLoader, props.src);
	const modelRef = useRef<Object3D>(null);
	const { setEditorTarget } = useStore((state) => state.actions);

	return (
		<Suspense fallback={null}>
			<primitive
				ref={modelRef}
				object={gltf.scene}
				onClick={() => {
					if (!modelRef.current || mode !== Mode.Editing) return;
					setEditorTarget(modelRef.current);
				}}
				{...props}
			/>
		</Suspense>
	);
};
