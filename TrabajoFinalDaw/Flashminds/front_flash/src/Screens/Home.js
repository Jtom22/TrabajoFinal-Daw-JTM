import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Una forma nueva  <br />
          <b>de estudiar</b>
        </p>
        <p>
         <img className={styles.webImage}
         src={require("../img/FlashImage.jpeg")}></img>
        </p>
        <p>
          Registrate y <br />
          <b>Empieza a aprender</b>
        </p>
      </div>
      <div className={styles.ctaContainer}  >
        <Link
          onClick={()=>navigate("/Login")}
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Login
        </Link>
     
        <Link
        //   to="/Registro"
          onClick={()=>navigate("/Registro")}
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Registrarse  
        </Link>
 
      </div>
    </div>
  );
};

export default Home;