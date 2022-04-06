import React from "react";
import { Canvas } from "react-three-fiber";
import Box from "./Box";
import { MapControls } from "@react-three/drei";
import "./styles.css";
import MiniMap from "./MiniMap";

const App = (props) => {
  return (
    <Canvas
      camera={{
        zoom: 20,
        position: [0, 0, 200],
        fov: 30
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <MapControls />
      <MiniMap />
    </Canvas>
  );
};

export default App;
