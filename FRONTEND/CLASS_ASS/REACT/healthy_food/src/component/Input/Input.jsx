
import style from "./Input.module.css"

const Input =({Inputvaluehandler})=>{
    
    
    return(
        <>
            <input type="text" placeholder="enter food name" className={style.input} onKeyUp={Inputvaluehandler}/>
        
        </>

    );
}
export default Input