import * as THREE from 'three';

export function mountHeroObject(canvas: HTMLCanvasElement) {
  const host = canvas.parentElement;
  if (!host) return;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch {
    canvas.classList.add('webgl-unavailable');
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  const root = new THREE.Group();
  scene.add(root);

  const ink = new THREE.MeshStandardMaterial({ color: '#171717', roughness: 0.28, metalness: 0.45 });
  const paper = new THREE.MeshStandardMaterial({ color: '#f5f0e8', roughness: 0.5, metalness: 0.08 });
  const accent = new THREE.MeshStandardMaterial({ color: '#6b4cff', roughness: 0.25, metalness: 0.5, emissive: '#24105f', emissiveIntensity: 0.18 });
  const acid = new THREE.MeshStandardMaterial({ color: '#d9ff43', roughness: 0.3, metalness: 0.35, emissive: '#586d00', emissiveIntensity: 0.12 });
  const glass = new THREE.MeshPhysicalMaterial({ color: '#8d7cff', roughness: 0.12, metalness: 0.1, transmission: 0.35, transparent: true, opacity: 0.78 });

  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.92, 2), glass);
  root.add(core);

  const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.24, 0.045, 12, 96), accent);
  ringA.rotation.set(0.65, 0.15, 0.2);
  root.add(ringA);

  const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.52, 0.025, 10, 96), paper);
  ringB.rotation.set(-0.4, 0.75, 0.35);
  root.add(ringB);

  const ringC = new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.018, 8, 96), acid);
  ringC.rotation.set(1.15, -0.25, 0.55);
  root.add(ringC);

  const bars = new THREE.Group();
  for (let i = 0; i < 6; i += 1) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.58 + (i % 2) * 0.18, 0.11), i % 2 ? accent : paper);
    const angle = (i / 6) * Math.PI * 2;
    bar.position.set(Math.cos(angle) * 1.15, Math.sin(angle) * 1.15, 0.08);
    bar.rotation.z = angle + Math.PI / 2;
    bars.add(bar);
  }
  root.add(bars);

  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 16), acid);
  dot.position.set(0.95, 0.78, 1.08);
  root.add(dot);

  scene.add(new THREE.HemisphereLight(0xf6f1e7, 0x1b1730, 2.2));
  const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
  keyLight.position.set(-3, 4, 5);
  scene.add(keyLight);
  const accentLight = new THREE.PointLight(0x6b4cff, 12, 10);
  accentLight.position.set(3, 1, 3);
  scene.add(accentLight);

  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.set(0, 0.05, Math.max(5.2, 5.8 / Math.min(1, camera.aspect)));
    camera.updateProjectionMatrix();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  let targetX = 0;
  let targetY = 0;
  canvas.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = canvas.getBoundingClientRect();
    targetY = THREE.MathUtils.clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 0.9, -0.42, 0.42);
    targetX = THREE.MathUtils.clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * -0.55, -0.28, 0.28);
  });
  canvas.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });
  canvas.addEventListener('keydown', (event) => {
    const step = 0.12;
    if (event.key === 'ArrowLeft') targetY = THREE.MathUtils.clamp(targetY - step, -0.42, 0.42);
    else if (event.key === 'ArrowRight') targetY = THREE.MathUtils.clamp(targetY + step, -0.42, 0.42);
    else if (event.key === 'ArrowUp') targetX = THREE.MathUtils.clamp(targetX + step, -0.28, 0.28);
    else if (event.key === 'ArrowDown') targetX = THREE.MathUtils.clamp(targetX - step, -0.28, 0.28);
    else return;
    event.preventDefault();
  });

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clock = new THREE.Clock();
  const animate = () => {
    const t = clock.getElapsedTime();
    const easing = reducedMotion ? 0.2 : 0.075;
    root.rotation.x += (targetX - root.rotation.x) * easing;
    root.rotation.y += (targetY - root.rotation.y) * easing;
    if (!reducedMotion) {
      root.rotation.z = Math.sin(t * 0.35) * 0.06;
      core.rotation.y = t * 0.35;
      core.rotation.x = Math.sin(t * 0.45) * 0.12;
      ringA.rotation.z = t * 0.24;
      ringB.rotation.y = t * -0.18;
      ringC.rotation.x = t * 0.14;
      bars.rotation.z = t * 0.22;
      dot.position.z = 1.02 + Math.sin(t * 2.2) * 0.16;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
}
