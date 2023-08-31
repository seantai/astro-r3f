import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Scene = () => {
  const { controls } = useThree();
  const meshRef = useRef();

  const margin = 0.2;
  useEffect(() => {
    if (controls) {
      controls.fitToBox(meshRef.current, true, {
        paddingTop: margin,
        paddingLeft: margin,
        paddingBottom: margin,
        paddingRight: margin,
      });
      controls.rotateTo(Math.PI / -0.4, Math.PI / 2.5, true);
    }
  }, [controls]);

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <CameraControls makeDefault />
    </>
  );
};

export const Fiber = () => {
  return (
    <Canvas
      camera={{ position: [10, -20, 5], fov: 45 }}
      style={{ height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
};

export default Fiber;
