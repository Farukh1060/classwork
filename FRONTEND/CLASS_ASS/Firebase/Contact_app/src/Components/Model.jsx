
import { useEffect } from "react"
import{IoCloseCircleOutline} from "react-icons/io5"



const Model = ({close_model,name,email,addcontact ,contact})=>{

    useEffect(()=>{
        if(contact.id != undefined){
             name.current.value = contact.name,
             email.current.value = contact.email
            //  id.current.value = contact.id
        }
    },[addcontact,close_model])


    return(

       <>
       <div className="p-4 absolute top-1/2 left-1/2 -translate-x-1/2 z-50 rounded-lg min-h-[200px] max-w-[500px] bg-gray-300 m-auto ">

        <form action="" className="flex flex-col gap-2" onSubmit={addcontact}>
            <IoCloseCircleOutline className="self-end text-xl mb-3 cursor-pointer" onClick={close_model}/>
            <input type="text" placeholder="NAME" className="w-full outline-0 rounded-md" ref={name}/>
            <input type="text" placeholder="EMAIL" className="w-full outline-0 rounded-md" ref={email}/>
            <button className=" bg-orange-500">{contact?"update":"add"}</button>
        </form>

       </div>
        <div onClick={close_model} className="absolute top-0 bottom-0 right-0 left-0 z-40 h-screen w-screen backdrop-blur "/>
        </>
    )
}

export default Model