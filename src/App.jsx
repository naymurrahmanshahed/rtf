import { Canvas } from "@react-three/fiber";

import "./App.css";

const Cube = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry size={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.6} />
      <ambientLight intensity={0.1} />

      <group position={[0, 0, 1]}>
        <Cube position={[1, 1, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[-1, 1, 0]} color={"orange"} size={[1, 1, 1]} />
        <Cube position={[-1, -1, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[1, -1, 0]} color={"purple"} size={[1, 1, 1]} />
      </group>
    </Canvas>
  );
};

export default App;
