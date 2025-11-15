import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3DHome = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const geometries: THREE.Mesh[] = [];

    // Minimal floating lines
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.BoxGeometry(0.1, 2, 0.1);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0xf0f0f0,
        transparent: true,
        opacity: 0.3
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        Math.random() * 5 - 2.5
      );
      mesh.rotation.z = Math.random() * Math.PI;
      scene.add(mesh);
      geometries.push(mesh);
    }

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      geometries.forEach((mesh, i) => {
        mesh.rotation.z += 0.001 * (i % 2 === 0 ? 1 : -1);
        mesh.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.0005;
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

