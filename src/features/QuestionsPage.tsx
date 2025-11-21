import React,{ useState } from "react";


export function QuestionsPage({showQuestions,setShowQuestions}:{showQuestions:boolean, setShowQuestions:React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
    return(
        
        <div className='App'>
        <header style={{ backgroundColor: "#666A6D", padding: "15px" }}>
            <button onClick={() => setShowQuestions(false)}>Back</button>
          </header>
          <main style={{backgroundColor: "#f1f1f1", padding: "75px" }}>
            <h1>Questions</h1>
            <div>
              
            </div>
          </main>

          <footer style ={{backgroundColor: "#ddd",position: 'fixed',bottom: 5,display: 'flex',
          justifyContent: 'center',alignItems: "center",width: '100%',
        
        }}>
          <input type='text' placeholder='...?'>
          </input>
          <button> Send </button>
          </footer>

      </div>


    );

}