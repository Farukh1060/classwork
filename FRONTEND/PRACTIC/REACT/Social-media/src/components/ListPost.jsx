
import { useContext } from "react"
import { Appcontext } from "../store/App_context"
import Posts from "./Posts"
import Welcome from "./Welcome"


const ListPost = ()=>{
    
    const {DEFAULT_POSTS}  = useContext(Appcontext)
   
   
    return <>
    {DEFAULT_POSTS.length===0 &&  <Welcome></Welcome>}
   { DEFAULT_POSTS.map(ele =>(<Posts key={ele.id} ele = {ele}></Posts>))}
    
    </>
}

export default ListPost 