import "./Form.css"


const Form =()=>{
    return (<div className="form_container">
        <div className="input_field"> 
            <input className="form-control" type="text" placeholder="Email address or phone number" /> 
            <input className="form-control" type="text" placeholder="password" />
            <button className="btn btn-primary">log in</button>
            <p className="text">forgot password ?</p>
        </div>
        <div>
            <button className="btn btn-success">create new account</button>
        </div>
    
    </div>)
}

export default Form