import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from './Loader'

const Ball = ({imgUrl}) => {
    const [decal] = useTexture([imgUrl]);
    const decalFaces = [
        { position: [0, 0, 0.76], rotation: [0, 0, 0] },                
        { position: [0, 0, -0.76], rotation: [0, Math.PI, 0] },         
        { position: [0.76, 0, 0], rotation: [0, -Math.PI / 2, 0] },     
        { position: [-0.76, 0, 0], rotation: [0, Math.PI / 2, 0] },     
        { position: [0, 0.76, 0], rotation: [-Math.PI / 2, 0, 0] },     
        { position: [0, -0.76, 0], rotation: [Math.PI / 2, 0, 0] },     
    ];

    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={3}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <mesh castShadow receiveShadow scale={3}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            
            <meshStandardMaterial
            color="#e0e0ff"
            roughness={0.3}
            metalness={0.7}
            polygonOffset
            polygonOffsetFactor={-2}
            flatShading={false}
            />
            
            {decalFaces.map((face, index) => (
            <Decal
                key={index}
                position={face.position}
                rotation={face.rotation}
                scale={[1.1, 1.1, 1.1]}
                map={decal}
                flatShading
                anisotropy={16}
            />
            ))}
        </mesh>
        </Float>

    )
}

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
        </Canvas>
    )
}

export default BallCanvas
