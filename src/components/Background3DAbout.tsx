import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3DAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfff7ed);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const geometries: THREE.Mesh[] = [];

    // Warm orange/amber shapes
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.OctahedronGeometry(0.3, 0);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xf97316,
        emissive: 0xfb923c,
        transparent: true,
        opacity: 0.4
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        Math.random() * 5 - 2.5
      );
      scene.add(mesh);
      geometries.push(mesh);
    }

    // Light source
    const light1 = new THREE.DirectionalLight(0xfff7ed, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const ambientLight = new THREE.AmbientLight(0xfff7ed, 0.8);
    scene.add(ambientLight);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      geometries.forEach((mesh, i) => {
        mesh.rotation.x += 0.005 * (i % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.008;
        mesh.position.y += Math.sin(Date.now() * 0.0008 + i) * 0.002;
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

