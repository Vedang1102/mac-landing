/* eslint-disable no-unused-vars */
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, OrbitControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <Canvas camera={{fov:20, position:[0, -2, 120]}}>
      <MacContainer />
      <OrbitControls />
      <Environment
      files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
      ]} />
    </Canvas>
  )
}

export default App