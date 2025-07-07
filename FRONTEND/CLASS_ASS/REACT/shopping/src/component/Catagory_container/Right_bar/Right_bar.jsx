import "./Right_bar.css"


const Right_bar =({catagory,display_data}) =>{

    



    return(<div>
        <div className="row">
            <div className="coll-4">
                <div className="right_bar">
                    <h1>catagory</h1>
                    <ul>
                        {catagory.map((ele)=>(<li key={ele} onClick={display_data}>{ele}</li>))}
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>)
}
export default Right_bar