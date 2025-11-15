import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Pure white background
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create subtle animated geometries - positioned to the sides
    const geometries: THREE.Mesh[] = [];

    // Top right corner - subtle floating shapes
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xf0f0f0,
        emissive: 0xe8e8e8,
        shininess: 20,
        transparent: true,
        opacity: 0.4
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        6 + Math.random() * 2,
        4 + i * 1.5,
        Math.random() * 2 - 1
      );
      mesh.rotation.set(Math.random(), Math.random(), Math.random());
      scene.add(mesh);
      geometries.push(mesh);
    }

    // Bottom left corner - subtle floating shapes
    for (let i = 0; i < 2; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.25, 3);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xf5f5f5,
        emissive: 0xededed,
        wireframe: false,
        transparent: true,
        opacity: 0.3
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        -7 + Math.random() * 2,
        -4 - i * 1.5,
        Math.random() * 2 - 1
      );
      scene.add(mesh);
      geometries.push(mesh);
    }

    // Subtle lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.4);
    light1.position.set(10, 10, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xf0f0f0, 0.2);
    light2.position.set(-10, -10, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Animation loop - very subtle
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      geometries.forEach((mesh, i) => {
        mesh.rotation.x += 0.0003 * (i % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.0005 * (i % 2 === 0 ? 1 : -1);
        mesh.position.y += Math.sin(Date.now() * 0.0003 + i) * 0.0005;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

