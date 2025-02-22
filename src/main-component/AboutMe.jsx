import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';



function AboutMe() {
    const elementRef = useRef(null)
    

    useEffect(() => {
        if (!elementRef.current) return;
        

        const scene = new THREE.Scene()  //create a scene

        //grid
        const gridHelper = new THREE.GridHelper()
        scene.add(gridHelper)

        //ground geometry
        const planeGeometry = new THREE.PlaneGeometry(10,10)
        const planeMaterial = new THREE.MeshStandardMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)
        scene.add(plane)
        plane.position.y= -1
        plane.rotation.x = -(Math.PI / 2) //radians
        
        
        //camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // camera = (fov, aspect, near, far)
        camera.position.set(0,3,4)
        camera.lookAt(new THREE.Vector3(0,0,0))

        //renderMachine
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        elementRef.current.appendChild(renderer.domElement)

        // Cube 
        const geometry = new THREE.BoxGeometry(1,1,1) // BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
        const material = new THREE.MeshStandardMaterial({color: 0xff0000}) //texture of the geometry
        const cube = new THREE.Mesh(geometry,material)
        scene.add(cube)
        cube.position.set(-1,0,0)

        //Sphere
        const sphereGeometry = new THREE.SphereGeometry(0.8)
        const sphereMaterial = new THREE.MeshStandardMaterial({color: 0x0000ff, wireframe: false})
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
        scene.add(sphere)
        sphere.position.set(1,0,0)
        


        // lets add light
        const light= new THREE.DirectionalLight(0xffffff, 3)
        light.position.set(5, 5, 5)
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040, 1); // soft light with intensity 1
        scene.add(ambientLight);
        ambientLight.position.set(5, 5, 5)

        //axishelper
        const axishelper= new THREE.AxesHelper(2)
        scene.add(axishelper)

        function animate(){
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            sphere.rotation.y += 0.01
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }

        animate()

        //Orbit Control
        const controls = new OrbitControls(camera, renderer.domElement)
        



        return(()=>{
            if(elementRef.current){
                elementRef.current.removeChild(renderer.domElement);
            }
            
        })

    }, [])







    return (
        <div ref={elementRef} />
    )
}

export default AboutMe