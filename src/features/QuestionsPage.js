import React,{ useState } from "react";


export function QuestionsPage({setCurrentView, Settings}){
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
          <main style={{backgroundColor: "#f1f1f1", padding: "35px" }}>
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