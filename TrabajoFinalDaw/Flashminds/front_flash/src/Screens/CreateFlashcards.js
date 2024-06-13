import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from "./Formulario.module.css";


const CreateFlashcards = () => {
    const endpoint="http://localhost:8000/api/flashcards/";
    const[pregunta, setPregunta]=useState('')
    const[respuesta, setRespuesta]=useState('')
    const[name, setName]=useState('')
    // const[id,setId]=useState('')
    const navigate = useNavigate();
    // const [collections, setCollections] = useState([]);
    const num=44;
      const store = async (e)=>{
        e.preventDefault()
        await axios.post(endpoint,{Nombre:name,Pregunta:pregunta,Respuesta:respuesta,id_coleccion:num})
        navigate('/Flashcards')
        
      }
    
    
    
      return (
        <div name="Formulario" className={styles.formulario}>
          
        <form
        
        className={styles.form}
        // method="POST"
        // action="https://getform.io/f/718583e8-f2fc-4e02-a970-9f8a6eaa2036"
        onSubmit={store }
        >
        <h2>Crear Flashcard</h2>
        <label for="Name">Name</label>
        <input
            id="Name" 
            name="Name"
            className={styles.input}
            value={name}
            onChange={(e)=>setName(e.target.value)}
        ></input>
        <label for="Name">Pregunta</label>
        <input
            id="Name" 
            name="Name"
            className={styles.input}
            value={pregunta}
            onChange={(e)=>setPregunta(e.target.value)}
        ></input>
        <label for="Name">Respuesta</label>
        <input
            id="Name" 
            name="Name"
            className={styles.input}
            value={respuesta}
            onChange={(e)=>setRespuesta(e.target.value)}
        ></input>
             <button type="submit"
        onSubmit={store}
        >Create</button>
            <br></br>
          </form>
        </div>
      );
}

export default CreateFlashcards
