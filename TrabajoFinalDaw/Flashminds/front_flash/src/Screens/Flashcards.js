import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from "./Flashcards.module.css";


const endpoint1="http://localhost:8000/api/flashcards";
const Flashcards = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flashcards, setFlashcards] = useState([]);


  useEffect(() => {
      getAllFlashcards();
  }, []);

  const getAllFlashcards = async () => {
      try {
          const response = await axios.get(endpoint1);
          setFlashcards(response.data);
      } catch (error) {
          console.error("There was an error fetching the Flascards!", error);
      }
  };
     const deleteFlashcards=async(id)=>{
      await axios.delete(`${endpoint1}/${id}`)
      getAllFlashcards()
    }

  return (
      <div className={styles.fondo}>
                  <br></br>
          <div>
              <div className={styles.center}>
                  <Link to="/CreateFlashcards" className='btn btn-success'>
                      Create
                  </Link>
              </div>
          </div>
          <table className={styles.center}>
              <thead>
                  <tr >
                      <th>Id</th>
                      <th>Name</th>
                      <th>Pregunta</th>
                      <th>Respuesta</th>
                  </tr>
              </thead>
              <tbody>
                  {flashcards.map((flashcard) => (
                      <tr key={flashcard.id}>
                        
                        <td className={styles.datos}>
                              {flashcard.id}
                          </td>
                          <td className={styles.datos}>
                              {flashcard.Nombre}
                          </td>
                          <td className={styles.datos}>
                              {flashcard.Pregunta}
                          </td>
                          <td className={styles.datos}>
                              {flashcard.Respuesta}
                          </td>
                          <td className={styles.datos}>
                              <Link 
                              to={`/EditFlashcards/${flashcard.id}`}
                              className='col-5 btn btn-warning'
                              >
                                  Edit
                              </Link>
                              <button onClick={()=>deleteFlashcards(flashcard.id)}  className='col-7 btn btn-danger'>Delete</button>
                              
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <br></br>
      </div>
  );
}
export default Flashcards
