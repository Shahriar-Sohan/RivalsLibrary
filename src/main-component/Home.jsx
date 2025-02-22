import React, { useRef, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import soloLeveling from '../assets/soloLeveling.jpeg';
import audioFont from '../assets/fonts/Audiowide/Audiowide-Regular.ttf';
import Eye from '../assets/ffe03fa12ec9 (1).webp'

import GridDistortion from "../component/gridDistortion/gridDistortion";
import GlitchText from '../component/glitchText/GlicthEffectText';
import AnimatedContent from '../component/animatedContent/AnimatedContent'
import ParticleBoom from "../component/particleBoom";
import TechStack from "../component/TechStack";

import "./divMotion.css"


function Home() {




  return (

    <div style={{ position: 'relative', display: "flex", alignItems: "center", flexDirection: 'column', backgroundColor: 'rgb(13, 8, 27)' }}>

      <style>
        {`@font-face {
            font-family: 'Audiowide';
            src: url(${audioFont}) format('truetype');
            } `}
      </style>

      <div style={{ width: '100vw', height: '100vh', display: "flex", alignItems: "center", }} >
        <GridDistortion
          imageSrc={soloLeveling}
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />


        <Navbar style={{ position: 'absolute', zIndex: 1000 }} />
        <img src={Eye} style={{
          zIndex: 2000, position: 'absolute', left: '72.5vw',
          top: '21.7vh', width: '8.5vw', backgroundColor: 'rgb(0, 0, 29)',
          filter: " brightness(1.1) contrast(1.2) saturate(0.9) hue-rotate(-30deg) drop-shadow(0 0 0 rgba(200, 220, 255, 0.5)"
        }} />

        <div>
          <AnimatedContent
            distance={300}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.2}
            threshold={0.2}
          >
            <div style={{
              width: '40vw', height: '50vh', gap: '20px', flexDirection: 'column',
              display: 'flex', alignItems: 'flex-start', padding: '0px 50px 50px 50px', zIndex: 1, position: 'relative', pointerEvents: 'none',
            }}>
              <GlitchText>Hi, it's me Sexy Sohan</GlitchText>
              <p style={{
                color: 'white',
                marginTop: '50px',
                marginBottom: '10px',
                fontSize: '1rem',
                fontFamily: audioFont
              }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt dolore suscipit laudantium dolor? Quaerat, ea ex earum deleniti eveniet id consequuntur harum itaque iste dolorem, qui distinctio quia consectetur.</p>
            </div>
          </AnimatedContent>

        </div>

      </div>

      <div>
        <section style={{
          height: '80vh', width: '100vw', backgroundColor: 'rgb(13, 8, 27)', padding: 0, display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }}>

          <ParticleBoom>
            <TechStack />
          </ParticleBoom>

        </section>
      </div>
    </div>
  );
}

export default Home;





