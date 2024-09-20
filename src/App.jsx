/* eslint-disable no-unused-vars */
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { ScrollControls, Environment, OrbitControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className='w-full h-screen'>
      {/* <Navbar /> */}
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 font-['SF_Pro_Display',_sans-serif]">
        <h3 className='masked text-7xl tracking-tight font-semibold'>MacBook Pro</h3>
        <h5 className='text-3xl font-light tracking-normal mt-4'>Mind Blowing, Head Turning!!</h5>
        <p className='text-2xl tracking-tight max-w-lg text-center mt-2'>The ultimate pro notebook, featuring the Apple M1 Pro and M1 Max chips.</p> 
      </div>
      <Canvas camera={{fov:12, position:[0, -10, 220]}}>
        <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
        ]} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App