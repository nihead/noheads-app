
import './App.css';
import RandomPhoto from './views/photo-random/RandomPhoto';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='nav-bar'>
            <div className='nav-item'>
                <Link to={'/random-photo'}>Random Picture</Link>
            </div>
      </div>
    <main>
      <Routes>
        <Route path='/random-photo' element={<RandomPhoto />} />
      </Routes>
    </main>
      
    </div>
  );
}

export default App;
