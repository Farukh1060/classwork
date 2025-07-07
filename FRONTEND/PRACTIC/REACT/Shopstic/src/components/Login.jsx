import { LuUserRound } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Login = ()=>{
    return(
        <>
        <div className="login_container bg-slate-800 w-screen h-screen relative">

            <div className="login border-2 container w-max  px-20 py-20 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex flex-col justify-center items-center mx-auto gap-8">
                    <h1 className=" mx-auto text-white text-3xl">user login</h1>     
                    <div className="relative mt-3">
                        <label htmlFor="name" className="absolute -top-1 text-2xl bg-white rounded-full p-3"><LuUserRound /></label>
                        <input id="name" type="text" className="bg-slate-300 bg-opacity-75 placeholder:text-slate-600 placeholder:text-center rounded-full w-[300px] h-9 pr- pl-[55px] outline-none "  placeholder="user name" />
                    </div>  
                    <div className="relative mt-2">
                        <label htmlFor="name" className="absolute -top-1 right-0 text-2xl bg-white rounded-full p-3"><RiLockPasswordLine /></label>
                        <input id="name" type="text" className="bg-slate-300 bg-opacity-75 placeholder:text-slate-600 placeholder:text-center rounded-full w-[300px] h-9 pr- pl-[55px] outline-none "  placeholder="password" />
                    </div>
                    <div className="mt-3 w-full">
                        <div className="bg-slate-300 bg-opacity-75 text-white text-xl px-10 py-2 rounded-full w-full text-center">Login</div>
                    </div>
                </div>
                <p className="mt-3 text-white text-sm">don't have an account?<Link to={"/reg"}> sing up</Link> </p>

            </div>

        </div>
        </>
    )
}
export default Login