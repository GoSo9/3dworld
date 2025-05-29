import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// function Model() {
//   //const { scene } = useGLTF("/models/bobject.glb");
//   const { scene } = useGLTF("/models/blenderFile_v2.glb");
//   return (
//     <primitive
//       object={scene}
//       scale={0.5}
//       position={[0, 0, 0]}
//       castShadow
//       receiveShadow
//     />
//   );
// }

// function Box() {
//   return (
//     <mesh>
//       <boxGeometry />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   );
// }

function AnimatedModel() {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/models/bobject.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    //document.title = "My Page Title";
    // Play the first animation
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} />;
}

function App() {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 60 }}
      style={{ height: "100vh", width: "100vw" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls />
      <AnimatedModel />
    </Canvas>
  );
}

export default App;
