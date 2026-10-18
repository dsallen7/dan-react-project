import { useState } from 'react';
import './App.css';
import PageTwo from './components/PageTwo.jsx';
import PageOne from './components/PageOne.jsx';
import TopNav from './components/TopNav.js';

function App() {

  let [name, setName] = useState();
  let [index, setIndex] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <TopNav
          index={index}
          setIndex={setIndex} />
        {index === 1 && 
          <PageOne 
            index={index}
            setIndex={setIndex} 
            name={name}
            setName={setName}/>
        }
        {index === 2 && 
          <PageTwo/>
        }
      </header>
    </div>
  );
}

export default App;