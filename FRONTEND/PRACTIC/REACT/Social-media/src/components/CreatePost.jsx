import { useContext, useRef } from "react"
import { Appcontext } from "../store/App_context"





const CreatePost = ()=>{
  const {Addpost} = useContext(Appcontext)
    const postId = useRef()
    const postTitle = useRef()
    const postBody = useRef()
    
    
    const submitpost = (e)=>{
      e.preventDefault()
        // postId.current.value
        Addpost(postId.current.value,postTitle.current.value,postBody.current.value)
        
      }
    return <form onSubmit={submitpost}>
    <div className="mb-3">
      <label htmlFor="id" className="form-label">post id</label>
      <input type="text" className="form-control" id="id" aria-describedby="emailHelp" ref={postId}/>
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">post title</label>
      <input type="text" className="form-control" id="title" aria-describedby="emailHelp" ref={postTitle}  />
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">post body</label>
      <textarea type="text" className="form-control" id="body" aria-describedby="emailHelp" ref={postBody} />
    </div>
    
    <button type="submit" className="btn btn-primary" >Submit</button>
  </form>
}

export default CreatePost