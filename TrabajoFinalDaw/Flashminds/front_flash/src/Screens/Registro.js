import React, { useState } from "react";
import styles from "./Registro.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import axios from 'axios';
const Formulario = () => {

  const endpoint="http://localhost:8000/api/user";
  const[name, setName]=useState('')
  const[password, setPassword]=useState('')
  const[correo, setCorreo]=useState('')
  const navigate=useNavigate();

  const store = async (e)=>{
    e.preventDefault()
    await axios.post(endpoint, {name: name, password: password, email: correo })
    navigate("/Login")
  }


  return (
    <div name="Formulario" className={styles.formulario}>
      
      <form
      
        className={styles.form}
        // method="POST"
        onSubmit={store}
        // action="https://getform.io/f/718583e8-f2fc-4e02-a970-9f8a6eaa2036"
      >
        <h2>Formulario</h2>
        <label for="Name">Name</label>
        <input 
          id="Name" 
          name="Name" 
          className={styles.input}
          onChange={(e)=>setName(e.target.value)}
          value={name}
        ></input>
        <br></br>
        <label for="Email">Email</label>
        <input
            id="Email"
            name="Email"
            type="Email"
            className={styles.input}
            onChange={(e)=>setCorreo(e.target.value)}
            value={correo}
        ></input>
         <br></br>
        <label for="Password">Password</label>
        <textarea 
          id="Password" 
          className={styles.textArea}
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          type='password'
        ></textarea>
        <br></br>
        <button type="submit">Registrarse</button>
        <br></br>
        <div className={styles.rutas}>
          <Link
            //   to="/Registro"
              onClick={()=>navigate("/Login")}
              smooth
              duration={500}
              className={styles.registro}
              
            >
              Login
            </Link>
          </div>
      </form>
  
      
       
    </div>
  );
};

export default Formulario;