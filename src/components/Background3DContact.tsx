import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3DContact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f4ff);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const geometries: THREE.Mesh[] = [];

    // Purple and cyan particles
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.TetrahedronGeometry(0.2, 0);
      const material = new THREE.MeshBasicMaterial({ 
        color: i % 2 === 0 ? 0x8b5cf6 : 0x06b6d4,
        transparent: true,
        opacity: 0.5
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        Math.random() * 5 - 2.5
      );
      scene.add(mesh);
      geometries.push(mesh);
    }

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      geometries.forEach((mesh, i) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.015;
        mesh.position.x += Math.sin(Date.now() * 0.0005 + i) * 0.01;
        mesh.position.y += Math.cos(Date.now() * 0.0005 + i) * 0.01;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen -z-10" style={{ pointerEvents: 'none' }} />
  );
};

