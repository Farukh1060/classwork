import { createContext, useContext } from "react"
import Add_list_item from "../Add_list_item/Add_list_item"
import { todoitem_context } from "../../Store/Todoitem_store"


const Add_list = ()=>{


    const {list_data,removehandler}  =  useContext(todoitem_context)
    return<>
    {list_data.map(ele =>(<Add_list_item key={ele.fullname} ele={ele} removehandler={removehandler}></Add_list_item>))}
        
    </>
}
export default Add_list