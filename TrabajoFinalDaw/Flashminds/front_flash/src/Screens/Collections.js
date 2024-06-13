import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from "./Collections.module.css";

const endpoint1="http://localhost:8000/api/collections";
const Collections = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);


  useEffect(() => {
      getAllCollections();
  }, []);

  const getAllCollections = async () => {
      try {
          const response = await axios.get(endpoint1);
          setCollections(response.data);
      } catch (error) {
          console.error("There was an error fetching the collections!", error);
      }
  };
     const deleteCollection=async(id)=>{
      await axios.delete(`${endpoint1}/${id}`)
      getAllCollections()
    }

  return (
      <div className={styles.fondo}>
                  <br></br>
          <div className={styles.center}>
              <div>
                  <Link to="/CreateCollections" className='btn btn-success'>
                      Create
                  </Link>
              </div>
          </div>
          <table className={styles.center}>
              <thead>
                  <tr>
                      <th className={styles.datos}>Name</th>
                  </tr>
              </thead>
              <tbody>
                  {collections.map((collection) => (
                      <tr key={collection.id}>
                          <td className={styles.datos}>
                              {collection.name}
                          </td>
                          <td className={styles.datos}>
                              <Link 
                              to={`/EditCollection/${collection.id}`}
                              className='col-3 btn btn-warning '
                          
                              >
                                  Edit
                              </Link>
                              <button onClick={()=>deleteCollection(collection.id)}  className='col-3 btn btn-danger'>Delete</button>
                              <Link 
                              // to={`/Flashcards/${collection.id}`}
                              to={`/Flashcards`}
                              className='col-3 btn btn-secondary  '
                              >
                                  Acceder
                              </Link>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <br></br>
      </div>
  );
}
export default Collections
