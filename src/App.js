import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Details from './pages/Details/Details';
import Suggust from './pages/Suggust/Suggust.js';

function App() {
  return (
    <div className="App" >
       <BrowserRouter>
          <Routes>
            <Route path='/details' element={<Details/> }></Route>
            <Route path='/' element={<Suggust/>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
