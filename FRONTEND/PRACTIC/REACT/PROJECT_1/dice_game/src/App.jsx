
import { useState } from "react";
import "./App.css";
import { Container } from "./componenets/Container";
import Home from "./componenets/Home";
import Score_bord from "./componenets/Score_bord"




function App() {

  const [page,setpage] = useState(true)
  const changepage = ()=>{
    setpage(false)
  }

  return (<>
    <Container>
     {(page==true?<Home changepage={changepage}></Home>:<Score_bord></Score_bord>)}
    </Container>
    
    </>
  );
}

export default App;
