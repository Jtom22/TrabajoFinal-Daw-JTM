import React, { useState } from "react";
import styles from "./Formulario.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import axios from 'axios';



const Formulario = () => {
  const endpoint="http://localhost:8000/api/userExiste";
  const[name, setName]=useState('')
  const[password, setPassword]=useState('')
  const[correo, setCorreo]=useState('')
  const[id,setId]=useState('')
  const navigate=useNavigate();

  const store = async (e)=>{
    e.preventDefault()
    const dato=await axios.post(endpoint, {name: name, password: password }.id)
    navigate('/Collections')
    
  }



  return (
    <div name="Formulario" className={styles.formulario}>
      
      <form
     
        className={styles.form}
        // method="POST"
        // action="https://getform.io/f/718583e8-f2fc-4e02-a970-9f8a6eaa2036"
        onSubmit={store }
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
        <label for="Password">Password</label>
        <textarea
          id="Password" 
          className={styles.textArea}
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
         ></textarea>
        <br></br>
        <button type="submit"
        onSubmit={store}
        >Send</button>
        <br></br>
        <div className={styles.rutas}>
          <Link
            //   to="/Registro"
              onClick={()=>navigate("/Registro")}
              smooth
              duration={500}
              className={styles.registro}
            >
              Registrate Aqui
            </Link>
          </div>
      </form>
  
      
       
    </div>
  );
};

export default Formulario;