import './App.css'
import Home from './Home';
import Mypage from './components/Mypage.js'
import Page1 from './components/Page1.js'
import Page2 from './components/Page2.js'
import Page3 from './components/Page3.js'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' Component={Home}/>
         <Route path='/mypage' Component={Mypage}/>
         <Route path='/page1' Component={Page1}/>
         <Route path='/page2' Component={Page2}/>
         <Route path='/page3' Component={Page3}/>
      </Routes>
    </div>
  );
}

export default App;
