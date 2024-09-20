/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from "three"

const MacContainer = () => {
    let model = useGLTF('./mac.glb');
    let texture = useTexture("./red.jpg");
    let meshes = {};
    model.scene.traverse((child) => {
        meshes[child.name] = child;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = texture;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    let data = useScroll();

    useFrame((state, delta) => {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset*90));
    })

  return (
    <group position={[0, -6.2, 20]}>
      <primitive object={model.scene} />
    </group>
  )
}
export default MacContainer