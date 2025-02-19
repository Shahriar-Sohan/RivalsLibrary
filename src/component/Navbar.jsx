import { Link } from "react-router-dom";
import audioFont from '../assets/fonts/Audiowide/Audiowide-Regular.ttf';
import DecryptedText from "./decryptedText/DecryptedText";

function Navbar() {
    const Styles = {
        navbar: {
            backgroundColor: "inherit",
            color: "#fff",
            padding: "0px 5vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: '90vw',
            height: '100px',
            position: 'fixed', /* Position the Navbar absolutely */
            top: 0,
            left: 0,
            zIndex: 3, /* Ensure the Navbar is above the distortion */
        },
        navList: {
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            gap: "30px",
            padding: "0",
            margin: "0",
            fontFamily: "Audiowide"
        },
        navItem: {
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "28px",
        },
        navItemHover: {
            color: "#ff0", // Change color on hover
            transform: "scale(1.1)", // Scale up on hover
            transition: "transform 0.3s ease", // Smooth transition
        },
        button: {
            padding: "10px 15px",
            border: "2px solid #fff", /* Add a white border */
            borderRadius: "20px",
            color: "white",
            cursor: "pointer",
            transition: "0.3s",
            marginLeft: "10px",
            backgroundColor: "transparent", /* Make the button transparent */
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)", /* Add a more natural glow effect */
        },
        buttonHover: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
    };

    return (
        <nav className="navbar" style={Styles.navbar}>
            <h2 style={{ fontSize: '40px', fontFamily: 'Audiowide' }}>
                <DecryptedText
                speed={50}
                maxIterations={20}
                text="Rivalry"
                animateOn="view"
                revealDirection="center"
            /></h2>
            <ul style={Styles.navList}>
                <li>
                    <Link to="/" style={Styles.navItem}
                        onMouseEnter={(e) => {
                            e.target.style.color = Styles.navItemHover.color;
                            e.target.style.transform = Styles.navItemHover.transform;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = Styles.navItem.color;
                            e.target.style.transform = "scale(1)";
                        }}>
                        <DecryptedText
                            speed={50}
                            maxIterations={30}
                            text="Home"
                            animateOn="view"
                            revealDirection="center"/>
                    </Link>
                </li>
                <li>
                    <Link to="/library" style={Styles.navItem}
                        onMouseEnter={(e) => {
                            e.target.style.color = Styles.navItemHover.color;
                            e.target.style.transform = Styles.navItemHover.transform;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = Styles.navItem.color;
                            e.target.style.transform = "scale(1)";
                        }}>
                        <DecryptedText
                            speed={50}
                            maxIterations={45}
                            text="Library"
                            animateOn="view"
                            revealDirection="center"/>
                    </Link>
                </li>
                <li>
                    <Link to="/aboutme" style={Styles.navItem}
                        onMouseEnter={(e) => {
                            e.target.style.color = Styles.navItemHover.color;
                            e.target.style.transform = Styles.navItemHover.transform;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = Styles.navItem.color;
                            e.target.style.transform = "scale(1)";
                        }}>
                        <DecryptedText
                            speed={50}
                            maxIterations={60}
                            text="About Me"
                            animateOn="view"
                            revealDirection="center"/>
                    </Link>
                </li>
            </ul>
            <div>
                <button
                    style={Styles.button}
                    onMouseEnter={(e) => e.target.style.backgroundColor = Styles.buttonHover.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = Styles.button.backgroundColor}
                >
                    Login
                </button>
                <button
                    style={Styles.button}
                    onMouseEnter={(e) => e.target.style.backgroundColor = Styles.buttonHover.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = Styles.button.backgroundColor}
                >
                    Get Started!
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
