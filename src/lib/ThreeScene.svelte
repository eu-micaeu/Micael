<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container;
    let scene, camera, renderer, particles;
    let mouseX = 0;
    let mouseY = 0;

    onMount(() => {
        // Configuração básica da cena
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Criar sistema de partículas mais suave
        createParticleSystem();

        // Adicionar luzes mais suaves
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(10, 10, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x764ba2, 0.8);
        pointLight.position.set(-10, 10, 0);
        scene.add(pointLight);

        camera.position.z = 5;

        // Event listeners
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onWindowResize);

        // Iniciar loop de animação
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onWindowResize);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
        };
    });

    function createParticleSystem() {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 800;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 30;
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3),
        );

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0x667eea,
            transparent: true,
            opacity: 0.4,
        });

        particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
    }

    function onMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        // Animar partículas
        if (particles) {
            particles.rotation.y += 0.002;
            particles.rotation.x += 0.001;
        }

        renderer.render(scene, camera);
    }
</script>

<div bind:this={container} class="three-container"></div>

<style>
    .three-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    }

    :global(canvas) {
        display: block;
    }
</style>
