import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { delete_data, update_data } from "../feature/crud/crudSlice"
import { Link, useNavigate } from "react-router-dom"


const Display_data = ()=>{
    const navigate = useNavigate()


const dispatch = useDispatch()
    const users = useSelector((state)=>{
        return state.Crud
    })
    

    
    const deletehandler = (uid)=>{
        dispatch(delete_data(uid))
    }
    

    const updatehandler = (uid)=>{
        
        dispatch(update_data(uid))

    }

    return(
        <div className="row">
            <div className="col-6 card mx-auto mt-5 " style={{height:"400px"}}>
                <table className="table table-strip">
                    <thead>
                        <tr>
                            <td>user name</td>
                            <td>email</td>
                            <td>number</td>
                            <td>action</td>
                        </tr>
                    </thead>

                    <tbody>

                       {users.map((ele)=>{
                        return (
                        <tr key={ele.id}>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.number}</td>
                            <td><Link to={`/${ele.id}`} className="btn btn-success" onClick={()=>{updatehandler(ele.id)}} >udate</Link></td>
                            <td><Link className="btn btn-danger"onClick={()=>{deletehandler(ele.id)}} >delete</Link></td>
                            
                         </tr>)
                       })} 
                       
                    </tbody>

                </table>
            </div>
        </div>

    )
}

export default Display_data