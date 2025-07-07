import style from "./Item.module.css"


const Item =({food_list,byebtnhandler,activelist,removebtnhandler,deletbtnhandler})=>{
// console.log(activelist)
    



    return(
        <>
            {food_list.map(ele =>(<li key={ele} className={`list-group-item mt-2 mb-2 ${activelist.includes(ele)?"active":" "}`}>{ele} {<button className={`btn mx-1 btn-danger ${style.bbtn}`} onClick={()=>deletbtnhandler(ele)} >delete
                </button>}{activelist.includes(ele)?<button className={`btn btn-secondary ${style.bbtn}`} onClick={()=>removebtnhandler(ele)} >Remove</button>:<button className={`btn btn-primary ${style.bbtn}`} onClick={()=>byebtnhandler(ele)} >Bye</button>}</li>))}
        </>

    );
}

export default Item