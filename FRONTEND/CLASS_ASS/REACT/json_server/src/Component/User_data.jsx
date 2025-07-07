import { useEffect } from "react"



const User_data = ({ele,updatehandler})=>{
    // console.log(ele);
    useEffect(()=>{

    },[])

    const removehandler = (uid)=>{

        fetch(`http://localhost:3000/user/${uid}`,{
            method:"delete"
        })
    }
    

    return(
        <tr>
            <td>{ele.username}</td>
            <td>{ele.email} </td>
            <td> {ele.phone} </td>
            <td> <button className="bg-success" onClick={()=>{updatehandler(ele.id)}}>update</button> </td>
            <td> <button className="bg-danger" onClick={()=>{removehandler(ele.id)}}>delete</button> </td>
        </tr>
    )
}

export default User_data