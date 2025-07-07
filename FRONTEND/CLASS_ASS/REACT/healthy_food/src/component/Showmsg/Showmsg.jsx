import style from "./showmsg.module.css"

const Showmsg =({food_list})=>{
   return(<>
        <p className={style.error}>{food_list.length ==0 ?"Iam still hungry":""}</p>
   
   </>);
}
export default Showmsg 