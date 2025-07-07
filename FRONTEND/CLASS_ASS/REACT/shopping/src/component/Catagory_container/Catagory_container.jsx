import Left_bar from "./Left_bar/Left_bar"
import Right_bar from "./Right_bar/Right_bar"

import "./catagory_container.css"

const Catagory_container = ({catagory,display_data}) =>{

    return( <div className="catagory_container">
    <Right_bar catagory={catagory} display_data={display_data}></Right_bar>
    <Left_bar display_data={display_data}></Left_bar>
    
    </div>
    )
}

export default Catagory_container