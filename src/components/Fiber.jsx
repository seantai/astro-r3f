import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls, OrbitControls, Stage } from "@react-three/drei";
import { useEffect, useRef } from "react";
// import { EffectComposer, Scanline, Noise } from "@react-three/postprocessing";
// import { BlendFunction } from "postprocessing";
// import { Scene } from "./Scene";
// import { Perf } from "r3f-perf";
// import "../styles/fiberCanvas.css";
// import { get } from "../pages/rss.xml";

const Scene = () => {
  const { controls } = useThree();
  const meshRef = useRef();
  // const sceneCreated = ({ camera }) => {
  //   console.log(camera);
  //   console.log(controls);
  //   // controls.fitToBox(meshRef.current, true, {
  //   //   paddingTop: margin,
  //   //   paddingLeft: margin,
  //   //   paddingBottom: margin,
  //   //   paddingRight: margin,
  //   // });
  //   // controls.rotateTo(Math.PI / -4, Math.PI / 2.5, true);
  // };

  const margin = 1;
  useEffect(() => {
    // console.log(controls);
    // controls.fitToBox(meshRef.current, true, {
    //   paddingTop: margin,
    //   paddingLeft: margin,
    //   paddingBottom: margin,
    //   paddingRight: margin,
    // });
    if (controls) {
      controls.rotateTo(Math.PI / -4, Math.PI / 2.5, true);
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
    <div className="relative w-full h-full overflow-hidden p-10 b-black/90 border-2">
      <Canvas
        // onCreated={sceneCreated}
        camera={{ position: [0, 0, 5], fov: 100 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Fiber;
