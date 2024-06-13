
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Screens/Home';
import Registro from './Screens/Registro';
import Navbar from './Componentes/Navbar';
import Footer from './Screens/Footer';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Formulario from './Screens/Formulario';
import Collections from './Screens/Collections';
import CreateCollections from './Screens/CreateCollections';
import EditCollection from './Screens/EditCollection';
import Flashcards from './Screens/Flashcards'
import CreateFlashcards from './Screens/CreateFlashcards'
import EditFlashcards from './Screens/EditFlashcards'
// PAra empezar servidor npm start
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Login" element={<Formulario/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/Collections" element={<Collections/>}/>
            <Route path="/CreateCollections" element={<CreateCollections/>}/>
            <Route path="/EditCollection/:id" element={<EditCollection/>}/>
            { /* <Route path="/Flashcards:id" element={<Flashcards/>}/> */ }
            <Route path="/Flashcards" element={<Flashcards/>}/>
            <Route path="/CreateFlashcards" element={<CreateFlashcards/>}/>
            <Route path="/EditFlashcards/:id" element={<EditFlashcards/>}/>
        </Routes>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
