//React and configs
import './App.css';
import { useEffect, useState } from 'react';
import { ROUTES } from './helpers/RoutesPath';
import axios from 'axios';
import { Routes, Route,  useLocation, useNavigate } from 'react-router-dom';
//Components
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx'
import Form from './components/Form/Form'
import Detail from './components/Detail/Detail.jsx';
import Error404 from './components/Error404/Error404';
import Favorites from './components/Favorite/Favorites'

function App() {
   
   const {pathname} = useLocation();
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = '';
   const PASSWORD = '';


   async function login(userData) {
     try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
     } catch (error) {
      console.log(error)
     }
   }

   const onSearch = async(id) => {
      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        if(data.name){
         setCharacters((oldChars) => [...oldChars, data]);
        }
                     
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id)
      }))
   }
   useEffect(()=>{
      !access && navigate('/');

   }, [access] );

   return (
      <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
         <Route path={ROUTES.LOGIN} element={<Form login={login} />} />
         <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
         <Route path={ROUTES.ABOUT} element={<About />} />
         <Route path={ROUTES.FAVORITES} element={<Favorites />} />
         <Route path='/detail/:id' element={<Detail />} />
         <Route path= '*' element={<Error404/>}/>
      </Routes>

   </div>
   );
}

export default App;
