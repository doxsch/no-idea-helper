import React from 'react';
import './App.css';
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header>
          <h1>No idea what you want to program today?</h1>
          <p>click on <span>generate</span> to get a public api for
              your next project.</p>
      </header>
      <main>


              <div>
                <Button text='generate'></Button>
              </div>

      </main>
      <footer>created with ♥ from doxsch</footer>
    </div>
  );
}

export default App;
