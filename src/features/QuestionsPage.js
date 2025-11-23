import React,{ useState } from "react";


export function QuestionsPage({setShowQuestions}){
  const [userInput, setuserInput] = useState(String);
  const [Post,setPost] = useState([]);
  const handleOnClick = ()=>{
    setPost([...Post, userInput]);
    setuserInput("");
  }
  const saveInput=(e)=>{
    setuserInput(e.target.value);
  }

    return(
        
        <div className='App'>
        <header style={{ backgroundColor: "#666A6D", padding: "15px" }}>
            <button onClick={() => setShowQuestions(false)}>Back</button>
          </header>
          <main style={{backgroundColor: "#f1f1f1", padding: "75px" }}>
            <h1>Questions</h1>
            <hr></hr>
          </main>
          <div>
              {Post.map((text,num)=>
              (<p>{text}</p>))}
            </div>

          <footer style ={{backgroundColor: "#ddd",position: 'fixed',bottom: 5,display: 'flex',
          justifyContent: 'center',alignItems: "center",width: '100%',
        
        }}>
          <input onChange={saveInput}  type='text' placeholder='...?' value = {userInput}>
          </input>
          <button onClick={handleOnClick}> Send </button>
          </footer>

      </div>


    );

}