import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { element } from 'three/tsl';



function TechStack({ children }) {
    const elementRef = useRef(null)

    useEffect(() => {
        if (!elementRef) return;

        //scene
        const scene = new THREE.Scene()

        //grid
        const gridHelper = new THREE.GridHelper()
        scene.add(gridHelper)

        //Axis Helper
        const axishelper = new THREE.AxesHelper(3)

        //renderer
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(elementRef.current.clientWidth, elementRef.current.clientHeight)
        elementRef.current.appendChild(renderer.domElement)

        //camera
        const camera = new THREE.PerspectiveCamera(75, elementRef.current.clientWidth / elementRef.current.clientHeight, 0.1, 50)
        camera.position.set(0, 0, 5)

        //light
        const light = new THREE.DirectionalLight(0xffffff, 3)
        light.position.set(0,0,0)
        scene.add(light)
        //object

        //orbitControl(temp)
        //animate
        function animate(){
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()





        return (() => {
            if (elementRef.current) {
                elementRef.current.removeChild(renderer.domElement)
            }
        }

        )

    }, [])






    return (
        <div ref={elementRef} >

        </div>
    )
}



export default TechStack