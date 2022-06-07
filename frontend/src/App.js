import './App.css';
import Container from './Components/Container/Container';
import Menu from './Components/Menu/Menu'


function App() {
  return (
    <div className='App'>
      <Menu/>
      <Container/>
    </div>
  );
}

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Academics from './Pages/Academics'
// import Events from './Pages/Events'
// import HelpCenter from './Pages/HelpCenter'
// import Lessons from './Pages/Lessons'
// import Profile from './Pages/Profile'
// import QuestionsAnswers from './Pages/QuestionsAnswers'
// import Settings from './Pages/Settings' 


// function App() {
//   return (

//     <>
//       <BrowserRouter>
//           <Menu/>
//           <Container/>
//           <Routes>
//             <Route path='/' exact element={<Profile/>}/>
//             <Route path='/academics' element={<Academics/>}/>
//             <Route path='/events' element={<Events/>}/>
//             <Route path='/helpCenter' element={<HelpCenter/>}/>
//             <Route path='/lessons' element={<Lessons/>}/> 
//             <Route path='/questionsAnswers' element={<QuestionsAnswers/>}/>
//             <Route path='/settings' element={<Settings/>}/>
//           </Routes>
//       </BrowserRouter>
//     </>
//   );
// } 

export default App;

