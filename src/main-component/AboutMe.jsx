import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'



function AboutMe() {
    const elementRef = useRef(null)
    

    useEffect(() => {
        if (!elementRef.current) return;
        

        const scene = new THREE.Scene()  //create a scene

        //grid
        const gridHelper = new THREE.GridHelper()
        scene.add(gridHelper)
        
        //camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // camera = (fov, aspect, near, far)
        camera.position.set(0,5,5)
        camera.lookAt(new THREE.Vector3(0,0,0))

        //renderMachine
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        elementRef.current.appendChild(renderer.domElement)

        //Create a Cube and Add it to the Scene
        const geometry = new THREE.BoxGeometry(1,1,1) // BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
        const material = new THREE.MeshBasicMaterial({color: 0xff0000}) //texture of the geometry
        const cube = new THREE.Mesh(geometry,material)
        scene.add(cube)


        // lets add light
        const light= new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(5, 5, 5)
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040, 1); // soft light with intensity 1
        scene.add(ambientLight);

        //axishelper
        const axishelper= new THREE.AxesHelper(2)
        scene.add(axishelper)

        function animate(){
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }

        animate()



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