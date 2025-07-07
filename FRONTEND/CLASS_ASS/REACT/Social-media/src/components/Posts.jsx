// import { MdDelete } from "react-icons/md";

import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { Appcontext } from "../store/App_context";



const Posts = ({ele}) => {

  const {removepost} = useContext(Appcontext)

  // console.log(removepost)

  return (
    <div className="card post-card" style={{ width: "50%" }}>
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
        <h5 className="card-title">{ele.title}</h5>
        <p className="card-text">{ele.body}</p>
        <span className="badge text-bg-primary m-2">Likes {ele.like}</span>
        <span className="badge text-bg-info">Comments {ele.Comment}</span>
      </div>
      <span><IoClose onClick={()=>removepost(ele.id)}/></span>
    </div>
  );
};

export default Posts;
