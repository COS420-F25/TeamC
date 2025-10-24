import logo from './logo.svg';
import './App.css';
import {auth} from "./firebase-config"
import {useSignInWithGoogle} from "react-firebase-hooks/auth";


function App() {
  const [signInWithGoogle, user, loading,error] = useSignInWithGoogle(auth);
  return (
    <div className="App">
      <header className="App-header">
          </header>
          <h1>
            {" "}
            <span style={{color: "blue"}}>
              Nudge App
              <div> 
                <button onClick={()=>signInWithGoogle()} >Sign In</button>
              </div>
              </span>
            </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
