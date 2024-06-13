import React from 'react'
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.fondo}>
      <div className={styles.izquierda}>
        <ul>
            <li>Telefono:987365856</li>
            <li>Instagram: @Flashminds</li>
        </ul>
      </div>
      <br></br>
      <div className={styles.derecha}>
        <ul>
            <li>Twitter:@flashmindsOficial</li>
            <li>Correo:flashmindsOficial@hotmail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
