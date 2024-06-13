import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from "./Formulario.module.css";

const endpoint="http://localhost:8000/api/collections";
const CreateCollections = () => {
    const[name, setName]=useState('')
    // const[id,setId]=useState('')
    const navigate = useNavigate();
    // const [collections, setCollections] = useState([]);
    const num=9;
      const store = async (e)=>{
        e.preventDefault()
        await axios.post(endpoint,{name: name,usuario_id:num})
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
            <h2>Crear Colección</h2>
            <label for="Name">Name</label>
            <input
                id="Name" 
                name="Name"
                className={styles.input}
                onChange={(e)=>setName(e.target.value)}
                value={name}
                
            ></input>
             <button type="submit"
        onSubmit={store}
        >Create</button>
            <br></br>
          </form>
        </div>
      );
    
}
export default CreateCollections
