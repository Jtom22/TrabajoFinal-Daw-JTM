import styles from "./EditFlashcards.module.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditFlashcards = () => {

  const endpoint1="http://localhost:8000/api/flashcards/";
    const[name, setName]=useState('')
    const[pregunta, setPregunta]=useState('')
    const[respuesta, setRespuesta]=useState('')

    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint1}${id}`,{
            Nombre:name,
            Pregunta:pregunta,
            Respuesta:respuesta
        })
        navigate("/Flashcards")

    }
    useEffect(()=>{
        const getProductById=async ()=>{
            const response=await axios.get(`${endpoint1}${id}`)
            setName(response.data.Nombre)
            setPregunta(response.data.Pregunta)
            setRespuesta(response.data.Respuesta)
        }
        getProductById()
        // eslin-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (

    <div name="Formulario" className={styles.formulario}>
          
        <form
        
        className={styles.form}
        // method="POST"
        // action="https://getform.io/f/718583e8-f2fc-4e02-a970-9f8a6eaa2036"
        onSubmit={update }
        >
        <h2>Editar Flashcard</h2>
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
            onSubmit={update}
    >Create</button>
        <br></br>
        </form>
        
       
      
    </div>
  )
}

export default EditFlashcards
