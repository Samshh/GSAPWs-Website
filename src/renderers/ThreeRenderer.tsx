import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeRenderer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);

    function createStarField() {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const sizes: number[] = [];

      for (let i = 0; i < 5000; i++) {
        vertices.push(
          THREE.MathUtils.randFloatSpread(1000), 
          THREE.MathUtils.randFloatSpread(1000),
          THREE.MathUtils.randFloatSpread(1000) 
        );

        sizes.push(Math.random() * 2 + 0.5); 
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          pixelRatio: { value: window.devicePixelRatio },
          opacity: { value: 1 },
        },
        vertexShader: `
          attribute float size;
          uniform float pixelRatio;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform float opacity;
          void main() {
            vec2 center = gl_PointCoord - 0.5;
            float distance = length(center);
            if (distance > 0.5) discard;
            float alpha = smoothstep(0.5, 0.4, distance) * opacity;
            gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
      console.log("Star field loaded");
      return stars;
    }

    createStarField();

    const animate = () => {
      requestAnimationFrame(animate);

      const radius = 30;
      const speed = 0.00005;
      const time = Date.now() * speed;

      camera.position.x = radius * Math.sin(time);
      camera.position.z = radius * Math.cos(time);
      camera.lookAt(scene.position);

      directionalLight.position.copy(camera.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas className="absolute top-0 left-0 overflow-hidden w-full h-full z-0" ref={canvasRef} />
  );
}
