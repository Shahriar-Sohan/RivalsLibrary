import React, {useRef,use} from "react";
import Navbar from "../component/Navbar";
import soloLeveling from '../assets/soloLeveling.jpeg';
import audioFont from '../assets/fonts/Audiowide/Audiowide-Regular.ttf';

import GridDistortion from "../component/gridDistortion/gridDistortion";
import GlitchText from '../component/glitchText/GlicthEffectText';
import AnimatedContent from '../component/animatedContent/AnimatedContent'

import "./divMotion.css"

function Home() {
  const Styles = {
    para: {
      color: 'white',
      marginTop: '50px',
      marginBottom: '10px',
      fontSize: '1rem',
      fontFamily: audioFont
    }
  };

  // const elementRef = useRef(null)
  // const element = elementRef.current

  // const startPosX = -200
  // const startBorderRadius= 50
  // const startBgColor = "white"
  // const startHeight = "10px"
  // const startWidth = '10px'

  // const endPosX = 0
  // const endBorderRadius = 40
  // const endBgColor= "rgb(13, 8, 27)"
  // const endHeight = '50vh'
  // const endWidth = '80vw'

  // function Animation(){
  //   element.style.transform = `transform: translateX(${endPosX - startPosX });`
  //   element.style.
  // }







  return (
    <div style={{ width: '100vw', position: 'relative', display: "flex", alignItems: "center", flexDirection: 'column', backgroundColor: 'rgb(13, 8, 27)' }}>
      <div style={{ width: '100vw', height: '100vh', position: 'relative', display: "flex", alignItems: "center", flexDirection: 'row' }} >
        <GridDistortion
          imageSrc={soloLeveling}
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        >
          <Navbar style={{ position: 'fixed', zIndex: 20 }} /> {/* Ensure the Navbar is above the distortion */}
        </GridDistortion>
        <style>
          {`
          @font-face {
            font-family: 'Audiowide';
            src: url(${audioFont}) format('truetype');
          }
        `}
        </style>
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
          <div className="container" style={Styles.container}>
            <GlitchText>Hi, it's me Sexy Sohan</GlitchText>
            <p style={Styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt dolore suscipit laudantium dolor? Quaerat, ea ex earum deleniti eveniet id consequuntur harum itaque iste dolorem, qui distinctio quia consectetur.</p>
          </div>
        </AnimatedContent>
      </div>

      <section style={{ height: '80vh', width: '100vw', backgroundColor: 'rgb(13, 8, 27)',padding:0, display: 'flex',
        justifyContent: 'center',alignItems: 'center' }}>

        <div style={{border: '2px solid white',width: '80vw',height: '50vh',display: 'flex',
          borderRadius: '40px',boxShadow: '0 0px 20px 2px rgb(250, 247, 247)'}}>

        </div>
      </section>
    </div>
  );
}

export default Home;





