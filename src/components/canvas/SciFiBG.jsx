import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';


const GalaxyParticles = () => {
    const group = useRef();

    const particles = useMemo(() => Array.from({ length: 2000 }, () => ({
        position: [
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        ],
    })), []);

    useFrame(({ clock }) => {
        if (group.current) {
        group.current.rotation.y = clock.elapsedTime * 0.05;
        }
    });

    return (
        <group ref={group}>
        {particles.map((particle, idx) => (
            <mesh key={idx} position={particle.position}>
            <sphereGeometry args={[0.05, 6, 6]} />
            <meshBasicMaterial color={'#ffffff'} />
            </mesh>
        ))}
        </group>
    );
};

const Comet = () => {
    const comet = useRef();
    const velocity = useRef([
      (Math.random() - 0.5) * 0.4,
      (Math.random() - 0.5) * 0.4,
      (Math.random() - 0.5) * 0.4,
    ]);

        useFrame(() => {
        if (comet.current) {
            comet.current.position.x += velocity.current[0];
            comet.current.position.y += velocity.current[1];
            comet.current.position.z += velocity.current[2];
    
            if (comet.current.position.length() > 70) {
            comet.current.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                -20
            );
            }
        }
        });
    
        return (
        <mesh ref={comet} position={[Math.random() * 10, Math.random() * 10, -10]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
        </mesh>
        );
};

    const CameraMotion = () => {
        const { camera } = useThree();
    
        useFrame(({ clock }) => {
        camera.position.x = Math.sin(clock.elapsedTime * 0.2) * 2;
        camera.position.y = Math.sin(clock.elapsedTime * 0.1) * 1;
        camera.lookAt(0, 0, 0);
        });
    
        return null;
    };

const LightStreaks = () => {
    const group = useRef();

    const streaks = useMemo(() => Array.from({ length: 300 }, () => ({
        position: [
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 50,
            (Math.random() - 0.5) * 50,
        ],
        rotation: Math.random() * Math.PI,
        scale: Math.random() * 2,
        })), []);
    
        useFrame(({ clock }) => {
        if (group.current) {
            group.current.rotation.y = clock.elapsedTime * 0.1;
        }
        });
    
        return (
        <group ref={group}>
            {streaks.map((streak, idx) => (
            <mesh key={idx} position={streak.position} rotation={[0, streak.rotation, 0]}>
                <cylinderGeometry args={[0.01, 0.01, streak.scale, 12]} />
                <meshBasicMaterial color={'#00ffff'} transparent opacity={0.6} />
            </mesh>
            ))}
        </group>
    );
};


const NebulaCloud = ({ color1, color2, size = 80, speed = 0.001, positionZ = -10 }) => {
    const cloud = useRef();

    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(128, 128, 10, 128, 128, 128);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 256, 256);
    
        return new THREE.CanvasTexture(canvas);
        }, [color1, color2]);
    
        useFrame(() => {
        if (cloud.current) {
            cloud.current.rotation.z += speed;
        }
        });
    
        return (
        <mesh ref={cloud} position={[0, 0, positionZ]}>
            <planeGeometry args={[size, size]} />
            <meshBasicMaterial
            map={texture}
            transparent
            opacity={0.5}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
};

    const GasJet = () => {
        const particles = useRef();
    
        useFrame(({ clock }) => {
        if (particles.current) {
            particles.current.rotation.y = clock.elapsedTime * 2;
        }
        });
    
        return (
        <points ref={particles}>
            <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                array={new Float32Array(Array.from({ length: 300 }, () => (Math.random() - 0.5) * 5))}
                count={100}
                itemSize={3}
            />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="#ff6600" transparent opacity={0.8} />
        </points>
        );
    };

    const AlienShip = () => {
        const ref = useRef();
        const speed = 0.05 + Math.random() * 0.1;
        const startZ = Math.random() * -100;
      
        useFrame(() => {
          if (ref.current) {
            ref.current.position.z += speed;
            if (ref.current.position.z > 10) {
              ref.current.position.z = startZ;
              ref.current.position.x = (Math.random() - 0.5) * 50;
              ref.current.position.y = (Math.random() - 0.5) * 50;
            }
          }
        });
      
        return (
          <mesh ref={ref} position={[(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, startZ]}>
            <coneGeometry args={[0.5, 1.5, 8]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
          </mesh>
        );
      };
      

const SciFiBG = () => {
    return (
        <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
    <ambientLight intensity={1} />
    <pointLight position={[0, 0, 0]} intensity={3} color="#ffffff" />

    <CameraMotion />

    
    <GalaxyParticles />
    <LightStreaks />
    
    <GasJet />
    <GasJet />


    <NebulaCloud color1="rgba(128,0,255,0.5)" color2="rgba(0,128,255,0.2)" speed={0.001} size={80} />
    <NebulaCloud color1="rgba(255,0,128,0.3)" color2="rgba(255,255,0,0.2)" speed={-0.0015} size={90} positionZ={-12} />

    {Array.from({ length: 5 }).map((_, i) => (
        <Comet key={i} />
    ))}
    {Array.from({ length: 5 }).map((_, i) => (
    < AlienShip key={i} />
    ))}

    </Canvas>

    );
};

export default SciFiBG;
