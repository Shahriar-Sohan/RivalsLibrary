import React from "react";
import Navbar from "../component/Navbar";
import soloLeveling from '../assets/soloLeveling.jpeg';
import audioFont from '../assets/fonts/Audiowide/Audiowide-Regular.ttf';
import GridDistortion from "../component/gridDistortion/gridDistortion";
import GlitchText from '../component/glitchText/GlicthEffectText';
import AnimatedContent from '../component/animatedContent/AnimatedContent'

function Home() {
  const Styles = {

    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      borderWidth: '2px',
      borderColor: 'white',
      padding: '5vw',
      width: '40vw',
      height: '60vh',
      borderRadius: '10px',
      position: 'relative',
      zIndex: 2, /* Ensure the container is above the distortion */

    },
    para: {
      color: 'white',
      marginTop: '50px',
      marginBottom: '10px',
      fontSize: '1rem',
      fontFamily: 'Audiowide'
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', display: "flex", alignItems: "center" }}>
      <GridDistortion
        imageSrc={soloLeveling}
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="custom-class"
      >
        <Navbar style={{ position: 'relative', zIndex: 3 }} /> {/* Ensure the Navbar is above the distortion */}
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
  );
}

export default Home;





