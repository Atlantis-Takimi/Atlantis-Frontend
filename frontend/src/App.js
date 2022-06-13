import './App.css';
import Container from './Components/Container/Container';
import Menu from './Components/Menu/Menu'
// import MainContainer from './Components/MainContainer/MainContainer'


// function App() {
//   return (
//     <div className='App'>
//       <Menu/>
//       <Container/>
//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Profile from './Pages/Profile/Profile'
import Academics from './Pages/Academics/Academics'
import Events from './Pages/Events'
import HelpCenter from './Pages/HelpCenter'
import Lessons from './Pages/Lessons'
import QuestionsAnswers from './Pages/QuestionsAnswers'
import Settings from './Pages/Settings' 



function App() {
  return (

    <>
      <BrowserRouter>
          <Menu/>
          
          {/* <MainContainer/> */}
          
          <Routes>
            <Route path='/' exact="true" element={<Container/>}/>
            <Route path='/profile' element={<Profile/>}/>
            {/* <Route path='./profile' exact="true" element={<Profile/>}/> */}
            {/* <Route path='/container' exact element={<MainContainer/>}/> */}
            <Route path='/lessons' element={<Lessons/>}/> 
            <Route path='/questionsAnswers' element={<QuestionsAnswers/>}/>
            <Route path='/academics' element={<Academics/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/helpCenter' element={<HelpCenter/>}/>
            
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App;

