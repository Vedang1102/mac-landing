/* eslint-disable no-unused-vars */
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { ScrollControls, Environment, OrbitControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <Canvas camera={{fov:12, position:[0, -10, 220]}}>
      <Environment
      files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
      ]} />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
    </Canvas>
  )
}

export default App